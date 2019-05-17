import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import basicLayout from '../config/basicLayout'

const { width } = Dimensions.get('window')

const WimageCard = props => {
  const {
    containerStyle,
    imgStyle,
    imgUrl,
    bottomConStyle,
    bottomTitleStyle,
    titleText,
    bottomBriefStyle,
    briefText,
    bottomLeftConStyle,
    bottomRightConStyle,
    moreStyle,
    moreText,
    mapConstyle,
    starStyle,
    starNum,
    choiceStarColor,
    noChoiceStarColor,
    moreFun
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
            styles.bottomConStyle,
            basicLayout.both,
            bottomConStyle
          ]
        }>
        <View
          style={
            [
              styles.bottomLeftConStyle,
              basicLayout.leftnr,
              bottomLeftConStyle
            ]
          }>
          <Text
            style={
              [
                styles.bottomTitleStyle,
                bottomTitleStyle
              ]
            }>
            {titleText}
          </Text>
          <Text
            style={
              [
                styles.bottomBriefStyle,
                bottomBriefStyle
              ]
            }>
            {briefText}
          </Text>
        </View>
        <View
          style={
            [
              styles.bottomRightConStyle,
              basicLayout.centerend,
              bottomRightConStyle
            ]
          }>
          <View
            style={
              [
                styles.mapConstyle,
                basicLayout.left,
                mapConstyle
              ]
            }>
            {
              [1,2,3,4,5].map((i,n)=>{
                return(
                  <Text
                    style={
                      [
                        styles.starStyle,
                        starStyle,
                        {
                          color:starNum>n?choiceStarColor:noChoiceStarColor
                        }
                      ]
                    }>
                    ★
                  </Text>
                )
              })
            }
          </View>
          <TouchableOpacity
            activeOpacity={.8}
            onPress={()=>{
              moreFun()
            }}>
            <Text
              style={
                [
                  styles.moreStyle,
                  moreStyle
                ]
              }>
              {moreText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle:{
    width: '100%',
    height: 280,
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 20
  },
  imgStyle:{
    width:'100%',
    height: 200,
    borderRadius: 8
  },
  bottomConStyle:{
    width:'100%',
    height: 80
  },
  bottomTitleStyle:{
    letterSpacing: 1,
    fontSize: 18,
    color: '#4A4A4A'
  },
  bottomBriefStyle:{
    letterSpacing: 1,
    fontSize: 14,
    color: '#BCBCBC',
    marginTop: 10
  },
  bottomLeftConStyle:{
    width: width - 200,
    height: 80
  },
  bottomRightConStyle:{
    height: 80,
    width: 130
  },
  moreStyle:{
    marginTop:20,
    color: '#FF82C4'
  },
  mapConstyle:{

  },
  starStyle:{
    marginRight: 2
  }
})

WimageCard.PropTypes = {
  containerStyle: PropTypes.object,
  imgStyle: PropTypes.object,
  imgUrl: PropTypes.string,
  bottomConStyle: PropTypes.object,
  bottomTitleStyle: PropTypes.object,
  bottomBriefStyle: PropTypes.object,
  titleText: PropTypes.string || PropTypes.number,
  briefText: PropTypes.string || PropTypes.number,
  bottomRightConStyle: PropTypes.object,
  moreStyle: PropTypes.object,
  moreText: PropTypes.string || PropTypes.number,
  mapConstyle: PropTypes.object,
  starStyle: PropTypes.object,
  starNum: PropTypes.number,
  choiceStarColor: PropTypes.string,
  noChoiceStarColor: PropTypes.string,
  moreFun: PropTypes.func
}

WimageCard.defaultProps = {
  imgUrl: 'http://pic1.win4000.com/wallpaper/2018-01-20/5a62db6226145.jpg',
  titleText: 'Tataouine Desert',
  briefText: 'TATOUINE SAHARA, TUNISIA',
  moreText: 'Explore more  →',
  starNum: 3,
  choiceStarColor: '#F8E71C',
  noChoiceStarColor: '#CCC',
  moreFun: ()=>{console.log('点击事件已触发')}
}

export default WimageCard