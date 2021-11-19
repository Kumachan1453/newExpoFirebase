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

  initializeApp(firebaseConfig);
  const db = getFirestore();
  // // const snapshot = db.collection("users").get();
  // const snapshot = db;
  // // 「const snapshot = db;」だとうまくいく。
  // console.log("snapshot", snapshot);

  const citiesRef = db.collection("cities");
  // const citiesRef = db;

  citiesRef.doc("SF").set({
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false,
    population: 860000,
  });
  citiesRef.doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    capital: false,
    population: 3900000,
  });
  citiesRef.doc("DC").set({
    name: "Washington, D.C.",
    state: null,
    country: "USA",
    capital: true,
    population: 680000,
  });
  citiesRef.doc("TOK").set({
    name: "Tokyo",
    state: null,
    country: "Japan",
    capital: true,
    population: 9000000,
  });
  citiesRef.doc("BJ").set({
    name: "Beijing",
    state: null,
    country: "China",
    capital: true,
    population: 21500000,
  });

  const cityRef = db.collection("cities").doc("SF");
  const doc = cityRef.get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    console.log("Document data:", doc.data());
  }

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
