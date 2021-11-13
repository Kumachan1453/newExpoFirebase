import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBXRAvJhNWr4xFOIRvEqFKA82gO6v8LZnU",
    authDomain: "newexpofirebase-cda46.firebaseapp.com",
    projectId: "newexpofirebase-cda46",
    storageBucket: "newexpofirebase-cda46.appspot.com",
    messagingSenderId: "772345587846",
    appId: "1:772345587846:web:211794f811cadbe05bc907",
  };

  const initial = initializeApp(firebaseConfig);
  const db = getFirestore();

  const snapshot = db.collection("users").get();
  // const snapshot = db;　だとうまくいく。
  console.log("snapshot", snapshot);
  // snapshot.forEach((doc) => {
  //   console.log(doc.id, "=>", doc.data());
  // });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
