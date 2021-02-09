import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
// import SignUp from './components/SignUp/SignUp'
import BeerIndex from './components/BrowserPage/BrowserPage'
import SearchBeer from './components/SearchFor/SearchFor'
import Favorites from './components/Favorites/Favorites'
// import ResetPage from './components/ResetPage/ResetPage'
// import SignIn from './components/SignIn/SignIn'
// import SignOut from './components/SignOut/SignOut'
// import ChangePassword from './components/ChangePassword/ChangePassword'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="display-main">
          <Route path='/index' render={() => (
            <BeerIndex msgAlert={this.msgAlert} user={user} />
          )} />
          <Route path='/search/:id' render={() => (
            <SearchBeer msgAlert={this.msgAlert} user={user} />
          )} />
          <Route path='/favorites' render={() => (
            <Favorites msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
