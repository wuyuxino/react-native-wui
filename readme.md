# react-native-wui

### 开始使用
```html
npm install react-native-wui --save
```

### 组件示例

#### 时间选择组件
![wdatepicker.jpg](./src/resources/demoimg/wdatepicker.jpg)


``` html
import React from 'react
import { Wdatepicker } from 'react-native-wui'

class Wui extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return(
      <Wdatepicker />
    )
  }
}

export default Wui
```

#### 时间滑块组件
![datechoice.png](./src/resources/demoimg/datechoice.png)


``` html
import React from 'react
import { WtimeSelect } from 'react-native-wui'

class Wui extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return(
      <WtimeSelect />
    )
  }
}

export default Wui
```

#### 分类简介组件
![avatar](./src/resources/demoimg/titlenum.png)


``` html
import React from 'react
import { Whelp } from 'react-native-wui'

class Wui extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return(
      <Whelp />
    )
  }
}

export default Wui
```

### 文档地址
```html
https://loveit.cool
https://loveit.cool/wuidoc
```
