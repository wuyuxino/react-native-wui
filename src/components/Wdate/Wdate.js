import React, { Component } from 'react'
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

class Wdate extends Component {
	constructor() {
		super()
		this.state = {
			year: '',
			month: '',
			day: '',
			week: '',
			clickDate: false,
			currentArr: '',
			upMonthCount: '',
			nextMonthCount: ''
		}
	}

	static PropTypes = {
		containerStyle: PropTypes.object,
		noChoiceDateStyle: PropTypes.object,
		choiceDateStyle: PropTypes.object,
		topMonthStyle: PropTypes.object,
		bottomWeekStyle: PropTypes.object,
		imgStyle: PropTypes.object,
		timeFunc: PropTypes.func
	}

	static defaultProps = {
		timeFunc: (e) => { console.log(e) }
	}

	// 判断当前月份天数
	getMonthNum = (year, month) => {
		// 当前月份的天数
		let currentMonthCount
		let currentMonth = month + 1
		// 判断当前是否为世纪年
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				if (currentMonth === 1 || currentMonth === 3 ||
					currentMonth === 5 || currentMonth === 7 ||
					currentMonth === 8 ||
					currentMonth === 10 || currentMonth === 12) {
					currentMonthCount = 31
				} else if (currentMonth === 2) {
					currentMonthCount = 29
				} else {
					currentMonthCount = 30
				}
			} else {
				if (currentMonth === 1 || currentMonth === 3 ||
					currentMonth === 5 || currentMonth === 7 ||
					currentMonth === 8 ||
					currentMonth === 10 || currentMonth === 12) {
					currentMonthCount = 31
				} else if (currentMonth === 2) {
					currentMonthCount = 28
				} else {
					currentMonthCount = 30
				}
			}
		} else {
			if (year % 4 === 0) {
				if (currentMonth === 1 || currentMonth === 3 ||
					currentMonth === 5 || currentMonth === 7 ||
					currentMonth === 8 ||
					currentMonth === 10 || currentMonth === 12) {
					currentMonthCount = 31
				} else if (currentMonth === 2) {
					currentMonthCount = 29
				} else {
					currentMonthCount = 30
				}
			} else {
				if (currentMonth === 1 || currentMonth === 3 ||
					currentMonth === 5 || currentMonth === 7 ||
					currentMonth === 8 ||
					currentMonth === 10 || currentMonth === 12) {
					currentMonthCount = 31
				} else if (currentMonth === 2) {
					currentMonthCount = 28
				} else {
					currentMonthCount = 30
				}
			}
		}
		return currentMonthCount
	}

	getNowTime = () => {
		let monthArr = [
			'January', 'February', 'March', 'April', 'May', 'June', 'July',
			'August', 'September', 'October', 'November', 'December'
		]
		let weekArr = [
			'Sunday', 'Monday', 'Tuesday', 'Wednesay', 'Thursday', 'Friday',
			'Saturday'
		]
		let date = new Date()
		let year = date.getFullYear()
		let month = date.getMonth()
		let week = date.getDay()
		let day = date.getDate()

		let preday
		let nextday

		let monthNum = this.getMonthNum(year, month)

		if (day === 1) {
			let preMonth
			if (month === 0) {
				preMonth = 11
			} else if (month === 11) {
				preMonth = 0
			} else {
				preMonth = month - 1
			}
			preday = this.getMonthNum(year, preMonth)
			nextday = day + 1
		} else if (day === monthNum) {
			preday = monthNum - 1
			nextday = 1
		} else {
			preday = day - 1
			nextday = day + 1
		}

		day > 9 ? day : day = '0' + day
		preday > 9 ? preday : preday = '0' + preday
		nextday > 9 ? nextday : nextday = '0' + nextday

		let arr = [monthArr[month], day, weekArr[week], preday, nextday]
		return arr
	}

	leftDateClick = () => {
		this.setState({ clickDate: true })
		let monthArr = [
			'January', 'February', 'March', 'April', 'May', 'June', 'July',
			'August', 'September', 'October', 'November', 'December'
		]
		let weekArr = [
			'Sunday', 'Monday', 'Tuesday', 'Wednesay', 'Thursday', 'Friday',
			'Saturday'
		]
		const { year, month, day, week } = this.state
		// 当前月份的天数
		let monthNum = this.getMonthNum(year, month)
		// 上一天
		let preday
		// 下一天
		let nextday
		// day 代表今天的日期
		// 24号 本月30天
    /**
     * day === 1    pre === 31 next === 2
     * day === 2-(30-1) pre === day-1  next === day+1
     * day === 30 pre === day-1 next === 1
     */
		if (day === 1) {
			let preMonth
			if (month === 0) {
				preMonth = 11
			} else {
				preMonth = month - 1
			}
			preday = this.getMonthNum(year, preMonth)
			nextday = 2
			this.setState({
				day: preday
			})
			if (month === 0) {
				this.setState({
					month: 11
				})
			} else {
				this.setState({
					month: month - 1
				})
			}
		} else if (day === monthNum) {
			let preMonth
			if (month === 11) {
				preMonth = 0
			} else {
				preMonth = month + 1
			}
			preday = monthNum - 1
			nextday = 1
			this.setState({
				day: monthNum - 1
			})
		} else {
			preday = day - 1
			nextday = day + 1
			this.setState({
				day: day - 1
			})
		}

		if (week === 0) {
			this.setState({
				week: 6
			})
		} else {
			this.setState({
				week: week - 1
			})
		}

		let sday = day
		let spreday = preday
		let snextday = nextday

		sday > 9 ? sday : sday = '0' + sday
		spreday > 9 ? spreday : spreday = '0' + spreday
		snextday > 9 ? snextday : snextday = '0' + snextday

		let arr = [monthArr[month], sday, weekArr[week], spreday, snextday]

		this.setState({ currentArr: arr })
	}

	rightDateClick = () => {
		this.setState({ clickDate: true })
		let monthArr = [
			'January', 'February', 'March', 'April', 'May', 'June', 'July',
			'August', 'September', 'October', 'November', 'December'
		]
		let weekArr = [
			'Sunday', 'Monday', 'Tuesday', 'Wednesay', 'Thursday', 'Friday',
			'Saturday'
		]
		const { year, month, day, week } = this.state

		// 当前月份的天数
		let monthNum = this.getMonthNum(year, month)
		// 上一天
		let preday
		// 下一天
		let nextday
		// day 代表今天的日期
		// 24号 本月30天
    /**
     * day === 1    pre === 31 next === 2
     * day === 2-(30-1) pre === day-1  next === day+1
     * day === 30 pre === day-1 next === 1
     */
		if (day === 1) {
			let preMonth
			if (month === 0) {
				preMonth = 11
			} else {
				preMonth = month - 1
			}
			preday = this.getMonthNum(year, preMonth)
			nextday = day + 1
			this.setState({
				day: day + 1
			})
		} else if (day === monthNum) {
			let nextMonth
			if (month === 11) {
				this.setState({
					month: 0
				})
			} else {
				this.setState({
					month: month + 1
				})
			}
			if (month === 11) {
				nextMonth = 0
			} else {
				nextMonth = month + 1
			}
			nextday = 1
			preday = monthNum - 1
			this.setState({
				day: 1
			})
		} else {
			preday = day - 1
			nextday = day + 1
			this.setState({
				day: day + 1
			})
		}

		if (week === 6) {
			this.setState({
				week: 0
			})
		} else {
			this.setState({
				week: week + 1
			})
		}

		let sday = day
		let spreday = preday
		let snextday = nextday

		sday > 9 ? sday : sday = '0' + sday
		spreday > 9 ? spreday : spreday = '0' + spreday
		snextday > 9 ? snextday : snextday = '0' + snextday

		let arr = [monthArr[month], sday, weekArr[week], spreday, snextday]

		this.setState({ currentArr: arr })
	}

	initShowDate = () => {
		let date = new Date()
		let year = date.getFullYear()
		let month = date.getMonth()
		let week = date.getDay()
		let day = date.getDate()
		this.setState({
			year,
			month,
			day,
			week
		})
	}

	componentWillMount = () => {
		this.initShowDate()
	}

	render() {
		const {
			containerStyle,
			noChoiceDateStyle,
			choiceDateStyle,
			topMonthStyle,
			bottomWeekStyle,
			imgStyle,
			timeFunc
		} = this.props
		const {
			clickDate,
			currentArr
		} = this.state
		return (
			<View
				style={
					[
						styles.containerStyle,
						basicLayout.center,
						containerStyle
					]
				}>
				<Text
					style={
						[
							styles.topMonthStyle,
							topMonthStyle
						]
					}>
					{clickDate ? currentArr[0] : this.getNowTime()[0]}
				</Text>
				<View
					style={
						[
							basicLayout.dateCenter
						]
					}>
					<Text
						style={
							[
								styles.noChoiceDateStyle,
								noChoiceDateStyle
							]
						}>
						{clickDate ? currentArr[3] : this.getNowTime()[3]}
					</Text>
					<TouchableOpacity
						onPress={() => {
							this.leftDateClick()
							timeFunc(currentArr)
						}}>
						<Image
							resizeMode='cover'
							style={
								[
									styles.imgStyle,
									imgStyle
								]
							}
							source={Images.left}
						/>
					</TouchableOpacity>
					<Text
						style={
							[
								styles.choiceDateStyle,
								choiceDateStyle
							]
						}>
						{clickDate ? currentArr[1] : this.getNowTime()[1]}
					</Text>
					<TouchableOpacity
						onPress={() => {
							this.rightDateClick()
							timeFunc(currentArr)
						}}>
						<Image
							resizeMode='cover'
							style={
								[
									styles.imgStyle,
									imgStyle
								]
							}
							source={Images.right}
						/>
					</TouchableOpacity>
					<Text
						style={
							[
								[
									styles.noChoiceDateStyle,
									noChoiceDateStyle
								]
							]
						}>
						{clickDate ? currentArr[4] : this.getNowTime()[4]}
					</Text>
				</View>
				<Text
					style={
						[
							styles.bottomWeekStyle,
							bottomWeekStyle
						]
					}>
					{clickDate ? currentArr[2] : this.getNowTime()[2]}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		width: '100%',
		height: 200,
		backgroundColor: '#F2F2F2'
	},
	noChoiceDateStyle: {
		fontSize: 24,
		letterSpacing: 1,
		color: '#666'
	},
	choiceDateStyle: {
		fontSize: 48,
		letterSpacing: 1,
		color: '#000'
	},
	topMonthStyle: {
		fontSize: 22,
		letterSpacing: 1,
		color: '#FE5398'
	},
	bottomWeekStyle: {
		fontSize: 16,
		letterSpacing: 1,
		color: '#000'
	},
	imgStyle: {
		width: 26,
		height: 26,
		marginLeft: 20,
		marginRight: 20
	}
})

export default Wdate