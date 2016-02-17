import { combineReducers } from 'redux'
import undoable, { distinctState } from 'redux-undo'
var {storeTodoState, exportFile } = require('../../util')

import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, EXPORT_TODO, INIT_TODO, DEL_TODO, SAVE_TODO } from '../../actions/todo/actions'

import * as todoActions  from '../../actions/todo/actions'

var uuid = require('uuid');

const { SHOW_ALL } = VisibilityFilters
const { SORT_ORIGIN } = todoActions.sorts 

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function sort (state = SORT_ORIGIN , action) {
    let cmds = todoActions
    switch (action.type) {
        case cmds.SET_SORT:
            return action.cmd 
        default:
            return state
    }
}

function todo(state, action) {
    let tmp
    // 特殊的 先特别对待
    if ( action.type ===   todoActions.ADD_TODO ) {
            return {
                id: action.id,
                text: action.text,
                completed: false,
                collapse: true,
                urgency: 2,
                importance: 2,
                difficulty: 2,
                timestamp: Date.now(),
                process: [],
                conclusion: null,
                uuid: uuid.v1() 
        }
    }
    // common code 
    if (state.id !== action.id) {
        return state
    }
    let index, process 
    switch (action.type) {
        case COMPLETE_TODO:
            return {
                ...state,
                completed: true
            }
        case todoActions.UNCOMPLETE_TODO:
            return {
                ...state,
                completed: false 
            }

        case todoActions.ADD_TODO_SUB_PROCESS:
        case todoActions.ADD_TODO_SUB_CONCLUSION:
            state.process = state.process || [] 
            tmp = {
                id:   state.process.length,
                text: '', 
                createTime: Date.now(),
                lastTime: Date.now(),
                type: todoActions.todoSubItemType.process,  // 0 progress 1 conclusion  
                status: todoActions.todoSubItemStatus.edit, // 0 show  1 edit 
            }
            if ( action.type === todoActions.ADD_TODO_SUB_PROCESS ){
                state.process.push(tmp) 
            } else {
                tmp.type = 1
                state.conclusion = tmp 
            }
            return state             
        case todoActions.SAVE_TODO_SUB_PROCESS:
            process = state.process || [] 
            index = process.findIndex((ele, index, arr) => {
                                if ( ele.id === action.processId )  {
                                    return true
                                }
                                return false
            })
            if ( index === -1 ){
                return state
            }
            let selItem = process[index]
            selItem.text = action.text
            selItem.lastTime = Date.now()
            selItem.status = todoActions.todoSubItemStatus.show  

            return state

        case todoActions.SAVE_TODO_SUB_CONCLUSION:
            state.conclusion.text = action.text
            state.conclusion.lastTime = Date.now() 
            state.conclusion.status = todoActions.todoSubItemStatus.show 
            return state

        case todoActions.TOEDIT_TODO_SUB_PROCESS:
            process = state.process  
            index = process.findIndex((ele, index, arr) => {
                                if ( ele.id === action.processId )  {
                                    return true
                                }
                                return false
            })
            if ( index === -1 ){
                return state
            }
            selItem = process[index]

            selItem.status = todoActions.todoSubItemStatus.edit
            return state

        case todoActions.TOEDIT_TODO_SUB_CONCLUSION:
            state.conclusion.status = todoActions.todoSubItemStatus.edit

            return state

        case todoActions.TODEL_TODO_SUB_PROCESS:
            process = state.process  
            index = process.findIndex((ele, index, arr) => {
                                if ( ele.id === action.processId )  {
                                    return true
                                }
                                return false
            })
            state.process = [
                ...process.slice(0, index),
                ...process.slice(index+1),
            ] 
            return state

        case todoActions.TODEL_TODO_SUB_CONCLUSION:
            state.conclusion = null 
            return state

        default:
            return state
    }
}

function todos(state = [], action) {
    let db = []
    let db2 = []
    switch (action.type) {
        case INIT_TODO:
                return action.todos

        case EXPORT_TODO:
            const jsonFile = JSON.stringify(state);
            const filename = `todo_${ new Date().toLocaleDateString() }.json`;
            exportFile(jsonFile, filename);
            return state;

        case todoActions.IMPORT_TODO:
            // 新加的  跟原来的比较  uuid是否相同  日期更新
             let match = false 
             
             for(let i of action.todos) {
                  match = false 
                  i.id = state.length + 1
                  for( let key  in state){
                        let j = state[key]
                        if ( j.uuid === i.uuid  )  {
                            if( i.timestamp > j.timestamp ){
                                 state[key]= i 
                            } else {
                              //旧的项扔掉   
                            }
                            match = true 
                            break;
                        }
                  }
                  if (! match ){
                      db.push(i) 
                  }
              }
            db2 = [
                ...db ,
                ...state
            ]
            storeTodoState(db2);
            return db2

        case ADD_TODO:
            db = [
                todo(undefined, action),
                ...state
            ]
            storeTodoState(db);
            return db;

        case DEL_TODO:
            db = state.filter((item)=>{ return item.id == action.id ? false: true } ) 
            storeTodoState(db);
            return db;

        case SAVE_TODO:
            let index = state.findIndex((ele, index, arr) => {
                                if ( ele.id === action.id )  {
                                    return true
                                }
                                return false
            })
            let changeItem = Object.assign({}, state[index]) 
            changeItem.text = action.text 
            changeItem.urgency = action.urgency 
            changeItem.importance = action.importance
            changeItem.difficulty = action.difficulty
            changeItem.collapse = true
            changeItem.timestamp = Date.now()

            db = [
                ...state.slice(0, index),
                changeItem,
                ...state.slice(index+1),
            ]
            storeTodoState(db);
            return db;

        case COMPLETE_TODO: 
        case todoActions.UNCOMPLETE_TODO: 
        case todoActions.ADD_TODO_SUB_PROCESS:
        case todoActions.ADD_TODO_SUB_CONCLUSION:
        case todoActions.SAVE_TODO_SUB_PROCESS:
        case todoActions.SAVE_TODO_SUB_CONCLUSION:
        case todoActions.TOEDIT_TODO_SUB_PROCESS:
        case todoActions.TOEDIT_TODO_SUB_CONCLUSION:
        case todoActions.TODEL_TODO_SUB_PROCESS:
        case todoActions.TODEL_TODO_SUB_CONCLUSION:

            db = state.map(t =>
                             todo(t, action)
                            )
            storeTodoState(db);
            return db;

        case todoActions.EDIT_TODO:
            db = state.map((todo) => {
                                todo.collapse = todo.id === action.id ? false: true
                                return todo
            })
            storeTodoState(db);
            return db;

        case todoActions.UNEDIT_TODO:
            db = state.map((todo) => {
                                if(todo.id === action.id ){
                                    todo.collapse =  true
                                }
                                return todo
            })
            storeTodoState(db);
            return db;

        case todoActions.SIGN_STAR:
            db = state.map((todo) => {
                                if( todo.id === action.id ) {
                                    todo.urgency = action.count 
                                }
                                return todo
            })
            storeTodoState(db);
            return db;

        default:
            return state
    }
}


const todoApp = combineReducers({
    visibilityFilter,
    sort,
    todos: undoable(todos, { filter: distinctState() })
})

export default todoApp