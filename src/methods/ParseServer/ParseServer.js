/**
 * 根据常用的parse方法封装的一些常用函数
 * 登陆 注册
 * 查询当前用户
 * 修改当前用户信息
 * 搜索
 * 增加、删除、修改、查询 某一个特定的字段
 */

/**
 * 用户注册
 * @param {当前的Parse对象new Parse.User()} a 
 * @param {需要设置的字段类型为此{username:'wyx',password:'123456',phone:'10086'}} b 
 * @param {成功或者失败后的回调函数} c 
 */

function parseRegister(a,b,c){
  let user = a
  for(let i in b){
    user.set(i,b[i])
  }
  user.signUp().then(req=>{
    c(req)
  }).catch(err=>{
    c(err)
  })
}

/**
 * 用户登陆
 * @param {当前的Parse对象} a 
 * @param {当前需要登陆的用户名} b 
 * @param {当前需要登陆的用户密码} c 
 * @param {登陆成功或者失败后的回掉函数} d 
 */

function parseLogin(a,b,c,d){
  a.User.logIn(b,c).then(req=>{
    d(req)
  }).catch(err=>{
    d(err)
  })
}

/**
 * 格式化获取的数据
 * @param {用户需要格式化的数据，可以是对象或者是数组对象的形式} a 
 */

function parseDataFormate(a){
  if(a instanceof Array){
    let backArr = []
    for(let i=0; i<a.length; i++){
      let obj = {}
      obj.className = a[i]['className']
      obj.id = a[i]['id']
      obj._objCount = a[i]['_objCount']
      for(let j in a[i].attributes){
        obj[j] = a[i].attributes[j]
      }
      backArr.push(obj)
    }
    return backArr
  }else{
    let obj = {}
    obj.className = a['className']
    obj.id = a['id']
    obj._objCount = a['_objCount']
    for(let j in a.attributes){
      obj[j] = a.attributes[j]
    }
    return obj
  }
}

/**
 * 用户查询当前class类的数据
 * @param {传入的Parse对象} a 
 * @param {需要查询的class类名} b 
 * @param {查询成功后的回调函数} c 
 */

function parseGetData(a,b,c){
  let queryData = a.Object.extend(b)
  let queryDatas = new a.Query(queryData)
  queryDatas.find().then(req=>{
    c(req)
  }).catch(err=>{
    c(err)
  })
}

/**
 * 用户搜索功能
 * @param {需要传递的Parse对象} a 
 * @param {需要在那个class类下进行搜索填写当前的class类名} b 
 * @param {输入查询的字段的值 Object} c 
 * @param {查询完成后的返回结果} d 
 * @param {是否开启模糊匹配 boolean 默认开启} e 
 */

function parseSearch(a,b,c,d,e=true){
  let searchList = a.Object.extend(b)
  let list = new a.Query(searchList)

  if(e){
    for(let i in c){
      list.equalTo(i,{"$regex":c[i]})
    }
  }else{
    for(let i in c){
      list.equalTo(i,{"$regex":c[i]})
      list.equalTo(i,c[i])
    }
  }

  list.find().then(res=>{
    d(res)
  }).catch(err=>{
    d(err)
  })
}

/**
 * Relation 形式的数据查询
 * @param {需要查询带有relation格式数据的字段} a 
 * @param {relation格式字段的名称} b 
 * @param {查询成功或者失败的回调函数} c 
 */

function parseGetRelationData(a,b,c){
    let relationData = a.relation(b)
    relationData.query().find().then(req=>{
      c(req)
    }).catch(err=>{
      c(err)
    })
}

export {
  parseRegister,
  parseLogin,
  parseDataFormate,
  parseGetData,
  parseSearch,
  parseGetRelationData

}