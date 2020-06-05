var app_fireBase = {};
(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyB33gOhG3VsPfKqoubsSaVQ6fgcq4eiDSE",
        authDomain: "test-f3667.firebaseapp.com",
        databaseURL: "https://test-f3667.firebaseio.com",
        projectId: "test-f3667",
        storageBucket: "test-f3667.appspot.com",
        messagingSenderId: "2082546077",
        appId: "1:2082546077:web:938d4669fcf323937b4f74",
        measurementId: "G-CLWWM8H7T3"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      
      app_fireBase = firebase;
})()
  