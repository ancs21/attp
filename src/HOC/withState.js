import React from 'react'
import { Context } from '../Provider'

const withState = WrapComponent => props => (
  <Context.Consumer>
    {({state, actions}) => (
      <WrapComponent state={state} actions={actions} {...props} />
    )}
  </Context.Consumer>
)

export default withState