import React from 'react'
import PropTypes from 'prop-types'
import {
	View,
	Text,
	Image,
	Alert,
	PixelRatio,
	Dimensions,
	StyleSheet,
	TouchableHighlight
} from 'react-native'

import {
	basicLayout
} from '../config/index'
import Images from '../../resources/index'

const { width } = Dimensions.get('window')

const Warticle = props => {
	const {
		containerStyle,
		topContainerStyle,
		topLeftConStyle,
		topRightConStyle,
		topImgStyle,
		topImgUrl,
		userConStyle,
		userTextStyle,
		userText,
		tagText,
		tagTextConStyle,
		tagTextStyle,
		briefText,
		briefTextStyle,
		titleTextStyle,
		titleText,
		contentText,
		contentTextStyle,
		imgConStyle,
		imgItemStyle,
		contentImgStyle,
		imgDate,
		bottomConStyle,
		bottomConItemStyle,
		bottomImgStyle,
		bottomTextStyle,
		bottomTextOne,
		bottomTextTwo,
		bottomTextThree,
		clickFun
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
						styles.topContainerStyle,
						basicLayout.left,
						topContainerStyle
					]
				}>
				<View
					style={
						[
							styles.topLeftConStyle,
							basicLayout.center,
							topLeftConStyle
						]
					}>
					<Image
						resizeMode='cover'
						style={
							[
								styles.topImgStyle,
								topImgStyle
							]
						}
						source={{ uri: topImgUrl && topImgUrl }}
					/>
				</View>
				<View
					style={
						[
							styles.topRightConStyle,
							basicLayout.leftnr,
							topRightConStyle
						]
					}>
					<View
						style={
							[
								styles.userConStyle,
								basicLayout.left,
								userConStyle
							]
						}>
						<Text
							numberOfLines={1}
							style={
								[
									styles.userTextStyle,
									userTextStyle
								]
							}>
							{userText && userText}
						</Text>
						<View
							style={
								[
									styles.tagTextConStyle,
									basicLayout.center,
									tagTextConStyle
								]
							}>
							<Text
								numberOfLines={1}
								style={
									[
										styles.tagTextStyle,
										tagTextStyle
									]
								}>
								{tagText}
							</Text>
						</View>
					</View>
					<Text
						numberOfLines={1}
						style={
							[
								styles.briefTextStyle,
								briefTextStyle
							]
						}>
						{briefText}
					</Text>
				</View>
			</View>
			<TouchableHighlight
				underlayColor={'#FFF'}
				onPress={() => {
					clickFun()
				}}>
				<Text
					numberOfLines={3}
					style={
						[
							styles.titleTextStyle,
							titleTextStyle
						]
					}>
					{titleText && titleText}
				</Text>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor={'#FFF'}
				onPress={() => {
					clickFun()
				}}>
				<Text
					numberOfLines={4}
					style={
						[
							styles.contentTextStyle,
							contentTextStyle
						]
					}>
					{contentText && contentText}
				</Text>
			</TouchableHighlight>
			<View
				style={
					[
						styles.imgConStyle,
						basicLayout.imgcon,
						imgConStyle
					]
				}>
				{
					imgDate.map((i, n) => {
						return (
							<View
								key={n}
								style={
									[
										styles.imgItemStyle,
										basicLayout.center,
										imgItemStyle
									]
								}>
								<Image
									resizeMode='cover'
									style={
										[
											styles.contentImgStyle,
											contentImgStyle
										]
									}
									source={{ uri: i.img && i.img }}
								/>
							</View>
						)
					})
				}
			</View>
			<View
				style={
					[
						styles.bottomConStyle,
						basicLayout.left,
						bottomConStyle
					]
				}>
				<View
					style={
						[
							styles.bottomConItemStyle,
							basicLayout.left,
							bottomConItemStyle
						]
					}>
					<Image
						resizeMode='cover'
						style={
							[
								styles.bottomImgStyle,
								bottomImgStyle
							]
						}
						source={Images.like}
					/>
					<Text
						style={
							[
								styles.bottomTextStyle,
								bottomTextStyle
							]
						}>
						{bottomTextOne && bottomTextOne}
					</Text>
				</View>
				<View
					style={
						[
							styles.bottomConItemStyle,
							basicLayout.left,
							bottomConItemStyle
						]
					}>
					<Image
						resizeMode='cover'
						style={
							[
								styles.bottomImgStyle,
								bottomImgStyle
							]
						}
						source={Images.comment}
					/>
					<Text
						style={
							[
								styles.bottomTextStyle,
								bottomTextStyle
							]
						}>
						{bottomTextTwo && bottomTextTwo}
					</Text>
				</View>
				<View
					style={
						[
							styles.bottomConItemStyle,
							basicLayout.left,
							bottomConItemStyle
						]
					}>
					<Image
						resizeMode='cover'
						style={
							[
								styles.bottomImgStyle,
								bottomImgStyle
							]
						}
						source={Images.look}
					/>
					<Text
						style={
							[
								styles.bottomTextStyle,
								bottomTextStyle
							]
						}>
						{bottomTextThree && bottomTextThree}
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	containerStyle: {
		width: '100%'
	},
	topContainerStyle: {
		width: '100%',
		height: 80,
	},
	topLeftConStyle: {
		width: 60,
		height: 60,
		borderRadius: 30,
		overflow: 'hidden',
		backgroundColor: '#4486FF'
	},
	topRightConStyle: {
		width: width - 120,
		height: 60,
		marginLeft: 12,
	},
	topImgStyle: {
		width: 60,
		height: 60
	},
	userConStyle: {
		marginBottom: 6
	},
	userTextStyle: {
		fontSize: 14,
		color: '#333',
		letterSpacing: 1
	},
	tagTextConStyle: {
		height: 16,
		width: 40,
		borderRadius: 8,
		marginLeft: 6,
		backgroundColor: '#4486FF'
	},
	tagTextStyle: {
		color: '#fff',
		fontSize: 13,
		letterSpacing: 1
	},
	briefTextStyle: {
		fontSize: 13,
		color: '#666',
		letterSpacing: 1
	},
	titleTextStyle: {
		fontSize: 14,
		color: '#333',
		letterSpacing: 1,
		lineHeight: 22,
		marginBottom: 10
	},
	contentTextStyle: {
		fontSize: 14,
		color: '#666',
		letterSpacing: 1,
		lineHeight: 22,
		marginBottom: 10
	},
	imgConStyle: {
		width: '100%'
	},
	imgItemStyle: {
		width: '30%',
		height: 80,
		backgroundColor: '#ccc',
		marginRight: '3%',
		marginBottom: '3%',
		overflow: 'hidden'
	},
	contentImgStyle: {
		width: '100%',
		height: '100%'
	},
	bottomConStyle: {
		width: '100%',
		height: 50,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1 / PixelRatio.get()
	},
	bottomConItemStyle: {
		width: 60,
		height: 24
	},
	bottomImgStyle: {
		width: 14,
		height: 12
	},
	bottomTextStyle: {
		fontSize: 12,
		color: '#333',
		marginLeft: 6
	}
})

Warticle.PropTypes = {
	containerStyle: PropTypes.object,
	topContainerStyle: PropTypes.object,
	topLeftConStyle: PropTypes.object,
	topRightConStyle: PropTypes.object,
	topImgStyle: PropTypes.object,
	topImgUrl: PropTypes.string,
	userConStyle: PropTypes.object,
	userTextStyle: PropTypes.object,
	userText: PropTypes.string || PropTypes.number,
	tagText: PropTypes.string || PropTypes.number,
	tagTextConStyle: PropTypes.object,
	tagTextStyle: PropTypes.object,
	briefText: PropTypes.string || PropTypes.number,
	briefTextStyle: PropTypes.object,
	titleTextStyle: PropTypes.object,
	titleText: PropTypes.string || PropTypes.number,
	contentTextStyle: PropTypes.object,
	contentText: PropTypes.string || PropTypes.number,
	imgConStyle: PropTypes.object,
	imgItemStyle: PropTypes.object,
	contentImgStyle: PropTypes.object,
	imgDate: PropTypes.array,
	bottomImgStyle: PropTypes.object,
	bottomTextStyle: PropTypes.object,
	bottomTextOne: PropTypes.string || PropTypes.number,
	bottomTextTwo: PropTypes.string || PropTypes.number,
	bottomTextThree: PropTypes.string || PropTypes.number,
	clickFun: PropTypes.func
}

Warticle.defaultProps = {
	userText: 'The Unknown World',
	briefText: 'Perhaps that is what life is all about',
	tagText: 'Lv 1',
	titleText: 'Knowledge is accumulated every day. Repeated use will make its memory stronger.',
	contentText: 'If you want to remember more things, first of all, you need to increase more memory, learn more knowledge, increase and consolidate your knowledge every day.',
	imgDate: [{}, {}, {}],
	bottomTextOne: 88,
	bottomTextTwo: 77,
	bottomTextThree: 66,
	clickFun: () => { Alert.alert('click function') }
}

export default Warticle