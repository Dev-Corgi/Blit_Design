
import React from 'react';
import IntroScene from './scenes/IntroScene';
import InputScene from './scenes/InputScene';
import NFCActivatedScene from './scenes/NFCActivatedScene';
import PriceScene from './scenes/PriceScene';
import { View,StyleSheet, SafeAreaView } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';

// import { StatusBar } from "react-native";
function App() {
  // if(Platform.OS == 'android'){
  //   StatusBar.setBackgroundColor("transparent");
  //   StatusBar.setTranslucent(true);
  // }
  // StatusBar.setBarStyle("dark-content")

  return (
    <SafeAreaView style = {styles.background}>
        <NativeRouter>
        <Routes>
        <Route  path="/" element={<IntroScene></IntroScene>} />
        <Route  path="/input" element={<InputScene></InputScene>} />
        <Route  path="/price" element={<PriceScene></PriceScene>} />
        <Route  path="/nfc" element={<NFCActivatedScene></NFCActivatedScene>} />
        </Routes>
        </NativeRouter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background : {
    flex:1
  }
});

export default App;

