import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSIgnUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import { render } from '@testing-library/react';
import { setCurrentUser } from './redux/user/user.actions.js'
class App extends React.Component {

  unsubscribeFromAuth = null; 

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
      setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); 
  }

render() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSIgnUpPage}/>
      </Switch>
    </div>
  );
} 
}

const mapDispachToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispachToProps)(App);
