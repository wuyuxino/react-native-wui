import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  Alert,
  PixelRatio,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import {
  basicLayout
} from '../config/index'
import Images from '../../resources/index'

const Wheader = props => {
  const {
    containerStyle,
    leftStyle,
    rightStyle,
    textStyle,
    textContent,
    leftContent,
    leftClick,
    rightContent,
    rightClick
  } = props

  return(
    <View
      style={
        [
          styles.containerStyle,
          basicLayout.both,
          containerStyle
        ]
      }>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor='rgba(0,0,0,0)'
        onPress={()=>{
          leftClick()
        }}>
        <View
          style={
            [
              styles.leftStyle,
              basicLayout.center,
              leftStyle
            ]
          }>
          {
            leftContent?
            leftContent():
            <Image
              resizeMode='cover'
              style={styles.img}
              source={Images.left}
            />
          }
        </View>
      </TouchableHighlight>
      <Text
        style={
          [
            styles.textStyle,
            textStyle
          ]
        }>
        {textContent}
      </Text>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor='rgba(0,0,0,0)'
        onPress={()=>{
          rightClick()
        }}>
        <View
          style={
            [
              styles.rightStyle,
              basicLayout.center,
              rightStyle
            ]
          }>
          {
            rightContent?
            rightContent():
            <Image
              resizeMode='cover'
              style={styles.img}
              source={Images.share}
            />  
          }
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle:{
    width: '100%',
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1/PixelRatio.get()
  },
  leftStyle:{
    width: 26,
    height: 26
  },
  rightStyle:{
    width: 26,
    height: 26
  },
  textStyle:{
    fontSize: 16,
    fontWeight: '500',
    color:'#333'
  },
  img: {
    width:'100%',
    height:'100%'
  }

})

Wheader.PropTypes = {
  containerStyle: PropTypes.object,
  leftStyle: PropTypes.object,
  rightStyle: PropTypes.object,
  textStyle: PropTypes.string || PropTypes.number,
  textContent: PropTypes.string || PropTypes.number,
  leftContent: PropTypes.func,
  leftClick: PropTypes.func,
  rightContent:PropTypes.func,
  rightClick: PropTypes.func
}

Wheader.defaultProps = {
  textContent: 'Module components',
  leftClick: ()=>{Alert.alert('left click')},
  rightClick: ()=>{Alert.alert('right click')}
}

export default Wheader