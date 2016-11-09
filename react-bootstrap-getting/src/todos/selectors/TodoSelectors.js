import { createSelector } from 'reselect';
import { VisibilityFilters } from '../actions';

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos||[];
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}
//visibilityFilterSelector和todosSelector是input-selector。
// 因为他们并不转换数据，所以被创建成普通的非记忆的selector函数。
const visibilityFilterSelector = (state) => {
    //const stateParent=state.todos.present;
    return state.visibilityFilter;
}
const todosSelector = (state) => {
    //const stateParent=state.todos.present;
    return state.todos.present;
}

//visibleTodosSelector是一个可记忆的selector。
// 他接收visibilityFilterSelector和todosSelector为input-selector，
// 还有一个转换函数来计算过滤的todos列表。
export const visibleTodosSelector = createSelector(
    [visibilityFilterSelector, todosSelector],
    (visibilityFilter, todos) => {
        return {//必须要通过state.todos.present操作state，而不是原来的state.todos
            visibleTodos: selectTodos(todos, visibilityFilter),
            //visibleTodos: selectTodos(todos.present, visibilityFilter),
            visibilityFilter
        };
    }
);

//可记忆的selector自身可以作为其它可记忆的selector的input-selector。
// 下面的visibleTodosSelector被当作另一个selector的input-selector，
// 来进一步通过关键字（keyword）过滤todos。
const keywordSelector = (state) => state.keyword;
export const keywordFilterSelector = createSelector(
    [ visibleTodosSelector, keywordSelector ],
    (visibleTodos, keyword) => visibleTodos.filter(
        todo => todo.indexOf(keyword) > -1
    )
)

