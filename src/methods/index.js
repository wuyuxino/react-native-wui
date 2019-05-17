import { isIphoneX } from './IphoneX/IphoneX'
import Connect from './Connect/Connect'
import timeBeauty from './TimeBeauty/TimeBeauty'
import { 
  getStatusBarHeight, 
  scaleSizeH, 
  scaleSizeW, 
  fontscale,
  setSpText
} from './Adaptation/Adaptation'
import {
  parseRegister,
  parseLogin,
  parseDataFormate,
  parseGetData,
  parseAddData,
  parseRemoveData,
  parseSearch,
  parseGetRelationData,
  parseFileSave
} from './ParseServer/ParseServer'

export {
  isIphoneX,
  getStatusBarHeight,
  scaleSizeH,
  scaleSizeW,
  fontscale,
  setSpText,
  Connect,
  parseRegister,
  parseLogin,
  parseDataFormate,
  parseGetData,
  parseAddData,
  parseRemoveData,
  parseSearch,
  parseGetRelationData,
  parseFileSave,
  timeBeauty
}