import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class Mango extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    <View>
      <Text>Mango</Text>
    </View>
  }
}

const mapStateToProps = (state) => ({
  age: state.age
})

export default connect(mapStateToProps, mapDispatchToProps)(Mango)
