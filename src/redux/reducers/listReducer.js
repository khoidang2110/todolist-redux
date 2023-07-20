import {
  LIST_ADD,
  LIST_DELETE,
  LIST_ADD_DONE,
  LIST_REMOVE_DONE,
} from "../../constants/ListConstant";

export const listReducer = (
  state = { todoList: [], repeat: false },
  action
) => {
  switch (action.type) {
    case LIST_ADD:
      const newList = action.payload;
      const checkName = state.todoList.find(
        (x) => x.name === action.payload.name
      );

      if (!checkName) {
        return {
          ...state,
          repeat: false,
          todoList: [...state.todoList, newList],
        };
      } else {
        return {
          ...state,
          repeat: true,
        };
      }
    case LIST_DELETE:
      return {
        ...state,
        todoList: state.todoList.filter((x) => x.name !== action.payload),
      };
    case LIST_ADD_DONE:
      const existNote = state.todoList.find(
        x => x.name === action.payload.name
      )
      return {
        ...state,
        todoList: state.todoList.map((x) =>
          x.name === existNote.name ? action.payload : x
        ),
      };
    case LIST_REMOVE_DONE:
      const uncompletedNote = state.todoList.find(
        (x) => x.name === action.payload.name
      );
      return {
        ...state,
        todoList: state.todoList.map((x) =>
          x.name === uncompletedNote.name ? action.payload : x
        ),
      };
    default:
      return state;
  }
};
