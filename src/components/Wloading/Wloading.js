import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Easing,
  Animated,
  StyleSheet
} from 'react-native'

import {
  basicLayout
} from '../config/index'
import Images from '../../resources/index'
 
class Wloading extends Component{
  constructor(){
    super()
    this.state={
      rotateVal: new Animated.Value(0)
    }
  }

  static PropTypes = {
    containerStyle: PropTypes.object,
    imgStyle: PropTypes.object,
    loadingText: PropTypes.string || PropTypes.number,
    loadingTextStyle: PropTypes.object,
    type: PropTypes.number
  }
  
  static defaultProps = {
    loadingText: 'loading',
    type: 1
  }

  rotate = () => {
    const animationLoading = Animated.timing(
      this.state.rotateVal, 
      {
          toValue: 360,
          duration: 2000,
          easing: Easing.linear,
      }
    )
    Animated.loop(animationLoading).start()
  }

  componentDidMount = () => {
    this.rotate()
  }

  render(){
    const {
      containerStyle,
      imgStyle,
      loadingText,
      loadingTextStyle,
      rotateImg,
      type
    } = this.props
    return(
      <View
        style={
          [
            styles.containerStyle,
            basicLayout.center,
            containerStyle
          ]
        }>
        <Animated.Image 
          source={
            rotateImg?
            rotateImg
            :
            type===1?
            Images.load1
            :type===2?
            Images.load2
            :type===3?
            Images.load3
            :type===4?
            Images.load4
            :Images.load1
          }
          style={
            [
              {
                width:30,
                height:30,
                textAlign: 'center',
                fontSize: 34,
                transform: [{
                  rotate: this.state.rotateVal.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                  })
                }]
              },
              styles.imgStyle,
              imgStyle
            ]
          }>
        </Animated.Image>
        <Text
          style={
            [
              styles.loadingTextStyle,
              loadingTextStyle
            ]
          }>{loadingText}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  containerStyle:{

  },
  imgStyle:{

  },
  loadingTextStyle:{
    fontSize: 12,
    color: '#666',
    marginTop: 6
  }
})

export default Wloading