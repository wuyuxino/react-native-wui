import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	Text,
	View,
	StyleSheet
} from 'react-native'

import {
	basicLayout
} from '../config/index'

class Wprogress extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	static PropTypes = {
    containerStyle: PropTypes.object,
    barConStyle: PropTypes.object,
    barStyle: PropTypes.object,
    textProgressStyle: PropTypes.object,
    currentProgress: PropTypes.number,
    totalProgress: PropTypes.number
	}

	static defaultProps = {
    choiceBorderColor: '#333',
    currentProgress: 40,
    totalProgress: 120
	}

	render() {
		const {
      containerStyle,
      barConStyle,
      barStyle,
      textProgressStyle,
      currentProgress,
      totalProgress
		} = this.props
		return (
			<View
				style={
					[
						styles.containerStyle,
            basicLayout.center,
						containerStyle
					]
				}>
        <View
          style={[
            styles.barConStyle,
            barConStyle
          ]}>
          <View
            style={
              [
                styles.barStyle,
                barStyle,
                {
                  width: `${100*currentProgress/totalProgress}%`,
                }
              ]
            }>
          </View>
          <View>
            <Text
              style={[
                styles.textProgressStyle,
                textProgressStyle
              ]}>
              {Math.floor(`${100*currentProgress/totalProgress}`)}%
            </Text>
          </View>
        </View>
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
  barConStyle: {
    width: '100%',
    height: 14,
    borderRadius: 7,
    backgroundColor: '#ccc'
  },
  barStyle: {
    width: '80%',
    height: '100%',
    borderRadius: 7,
    backgroundColor: 'red'
  },
  textProgressStyle: {
    position: 'absolute',
    left: '48%',
    top: -15,
    color: '#fff'
  }
})

export default Wprogress