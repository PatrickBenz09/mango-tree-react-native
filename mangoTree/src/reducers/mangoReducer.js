const initialState = {
  age: 0,
  height: 0,
  fruits: [],
  healthyStatus: ''
}

export default (state = initialState, action) => {
  console.log('-------> masuk store & reducer mango')
  switch (action.type)
  {
    case "":
      return state

    default:
      return state
  }
}
