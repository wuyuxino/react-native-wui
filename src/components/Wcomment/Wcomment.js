import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  PixelRatio,
  Dimensions,
  StyleSheet
} from 'react-native'

import {
  basicLayout
} from '../config/index'

const { width } = Dimensions.get('window')
 
const Wcomment = props => {
  const {
    containerStyle,
    topConStyle,
    topLeftUserConStyle,
    imgStyle,
    userImgUrl,
    topRightConStyle,
    userText,
    userTextStyle,
    timeText,
    timeTextStyle,
    commentConStyle,
    commentConLeftStyle,
    commentConRightStyle,
    commentTextStyle,
    commentText,
    starNum,
    starStyle,
    scoreNum,
    choiceColor,
    noChoiceColor
  } = props
  return(
    <View
      style={
        [
          styles.containerStyle,
          containerStyle
        ]
      }>
      <View
        style={
          [
            styles.topConStyle,
            basicLayout.left,
            topConStyle
          ]
        }>
        <View
          style={
            [
              styles.topLeftUserConStyle,
              topLeftUserConStyle
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
            source={{uri:userImgUrl&&userImgUrl}}
          />
        </View>
        <View
          style={
            [
              styles.topRightConStyle,
              basicLayout.leftnr,
              topRightConStyle
            ]
          }>
          <Text
            style={
              [
                styles.userTextStyle,
                userTextStyle
              ]
            }>
            {userText}
          </Text>
          <Text
            style={
              [
                styles.timeTextStyle,
                timeTextStyle
              ]
            }>
            {timeText}
          </Text>
        </View>
      </View>
      <View
        style={
          [ 
            styles.commentConStyle,
            basicLayout.left,
            commentConStyle
          ]
        }>
        <View 
          style={
            [
              styles.commentConLeftStyle,
              commentConLeftStyle
            ]
          }>
        </View>
        <View
          style={
            [
              styles.commentConRightStyle,
              commentConRightStyle
            ]
          }>
          <Text 
            style={
              [
                styles.commentTextStyle,
                commentTextStyle
              ]
            }>
            {commentText}
          </Text>
          <View
            style={
              [
                basicLayout.left
              ]
            }>
            {
              starNum.map((i,n)=>{
                return(
                  <Text 
                    key={n}
                    style={
                      [
                        styles.starStyle,
                        starStyle,
                        {
                          color: scoreNum>n?choiceColor:noChoiceColor
                        }
                      ]
                    }>
                    ★
                  </Text>
                )
              })
            }
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle:{
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1/PixelRatio.get()
  },
  topConStyle:{
    width: '100%',
    height: 60
  },
  topLeftUserConStyle:{
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#4486FF'
  },
  imgStyle:{
    width: '100%',
    height: '100%'
  },
  topRightConStyle: {
    width: width-120,
    height: 60,
    marginLeft: 12
  },
  userTextStyle:{
    fontSize: 16,
    color: '#333',
    letterSpacing: 1,
    marginBottom: 6
  },
  timeTextStyle:{
    fontSize: 13,
    color: '#666',
    letterSpacing: 1
  },
  commentConStyle:{
    width: '100%'
  },
  commentConLeftStyle:{
    width: 60,
    height:60
  },
  commentConRightStyle:{
    width: width - 100,
    paddingLeft: 12
  },
  commentTextStyle:{
    fontSize: 14,
    color: '#333',
    letterSpacing: 1,
    lineHeight: 22,
    marginBottom: 20
  },
  starStyle:{
    fontSize: 15,
    marginRight: 4,
    marginBottom: 20
  }
})

Wcomment.PropTypes = {
  containerStyle: PropTypes.object,
  topConStyle: PropTypes.object,
  topLeftUserConStyle: PropTypes.object,
  imgStyle: PropTypes.object,
  userImgUrl: PropTypes.string,
  topRightConStyle: PropTypes.object,
  userText: PropTypes.string || PropTypes.number,
  userTextStyle: PropTypes.object,
  timeText: PropTypes.string || PropTypes.number,
  timeTextStyle: PropTypes.object,
  commentConStyle: PropTypes.object,
  commentConLeftStyle: PropTypes.object,
  commentConRightStyle: PropTypes.object,
  commentTextStyle: PropTypes.object,
  commentText: PropTypes.string || PropTypes.number,
  starNum: PropTypes.array,
  starStyle: PropTypes.object,
  choiceColor: PropTypes.string,
  noChoiceColor: PropTypes.string,
  scoreNum: PropTypes.number
}

Wcomment.defaultProps = {
  userText: 'Air Penguin',
  timeText: '2019-09-09 20:23:19',
  commentText: 'How to use components and how to write pages more easily',
  starNum: [1,1,1,1,1],
  choiceColor: '#4486FF',
  noChoiceColor: '#ccc',
  scoreNum: 3
}

export default Wcomment