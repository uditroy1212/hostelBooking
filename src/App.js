import React, { Component } from "react";
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
firebase.initializeApp({
  apiKey: "AIzaSyAsF3Peu2WtHBbpto1uaAGH2x5qt4-KqIo" ,
  authDomain: "fir-authentication-f91a6.firebaseapp.com"

})



class App extends Component {
  state ={ isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount =() => {
   
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn:!!user
      })
    })
  }


  render() {
    
     return (
       
      <div className="App">
        <h4>Hostel Allocation</h4>
        <p>Please Sign In</p>
        {
          this.state.isSignedIn ? (
            <span>
               <div>Signed In! </div>
               <button onClick={()=>firebase.auth().signOut()}>Sign out!</button>
               </span>
         ) : (
           <StyledFirebaseAuth
           uiConfig={this.uiConfig}
           firebaseAuth={firebase.auth()}
           />
         )
        }
        
       
      </div>
      
    )
  }
}


export default App;