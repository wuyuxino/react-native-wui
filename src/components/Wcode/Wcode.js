import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

import {
	basicLayout
} from '../config/index'

class Wcode extends Component {
	constructor(props) {
		super(props)
		this.state = {
			totalSecond: this.props.srcondNum ? this.props.srcondNum : 60,
			isClick: false
		}
	}

	static PropTypes = {
		containerStyle: PropTypes.object,
		timeTextStyle: PropTypes.object,
		tipsTextStyle: PropTypes.object,
		tipText: PropTypes.string || PropTypes.number,
		unitText: PropTypes.string,
		clickFunc: PropTypes.func
	}

	static defaultProps = {
		tipText: '获取验证码',
		unitText: 's',
		clickFunc: () => {
			console.log('点击获取验证码后执行的方法')
		}
	}

	sendSMS = (a, b) => {
		const { isClick } = this.state
		if (isClick) {
			return
		} else {
			b()
			this.setState(
				{ isClick: true },
				() => {
					this.timer = setInterval(() => {
						this.setState({
							totalSecond: this.state.totalSecond - 1
						}, () => {
							if (this.state.totalSecond === 0) {
								clearInterval(this.timer)
								this.setState({
									totalSecond: a ? a : 60,
									isClick: false
								})
								return
							}
						})
					}, 1000)
				}
			)
		}
	}

	render() {
		const {
			containerStyle,
			timeTextStyle,
			tipsTextStyle,
			tipText,
			unitText,
			srcondNum,
			clickFunc
		} = this.props
		const { isClick, totalSecond } = this.state
		return (
			<TouchableOpacity
				onPress={() => { this.sendSMS(srcondNum, clickFunc) }}
				activeOpacity={isClick ? 1 : .6}
				style={
					[
						styles.containerStyle,
						basicLayout.center,
						containerStyle
					]
				}>
				<Text
					style={
						isClick ?
							[
								styles.timeTextStyle,
								timeTextStyle
							]
							:
							[
								styles.tipsTextStyle,
								tipsTextStyle
							]
					}>
					{isClick ? totalSecond : tipText}{isClick ? unitText : ''}
				</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		width: '100%',
		height: '100%',
		position: 'relative'
	},
	timeTextStyle: {
		fontSize: 14,
		color: '#333',
		letterSpacing: 1
	},
	tipsTextStyle: {
		fontSize: 14,
		color: 'rgb(24, 144, 255)',
		letterSpacing: 1
	}
})

export default Wcode