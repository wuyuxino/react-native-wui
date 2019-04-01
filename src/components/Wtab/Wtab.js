import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Alert,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import {
  basicLayout
} from '../config/index'

const { width } = Dimensions.get('window')

class Wtab extends Component{
  constructor(props){
    super(props)
    this.state={
      sliderLeft: new Animated.Value(0)
    }
  }

  static PropTypes = {
    type: PropTypes.number,
    containerStyle: PropTypes.object,
    itemStyle: PropTypes.object,
    tabList: PropTypes.array,
    clickTab: PropTypes.func,
    sliderStyle: PropTypes.object

  }
  
  static defaultProps = {
    type: 1,
    tabList: ['tab1', 'tab2', 'tab3', 'tab4'],
    clickTab: (num)=>{()=>{
      Alert.alert(`The current click is ${num}`)
    }}

  }

  sliderTab = (num) => {
    Animated.timing(                      
      this.state.sliderLeft,      
      {
        toValue: num,
        duration: 300
      }
    ).start()
  }

  render(){
    const { type, containerStyle, itemStyle, tabList, clickTab, sliderStyle } = this.props
    const { sliderLeft } = this.state
    return(
      <View>
        {
          type==1?
          <View
            style={
              [
                styles.containerStyle,
                basicLayout.both,
                containerStyle
              ]
            }>
            {
              tabList.map((i,n)=>{
                return(
                  <TouchableHighlight
                    underlayColor="#FFF"
                    onPress={()=>{
                      this.sliderTab(width*(n/tabList.length))
                      clickTab(n)
                    }}
                    style={
                      [
                        {
                          width: `${100/tabList.length}%`
                        },
                        styles.itemStyle,
                        basicLayout.center,
                        itemStyle
                      ]
                    }>
                    <Text>{i}</Text>
                  </TouchableHighlight>
                )
              })
            }
            <Animated.View 
              style={
                [
                  {
                    width: `${100/tabList.length}%`,
                    left: sliderLeft,
                    height: 2,
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: '#4486FF'
                  },
                  sliderStyle
                ]
              }>
            </Animated.View>
          </View>
          :
          <View>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    width: '100%',
    height: 60,
    position:'relative',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  itemStyle:{
    height: '100%'
  }
})

export default Wtab