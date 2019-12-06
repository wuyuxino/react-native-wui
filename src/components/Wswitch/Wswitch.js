import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	View,
	Animated,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

class Wswitch extends Component {
	constructor(props) {
		super(props)
		this.state = {
			switchSlider: new Animated.Value(0),
			isOpen: false
		}
	}

	static PropTypes = {
		containerStyle: PropTypes.object,
		sliderRight: PropTypes.number,
		bgChoiceColor: PropTypes.string,
		bgNoChoiceColor: PropTypes.string,
		sliderItemColor: PropTypes.string,
		switchFun: PropTypes.func
	}

	static defaultProps = {
		sliderRight: 30,
		bgChoiceColor: '#06D5DE',
		bgNoChoiceColor: '#F2F2F2',
		sliderItemColor: '#FFF',
		switchFun: (e) => {
			console.log(e)
		}
	}

	switchSlider = (num) => {
		Animated.timing(
			this.state.switchSlider,
			{
				toValue: num,
				duration: 300
			}
		).start()
	}

	render() {
		const { switchSlider, isOpen } = this.state
		const {
			containerStyle,
			sliderRight,
			bgChoiceColor,
			bgNoChoiceColor,
			sliderItemColor,
			itemConStyle,
			switchFun
		} = this.props
		return (
			<View
				style={
					[
						styles.containerStyle,
						{
							backgroundColor: isOpen ?
								bgChoiceColor :
								bgNoChoiceColor
						},
						containerStyle
					]
				}>
				<TouchableOpacity
					onPress={() => {
						isOpen ? this.switchSlider(0) : this.switchSlider(sliderRight)
						this.setState({
							isOpen: !this.state.isOpen
						})
						switchFun(!isOpen)
					}}>
					<Animated.View
						style={
							[
								styles.itemConStyle,
								itemConStyle,
								{
									left: switchSlider,
									backgroundColor: sliderItemColor
								}
							]
						}>
					</Animated.View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		width: 60,
		height: 30,
		position: 'relative',
		borderRadius: 15,
		padding: 4,
		backgroundColor: '#EBECEC'
	},
	itemConStyle: {
		width: 22,
		height: 22,
		borderRadius: 11,
		position: 'absolute'
	}
})

export default Wswitch