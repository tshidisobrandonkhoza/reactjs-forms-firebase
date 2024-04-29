import React from 'react'
import { Component } from 'react'

//import firebase from "firebase";
import { firebaseDb } from '../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
class Login extends Component {
    constructor(props) {

        super(props)
        this.state = {
            status: false
        }

        this.auth = getAuth();

    }
    signIn = () => {

        const auth = this.auth
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
               // const user = result.user;
               // console.log(user)

               this.setState({
                status: true
            })
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    signOut = () => {
        const auth =this.auth
        signOut(auth).then(() => {
            this.setState({
                status: false
            })
            console.log(' // Sign-out successful');
        }).catch((error) => {
            console.log('  // An error happened.')
        });
    }

    render() {

       const auth = getAuth();
        return (
            <div>
               
                {(<button onClick={this.state.status ? this.signOut : this.signIn}>
                    {this.state.status ? 'Log out' : ' Log In '}
                </button>)}
            </div>)

    }
}

export default Login;