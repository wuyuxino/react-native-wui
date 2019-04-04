"use strict"
import {
  Dimensions, 
  StatusBar, 
  Platform, 
  PixelRatio
} from 'react-native'

//手机屏幕的宽度
export const width = Dimensions.get('window').width;
//手机屏幕的高度
export const height = Dimensions.get('window').height;
//计算手机屏幕宽度对应设计图宽度的单位宽度
export const unitWidth = width / designWidth
//计算手机屏幕高度对应设计图高度的单位高度
export const unitHeight = height / designHeight

export const statusBarHeight = getStatusBarHeight();
export const safeAreaViewHeight = isIphoneX() ? 34 : 0

//标题栏的高度
export const titleHeight = unitWidth * 100 + statusBarHeight;

//字体缩放比例，一般情况下不用考虑。
// 当应用中的字体需要根据手机设置中字体大小改变的话需要用到缩放比例
export const fontscale = PixelRatio.getFontScale()

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
    const X_WIDTH = 375;
    const X_HEIGHT = 812;
    return Platform.OS == 'ios' && (height == X_HEIGHT && width == X_WIDTH)
}

//状态栏的高度
export function getStatusBarHeight() {
    if (Platform.OS == 'android') return StatusBar.currentHeight;
    if (isIphoneX()) {
        return 44
    }
    return 20
}

/**
 * Created by qianxin on 17/6/1.
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */

// 获取屏幕的dp
let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
let fontScale = PixelRatio.getFontScale();
let pixelRatio = PixelRatio.get();

// 设计稿的宽度和高度
const designWidth = 1242.0
const designHeight = 2208.0

// 根据dp获取屏幕的px
let screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenW);
let screenPxH = PixelRatio.getPixelSizeForLayoutSize(screenH);

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
export function setSpText(size) {
    var scaleWidth = screenW / designWidth;
    var scaleHeight = screenH / designHeight;
    var scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round(size * scale/fontScale + 0.5);
    return size;
}

/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeH(size) {
    var scaleHeight = size * screenPxH / designHeight;
    size = Math.round((scaleHeight / pixelRatio + 0.5));
    return size;
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeW(size) {
    var scaleWidth = size * screenPxW / designWidth;
    size = Math.round((scaleWidth/pixelRatio + 0.5));
    return size;
}