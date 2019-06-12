import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity
} from 'react-native'

import {
  basicLayout
} from '../config/index'

class Wspinner extends Component {
  constructor(){
    super()
    this.state={
      showList:false
    }
  }

  static PropTypes = {
    containerStyle: PropTypes.object,
    wrapCon: PropTypes.object,
    openCon: PropTypes.func,
    closeCon: PropTypes.func,
    titleStyle: PropTypes.object,
    titleText: PropTypes.string | PropTypes.number,
    listData: PropTypes.array,
    listItemStyle: PropTypes.object,
    itemTitleTextStyle: PropTypes.object,
    itemConTextStyle: PropTypes.object
  }
  
  static defaultProps = {
    titleText: '下拉列表的标题',
    openCon: ()=>{
      return (
        <Image
          resizeMode='cover'
          style={{
            width:30,
            height:30
          }}
          source={{uri:'https://i02picsos.sogoucdn.com/f539a075d7171cfe'}}
        />
      )
    },
    closeCon: ()=>{
      return (
        <Image
          resizeMode='cover'
          style={{
            width:30,
            height:30
          }}
          source={{uri:'https://i02picsos.sogoucdn.com/b9f4b3b93447bb37'}}
        />
      )
    },
    listData: [
      {
        title:'商品编号',
        content:'YUSHK982892'
      },
      {
        title:'材质',
        content:'纯棉'
      },
      {
        title:'品牌',
        content:'Sport'
      }
    ]
  }
  
  render(){
    const {
      containerStyle,
      wrapCon,
      openCon,
      closeCon,
      titleStyle,
      titleText,
      listData,
      listItemStyle,
      itemTitleTextStyle,
      itemConTextStyle
    } = this.props
    const { showList } = this.state
    return(
      <View 
        style={
          [
            styles.wrapCon,
            wrapCon
          ]
        }>
        <TouchableOpacity
          activeOpacity={.8}
          onPress={()=>{
            this.setState({showList:!this.state.showList})
          }}
          style={
            [
              styles.containerStyle,
              basicLayout.both,
              containerStyle
            ]
          }>
          <Text
            style={
              [
                styles.titleStyle,
                titleStyle
              ]
            }>
            {titleText}
          </Text>
          {showList?openCon():closeCon()}
        </TouchableOpacity>
        <View
          style={{
            width:'100%',
            display:showList?'flex':'none',
            overflow:showList?'visible':'hidden'
          }}>
          {
            listData.map((i,n)=>{
              return(
                <View
                  style={
                    [
                      styles.listItemStyle,
                      basicLayout.left,
                      listItemStyle
                    ]
                  }>
                  <Text
                    numberOfLines={1}
                    style={
                      [
                        styles.itemTitleTextStyle,
                        itemTitleTextStyle
                      ]
                    }>
                    {i.title}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={
                      [
                        styles.itemConTextStyle,
                        itemConTextStyle
                      ]
                    }>
                    {i.content}
                  </Text>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapCon:{
    width:'100%',
  },
  titleStyle:{
    letterSpacing: 1,
    color: '#333'
  },  
  containerStyle:{
    width: '100%',
    height: 50,
    padding: 16,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1/PixelRatio.get()
  },
  listItemStyle:{
    width: '100%',
    padding: 16,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1/PixelRatio.get()
  },
  itemTitleTextStyle:{
    letterSpacing: 1,
    color: '#373737',
  },
  itemConTextStyle:{
    letterSpacing:1,
    marginLeft: 12,
    color:'#A0A0A0'
  }
})

export default Wspinner