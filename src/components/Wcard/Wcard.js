import React,{Component} from 'React'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  Alert,
  PixelRatio,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import {
  basicLayout,
  themeColor
} from '../config/index'
import Images from '../../resources/index'

const { width } = Dimensions.get('window')
 
class Wcard extends Component{

  static PropTypes = {
    type: PropTypes.number,
    containerStyle: PropTypes.object,
    userStyle: PropTypes.object,
    imgStyle: PropTypes.object,
    imgUrl: PropTypes.string,
    rightStyle: PropTypes.object,
    textStyle: PropTypes.object,
    textTitle: PropTypes.string || PropTypes.number,
    clickFunc: PropTypes.func,
    trightStyle: PropTypes.object,
    textStyleone: PropTypes.object,
    textStyletwo: PropTypes.object,
    textStylethree: PropTypes.object,
    textContentone: PropTypes.string || PropTypes.number,
    textContenttwo: PropTypes.string || PropTypes.number,
    textContentthree: PropTypes.string || PropTypes.number
  }
  
  static defaultProps = {
    type: 1,
    imgUrl: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1836527358,3378076438&fm=85&s=ED22747ECFA2F7744EB687830200E08D',
    textTitle: 'Title of an article',
    clickFunc: ()=>{Alert.alert('Functions executed after clicking')},
    textContentone: 'Millennium Dubai Airport Hotel ',
    textContenttwo: 'Dubai – Subway Access',
    textContentthree: '$75 p/night',
    tips: 'Please check if it is used correctly'
  }
  render(){
    const {
      type,
      containerStyle,
      userStyle,
      imgStyle,
      imgUrl,
      rightStyle,
      textStyle,
      textTitle,
      clickFunc,
      trightStyle,
      textStyleone,
      textStyletwo,
      textStylethree,
      textContentone,
      textContenttwo,
      textContentthree,
      tips
    } = this.props
    return(
      <View>
        {
          type?
            type===1?
            <TouchableHighlight
              underlayColor={'#FFF'}
              activeOpacity={1}
              onPress={()=>{
                clickFunc()
              }}>  
              <View
                style={
                  [
                    styles.containerStyle,
                    basicLayout.both,
                    containerStyle
                  ]
                  }>
                <View
                  style={
                    [
                      styles.userStyle,
                      userStyle
                    ]
                  }>
                  <Image
                    resizeMode='cover'
                    style={
                      [
                        styles.imgStyle,
                        imgStyle
                      ]
                    }
                    source={{uri:imgUrl}}
                  />
                </View>
                <Text
                  numberOfLines={2}
                  style={
                    [
                      styles.textStyle,
                      textStyle
                    ]
                  }>
                  {textTitle}
                </Text>
                <Image
                  resizeMode='cover'
                  style={
                    [
                      styles.rightStyle,
                      rightStyle
                    ]
                  }
                  source={Images.right}
                />
              </View>
            </TouchableHighlight>
            :
            <TouchableHighlight
              underlayColor={'#FFF'}
              activeOpacity={1}
              onPress={()=>{
                clickFunc()
              }}>
              <View
                style={
                  [
                    styles.containerStyle,
                    basicLayout.left,
                    containerStyle
                  ]
                }>
                <Image
                  resizeMode='cover'
                  style={
                    [
                      styles.imgStyle,
                      imgStyle
                    ]
                  }
                  source={{uri:imgUrl}}
                />
                <View
                  style={
                    [
                      styles.trightStyle,
                      basicLayout.leftnr,
                      trightStyle
                    ]
                  }>
                  <Text
                    numberOfLines={1}
                    style={
                      [
                        styles.textStyleone,
                        textStyleone
                      ]
                    }>
                  {textContentone}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={
                      [
                        styles.textStyletwo,
                        textStyletwo
                      ]
                    }>
                    {textContenttwo}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={
                      [
                        styles.textStylethree,
                        textStylethree
                      ]
                    }>
                    {textContentthree}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          :
          <View>
            <Text>{tips}</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    width: '100%',
    padding: 16,
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    borderTopWidth: 1/PixelRatio.get(),
    borderBottomWidth: 1/PixelRatio.get(),
    backgroundColor: themeColor.bgColor
  },
  userStyle:{
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc'
  },
  imgStyle:{
    width: 60,
    height: 60,
    borderRadius: 30
  },
  rightStyle:{
    width: 16,
    height: 16
  },
  textStyle:{
    fontSize: 15,
    width: width-130,
    lineHeight: 20,
    letterSpacing: 1
  },
  trightStyle:{
    height: 80,
    width: width-100,
    marginLeft: 6
  },
  textStyleone: {
    fontSize: 16,
    color: '#333',
    letterSpacing: 1
  },
  textStyletwo:{
    fontSize: 14,
    color: '#666',
    marginTop: 6,
    marginBottom: 6,
    letterSpacing: 1
  },
  textStylethree:{
    fontSize: 13,
    color: '#ccc',
    letterSpacing: 1
  }
})

export default Wcard