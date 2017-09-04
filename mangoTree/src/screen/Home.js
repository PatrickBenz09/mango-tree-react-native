import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    <View>
      <Text>Welcome</Text>
    </View>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
