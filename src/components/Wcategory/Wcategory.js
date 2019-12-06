import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

import {
	basicLayout
} from '../config/index'

const { width } = Dimensions.get('window')

class Wcategory extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectTag: 0
		}
	}

	static PropTypes = {
		containerStyle: PropTypes.object,
		titleTextStyle: PropTypes.object,
		titleText: PropTypes.string || PropTypes.number,
		listConStyle: PropTypes.object,
		listItemConStyle: PropTypes.object,
		tagData: PropTypes.array,
		itemTextStyle: PropTypes.object,
		bgChoiceColor: PropTypes.string,
		bgNoChoiceColor: PropTypes.string,
		textChoiceColor: PropTypes.string,
		textNoChoiceColor: PropTypes.string,
		clickFun: PropTypes.func
	}

	static defaultProps = {
		titleText: 'RATING',
		tagData: ['0 +', '1 +', '2 +', '3 +', '4 +', '5 +', '6 +', '9 +'],
		bgChoiceColor: '#06D5DE',
		bgNoChoiceColor: '#ccc',
		textChoiceColor: '#FFF',
		textNoChoiceColor: '#333',
		clickFun: (m, n) => {
			console.log(m, n)
		}
	}

	render() {
		const { selectTag } = this.state
		const {
			containerStyle,
			titleTextStyle,
			titleText,
			listConStyle,
			listItemConStyle,
			tagData,
			itemTextStyle,
			bgChoiceColor,
			bgNoChoiceColor,
			textChoiceColor,
			textNoChoiceColor,
			clickFun
		} = this.props
		return (
			<View
				style={
					[
						styles.containerStyle,
						containerStyle
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
				<View
					style={
						[
							styles.listConStyle,
							basicLayout.imgcon,
							listConStyle
						]
					}>
					{
						tagData.map((item, index) => {
							return (
								<TouchableOpacity
									onPress={() => {
										this.setState({
											selectTag: index
										})
										clickFun(item, index)
									}}
									key={index}
									style={
										[
											styles.listItemConStyle,
											basicLayout.center,
											{
												backgroundColor: selectTag === index ?
													bgChoiceColor :
													bgNoChoiceColor
											},
											listItemConStyle
										]
									}>
									<Text
										style={
											[
												styles.itemTextStyle,
												{
													color: selectTag === index ?
														textChoiceColor :
														textNoChoiceColor
												},
												itemTextStyle
											]
										}>
										{item}
									</Text>
								</TouchableOpacity>
							)
						})
					}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		width,
		padding: 16,
		backgroundColor: '#F2F2F2'
	},
	titleTextStyle: {
		letterSpacing: 1,
		fontSize: 14,
		color: '#333',
		marginBottom: 20,
	},
	listConStyle: {
		width: '100%'
	},
	listItemConStyle: {
		padding: 6,
		paddingLeft: 16,
		paddingRight: 16,
		marginRight: 20,
		marginBottom: 20,
		borderRadius: 12
	},
	itemTextStyle: {
		letterSpacing: 1,
		fontSize: 13
	}
})

export default Wcategory