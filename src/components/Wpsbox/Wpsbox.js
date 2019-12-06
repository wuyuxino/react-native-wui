import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	Text,
	View,
	TextInput,
	StyleSheet
} from 'react-native'

import {
	basicLayout
} from '../config/index'

class Wpsbox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			focusInput: 0,
			inputText: ''
		}
	}

	static PropTypes = {
		containerStyle: PropTypes.object,
		inputBoxStyle: PropTypes.object,
		inputStyle: PropTypes.object,
		textStyle: PropTypes.object,
		choiceBorderColor: PropTypes.string,
		noChoiceBorderColor: PropTypes.string,
		inputBoxCount: PropTypes.number,
		inputFunc: PropTypes.func
	}

	static defaultProps = {
		choiceBorderColor: '#333',
		noChoiceBorderColor: '#ccc',
		inputBoxCount: 4,
		inputFunc: (e) => { console.log(e) }
	}

	inputBoxCount = (a = 4) => {
		let arr = []
		for (let i = 0; i < a; i++) {
			arr.push(i)
		}
		return arr
	}

	render() {
		const {
			containerStyle,
			inputBoxStyle,
			inputStyle,
			textStyle,
			choiceBorderColor,
			noChoiceBorderColor,
			inputBoxCount,
			inputFunc
		} = this.props
		const { focusInput, inputText } = this.state
		return (
			<View
				style={
					[
						styles.containerStyle,
						basicLayout.both,
						containerStyle
					]
				}>
				{
					this.inputBoxCount(inputBoxCount).map((i, n) => {
						return (
							<View
								style={
									[
										styles.inputBoxStyle,
										basicLayout.center,
										inputBoxStyle,
										{
											borderColor: focusInput === n ? choiceBorderColor : noChoiceBorderColor
										}
									]
								}>
								<Text
									style={
										[
											styles.textStyle,
											textStyle
										]
									}>
									{inputText ? inputText.slice(n, n + 1) : ''}
								</Text>
								<TextInput
									keyboardType={'numeric'}
									value={inputText}
									onChangeText={(e) => {
										if (e.length < 5) {
											this.setState({ inputText: e })
										}
										if (e.length === 4) {
											inputFunc(e)
										}
									}}
									onFocus={() => {
										this.setState({ focusInput: n })
									}}
									caretHidden={true}
									placeholder=''
									style={
										[
											styles.inputStyle,
											basicLayout.center,
											inputStyle
										]
									}
								/>
							</View>
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
		height: '100%',
		position: 'relative'
	},
	inputBoxStyle: {
		width: 50,
		height: 50,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: '#ccc'
	},
	inputStyle: {
		width: 50,
		height: 50,
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 200,
		color: 'rgba(0,0,0,0)',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	textStyle: {
		fontSize: 18,
		color: '#333'
	}
})

export default Wpsbox