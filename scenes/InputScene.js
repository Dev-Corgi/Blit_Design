import React from 'react';
import {Dimensions} from 'react-native';
import {SafeAreaView, StyleSheet, View, Image,  TouchableOpacity,
  ImageBackground} from 'react-native';
import FontText from '../FontText';
import { useNavigate } from 'react-router-native';
function InputScene() {
  const navigate = useNavigate();
  return (
    <View style={styles.background}>
        <FontText style = {styles.title}>{"카카오 페이\n계좌 링크를 등록해주세요"}</FontText>
        <View style = {styles.inputfieldframe}>
            <FontText style = {styles.inputfieldTitle}>{"카카오 송금 링크"}</FontText>
            <View style = {styles.inputfieldrect}></View>
        </View>
        {/* <Image
          style={styles.button}
          source={require("../asset/images/img_createbutton.png")}
        /> */}
                 <TouchableOpacity onPress={navigate('/price')} style={styles.button}>
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
    position: 'absolute',
    width: 390,
    height: 844,
    backgroundColor : "#000000"
  },
  title : {
    position : "absolute",
    width: 292,
    height: 80,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -172},
    {translateY : -320}
    ],
    fontFamily : "Pretendard-ExtraBold",
    lineHeight : 40,
    fontSize : 30,
    color :"rgba(255,255,255,1)",
    textAlign : "left",
    textAlignVertical : "center",
    letterSpacing : 0.1
  },
  inputfieldframe : {
    position : "absolute",
    width: 328,
    height: 104,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -170},
    {translateY : -198}
    ],
  },
  inputfieldTitle : {
    position : "absolute",
    width: 98,
    height: 50,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -164},
    {translateY : -52}
    ],
    fontSize : 15,
    fontFamily : "Pretendard-Bold",
    color : "rgba(255,255,255,1)",
    textAlign : "left",
    textAlignVertical : "top",
    letterSpacing : 0.1
  },
  inputfieldrect :{
    position : "absolute",
    width: 327,
    height: 58,
    left: "50%",
    top: "50%",
    transform : [
    {translateX : -163},
    {translateY : -6}
    ],
    borderRadius : 10,
    backgroundColor : "rgba(29,30,26,1)"
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

export default InputScene;
