import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Modal,
  Picker,
  StyleSheet,
  TouchableOpacity,

} from 'react-native'

import {
  basicLayout
} from '../config/index'
import Images from '../../resources/index'
 
class Wdatepicker extends Component{
  constructor(props){
    super(props)
    this.state={
      isShows: '',
      year: `${new Date().getFullYear()}`,
      month: `${new Date().getMonth()+1}`,
      day: `${new Date().getDate()}`,
      dayArr: [
        '1','2','3','4','5','6','7','8','9','10','11','12',
        '13','14','15','16','17','18','19','20','21','22','23','24',
        '25','26','27','28'
      ]
    }
  }

  static PropTypes = {
    isShow: PropTypes.bool,
    containerStyle: PropTypes.object,
    topContainerStyle: PropTypes.object,
    trueTextStyle: PropTypes.object,
    falseTextStyle: PropTypes.object,
    trueText: PropTypes.string || PropTypes.number,
    falseText: PropTypes.string || PropTypes.number,
    closeModal: PropTypes.func,
    dataContainerStyle: PropTypes.object,
    year: PropTypes.array,
    month: PropTypes.array,
    pickerStyleOne: PropTypes.object,
    pickerStyleTwo: PropTypes.object,
    pickerStyleThree: PropTypes.object,
    trueButton: PropTypes.func,
    pickerTitle: PropTypes.string || PropTypes.number,
    pickerTitleStyle: PropTypes.object
  }
  
  static defaultProps = {
    isShow: false,
    trueText: '确定',
    falseText: '取消',
    pickerTitle: '日期选择',
    closeModal: ()=>{
      console.log('点击确定取消后执行的回调函数')
    },
    trueButton: (e)=>{
      console.log('当前日期是',e)
    },
    year: [
      {key:'1960',value:'1960'},{key:'1961',value:'1961'},{key:'1962',value:'1962'},{key:'1963',value:'1963'},
      {key:'1964',value:'1964'},{key:'1965',value:'1965'},{key:'1966',value:'1966'},{key:'1967',value:'1967'},
      {key:'1968',value:'1968'},{key:'1969',value:'1969'},{key:'1970',value:'1970'},{key:'1971',value:'1971'},
      {key:'1972',value:'1972'},{key:'1973',value:'1973'},{key:'1974',value:'1974'},{key:'1975',value:'1975'},
      {key:'1976',value:'1976'},{key:'1977',value:'1977'},{key:'1978',value:'1978'},{key:'1979',value:'1979'},
      {key:'1980',value:'1980'},{key:'1981',value:'1981'},{key:'1982',value:'1982'},{key:'1983',value:'1983'},
      {key:'1984',value:'1984'},{key:'1985',value:'1985'},{key:'1986',value:'1986'},{key:'1987',value:'1987'},
      {key:'1988',value:'1988'},{key:'1989',value:'1989'},{key:'1990',value:'1990'},{key:'1991',value:'1991'},
      {key:'1992',value:'1992'},{key:'1993',value:'1993'},{key:'1994',value:'1994'},{key:'1995',value:'1995'},
      {key:'1996',value:'1996'},{key:'1997',value:'1997'},{key:'1998',value:'1998'},{key:'1999',value:'1999'},
      {key:'2000',value:'2000'},{key:'2001',value:'2001'},{key:'2002',value:'2002'},{key:'2003',value:'2003'},
      {key:'2004',value:'2004'},{key:'2005',value:'2005'},{key:'2006',value:'2006'},{key:'2007',value:'2007'},
      {key:'2008',value:'2008'},{key:'2009',value:'2009'},{key:'2010',value:'2010'},{key:'2011',value:'2011'},
      {key:'2012',value:'2012'},{key:'2013',value:'2013'},{key:'2014',value:'2014'},{key:'2015',value:'2015'},
      {key:'2016',value:'2016'},{key:'2017',value:'2017'},{key:'2018',value:'2018'},{key:'2019',value:'2019'},
      {key:'2020',value:'2020'},{key:'2021',value:'2021'},{key:'2022',value:'2022'},{key:'2023',value:'2023'},

      {key:'2024',value:'2024'},{key:'2025',value:'2025'},{key:'2026',value:'2026'},{key:'2027',value:'2027'},
      {key:'2028',value:'2028'},{key:'2029',value:'2029'},{key:'2030',value:'2030'},{key:'2031',value:'2031'},
      {key:'2032',value:'2032'},{key:'2033',value:'2033'},{key:'2034',value:'2034'},{key:'2035',value:'2035'},
      {key:'2036',value:'2036'},{key:'2037',value:'2037'},{key:'2038',value:'2038'},{key:'2039',value:'2039'},
      {key:'2040',value:'2040'},{key:'2041',value:'2041'},{key:'2042',value:'2042'},{key:'2043',value:'2043'},
      {key:'2044',value:'2044'},{key:'2045',value:'2045'},{key:'2046',value:'2046'},{key:'2047',value:'2047'},
      {key:'2048',value:'2048'},{key:'2049',value:'2049'},{key:'2050',value:'2050'},{key:'2051',value:'2051'},
      {key:'2052',value:'2052'},{key:'2053',value:'2053'},{key:'2054',value:'2054'},{key:'2055',value:'2055'},
      {key:'2056',value:'2056'},{key:'2057',value:'2057'},{key:'2058',value:'2058'},{key:'2059',value:'2059'},
      {key:'2060',value:'2060'},{key:'2061',value:'2061'},{key:'2062',value:'2062'},{key:'2063',value:'2063'},
      {key:'2064',value:'2064'},{key:'2065',value:'2065'},{key:'2066',value:'2066'}

    ],
    month: [
      {key:'1',value:'1'},{key:'2',value:'2'},{key:'3',value:'3'},{key:'4',value:'4'},
      {key:'5',value:'5'},{key:'6',value:'6'},{key:'7',value:'7'},{key:'8',value:'8'},
      {key:'9',value:'9'},{key:'10',value:'10'},{key:'11',value:'11'},{key:'12',value:'12'}
    ]
  }

  currentMonthDays = (year,month) => {
    if(month==='1'||month==='3'||month==='5'||month==='7'||month==='8'||month==='12'){
      this.setState({
        dayArr:[
          '1','2','3','4','5','6','7','8','9','10','11','12',
          '13','14','15','16','17','18','19','20','21','22','23','24',
          '25','26','27','28','29','30','31'
        ]
      })
      return
    }
    if(month==='4'||month==='6'||month==='9'||month==='11'){
      this.setState({
        dayArr:[
          '1','2','3','4','5','6','7','8','9','10','11','12',
          '13','14','15','16','17','18','19','20','21','22','23','24',
          '25','26','27','28','29','30'
        ]
      })
      return
    }
    if(month==='2'){
      if(Number(year)%100===0){
        if(Number(year)%400===0){
          this.setState({
            dayArr:[
              '1','2','3','4','5','6','7','8','9','10','11','12',
              '13','14','15','16','17','18','19','20','21','22','23','24',
              '25','26','27','28','29'
            ]
          })
          return
        }else{
          this.setState({
            dayArr:[
              '1','2','3','4','5','6','7','8','9','10','11','12',
              '13','14','15','16','17','18','19','20','21','22','23','24',
              '25','26','27','28'
            ]
          })
          return
        }
      }else{
        if(Number(year)%4===0){
          this.setState({
            dayArr:[
              '1','2','3','4','5','6','7','8','9','10','11','12',
              '13','14','15','16','17','18','19','20','21','22','23','24',
              '25','26','27','28','29'
            ]
          })
          return
        }else{
          this.setState({
            dayArr:[
              '1','2','3','4','5','6','7','8','9','10','11','12',
              '13','14','15','16','17','18','19','20','21','22','23','24',
              '25','26','27','28'
            ]
          })
          return
        }
      }
    }
  }

  render(){
    const {
      isShow,
      containerStyle,
      topContainerStyle,
      trueTextStyle,
      falseTextStyle,
      trueText,
      falseText,
      closeModal,
      dataContainerStyle,
      year,
      month,
      day,
      pickerStyleOne,
      pickerStyleTwo,
      pickerStyleThree,
      trueButton,
      pickerTitle,
      pickerTitleStyle
    } = this.props
    const {
      isShows,
      dayArr
    } = this.state
    return(
      <Modal
        animated='slide'
        transparent={true}
        visible={isShows===''?isShow:isShows}>
        <View
          style={
            [
              styles.containerStyle,
              containerStyle
            ]
          }>
          <View
            style={
              [
                styles.topContainerStyle,
                basicLayout.both,
                topContainerStyle
              ]
            }>
            <TouchableOpacity
              onPress={()=>{
                this.setState({isShows:false},()=>{
                  this.setState({isShows:''})
                  closeModal()
                  trueButton(this.state.year+'-'+this.state.month+'-'+this.state.day)
                })
              }}>
              <Text
                style={
                  [
                    styles.trueTextStyle,
                    trueTextStyle
                  ]
                }>
                {trueText}
              </Text>
            </TouchableOpacity>
            <Text
              style={
                [
                  styles.pickerTitleStyle,
                  pickerTitleStyle,
                ]
              }>
              {pickerTitle}
            </Text>
            <TouchableOpacity
              onPress={()=>{
                this.setState({isShows:false},()=>{
                  this.setState({isShows:''})
                  closeModal()
                })
              }}>
              <Text
                style={
                  [
                    styles.falseTextStyle,
                    falseTextStyle
                  ]
                }>
                {falseText}
              </Text>
            </TouchableOpacity>
          </View> 
          <View
            style={
              [
                styles.dataContainerStyle,
                basicLayout.centers,
                dataContainerStyle
              ]
            }>
            <Picker
              selectedValue={this.state.year}
              style={
                [
                  styles.pickerStyleOne,
                  pickerStyleOne,
                ]
              }
              onValueChange={(itemValue, itemIndex) => {
                this.setState({year: itemValue},()=>{
                  this.currentMonthDays(itemValue,this.state.month)
                })
              }}>
              {
                year.map((i,n)=>{
                  return(
                    <Picker.Item label={i.key} value={i.value} />
                  )
                })
              }
            </Picker>
            <Picker
              selectedValue={this.state.month}
              style={
                [
                  styles.pickerStyleTwo,
                  pickerStyleTwo,
                ]
              }
              onValueChange={(itemValue, itemIndex) => {
                this.setState({month: itemValue},()=>{
                  this.currentMonthDays(this.state.year,itemValue)
                })
              }}>
              {
                month.map((i,n)=>{
                  return(
                    <Picker.Item label={i.key} value={i.value} />
                  )
                })
              }
            </Picker>
            <Picker
              selectedValue={this.state.day}
              style={
                [
                  styles.pickerStyleThree,
                  pickerStyleThree
                ]
              }
              onValueChange={(itemValue, itemIndex) => {
                this.setState({day: itemValue})
              }}>
              {
                dayArr.map((i,n)=>{
                  return(
                    <Picker.Item label={i} value={i} />
                  )
                })
              }
            </Picker>
          </View>
        </View>
      </Modal>
    )
  }
}


const styles = StyleSheet.create({
  containerStyle:{
    width: '100%',
    backgroundColor: '#ccc',
    position: 'absolute',
    bottom: 0
  },
  topContainerStyle:{
    width: '100%',
    padding: 16,
    backgroundColor: '#F2F2F2'
  },
  trueTextStyle:{
    letterSpacing: 1,
    fontSize: 14,
    color: '#428bca'
  }, 
  falseTextStyle:{
    letterSpacing: 1,
    fontSize: 14,
    color: '#333'
  },
  dataContainerStyle:{
    width: '100%',
    height: 220
  },
  pickerStyleOne:{
    width: '30%',
    height: 200
  },
  pickerStyleTwo:{
    width: '30%',
    height: 200
  },
  pickerStyleThree:{
    width: '30%',
    height: 200
  },
  pickerTitleStyle:{
    fontSize: 16,
    color: '#333'
  }
})

export default Wdatepicker