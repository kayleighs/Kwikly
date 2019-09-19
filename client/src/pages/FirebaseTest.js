import React from 'react';
import { FirebaseContext } from '../components/Firebase';
const FirebaseTest = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return <div>I've access to Firebase and render something.</div>;
    }}
  </FirebaseContext.Consumer>
);
export default FirebaseTest;