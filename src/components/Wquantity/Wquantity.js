import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import {
  basicLayout
} from '../config/index'

class Wquantity extends Component {
  constructor(){
    super()
    this.state={
      countNumber:0
    }
  }

  static PropTypes = {
    containerStyle: PropTypes.object,
    leftConStyle: PropTypes.object,
    rightConStyle: PropTypes.object,
    leftBtnTextStyle: PropTypes.object,
    rightBtnTextStyle: PropTypes.object,
    leftBtnText: PropTypes.string | PropTypes.number,
    rightBtnText: PropTypes.string | PropTypes.number,
    centerTextStyle: PropTypes.object,
    currentValue: PropTypes.func
  }
  
  static defaultProps = {
    leftBtnText: '-',
    rightBtnText: '+',
    currentValue: (e)=>{
      console.log(e)
    }
  }
  
  render(){
    const {
      containerStyle,
      leftConStyle,
      rightConStyle,
      leftBtnTextStyle,
      rightBtnTextStyle,
      leftBtnText,
      rightBtnText,
      centerTextStyle,
      currentValue
    } = this.props
    const { countNumber } = this.state
    return(
      <View
        style={
          [
            styles.containerStyle,
            basicLayout.both,
            containerStyle
          ]
        }>
        <TouchableOpacity
          onPress={()=>{
            if(Number(countNumber)===0){return}
            this.refs.TextInput.blur()
            this.setState(
              {countNumber:Number(countNumber)-1},
              ()=>{currentValue(countNumber-1)}
            )
          }}
          activeOpacity={.8}
          style={
            [
              styles.leftConStyle,
              basicLayout.center,
              leftConStyle
            ]
          }>
          <Text
            style={
              [
                styles.leftBtnTextStyle,
                leftBtnTextStyle
              ]
            }>
            {leftBtnText}
          </Text>
        </TouchableOpacity>
        <TextInput
          ref='TextInput'
          onChangeText={(e)=>{
            if(e==""|| isNaN(e)) return
            this.setState(
              {countNumber:Number(e)},
              ()=>{currentValue(Number(e))}
            )
          }}
          onBlur={()=>{
            this.refs.TextInput.clear()
          }}
          keyboardType={'numeric'}
          value={countNumber}
          placeholderTextColor={'#333'}
          placeholder={this.state.countNumber}
          style={
            [
              styles.centerTextStyle,
              centerTextStyle
            ]
          }
        />
        <TouchableOpacity
          onPress={()=>{
            this.refs.TextInput.blur()
            this.setState(
              {countNumber:Number(countNumber)+1},
              ()=>{currentValue(countNumber+1)}
            )
          }}
          activeOpacity={.8}
          style={
            [
              styles.rightConStyle,
              basicLayout.center,
              rightConStyle
            ]
          }>
          <Text
            style={
              [
                styles.rightBtnTextStyle,
                rightBtnTextStyle
              ]
            }>
            {rightBtnText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    width: 120,
    height: 40,
  },
  leftConStyle:{
    width: 30,
    height: 30,
    backgroundColor: '#F5F5F5'
  },
  rightConStyle:{
    width: 30,
    height: 30,
    backgroundColor: '#FF8154'
  },
  leftBtnTextStyle:{
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 30,
    textAlign: 'center'
  },
  rightBtnTextStyle:{
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 30,
    color: '#FFF',
    textAlign: 'center'
  },
  centerTextStyle:{
    width: 60,
    height: 30,
    color: '#333',
    textAlign: 'center'
  }
})

export default Wquantity