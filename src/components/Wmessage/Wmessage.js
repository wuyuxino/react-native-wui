import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'

import {
  basicLayout
} from '../config/index'

import Images from '../../resources/index'

const { width, height } = Dimensions.get('window')

class Wmessage extends Component {
  constructor(props){
    super(props)
    this.state={
      listTalkData:this.props.listTalkData?this.props.listTalkData:[
        {
          avatar:'https://i04picsos.sogoucdn.com/17b8b9e823f380ea',
          id:'1234',
          content:'请问在吗？请问在吗？请问在吗？请问在吗？请问在吗？'
        },
        {
          avatar:'https://i04picsos.sogoucdn.com/17b8b9e823f380ea',
          id:'1235',
          content:'您好，在的，请问有什么需要帮助的？您好，在的，请问有什么需要帮助的？'
        },
        {
          avatar:'https://i04picsos.sogoucdn.com/17b8b9e823f380ea',
          id:'1234',
          content:'请问在吗？请问在吗？请问在吗？请问在吗？请问在吗？'
        },
        {
          avatar:'https://i04picsos.sogoucdn.com/17b8b9e823f380ea',
          id:'1235',
          content:'您好，在的，请问有什么需要帮助的？'
        },
        {
          avatar:'https://i04picsos.sogoucdn.com/17b8b9e823f380ea',
          id:'1234',
          content:'请问在吗？请问在吗？请问在吗？请问在吗？请问在吗？'
        },
        {
          avatar:'https://i04picsos.sogoucdn.com/17b8b9e823f380ea',
          id:'1235',
          content:'您好，在的，请问有什么需要帮助的？'
        }
      ],
      sendText:''
    }
  }

  static PropTypes = {
    wrapCon: PropTypes.object,
    messageConStyle: PropTypes.object,
    bottomConStyle: PropTypes.object,
    sendConStyle: PropTypes.object,
    sendImgUrl: PropTypes.string,
    sendImgStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    leftItemConStyle: PropTypes.object,
    avatarStyle: PropTypes.object,
    leftPopupStyle: PropTypes.object,
    leftPopupInnerStyle: PropTypes.object,
    lContentTextStyle: PropTypes.object,
    rContentTextStyle: PropTypes.object,
    leftID: PropTypes.string | PropTypes.number,
    rightPopupStyle: PropTypes.object,
    rightPopupInnerStyle: PropTypes.object,
    listTalkData: PropTypes.array,
    talkArrayBack: PropTypes.func,
    keyboardHeight: PropTypes.number
  }
  
  static defaultProps = {
    leftID: '1234',
    keyboardHeight: 10,
    talkArrayBack: (e)=>{
      console.log(e)
    }
  }
  
  render(){
    const {
      wrapCon,
      messageConStyle,
      bottomConStyle,
      sendConStyle,
      sendImgUrl,
      sendImgStyle,
      inputStyle,
      leftItemConStyle,
      avatarStyle,
      leftPopupStyle,
      leftPopupInnerStyle,
      lContentTextStyle,
      rContentTextStyle,
      leftID,
      rightPopupStyle,
      rightPopupInnerStyle,
      rightItemConStyle,
      talkArrayBack,
      keyboardHeight
    } = this.props
    const { listTalkData, sendText } = this.state
    return(
      <View 
        style={
          [
            styles.wrapCon,
            wrapCon
          ]
        }>
        <ScrollView 
          style={
            [
              styles.messageConStyle,
              messageConStyle
            ]
          }>
          {
            listTalkData.map((i,n)=>{
              return(
                leftID === i.id?
                <View
                  style={
                    [
                      styles.leftItemConStyle,
                      basicLayout.leftnr,
                      leftItemConStyle
                    ]
                  }>
                  <Image
                    resizeMode='cover'
                    style={
                      [
                        styles.avatarStyle,
                        avatarStyle
                      ]
                    }
                    source={{uri:i.avatar}}
                  />
                  <View
                    style={
                      [
                        styles.leftPopupStyle,
                        leftPopupStyle
                      ]
                    }>
                    <View
                      style={
                        [
                          styles.leftPopupInnerStyle,
                          leftPopupInnerStyle
                        ]
                      }>
                    <Text 
                      style={
                        [
                          styles.lContentTextStyle,
                          lContentTextStyle
                        ]
                      }>
                      {i.content}
                    </Text>
                    </View>
                  </View>
                </View>
                :
                <View
                  style={
                    [
                      styles.rightItemConStyle,
                      basicLayout.rightnr,
                      rightItemConStyle
                    ]
                  }>
                  <View
                    style={
                      [
                        styles.rightPopupStyle,
                        rightPopupStyle
                      ]
                    }>
                    <View
                      style={
                        [
                          styles.rightPopupInnerStyle,
                          rightPopupInnerStyle
                        ]
                      }>
                    <Text 
                      style={
                        [
                          styles.rContentTextStyle,
                          rContentTextStyle
                        ]
                      }>
                      {i.content}
                    </Text>
                    </View>
                  </View>
                  <Image
                    resizeMode='cover'
                    style={
                      [
                        styles.avatarStyle,
                        avatarStyle
                      ]
                    }
                    source={{uri:i.avatar}}
                  />
                </View>
              )
            })
          }
        </ScrollView>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={keyboardHeight}>
          <View
            style={
              [
                styles.bottomConStyle,
                basicLayout.both,
                bottomConStyle
              ]
            }>
            <TextInput
              ref='TextInput'
              onChangeText={(e)=>{
                this.setState({sendText:e})
              }}
              style={
                [
                  styles.inputStyle,
                  inputStyle
                ]
              }
            />
            <TouchableOpacity
              onPress={()=>{
                if(sendText===''){
                  return
                }else{
                  let newArr = listTalkData
                  let obj = {
                    avatar:this.props.avatar?this.props.avatar:'https://i04picsos.sogoucdn.com/17b8b9e823f380ea',
                    id:this.props.id?this.props.id:'1234',
                    content:sendText
                  }
                  newArr.push(obj)
                  this.setState({
                    listTalkData:newArr
                  },()=>{
                    talkArrayBack(newArr)
                    this.setState({sendText:''})
                    this.refs.TextInput.clear()
                  })
                }
              }}
              activeOpacity={.8}
              style={
                [
                  styles.sendConStyle,
                  basicLayout.center,
                  sendConStyle
                ]
              }>
              {
                sendImgUrl?
                <Image
                  resizeMode='cover'
                  style={
                    [
                      styles.sendImgStyle,
                      sendImgStyle
                    ]
                  }
                  source={sendImgUrl}
                />
                :
                <Image
                  resizeMode='cover'
                  style={
                    [
                      styles.sendImgStyle,
                      sendImgStyle
                    ]
                  }
                  source={Images.send}
                />
              }
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapCon:{
    width: '100%',
    height: '100%'
  },
  messageConStyle:{
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  bottomConStyle:{
    width:'100%',
    height: 100,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  sendConStyle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgb(24,144,255)'
  },
  sendImgStyle: {
    width: 20,
    height: 20
  },
  inputStyle:{
    width: '80%',
    height: 40,
    paddingLeft: 12,
    backgroundColor:'#F2F2F2'
  },
  leftItemConStyle:{
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10
  },
  rightItemConStyle:{
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 80
  },
  avatarStyle:{
    width: 30,
    height: 30,
    borderRadius: 15
  },
  leftPopupStyle:{
    width: width-100,
    position:'relative',
    left: 36,
    top: -12
  },
  leftPopupInnerStyle:{
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 22,
    backgroundColor:'#2BC18E'
  },
  lContentTextStyle:{
    padding:12,
    color:'#fff',
    lineHeight:22
  },
  rContentTextStyle:{
    padding:12,
    color:'#333',
    lineHeight:22
  },
  rightPopupStyle:{
    width: width-100,
    position:'relative',
    right: 6,
    top: 38
  },
  rightPopupInnerStyle:{
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor:'#FFF'
  }
})

export default Wmessage