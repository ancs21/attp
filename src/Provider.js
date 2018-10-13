import React from 'react'
import {provider, auth} from './utils/auth'

const Context = React.createContext()

class Provider extends React.Component {
  state = {
    isAuth: false,
    user: null
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, isAuth: true });
      } 
    })
  }

  handleSignInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user
        this.setState({isAuth: true, user})
      })
  }

  render() {
    const {children} = this.props
    return (
      <Context.Provider
        value={{
          state: {
            isAuth: this.state.isAuth,
            user: this.state.user
          },
          actions: {
            handleSignInWithGoogle: this.handleSignInWithGoogle
          }
      }}>
        {children}
      </Context.Provider>
    )
  }
}

export {Context}
export default Provider