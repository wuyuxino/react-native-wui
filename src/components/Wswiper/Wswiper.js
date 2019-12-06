import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	View,
	Text,
	Image,
	FlatList,
	Dimensions,
	StyleSheet,
	PixelRatio,
	TouchableOpacity
} from 'react-native'

import {
	basicLayout
} from '../config/index'

const { width, height } = Dimensions.get('window')

class Wswiper extends Component {
	constructor() {
		super()
		this.state = {
			showList: false
		}
	}

	static PropTypes = {
		wrapCon: PropTypes.object,
	}

	static defaultProps = {

	}

	_getRef = (flatList) => {
		this._flatList = flatList; const reObj = this._flatList; return reObj;
	}

	render() {
		const {
			wrapCon,

		} = this.props
		const { showList } = this.state
		return (
			<View
				style={
					[
						styles.wrapCon,
						wrapCon
					]
				}>
				<FlatList
					ref={this._getRef}
					onScroll={(event) => {
						console.log('gundong', event.nativeEvent.contentOffset.x)
					}}
					// 竖屏显示
					horizontal={true}
					// 轮播数据
					data={[1, 2, 3, 4]}
					// 初始化从第几页开始滚动
					// initialScrollIndex={2}
					// 一共展示多少项
					initialNumToRender={4}
					// 获取当前的索引值
					keyExtractor={(item, index) => {
						console.log('keyExtractor', item, index)
					}}
					// 相聚多远触发回调函数 onEndReachedThreshold
					renderItem={(item, index, separators) => {
						return (
							<View
								style={{
									width,
									height: 200,
									backgroundColor: 'yellow'
								}}>
								<Text>{item.item}</Text>
							</View>
						)
					}}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapCon: {
		width: '100%',
		height: 200,
		backgroundColor: 'red'
	}
})

export default Wswiper