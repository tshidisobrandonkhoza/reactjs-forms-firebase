import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import './firebase'
import { onAuthStateChanged, getAuth } from "firebase/auth";

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes {...props} />
        </BrowserRouter>
    )
}

onAuthStateChanged(getAuth(), (user) => {


    ReactDOM.render(<App auth={user} />, document.getElementById('root'));
    // if (user) {
    //   // User is signed in, see docs for a list of available properties
    //   // https://firebase.google.com/docs/reference/js/auth.user
    //   const uid = user.uid;
    //   // ...
    // } else {
    //   // User is signed out
    //   // ...
    // }
})


