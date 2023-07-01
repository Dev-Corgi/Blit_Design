
import React from 'react';
import { Dimensions } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import FontText from '../FontText';
import { useNavigate } from 'react-router-native';
function IntroScene() {
  const navigate = useNavigate();

  return (
    <View style={styles.background}>
      <Image
          style={styles.backgroundimage}
          source={require("../asset/images/img_introbackground.png")}
        />
      <View style = {styles.foreground1}></View>
      <View style = {styles.foreground2}></View>
      <View style = {styles.rectframe}></View>
      <FontText style = {styles.title}>{"정산, 쉬워지다"}</FontText>
      <FontText style = {styles.subtitle}>{"복잡하고 귀찮은 정산은 Blit에 맡기고,\n신나게 놀아볼까요?"}</FontText>
      <Image
          style={styles.button}
          source={require("../asset/images/img_createbutton.png")}
        />
         {/* <Button onPress={navigate('/input')} title="Go to Input" /> */}

         <TouchableOpacity onPress={navigate('/input')} style={styles.button}>
      <ImageBackground
        source={require("../asset/images/img_createbutton.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      </ImageBackground>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: "absolute",
    width: 390,
    height:844,
  },
  backgroundimage: {
    position : "absolute",
    width: 390,
    height: 844,
    opacity : 1,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -195},
    {translateY : -422}
    ],
  },
  foreground2: {
    position : "absolute",
    width: 390,
    height: 844,
    opacity : 1,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -195},
    {translateY : -422}
    ],
},

foreground1: {
    position : "absolute",
    width: 390,
    height: 844,
    opacity : 1,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -195},
    {translateY : -422}
    ],
},

rectframe : {
    position : "absolute",
    width: 327,
    height: 540,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -164},
    {translateY : -377}
    ],
    borderWidth : 1,
    borderColor : "rgba(255,255,255,1)",
    backgroundColor : "rgba(0,0,0,0)",
    borderTopLeftRadius : 75,
    borderTopRightRadius : 0,
    borderBottomRightRadius : 75,
    borderBottomLeftRadius : 0
},

button : {
    position : "absolute",
    width: 327,
    height: 53,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -164},
    {translateY : 274}
    ],
},

subtitle : {
    position : "absolute",
    width: 259,
    height: "auto",
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -134},
    {translateY : 96}
    ],
    fontFamily : "Inter-Bold",
    lineHeight : 30,
    fontSize : 13,
    color : "rgba(255,255,255,1)",
    textAlign : "center",
    textAlignVertical : "top",
    letterSpacing : 0.1
},
title : {
    position : "absolute",
    width: 259,
    height: "auto",
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -130},
    {translateY : 48}
    ],
    fontFamily : "The Jamsil-Bold",
    fontSize : 40,
    color : "rgba(255,255,255,1)",
    textAlign : "center",
    textAlignVertical : "top",
    letterSpacing : 0.1
}
});

export default IntroScene;
