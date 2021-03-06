import React, { useState, useEffect } from 'react';
import './App.scss';
import MainVoting from './containers/MainVoting/MainVoting';
import OtherVoting from './containers/OtherVoting/OtherVoting';
import Header from './components/Header/Header';
import firebase from './firebaseConfig.js';
//import Footer from './components/Footer/Footer';

let isLoaded= false;

function useAppState() {
  const [appState, setAppState] = useState([]);

  useEffect(() => {
    const unsuscribe = firebase
    .firestore().collection('celebritities').orderBy("dateAdded", "desc").onSnapshot((snapshot) => {
      const newAppState = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      isLoaded = true;
      setAppState(newAppState);
    })

    return ()=> unsuscribe();
  }, []);

  return appState
}

function App() {

  const updateVotingBox = (docId, object) =>{
    firebase.firestore()
    .collection("celebritities")
    .doc(object.id).update(object);
    }

  const appState = useAppState();
  let celebrities = appState;
  let cloneCelebs = [...celebrities];
  cloneCelebs.shift();

  if(isLoaded){
  return (
    <div className="App">
      <Header />
      <main>
        <MainVoting celebrity={celebrities[0] ? celebrities[0] : ""} />
        <OtherVoting updateVotes={(id,obj)=>updateVotingBox(id,obj)} celebrities={cloneCelebs} />
      </main>
    </div>
  );}else{
    return <h1 className="white">Loading...</h1>
  }
}
export default App;
