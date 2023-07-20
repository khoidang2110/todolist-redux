import { LIST_ADD, LIST_DELETE ,LIST_ADD_DONE ,LIST_REMOVE_DONE} from "../../constants/ListConstant";

export const addList = (name) => async (dispatch, getState)=> {
    dispatch ({
        type: LIST_ADD,
        payload: {
            name:name,
            complete:false
        }
    })

    // save to local storage
    localStorage.setItem('listItems',JSON.stringify(getState().todoItems.todoList))
}

export const deleteList = (name) => async (dispatch,getState) => {
    dispatch({
        type: LIST_DELETE,
        payload:name
    })
    // save to local storage
    localStorage.setItem('listItems',JSON.stringify(getState().todoItems.todoList))
}

export const addDone = (name) => async (dispatch, getState)=> {
    dispatch ({
        type: LIST_ADD_DONE,
        payload: {
            name:name,
            complete:true
        }
    })

    // save to local storage
    localStorage.setItem('listItems',JSON.stringify(getState().todoItems.todoList))
}

export const removeDone = (name) => async (dispatch, getState)=> {
    dispatch ({
        type: LIST_REMOVE_DONE,
        payload: {
            name:name,
            complete:false
        }
    })

    // save to local storage
    localStorage.setItem('listItems',JSON.stringify(getState().todoItems.todoList))
}