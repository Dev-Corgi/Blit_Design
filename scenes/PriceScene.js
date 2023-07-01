
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
function PriceScene() {
    const navigate = useNavigate();
  return (
    <View style={styles.background}>
        <FontText style = {styles.price}>{"32,500원"}</FontText>
        <View style = {styles.line}></View>
        <FontText style = {styles.membercount}>{"7명"}</FontText>
        <TouchableOpacity onPress={navigate('/nfc')} style={styles.button}>
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
    backgroundColor : "#000000"
  },

price :{
    position : "absolute",
    width: 138,
    height: 50,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -69},
    {translateY : -182}
    ],
    color : "rgba(255,255,255,1)",
    fontSize : 30,
    fontFamily: "Pretendard-Bold",
    textAlign : "right",
    textAlignVertical : "center",
    letterSpacing : 0.1
},

line : {
    position : "absolute",
    width: 171,
    height: 3,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -85},
    {translateY : -108}
    ],
    backgroundColor : "rgba(244,52,101,1)"
},

membercount :{
    position : "absolute",
    width: 51,
    height: 50,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : 17},
    {translateY : -91}
    ],
    color : "rgba(255,255,255,1)",
    fontSize : 30,
    fontFamily: "Pretendard-Bold",
    textAlign : "right",
    textAlignVertical : "center",
    letterSpacing : 0.1
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
}



});

export default PriceScene;
