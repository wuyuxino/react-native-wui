import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	View,
	Animated,
	StyleSheet,
	ScrollView
} from 'react-native'

class WtopTitle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpacity: new Animated.Value(0),
			isHeight: new Animated.Value(0),
			isOpacityT: new Animated.Value(1),
			isHeightT: new Animated.Value(this.props.tabHeight)
		}
	}

	static PropTypes = {
		containerStyle: PropTypes.object,
		tabHeight: PropTypes.number,
		titleStyleOne: PropTypes.object,
		titleStyleTwo: PropTypes.object,
		tabInner: PropTypes.func,
		topContent: PropTypes.func,
		bottomContent: PropTypes.func,
		topContentHeight: PropTypes.number
	}

	static defaultProps = {
		tabHeight: 75,
		topContentHeight: 200,
		tabInner: () => {
			return (
				<View
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: 'blue'
					}}>
				</View>
			)
		},
		topContent: () => {
			return (
				<View
					style={{
						width: '100%',
						height: 200,
						backgroundColor: 'red'
					}}>
				</View>
			)
		},
		bottomContent: () => {
			return (
				<View
					style={{
						width: '100%',
						height: 1800,
						backgroundColor: 'orange'
					}}>
				</View>
			)
		}
	}

	opacityShow = (num, ms) => {
		Animated.timing(
			this.state.isOpacity,
			{
				toValue: num,
				duration: ms
			}
		).start()
	}

	heightShow = (num, ms) => {
		Animated.timing(
			this.state.isHeight,
			{
				toValue: num,
				duration: ms
			}
		).start()
	}

	opacityShowT = (num, ms) => {
		Animated.timing(
			this.state.isOpacityT,
			{
				toValue: num,
				duration: ms
			}
		).start()
	}

	heightShowT = (num, ms) => {
		Animated.timing(
			this.state.isHeightT,
			{
				toValue: num,
				duration: ms
			}
		).start()
	}

	render() {
		const {
			containerStyle,
			titleStyleOne,
			titleStyleTwo,
			tabHeight,
			tabInner,
			topContent,
			bottomContent,
			topContentHeight
		} = this.props
		const { isHeight, isOpacity, isHeightT, isOpacityT } = this.state
		return (
			<View
				style={
					[
						styles.containerStyle,
						containerStyle,
					]
				}>
				<Animated.View
					style={
						[
							{
								height: isHeight,
								opacity: isOpacity,
							},
							styles.titleStyleOne,
							titleStyleOne
						]
					}>
					{tabInner()}
				</Animated.View>
				<ScrollView
					onScroll={(e) => {
						if (e.nativeEvent.contentOffset.y > topContentHeight) {
							this.opacityShowT(0, 200)
							this.heightShowT(0, 200)
							this.opacityShow(1, 300)
							this.heightShow(tabHeight, 300)
						} else {
							this.opacityShowT(1, 300)
							this.heightShowT(tabHeight, 300)
							this.opacityShow(0, 200)
							this.heightShow(0, 200)
						}
					}}
					showsVerticalScrollIndicator={false}>
					{/* Tab 上方显示的div模块 */}
					<View
						style={styles.commons}>
						{topContent()}
					</View>
					{/* Tab模块 */}
					<Animated.View
						style={
							[
								{
									height: isHeightT,
									opacity: isOpacityT
								},
								styles.titleStyleTwo,
								titleStyleTwo
							]
						}>
						{tabInner()}
					</Animated.View>
					<View
						style={styles.commons}>
						{bottomContent()}
					</View>
				</ScrollView>
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
	titleStyleOne: {
		width: '100%',
		backgroundColor: 'green',
		position: 'absolute',
		top: 0,
		zIndex: 300
	},
	titleStyleTwo: {
		width: '100%',
		backgroundColor: 'blue'
	},
	commons: {
		width: '100%'
	}
})

export default WtopTitle