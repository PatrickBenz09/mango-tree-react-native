import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

import { submit_the_form } from '../actions/rootAction'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'sda',
      treeName: ''
    }
  }

  static navigationOptions = {
    title: 'Mango User',
    header: null
  }

  submitForm () {
    this.props.submitTheForm(this.state.name, this.state.treeName)
  }

  render () {
    const { navigate } = this.props.navigation
    return(
      <View style={ styles.container }>
        <Text>Welcome {this.state.name}</Text>
        <Text>Welcome {this.state.treeName}</Text>
          <TextInput
            style={{height: 40, width: 200, borderColor: 'gray'}}
            placeholder="Your name"
            onChangeText={ (name) => this.setState({ name }) }
          />
          <TextInput
            style={{height: 40, width: 200, borderColor: 'gray'}}
            placeholder="Give your tree a name"
            onChangeText={ (treeName) => this.setState({ treeName }) }
          />
          <Button
            onPress={ () => {
              navigate('MangoScreen')
              this.submitForm()
            }}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learns more about this purple button"
          />
      </View>
    )
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
