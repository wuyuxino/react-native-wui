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
    hide: PropTypes.object
  }
  
  static defaultProps = {
    tipsText: 'tips',
    hide: {
      zIndex: -3000,
      height: 0,
      overflow: 'hidden'
    }
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
      hide
    } = this.props
    return(
      <View
        style={
          [
            styles.containerStyle,
            basicLayout.center,
            containerStyle,
            hide
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
            }>{tipsText}</Text>
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