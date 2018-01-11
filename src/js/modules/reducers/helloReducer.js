const defaultState = {
  name: 'hello world'
}
export function helloReducer (state = defaultState, action) {
  switch (action.type) {
    case "SET_NAME":
    break;
  }
  return state;
}
