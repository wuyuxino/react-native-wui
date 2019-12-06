import React from 'react'
import PropTypes from 'prop-types'
import {
	View,
	Text,
	PixelRatio,
	StyleSheet
} from 'react-native'

import {
	basicLayout
} from '../config/index'

const Whelp = props => {
	const {
		containerStyle,
		titleStyle,
		titleTextStyle,
		titleText,
		contentStyle,
		mapData,
		mapTextStyle
	} = props
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
						styles.titleStyle,
						basicLayout.left,
						titleStyle
					]
				}>
				<Text
					style={
						[
							styles.titleTextStyle,
							titleTextStyle
						]
					}>
					{titleText}
				</Text>
			</View>
			<View
				style={
					[
						styles.contentStyle,
						contentStyle
					]
				}>
				{
					mapData.map((item, index) => {
						return (
							<Text
								key={index}
								style={
									[
										styles.mapTextStyle,
										mapTextStyle
									]
								}>{item}</Text>
						)
					})
				}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	containerStyle: {
		width: '100%'
	},
	titleStyle: {
		width: '100%',
		height: 50,
		paddingLeft: 16,
		borderBottomColor: '#ccc',
		borderTopColor: '#ccc',
		borderBottomWidth: 1 / PixelRatio.get(),
		borderTopWidth: 1 / PixelRatio.get()
	},
	contentStyle: {
		padding: 16
	},
	titleTextStyle: {
		letterSpacing: 1,
		fontSize: 14,
		color: '#333'
	},
	mapTextStyle: {
		letterSpacing: 1,
		fontSize: 13,
		color: '#666',
		lineHeight: 26
	}
})

Whelp.PropTypes = {
	containerStyle: PropTypes.object,
	titleStyle: PropTypes.object,
	titleText: PropTypes.string || PropTypes.number,
	titleTextStyle: PropTypes.object,
	contentStyle: PropTypes.object,
	mapData: PropTypes.array,
	mapTextStyle: PropTypes.object,

}

Whelp.defaultProps = {
	titleText: 'Article Title Page',
	mapData: [
		'● Help you answer questions',
		'● Solve most of your problems',
		'● Here you can find the answer'
	]
}

export default Whelp