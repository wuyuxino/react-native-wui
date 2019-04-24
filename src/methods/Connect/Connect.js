/** Determine whether the current user is linking to the network
 * unknown / none -- error connect
 * NetInfo.addEventListener('connectionChange', Connect)
 */
import {
  Alert,
  NetInfo
} from 'react-native'

function Connect() {
  NetInfo.getConnectionInfo().then((connectionInfo) => {
    if(connectionInfo.type==='none'||connectionInfo.type==='unknown'){
      Alert.alert('network error')
    }
  })
}

export default Connect