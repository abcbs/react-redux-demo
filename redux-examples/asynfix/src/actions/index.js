import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
//选择新闻类型action
export function selectReddit(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit
  }
}
//废弃新闻类型action
//按 "刷新" 按钮来更新它
export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  }
}
//开始获取新闻action
//当需要获取指定subreddit的帖子的时候，需要dispatch REQUEST_POSTS action：
function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  }
}
//获取新闻成功的action
function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit: reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

// 来看一下我们写的第一个 thunk action creator！
// 虽然内部操作不同，你可以像其它action creator一样使用它：
// store.dispatch(fetchPosts('reactjs'))

//获取文章，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
function fetchPosts(reddit) {
  //Thunk middleware 知道如何处理函数。
  //这里把 dispatch 方法通过参数的形式传给函数，
  // 此来让它自己也能dispatch action。
  return dispatch => {
    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。
    dispatch(requestPosts(reddit));

    //thunk middleware调用的函数可以有返回值，
    //它会被当作dispatch方法的返回值传递。

    //这个案例中，返回一个等待处理的promise。
    //这并不是 redux middleware 所必须的，但这对于我们而言很方便
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json =>
          //可以多次dispatch！
          //这里，使用API请求结果来更新应用的state。
          dispatch(receivePosts(reddit, json)));
          //在实际应用中，还需要
          //捕获网络请求的异常。
  }
}

//是否需要获取文章
function shouldFetchPosts(state, reddit) {
  const posts = state.postsByReddit[reddit];
  if (!posts) {
     return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

//如果需要则开始获取文章
export function fetchPostsIfNeeded(reddit) {
  // 注意这个函数也接收了getState()方法
  //它让你选择接下来dispatch什么。
  // 当缓存的值是可用时，
  // 减少网络请求很有用。
  return (dispatch, getState) => {
    //在thunk里dispatch另一个 thunk！
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchPosts(reddit))
    }else{
      //告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}
