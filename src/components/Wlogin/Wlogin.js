import React from 'react'
import PropTypes from 'prop-types'
import {
	View,
	Text,
	Alert,
	Image,
	TextInput,
	Dimensions,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

import basicLayout from '../config/basicLayout'
import Images from '../../resources/index'

const { width, height } = Dimensions.get('window')

const Wlogin = props => {
	const {
		containerStyle,
		centerStyle,
		inputContainerStyle,
		leftImgStyle,
		imgStyle,
		imgUrlTop,
		imgUrlBottom,
		localImgUrlTop,
		localImgUrlBottom,
		inputStyle,
		bgUriStyle,
		bgUrl,
		localBgUrl,
		submitStyle,
		submitText,
		submitTextStyle,
		leftContentText,
		rightContentText,
		leftTextStyle,
		rightTextStyle,
		bottomStyle,
		bottomText,
		bottomTextStyle,
		logoStyle,
		logoUrl,
		localLogoUrl,
		userInputText,
		passInputtext,
		submitFunc,
		leftFunc,
		rightFunc,
		bottomFunc,
		logoTitleConStyles,
		logoTitleStyles,
		logoTitle
	} = props

	return (
		<View
			style={
				[
					styles.containerStyle,
					basicLayout.center,
					containerStyle
				]
			}>
			<Image
				resizeMode='cover'
				style={
					[
						styles.bgUriStyle,
						bgUriStyle
					]
				}
				source={
					localBgUrl ?
						localBgUrl :
						{ uri: bgUrl ? bgUrl : '' }}
			/>
			<Image
				resizeMode='cover'
				style={
					[
						styles.logoStyle,
						logoStyle
					]
				}
				source={
					localLogoUrl ?
						localLogoUrl :
						{ uri: logoUrl ? logoUrl : '' }}
			/>
			<View
				style={
					[
						styles.logoTitleConStyles,
						logoTitleConStyles
					]
				}>
				<Text
					style={
						[
							styles.logoTitleStyles,
							logoTitleStyles
						]
					}>
					{logoTitle && logoTitle}
				</Text>
			</View>
			<View
				style={
					[
						styles.centerStyle,
						basicLayout.center,
						centerStyle
					]
				}>
				<View
					style={
						[
							styles.inputContainerStyle,
							basicLayout.both,
							inputContainerStyle
						]
					}>
					<View
						style={
							[
								styles.leftImgStyle,
								basicLayout.center,
								leftImgStyle
							]
						}>
						<Image
							resizeMode='cover'
							style={
								[
									styles.imgStyle,
									imgStyle
								]
							}
							source={
								localImgUrlTop ?
									localImgUrlTop :
									imgUrlTop ?
										{ uri: imgUrlTop } :
										Images.loginu
							}
						/>
					</View>
					<TextInput
						autoCapitalize={false}
						onChangeText={(text) => {
							userInputText(text)
						}}
						style={
							[
								styles.inputStyle,
								inputStyle
							]
						}
						placeholder='username'
					/>
				</View>
				<View
					style={
						[
							styles.inputContainerStyle,
							basicLayout.both,
							inputContainerStyle
						]
					}>
					<View
						style={
							[
								styles.leftImgStyle,
								basicLayout.center,
								leftImgStyle
							]
						}>
						<Image
							resizeMode='cover'
							style={
								[
									styles.imgStyle,
									imgStyle
								]
							}
							source={
								localImgUrlBottom ?
									localImgUrlBottom :
									imgUrlBottom ?
										{ uri: imgUrlBottom } :
										Images.password
							}
						/>
					</View>
					<TextInput
						onChangeText={(text) => {
							passInputtext(text)
						}}
						secureTextEntry={true}
						style={
							[
								styles.inputStyle,
								inputStyle
							]
						}
						placeholder='password'
					/>
				</View>
				<TouchableOpacity
					onPress={() => {
						submitFunc()
					}}
					style={
						[
							styles.submitStyle,
							basicLayout.center,
							submitStyle
						]
					}>
					<Text
						style={
							[
								styles.submitTextStyle,
								submitTextStyle
							]
						}>
						{submitText}
					</Text>
				</TouchableOpacity>
				<View
					style={
						[
							styles.bottomTip,
							basicLayout.both
						]
					}>
					<TouchableOpacity
						onPress={() => {
							leftFunc()
						}}>
						<Text
							numberOfLines={1}
							style={
								[
									styles.leftTextStyle,
									leftTextStyle
								]
							}>
							{leftContentText}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							rightFunc()
						}}>
						<Text
							numberOfLines={1}
							style={
								[
									styles.rightTextStyle,
									rightTextStyle
								]
							}>
							{rightContentText}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity
				onPress={() => {
					bottomFunc()
				}}
				style={
					[
						styles.bottomStyle,
						basicLayout.center,
						bottomStyle
					]
				}>
				<Text
					style={
						[
							styles.bottomTextStyle,
							bottomTextStyle
						]
					}>
					{bottomText}
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		position: 'relative'
	},
	centerStyle: {
		width: '90%'
	},
	inputContainerStyle: {
		width: '100%',
		height: 50,
		marginBottom: 20,
		backgroundColor: '#F2F2F2'
	},
	leftImgStyle: {
		width: 50,
		height: 50
	},
	imgStyle: {
		width: 24,
		height: 24
	},
	inputStyle: {
		width: width * .9 - 50,
		height: 50,
		paddingLeft: 4,
		color: '#333',
		backgroundColor: '#F2F2F2'
	},
	bgUriStyle: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		zIndex: -1
	},
	submitStyle: {
		width: '100%',
		height: 50,
		borderRadius: 8,
		marginBottom: 20,
		backgroundColor: '#C59D5F'
	},
	submitTextStyle: {
		fontSize: 16,
		fontWeight: '500',
		color: '#FFF',
		letterSpacing: 1
	},
	bottomTip: {
		width: '100%'
	},
	leftTextStyle: {
		fontSize: 14,
		color: '#666',
		letterSpacing: 1
	},
	rightTextStyle: {
		fontSize: 14,
		color: '#666',
		letterSpacing: 1
	},
	bottomStyle: {
		width: '100%',
		position: 'absolute',
		bottom: 20
	},
	bottomTextStyle: {
		fontSize: 14,
		color: '#666',
		letterSpacing: 1
	},
	logoStyle: {
		width: 80,
		height: 80,
		borderRadius: 40,
		position: 'absolute',
		top: height * .12
	},
	logoTitleConStyles: {
		width: '100%',
		position: 'absolute',
		top: height * .12 + 100
	},
	logoTitleStyles: {
		fontSize: 14,
		color: '#333',
		fontWeight: '500',
		letterSpacing: 1,
		textAlign: 'center'
	}
})

Wlogin.PropTypes = {
	containerStyle: PropTypes.object,
	centerStyle: PropTypes.object,
	inputContainerStyle: PropTypes.object,
	leftImgStyle: PropTypes.object,
	imgStyle: PropTypes.object,
	localImgUrlBottom: PropTypes.string,
	localImgUrlTop: PropTypes.string,
	imgUrlBottom: PropTypes.string,
	imgUrlTop: PropTypes.string,
	localBgUrl: PropTypes.string,
	inputStyle: PropTypes.object,
	bgUriStyle: PropTypes.object,
	bgUrl: PropTypes.string,
	submitStyle: PropTypes.object,
	submitText: PropTypes.string || PropTypes.number,
	submitTextStyle: PropTypes.object,
	leftContentText: PropTypes.string || PropTypes.number,
	rightContentText: PropTypes.string || PropTypes.number,
	bottomStyle: PropTypes.object,
	bottomTextStyle: PropTypes.object,
	bottomText: PropTypes.string || PropTypes.number,
	logoStyle: PropTypes.object,
	logoUrl: PropTypes.string,
	localLogoUrl: PropTypes.string,
	userInputText: PropTypes.func,
	passInputtext: PropTypes.func,
	leftFunc: PropTypes.func,
	rightFunc: PropTypes.func,
	bottomFunc: PropTypes.func,
	submitFunc: PropTypes.func,
	logoTitleConStyles: PropTypes.object,
	logoTitleStyles: PropTypes.object,
	logoTitle: PropTypes.string || PropTypes.number
}

Wlogin.defaultProps = {
	submitText: '登陆',
	leftContentText: '',
	rightContentText: 'Forgot password?',
	bottomText: 'Don’t have an account?',
	userInputText: (text) => { console.log(text) },
	passInputtext: (text) => { console.log(text) },
	leftFunc: () => { Alert.alert('left function') },
	rightFunc: () => { Alert.alert('right function') },
	bottomFunc: () => { Alert.alert('bottom function') },
	submitFunc: () => { Alert.alert('sunmit function') }
}

export default Wlogin