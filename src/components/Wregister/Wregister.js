import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Alert,
  Image,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import basicLayout from '../config/basicLayout'
import Images from '../../resources/index'

const { width, height } = Dimensions.get('window')

const Wregister = props => {
  const {
    containerStyle,
    centerConStyle,
    inputConStyle,
    leftInputConStyle,
    inputStyle,
    inputLeftImgStyle,
    leftImgUrl,
    leftImgUrlE,
    leftImgUrlP,
    leftImgUrlT,
    submitConStyle,
    submitText,
    submitTextStyle,
    bottomConStyle,
    bottomTextStyle,
    bottomText,
    titleStyle,
    titleTextStyle,
    titles,
    inputTextUsername,
    inputTextEmail,
    inputTextPassWord,
    inputTextPhoneNumber,
    bottomFunc,
    submitFun
  } = props

  return(
    <View
      style={
        [
          styles.containerStyle,
          basicLayout.center,
          containerStyle
        ]
      }>
      <View
        style={
          [
            styles.titleStyle,
            basicLayout.center,
            titleStyle
          ]
        }>
        <Text 
          style={
            [
              styles.titleTextStyle,
              titleTextStyle
            ]
          }>
          {titles}
        </Text>
      </View>
      <View
        style={
          [
            styles.centerConStyle,
            centerConStyle
          ]
        }>
        <View
          style={
            [
              styles.inputConStyle,
              basicLayout.both,
              inputConStyle
            ]
          }>
          <View 
            style={
              [
                styles.leftInputConStyle,
                basicLayout.center,
                leftInputConStyle
              ]
            }>
            <Image
              resizeMode='cover'
              style={
                [
                  styles.inputLeftImgStyle,
                  inputLeftImgStyle
                ]
              }
              source={
                leftImgUrl?
                leftImgUrl:
                Images.loginu
              }
            />
          </View>
          <TextInput
            autoCapitalize={false}
            onChangeText={(text)=>{
              inputTextUsername(text)
            }}
            style={
              [
                styles.inputStyle,
                inputStyle
              ]
            }
            placeholder='username'
          />
        </View>
        <View
          style={
            [
              styles.inputConStyle,
              basicLayout.both,
              inputConStyle
            ]
          }>
          <View 
            style={
              [
                styles.leftInputConStyle,
                basicLayout.center,
                leftInputConStyle
              ]
            }>
            <Image
              resizeMode='cover'
              style={
                [
                  styles.inputLeftImgStyle,
                  inputLeftImgStyle
                ]
              }
              source={
                leftImgUrlE?
                leftImgUrlE:
                Images.email
              }
            />
          </View>
          <TextInput
            autoCapitalize={false}
            onChangeText={(text)=>{
              inputTextEmail(text)
            }}
            style={
              [
                styles.inputStyle,
                inputStyle
              ]
            }
            placeholder='email'
          />
        </View>
        <View
          style={
            [
              styles.inputConStyle,
              basicLayout.both,
              inputConStyle
            ]
          }>
          <View 
            style={
              [
                styles.leftInputConStyle,
                basicLayout.center,
                leftInputConStyle
              ]
            }>
            <Image
              resizeMode='cover'
              style={
                [
                  styles.inputLeftImgStyle,
                  inputLeftImgStyle
                ]
              }
              source={
                leftImgUrlP?
                leftImgUrlP:
                Images.password
              }
            />
          </View>
          <TextInput
            onChangeText={(text)=>{
              inputTextPassWord(text)
            }}
            secureTextEntry={true}
            style={
              [
                styles.inputStyle,
                inputStyle
              ]
            }
            placeholder='password'
          />
        </View>
        <View
          style={
            [
              styles.inputConStyle,
              basicLayout.both,
              inputConStyle
            ]
          }>
          <View 
            style={
              [
                styles.leftInputConStyle,
                basicLayout.center,
                leftInputConStyle
              ]
            }>
            <Image
              resizeMode='cover'
              style={
                [
                  styles.inputLeftImgStyle,
                  inputLeftImgStyle
                ]
              }
              source={
                leftImgUrlT?
                leftImgUrlT:
                Images.phone
              }
            />
          </View>
          <TextInput
            autoCapitalize={false}
            onChangeText={(text)=>{
              inputTextPhoneNumber(text)
            }}
            style={
              [
                styles.inputStyle,
                inputStyle
              ]
            }
            placeholder='phone number'
          />
        </View>
        <TouchableOpacity
          onPress={()=>{
            submitFun()
          }}
          style={
            [
              styles.submitConStyle,
              basicLayout.center,
              submitConStyle
            ]
          }>
          <Text
            style={
              [
                styles.submitTextStyle,
                submitTextStyle
              ]
            }>
            {submitText}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={()=>{
          bottomFunc()
        }}
        style={
          [
            styles.bottomConStyle,
            basicLayout.center,
            bottomConStyle
          ]
        }>
        <Text
          style={
            [
              styles.bottomTextStyle,
              bottomTextStyle
            ]
          }>
          {bottomText}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle:{
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  centerConStyle:{
    width: '90%'
  },
  inputConStyle:{
    width: '100%',
    height: 50,
    marginBottom: 20,
    backgroundColor: '#F2F2F2'
  },
  leftInputConStyle:{
    width: 50,
    height: 50
  },
  inputStyle:{
    width: width*.9-50,
    height: 50,
    backgroundColor: '#F2F2F2'
  },
  inputLeftImgStyle:{
    width: 26,
    height: 26
  },
  submitConStyle:{
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#C59D5F'
  },
  submitTextStyle:{
    fontSize: 16,
    color: '#FFF',
    letterSpacing: 1,
    fontWeight: '500'
  },
  bottomConStyle:{
    width: '100%',
    position: 'absolute',
    bottom: 20
  },
  bottomTextStyle:{
    fontSize: 14,
    color: '#666',
    letterSpacing: 1
  },
  titleStyle:{
    width: '100%',
    position: 'absolute',
    top: height*.1
  },
  titleTextStyle:{
    fontSize: 18,
    color: '#333',
    letterSpacing: 1,
    fontWeight: '500'
  }
})

Wregister.PropTypes = {
  containerStyle: PropTypes.object,
  centerConStyle: PropTypes.object,
  inputConStyle: PropTypes.object,
  leftInputConStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  inputLeftImgStyle: PropTypes.object,
  leftImgUrl: PropTypes.string,
  leftImgUrlE: PropTypes.string,
  leftImgUrlP: PropTypes.string,
  leftImgUrlT: PropTypes.string,
  submitConStyle: PropTypes.object,
  submitTextStyle: PropTypes.object,
  bottomConStyle: PropTypes.object,
  bottomTextStyle: PropTypes.object,
  bottomText: PropTypes.string || PropTypes.number,
  titleStyle: PropTypes.object,
  titleTextStyle: PropTypes.object,
  titles: PropTypes.string || PropTypes.number,
  inputTextUsername: PropTypes.func,
  inputTextEmail: PropTypes.func,
  inputTextPassWord: PropTypes.func,
  inputTextPhoneNumber: PropTypes.func,
  bottomFunc: PropTypes.func,
  submitFun: PropTypes.func
}

Wregister.defaultProps = {
  submitText: 'Sign Up',
  bottomText: 'Have an account? Sign In',
  titles: 'titles',
  inputTextUsername: (text)=>{console.log(text)},
  inputTextEmail: (text)=>{console.log(text)},
  inputTextPassWord: (text)=>{console.log(text)},
  inputTextPhoneNumber: (text)=>{console.log(text)},
  bottomFunc: ()=>{Alert.alert('bottom click')},
  submitFun: ()=>{Alert.alert('submit click')}
}

export default Wregister