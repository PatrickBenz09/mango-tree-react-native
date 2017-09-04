import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'

import { submit_the_form } from '../actions/rootAction'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      treeName: ''
    }
  }

  handleUserName (e) {
    this.setState({
      name: e.target.value,
      treeName: this.state.treeName
    })
  }

  handleTreeName (e) {
    this.setState({
      name: this.state.name,
      treeName: e.target.value
    })
  }

  submitForm () {
    this.props.submitTheForm(this.state.name, this.state.treeName)
  }

  render () {
    <View style>
      <Text>Welcome</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Your name"
          onChangeText={(e) => this.handleUserName({e})}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Give your tree a name"
          onChangeText={(e) => this.handleTreeName({e})}
        />
        <Button
          onPress={ () => this.submitForm() }
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
    </View>
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitTheForm: (name, treeName) => dispatch(submit_the_form(name, treeName))
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1abc9c',
  }
});

export default connect(null, mapDispatchToProps)(Home)
