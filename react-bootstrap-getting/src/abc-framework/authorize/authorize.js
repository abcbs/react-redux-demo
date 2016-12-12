import React, { Component } from 'react'
import hoist_statics  from 'hoist-non-react-statics'

import { connect }      from 'react-redux'
import { redirect }     from '../../abc-framework/react-isomorphic-render/redux'
import { Preload_method_name, Preload_blocking_method_name } from '../../abc-framework/react-isomorphic-render/redux'

import Unauthenticated from '../../abc-ui/errors/unauthenticated'
import Unauthorized    from '../../abc-ui/errors/unauthorized'

import { add_redirect } from '../utils/redirection'

export default function authorize(authorization)
{
	return function(Wrapped)
	{
		//认证组件
		class Authorize extends Component
		{
			state = { error: undefined };

			componentWillMount()
			{
				this.check_privileges_and_take_action()
			}

			componentWillReceiveProps(props)
			{
				this.check_privileges_and_take_action(props)
			}

			check_privileges_and_take_action(props = this.props)
			{
				// current user
				const user = props.user;

				// the requested page url
				const url = props.location.pathname + (props.location.search ? '?' + props.location.search : '');

				const result = check_privileges({ user, url, authorization });

				if (result === true)
				{
					return this.setState({ error: false })
				}

				// on the server we can just perform an Http 302 Redirect
				// (for simplicity)
				if (_server_)
				{
					const error = new Error(user ? 'Unauthenticated' : 'Unauthorized');
					error.status = user ? 403 : 401;
					throw error
				}

				// on the client side: redirect to the "unauthorized" page
				// (using React-router)
				this.setState({ error: result.error });
				this.props.dispatch(redirect(result.redirect_to))
			}

			render()
			{
				if (!this.state.error)
				{
					return <Wrapped {...this.props}/>
				}

				if (this.state.error === 'unauthenticated')
				{
					return <Unauthenticated {...this.props}/>
				}

				if (this.state.error === 'unauthorized')
				{
					return <Unauthorized {...this.props}/>
				}

				return <section className="content"/>
			}
		}
		//认证组件定义结束
		Authorize.displayName = `Authorize(${get_display_name(Wrapped)})`;
		Authorize.propTypes = {
			user: React.PropTypes.string
		};
		//Authorize.defaultProps = defaultProps;
		//原组件继承写法
		hoist_statics(Authorize, Wrapped);
		//
		const preloads = [Preload_method_name, Preload_blocking_method_name];

		preloads.forEach(preload =>
		{
			if (!Authorize[preload])
			{
				return
			}

			const preloader = Authorize[preload];

			Authorize[preload] = function authorize_then_preload(parameters)
			{
				const location = parameters.location;
				const state=parameters.getState().default;
				const user = state.authentication.authentication.user;
				const url = location.pathname + location.search;

				const result = check_privileges({ user, url, authorization });

				if (result.error)
				{
					return Promise.resolve();

					// will trigger store.on_preload_error()
					// return Promise.reject(new Error(result.error))
				}

				return preloader(parameters)
			}
		});

		return connect
		(model => {
			const role = model.authentication || model.default.authentication;
			return ({//model为redux的state
				user: role.authentication.user
				// user: role
			})
		})
		(Authorize)
	}
}

function check_privileges({ user, url, authorization })
{
	// ensure that the user has signed id
	if (!user)
	{
		// not authenticated.
		// redirect the user to the "unauthenticated" page
		return { error: 'unauthenticated', redirect_to: add_redirect('/unauthenticated', url) }
	}

	// if no further authorization is required,
	// then show the requested page
	if (!authorization)
	{
		return true
	}

	if (typeof authorization === 'string')
	{
		authorization = [authorization]
	}

	// if the passed parameter is a list of roles,
	// at least one of which is required to view the page
	if (Array.isArray(authorization))
	{
		// if the user has one of the required roles,
		// then show the page
		for (let role of authorization)
		{
			if (user.role === role)
			{
				return true
			}
		}
	}
	// if the passed parameter is a function,
	// then evaluate it
	else if (typeof authorization === 'function')
	{
		// if the authorization passes,
		// then show the page
		//modified by liujq
		// if (authorization(user))
		// {
		// 	return true
		// }
	}

	// authorization not passed.
	// redirect the user to the "unauthorized" page
	return { error: 'unauthorized', redirect_to: add_redirect('/unauthorized', url) }
}

function get_display_name(Wrapped)
{
	return Wrapped.displayName || Wrapped.name || 'Component'
}