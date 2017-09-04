

export const grow = (age, height, fruits, healthyStatus) => ({
  type: 'GROW',
  payload: {
    age: age,
    height: height,
    fruits: fruits,
    healthyStatus: healthyStatus
  }
})

export const input_name = (name, treeName) => {
  type: 'INPUT_NAME',
  payload: {
    name: name,
    treeName: treeName
  }
}
