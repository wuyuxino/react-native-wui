import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import {
  basicLayout
} from '../config/index'
import Images from '../../resources/index'

const Wcardone = props => {
  const {
    containerStyle,
    innerContentStyle,
    imageStyle,
    imageUrl,
    titleContentStyle,
    titleTextStyle,
    titleText,
    subtitleText,
    subtitleTextStyle,
    bottomContentStyle,
    bLeftConStyle,
    bRightConStyle,
    bottomIconStyle,
    seeImg,
    seeNumber,
    bottomTextStyle,
    commentImg,
    commentNumber,
    bottomRIconStyle,
    heartImg,
    clickFun,
    commentClickFun,
    heartClickFun,
    commentRImg
  } = props
  return(
    <TouchableOpacity
      activeOpacity={.8}
      onPress={()=>{clickFun()}}
      style={
        [
          styles.containerStyle,
          containerStyle
        ]
      }>
      <View
        style={
          [
            styles.innerContentStyle,
            innerContentStyle
          ]
        }>
        <Image
          resizeMode='cover'
          style={
            [
              styles.imageStyle,
              imageStyle
            ]
          }
          source={{uri:imageUrl}}
        />
        <View
          style={
            [
              styles.titleContentStyle,
              titleContentStyle
            ]
          }>
          <Text
            numberOfLines={2}
            style={
              [
                styles.titleTextStyle,
                titleTextStyle
              ]
            }>
            {titleText}
          </Text>
        </View>
        <View
          style={
            [
              styles.titleContentStyle,
              titleContentStyle
            ]
          }>
          <Text
            numberOfLines={2}
            style={
              [
                styles.subtitleTextStyle,
                subtitleTextStyle
              ]
            }>
            {subtitleText}
          </Text>
        </View>
        <View
          style={
            [
              styles.bottomContentStyle,
              basicLayout.both,
              bottomContentStyle
            ]
          }>
          <View
            style={
              [
                styles.bLeftConStyle,
                basicLayout.both,
                bLeftConStyle
              ]
            }>
            <Image
              resizeMode='cover'
              style={
                [
                  styles.bottomIconStyle,
                  bottomIconStyle
                ]
              }
              source={seeImg?seeImg:Images.see}
            />
            <Text
              style={
                [
                  styles.bottomTextStyle,
                  bottomTextStyle
                ]
              }>
              {seeNumber}
            </Text>
            <Image
              resizeMode='cover'
              style={
                [
                  styles.bottomIconStyle,
                  bottomIconStyle
                ]
              }
              source={commentImg?commentImg:Images.comment}
            />
            <Text
              style={
                [
                  styles.bottomTextStyle,
                  bottomTextStyle
                ]
              }>
              {commentNumber}
            </Text>
          </View>
          <View
            style={
              [
                styles.bRightConStyle,
                basicLayout.centers,
                bRightConStyle
              ]
            }>
            <TouchableOpacity
              onPress={()=>{
                commentClickFun()
              }}>
              <Image
                resizeMode='cover'
                style={
                  [
                    styles.bottomRIconStyle,
                    bottomRIconStyle
                  ]
                }
                source={commentRImg?commentRImg:Images.commentw}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                heartClickFun()
              }}>
              <Image
                resizeMode='cover'
                style={
                  [
                    styles.bottomRIconStyle,
                    bottomRIconStyle
                  ]
                }
                source={heartImg?heartImg:Images.likew}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerStyle:{
    width: '100%',
    height: 340,
    padding: 20
  },
  innerContentStyle:{
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  imageStyle:{
    width: '100%',
    height: 160
  },
  titleContentStyle:{
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10
  },
  titleTextStyle:{
    fontSize: 16,
    color: '#333',
    letterSpacing: 1,
    fontWeight: '500',
    lineHeight: 22
  },
  subtitleTextStyle:{
    fontSize: 15,
    color: '#666',
    letterSpacing: 1,
    lineHeight: 20
  },
  bottomContentStyle:{
    width: '100%',
    paddingLeft: 10,
    marginTop: 10
  },
  bLeftConStyle:{
    height: 30
  },
  bRightConStyle:{
    width: 100,
    height: 30,
    backgroundColor: '#FFD52A',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  bottomIconStyle:{
    width: 20,
    height: 20
  },
  bottomTextStyle:{
    fontSize: 12,
    color: '#333',
    letterSpacing: 1,
    marginLeft: 6,
    marginRight: 6
  },
  bottomRIconStyle:{
    width: 22,
    height: 22,
    color: '#fff',
    marginLeft: 6,
    marginRight: 6
  }
})

Wcardone.PropTypes = {
  containerStyle: PropTypes.object,
  innerContentStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  imageUrl: PropTypes.string,
  titleContentStyle: PropTypes.object,
  titleTextStyle: PropTypes.object,
  titleText: PropTypes.string || PropTypes.number,
  sutitleTextStyle: PropTypes.object,
  subtitleText: PropTypes.string || PropTypes.number,
  bottomContentStyle: PropTypes.object,
  bLeftConStyle: PropTypes.object,
  bRightConStyle: PropTypes.object,
  bottomIconStyle: PropTypes.object,
  seeImg: PropTypes.string,
  seeNumber: PropTypes.string || PropTypes.number,
  bottomTextStyle: PropTypes.object,
  commentImg: PropTypes.string,
  commentRImg: PropTypes.string,
  commentNumber: PropTypes.string || PropTypes.number,
  bottomRIconStyle: PropTypes.object,
  heartImg: PropTypes.string,
  clickFun: PropTypes.func,
  commentClickFun: PropTypes.func,
  heartClickFun: PropTypes.func
}

Wcardone.defaultProps = {
  imageUrl: 'http://pic1a.nipic.com/2008-10-27/200810279723394_2.jpg',
  titleText: '红叶洒满湖畔，秋日的洞庭湖真的是美不胜收。',
  subtitleText: '红叶相伴，湖边漫步，清风缓缓掠过，湖面泛起涟漪，鸟儿在枝头嬉戏，这景色怎一个美字了得。',
  seeNumber: 1200,
  commentNumber: 188,
  clickFun: ()=>{console.log('需要跳转的页面')},
  commentClickFun: ()=>{console.log('点击评论执行的函数')},
  heartClickFun: ()=>{console.log('点击喜欢执行的函数')}
}

export default Wcardone