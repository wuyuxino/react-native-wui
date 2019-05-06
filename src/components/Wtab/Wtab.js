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
      sliderLeft: new Animated.Value(0),
      currentTab: 0
    }
  }

  static PropTypes = {
    type: PropTypes.number,
    containerStyle: PropTypes.object,
    itemStyle: PropTypes.object,
    tabList: PropTypes.array,
    clickTab: PropTypes.func,
    sliderStyle: PropTypes.object,
    tabWidth: PropTypes.number,
    selectTextStyle: PropTypes.object,
    noSelectTextStyle: PropTypes.object
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
    const { 
      type, 
      containerStyle, 
      itemStyle, 
      tabList, 
      clickTab, 
      sliderStyle, 
      tabWidth,
      selectTextStyle,
      noSelectTextStyle
    } = this.props
    const { sliderLeft,currentTab } = this.state
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
                    key={n}
                    underlayColor="#FFF"
                    onPress={()=>{
                      this.setState({currentTab:n})
                      this.sliderTab((tabWidth?tabWidth:width)*(n/tabList.length))
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
                    <Text
                      style={
                        [
                          n===currentTab
                          ?
                            selectTextStyle
                            ?
                            selectTextStyle
                            :
                            styles.selectTextStyle
                          :
                            noSelectTextStyle
                            ?
                            noSelectTextStyle
                            :
                            styles.noSelectTextStyle
                        ]
                      }>
                      {i}
                    </Text>
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
  },
  selectTextStyle: {
    letterSpacing: 1,
    fontSize: 16,
    color: '#FD9351'
  },
  noSelectTextStyle: {
    letterSpacing: 1,
    fontSize: 16,
    color: '#D1D1D1'
  }
})

export default Wtab