import React from 'React'
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

const Wtitle = props => {
  const {
    containerStyle,
    leftStyle,
    rightStyle,
    textStyle,
    titleContent,
    rightTextStyle,
    rightTextContent,
    rightContent,
    clickRight
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
      <View
        style={
          [
            styles.leftStyle,
            basicLayout.leftnr,
            leftStyle
          ]
        }>
        <Text
          numberOfLines={1}
          style={
            [
              styles.textStyle,
              textStyle
            ]
          }>
          {titleContent}
        </Text>
      </View>
      <TouchableHighlight
        onPress={()=>{
          clickRight()
        }}
        underlayColor={'#FFF'}
        style={
          [
            styles.rightStyle,
            basicLayout.rightnr,
            rightStyle
          ]
        }>
        <View
          style={
            [
              basicLayout.rightnr
            ]
          }>
          <Text
            style={
              [
                styles.rightTextStyle,
                rightTextStyle
              ]
            }>
            {rightTextContent}
          </Text>
          {
            rightContent?
            rightContent()
            :
            <Image
              resizeMode='cover'
              style={styles.img}
              source={Images.right}
            />
          }
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle:{
    width:'100%',
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1/PixelRatio.get()
  },
  leftStyle:{
    width:'70%',
    height: 30,
  },
  rightStyle:{
    width:'20%',
    height: 30
  },
  textStyle:{
    fontSize: 18,
    color: '#333',
    letterSpacing: 1
  },
  rightTextStyle:{
    fontSize: 14,
    color: '#666'
  },
  img:{
    width: 12,
    height: 12,
    marginLeft: 6
  }
})

Wtitle.PropTypes = {
  containerStyle: PropTypes.object,
  leftStyle: PropTypes.object,
  rightStyle: PropTypes.object,
  textStyle: PropTypes.object,
  titleContent: PropTypes.string || PropTypes.number,
  rightTextStyle: PropTypes.object,
  rightTextContent: PropTypes.string || PropTypes.number,
  rightContent: PropTypes.func,
  clickRight: PropTypes.func
}

Wtitle.defaultProps = {
  titleContent: 'Title Component',
  rightTextContent: 'more',
  clickRight: ()=>{Alert.alert('click right')}
}

export default Wtitle