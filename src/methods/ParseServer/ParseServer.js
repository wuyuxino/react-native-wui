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
 * @param {查询的字段中是否包含Pointer字段，包含的话查询字段名称} d 
 */

function parseGetData(a,b,c,d=''){
  let queryData = a.Object.extend(b)
  let queryDatas = new a.Query(queryData)
  if(d===''){}else{
    queryDatas.include(d)
  }
  queryDatas.find().then(req=>{
    c(req)
  }).catch(err=>{
    c(err)
  })
}

/**
 * 用户增加当前class的数据
 * @param {需要传递的Parse对象} a 
 * @param {当前想要增加数据的class类名} b 
 * @param {当前需要设置字段和改字段需要设置的值} c 
 * @param {设置成功或失败后的回调函数} d 
 */

function parseAddData(a,b,c,d){
  const addDatas = a.Object.extend(b)
  const addData = new addDatas()
  for(let i in c){
    addData.set(i,c[i])
  }
  addData.save().then(req=>{
    d(req)
  }).catch(err=>{
    d(req)
  })
}

/**
 * 从制定的class类里面删除一个对象
 * @param {需要删除的用户数据对象，即class类里面的对象} a 
 * @param {删除成功或者失败后的回调函数} b 
 */

function parseRemoveData(a,b){
  a.destroy().then(req=>{
    b(req)
  }).catch(err=>{
    b(err)
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

/**
 * 存储图片
 * @param {需要传入的Parse对象} a 
 * @param {存储图片的字段名称 String} b 
 * @param {需要传入的base64图片} c 
 * @param {图片存储成功后的回调函数} d 
 */

function parseFileSave(a,b,c,d){
  let file = new a.File(b, { base64: c })
  file.save().then(req=>{
    d(req)
  }).catch(err=>{
    d(req)
  })
}

export {
  parseRegister,
  parseLogin,
  parseDataFormate,
  parseGetData,
  parseAddData,
  parseRemoveData,
  parseSearch,
  parseGetRelationData,
  parseFileSave

}