
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
function NFCActivatedScene() {
    const navigate = useNavigate();
  return (
    <View style={styles.background}>
        <View style = {styles.bigelipse}></View>
        <View style = {styles.smallelipse}></View>
        <View style = {styles.backrect}></View>
      <Image
          style={styles.ic_phone}
          source={require("../asset/images/ic_phone.png")}
        />
        <FontText style = {styles.title}>{"NFC 활성화"}</FontText>
        <FontText style = {styles.subtitle}>{"결제할 사람의 스마트폰을\n이 뒤에 두세요"}</FontText>
        {/* <Image
          style={styles.button}
          source={require("../asset/images/img_createbutton.png")}
        /> */}
                 <TouchableOpacity onPress={navigate('/')} style={styles.button}>
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
  ic_phone: {
    position : "absolute",
    width: 105,
    height: 188,
    // left: "50%",
    // top: "50%",
    transform : [
    {translateX : 141},
    {translateY : 306}
    ],
},
bigelipse : {
    position : "absolute",
    width: 278,
    height: 278,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -139},
    {translateY : -233}
    ],
    borderRadius:139,
    backgroundColor : "rgba(244,52,101,0.2)"
},

smallelipse : {
    position : "absolute",
    width: 190 ,
    height: 190,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -95},
    {translateY : -189}
    ],
    borderRadius:95,
    backgroundColor : "rgba(244,52,101,0.25)"
},

backrect :{
    position : "absolute",
    width: 127,
    height: 73,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -64},
    {translateY : -129}
    ],
    borderRadius:15,
    backgroundColor : "rgba(244,52,101,1)"
},

title :{
    position : "absolute",
    width: 145,
    height: 50,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -73},
    {translateY : 119}
    ],
    color : "rgba(255,255,255,1)",
    fontSize : 30,
    fontFamily: "Pretendard-Bold",
    textAlign : "center",
    textAlignVertical : "center",
    letterSpacing : 0.1
},

subtitle :{
    position : "absolute",
    width: 160,
    height: 50,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -80},
    {translateY : 176}
    ],
    color : "rgba(255,255,255,1)",
    lineHeight : 25,
    fontSize : 16,
    fontFamily: "Pretendard-Bold",
    textAlign : "center",
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

export default NFCActivatedScene;
