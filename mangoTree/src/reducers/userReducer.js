const initialState = {
  name: '',
  treeName: ''
}

export default (state = initialState, action) => {
  console.log('-------> masuk store & reducer root')
  switch (action.type)
  {
    case "INPUT_NAME":
      return { ...state, name: action.payload.name, treeName: action.payload.treeName }

    default:
      return state
  }
}
