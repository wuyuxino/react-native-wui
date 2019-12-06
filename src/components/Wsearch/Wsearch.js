import React from 'react'
import PropTypes from 'prop-types'
import {
	Text,
	View,
	Image,
	TextInput,
	PixelRatio,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

import {
	basicLayout
} from '../config/index'
import Images from '../../resources/index'

const Wsearch = props => {
	const {
		containerStyle,
		inputStyle,
		logoStyle,
		searchStyle,
		isShowLogo,
		isShowSearch,
		placeholderText,
		placeholderColor,
		contentInputFunc,
		searchClick,
		type,
		typeClick,
		logoUrl,
		searchUrl
	} = props

	return (
		<TouchableOpacity
			activeOpacity={type === 1 ? .8 : 1}
			onPress={() => {
				if (type === 1) {
					typeClick()
				}
			}}>
			<View
				style={
					[
						styles.containerStyle,
						basicLayout.both,
						containerStyle
					]
				}>
				{
					type === 1 ?
						<View
							style={
								[
									styles.inputStyle,
									basicLayout.left,
									inputStyle
								]
							}>
							<Text
								style={
									[
										{
											color: placeholderColor
										}
									]
								}>
								{placeholderText}
							</Text>
						</View>
						:
						<TextInput
							autoCapitalize={false}
							onChangeText={(e) => { contentInputFunc(e) }}
							placeholderTextColor={placeholderColor}
							placeholder={placeholderText}
							style={
								[
									styles.inputStyle,
									inputStyle
								]
							}
						/>
				}
				{
					isShowSearch ?
						<TouchableOpacity
							activeOpacity={.8}
							style={
								[
									styles.searchStyle,
									searchStyle
								]
							}
							onPress={() => {
								if (type === 1) {
									typeClick()
								} else {
									searchClick()
								}
							}}>
							<Image
								style={styles.img}
								resizeMode='cover'
								source={searchUrl ? searchUrl : Images.search}
							/>
						</TouchableOpacity>
						: null
				}
				{
					isShowLogo ?
						<Image
							resizeMode='cover'
							style={
								[
									styles.logoStyle,
									logoStyle
								]
							}
							source={logoUrl ? logoUrl : Images.logo}
						/>
						: null
				}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	containerStyle: {
		width: '100%',
		height: 50,
		padding: 16,
		position: 'relative'
	},
	inputStyle: {
		height: 50,
		width: '100%',
		borderRadius: 30,
		borderColor: '#ccc',
		paddingLeft: 50,
		backgroundColor: '#f2f2f2',
		borderWidth: 1 / PixelRatio.get()
	},
	logoStyle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		position: 'absolute',
		left: 30
	},
	searchStyle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		position: 'absolute',
		right: 30
	},
	img: {
		width: '100%',
		height: '100%'
	}
})

Wsearch.PropTypes = {
	containerStyle: PropTypes.object,
	inputStyle: PropTypes.object,
	searchStyle: PropTypes.object,
	inputStyle: PropTypes.object,
	isShowLogo: PropTypes.bool,
	isShowSearch: PropTypes.bool,
	placeholderText: PropTypes.number || PropTypes.string,
	placeholderColor: PropTypes.string,
	contentInputFunc: PropTypes.func,
	searchClick: PropTypes.func,
	type: PropTypes.number,
	typeClick: PropTypes.func,
	logoUrl: PropTypes.string,
	searchUrl: PropTypes.string
}

Wsearch.defaultProps = {
	isShowLogo: true,
	isShowSearch: true,
	placeholderText: '请输入搜索的内容',
	placeholderColor: '#ccc',
	contentInputFunc: (e) => { console.log(e) },
	searchClick: () => { console.log('点击函数') },
	type: 2,
	typeClick: () => { console.log('你需要跳转的页面') }
}

export default Wsearch