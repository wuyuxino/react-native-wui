import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	View,
	Text,
	ScrollView,
	Dimensions,
	StyleSheet
} from 'react-native'

import {
	basicLayout
} from '../config/index'

const { width } = Dimensions.get('window')

class WtimeSelect extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentTime: 0
		}
	}

	static PropTypes = {
		currentTimeFun: PropTypes.func,
		timeData: PropTypes.array,
		equipartition: PropTypes.number,
		pointerStyle: PropTypes.object,
		containerStyle: PropTypes.object,
		itemStyle: PropTypes.object,
		timeTextStyle: PropTypes.object,
		textChoiceColor: PropTypes.string,
		textNoChoiceColor: PropTypes.string,
		bottomPointerStyle: PropTypes.object,
		pointerChoiceColor: PropTypes.string,
		pointerNoChoiceColor: PropTypes.string
	}

	static defaultProps = {
		currentTimeFun: (e) => {
			console.log(e)
		},
		timeData: [
			'1 AM', '2 AM', '3 AM', '4 AM', '5 AM',
			'6 AM', '7 AM', '8 AM', '9 AM', '10 AM',
			'11 AM', '12 AM', '1 PM', '2 PM', '3 PM',
			'4 PM', '5 PM', '6 PM', '7 PM', '8 PM',
			'9 PM', '10 PM', '11 PM', '12 PM'
		],
		equipartition: 5,
		textChoiceColor: '#000',
		textNoChoiceColor: '#ccc',
		pointerChoiceColor: '#000',
		pointerNoChoiceColor: '#ccc'
	}

	render() {
		const { currentTime } = this.state
		const {
			currentTimeFun,
			timeData,
			equipartition,
			pointerStyle,
			containerStyle,
			itemStyle,
			timeTextStyle,
			textChoiceColor,
			textNoChoiceColor,
			bottomPointerStyle,
			pointerChoiceColor,
			pointerNoChoiceColor
		} = this.props
		return (
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
							styles.pointerStyle,
							pointerStyle
						]
					}>
				</View>
				<ScrollView
					onScroll={(event) => {
						let currentScrollX = event.nativeEvent.contentOffset.x
						let num = Math.floor(currentScrollX / (width / equipartition))
						this.setState({
							currentTime: num
						}, () => {
							currentTimeFun(timeData[num])
						})
					}}
					showsHorizontalScrollIndicator={false}
					horizontal={true}>
					{
						timeData.map((item, index) => {
							return (
								<View
									key={index}
									style={
										[
											styles.itemStyle,
											basicLayout.center,
											itemStyle,
											{
												marginLeft: index === 0 ? width / 2 : 0,
												marginRight: index === timeData.length - 1 ?
													width / 2 - width / (equipartition * 2) :
													0,
												width: width / equipartition
											}
										]
									}>
									<Text
										style={
											[
												styles.timeTextStyle,
												{
													color: currentTime === index ?
														textChoiceColor :
														textNoChoiceColor
												},
												timeTextStyle
											]
										}>
										{item}
									</Text>
									<View
										style={
											[
												styles.bottomPointerStyle,
												{
													backgroundColor: currentTime === index ?
														pointerChoiceColor :
														pointerNoChoiceColor
												},
												bottomPointerStyle,
											]
										}>
									</View>
								</View>
							)
						})
					}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		width,
		height: 100,
		backgroundColor: '#F2F2F2'
	},
	pointerStyle: {
		width: 2,
		height: 10,
		position: 'absolute',
		backgroundColor: 'red',
		left: width / 2 - 1
	},
	itemStyle: {
		height: 100,
		position: 'relative',
		borderBottomColor: '#ccc',
		borderBottomWidth: 2
	},
	timeTextStyle: {
		fontSize: 14
	},
	bottomPointerStyle: {
		width: 2,
		height: 20,
		position: 'absolute',
		bottom: 0
	}
})

export default WtimeSelect