import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native'

import {
  basicLayout
} from '../config/index'
 
const { width, height } = Dimensions.get('window')

class Wtips extends Component {
  constructor(){
    super()
    this.state={
    }
  }

  static PropTypes = {
    containerStyle: PropTypes.object,
    tipsText: PropTypes.string || PropTypes.number,
    tipsTextStyle: PropTypes.object,
    textConStyle: PropTypes.object,
    time: PropTypes.number,
    hide: PropTypes.object,
    tipPosition: PropTypes.string,
    top: PropTypes.number,
    bottom: PropTypes.number
  }
  
  static defaultProps = {
    tipsText: 'tips',
    hide: {
      zIndex: -3000,
      height: 0,
      overflow: 'hidden'
    },
    tipPosition: 'center',
    top: 0,
    bottom: 0
  }

  static show = (message,time,func) => {
    let obj = {
      zIndex: 999,
      height,
      overflow: 'visible'
    }
    this.defaultProps.hide = obj
    this.defaultProps.tipsText = message
    setTimeout(()=>{
      let obj = {
        zIndex: -3000,
        height:0,
        overflow: 'hidden'
      }
      this.defaultProps.hide = obj
      this.defaultProps.tipsText = 'tips'
    },time?time:1500)
    func()
  }

  shouldComponentUpdate(e){
    if(e.tipsText!==this.props.tipsText){
      this.setState({a:1})
      return true
    }else{
      return false
    }
  }
    
  render(){
    const {
      containerStyle,
      tipsText,
      tipsTextStyle,
      textConStyle,
      hide,
      tipPosition,
      top,
      bottom
    } = this.props
    return(
      <View
        style={
          [
            styles.containerStyle,
            tipPosition ==='top'? 
            basicLayout.top:
            tipPosition ==='bottom'? 
            basicLayout.bottom:
            basicLayout.center,
            containerStyle,
            hide,
            tipPosition ==='top'? 
            {
              marginTop:top
            }:
            tipPosition ==='bottom'? 
            {
              marginBottom:bottom
            }:
            null
          ]
        }>
        <View
          style={
            [
              styles.textConStyle,
              basicLayout.center,
              textConStyle
            ]
          }>
          <Text 
            style={
              [
                styles.tipsTextStyle,
                tipsTextStyle
              ]
            }>
            {tipsText}
          </Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  containerStyle:{
    flex: 1,
    width,
    height,
    position: 'absolute',
    zIndex: 999
  },
  tipsTextStyle:{
    fontSize: 12,
    color: '#fff',
    letterSpacing: 1
  },
  textConStyle:{
    padding: 6,
    borderRadius: 6,
    fontSize: 34,
    backgroundColor:'rgba(0,0,0,.3)'
  }
  
})

export default Wtips