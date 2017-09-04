

export const grow = (age, height, fruits, healthyStatus) => ({
  type: 'GROW',
  payload: {
    age: age,
    height: height,
    fruits: fruits,
    healthyStatus: healthyStatus
  }
})

export const submit_the_form = (name, treeName) => ({
  type: 'INPUT_NAME',
  payload: {
    name: name,
    treeName: treeName
  }
})
