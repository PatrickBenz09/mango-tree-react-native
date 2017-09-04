const initialState = {
  name: '',
  tree: ''
}

export default (state = initialState, action) => {
  console.log('-------> masuk store & reducer root')
  switch (action.type)
  {
    case "INPUT_NAME":
      return state

    default:
      return state
  }
}
