import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

import {
	basicLayout
} from '../config/index'

class WverificationCode extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isupdate: false,
			currentCodeArr: this.generateCode()
		}
	}

	static PropTypes = {
		containerStyle: PropTypes.object,
		roundStyle: PropTypes.object,
		roundNum: PropTypes.number,
		lineNum: PropTypes.number,
		numCodeStyle: PropTypes.object,
		currentCode: PropTypes.func,
		isRefresh: PropTypes.bool
	}

	static defaultProps = {
		roundNum: 80,
		lineNum: 12,
		isRefresh: true,
		currentCode: (e) => {
			console.log(e)
		}
	}

	numberRandom = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min)
	}

	colorRandom = (min, max) => {
		let r = this.numberRandom(min, max);
		let g = this.numberRandom(min, max);
		let b = this.numberRandom(min, max);
		return "rgb(" + r + "," + g + "," + b + ")";
	}

	arrayRandom = (num) => {
		let arrayRandom = []
		for (let i = 0; i < num; i++) {
			arrayRandom.push(i)
		}
		return arrayRandom
	}

	dotRandom = (roundNum, roundStyle) => {
		return (
			<View>
				{
					this.arrayRandom(roundNum).map((i, n) => {
						return (
							<View
								style={
									[
										roundStyle,
										{
											width: 6,
											height: 6,
											borderRadius: 3,
											position: 'absolute',
											top: this.numberRandom(-40, 40),
											left: this.numberRandom(-220, 220),
											backgroundColor: this.colorRandom(50, 160)
										}
									]
								}>
							</View>
						)
					})
				}
			</View>
		)
	}

	lineRandom = (lineNum) => {
		return (
			<View>
				{
					this.arrayRandom(lineNum).map((i, n) => {
						return (
							<View
								style={
									[
										{
											width: this.numberRandom(20, 620),
											height: this.numberRandom(1, 4),
											position: 'absolute',
											transform: [{ rotate: `${this.numberRandom(0, 360)}deg` }],
											top: this.numberRandom(-40, 40),
											left: this.numberRandom(-220, 220),
											backgroundColor: this.colorRandom(50, 160)
										}
									]
								}>
							</View>
						)
					})
				}
			</View>
		)
	}

	generateCode = () => {
		let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
		let a = str.substr(this.numberRandom(0, 61), 1)
		let b = str.substr(this.numberRandom(0, 61), 1)
		let c = str.substr(this.numberRandom(0, 61), 1)
		let d = str.substr(this.numberRandom(0, 61), 1)
		this.setState({ currentCodeArr: [a, b, c, d] })
		return [a, b, c, d]
	}

	shouldComponentUpdate = (e) => {
		if (this.props.isRefresh) {
			return true
		} else {
			return false
		}
	}

	componentWillUpdate = () => {
		this.generateCode()
	}

	render() {
		const {
			containerStyle,
			roundStyle,
			roundNum,
			lineNum,
			numCodeStyle,
			currentCode
		} = this.props
		const { isupdate, currentCodeArr } = this.state
		return (
			<View
				ref="code_v"
				style={
					[
						styles.containerStyle,
						basicLayout.centers,
						containerStyle,
						{
							backgroundColor: this.colorRandom(120, 256)
						}
					]
				}>
				<Text>{currentCode(currentCodeArr)}</Text>
				{this.dotRandom(roundNum, roundStyle)}
				{this.lineRandom(lineNum)}
				{
					currentCodeArr.map((i, n) => {
						return (
							<Text
								style={
									[
										styles.numCodeStyle,
										numCodeStyle,
										{
											color: this.colorRandom(50, 160),
											position: 'relative',
											transform: [{ rotate: `${this.numberRandom(0, 360)}deg` }],
											top: this.numberRandom(-15, 15),
											marginLeft: `${n * 10}%`,
										}
									]
								}>
								{i}
							</Text>
						)
					})
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		width: '100%',
		height: 50,
		overflow: 'hidden',
		backgroundColor: '#ccc'
	},
	roundStyle: {
		width: 6,
		height: 6,
		borderRadius: 3
	},
	numCodeStyle: {
		fontSize: 26,
		fontWeight: '600'
	}
})

export default WverificationCode