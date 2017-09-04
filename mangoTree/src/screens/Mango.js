import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class Mango extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    <View>
      <Text>this.props.name</Text>
      <Text>this.props.treeName</Text>
    </View>
  }
}

const mapStateToProps = (state) => ({
  name: state.userStore.name,
  treeName: state.userStore.treeName
})

const mapDispatchToProps = (dispatch) => ({
  //
})

export default connect(mapStateToProps, mapDispatchToProps)(Mango)
