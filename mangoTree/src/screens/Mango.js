import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button } from 'react-native'

class Mango extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Mango Tree Simulation',
    header: null
  }

  render () {
    return (
      <View style={ styles.container }>
        <Text>Hi, { this.props.name }</Text>
        <Text>This is { this.props.treeName }</Text>
        <Text>He is { this.props.age } year(s) old</Text>
        <Button
          title="Simulate"
        />
        <Button
          title="Harvest Mango"
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.userStore.name,
  treeName: state.userStore.treeName,
  age: state.mangoStore.age
})

const mapDispatchToProps = (dispatch) => ({
  //
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1abc9c',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Mango)
