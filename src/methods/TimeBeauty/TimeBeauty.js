function timeBeauty(datetime=new Date().getTime(),language=true){
  // current timestamp
  let nowDate = new Date().getTime()
  // afferent timestamp 
  let agoDate = datetime
  // tolerance
  let toleranceDate = nowDate - agoDate
  if(toleranceDate<30000||toleranceDate===30000){
    return language?'now':'刚刚'
  }
  if(30000<toleranceDate&&toleranceDate<60000||toleranceDate===60000){
    return (Math.floor(toleranceDate/1000)+ ' ' +(language?'seconds ago':'秒前'))
  }
  if(60000<toleranceDate&&toleranceDate<3600000||toleranceDate===3600000){
    return (Math.floor(toleranceDate/60000)+ ' ' +(language?'minutes ago':'分钟前'))
  }
  if(3600000<toleranceDate&&toleranceDate<24*3600000||toleranceDate===24*3600000){
    return (Math.floor(toleranceDate/3600000)+ ' ' +(language?'hours ago':'小时前'))
  }
  if(24*3600000<toleranceDate&&toleranceDate<24*3600000*31||toleranceDate===24*3600000*31){
    return (Math.floor(toleranceDate/(24*3600000))+ ' ' +(language?'days ago':'天前'))
  }
  if(24*3600000*31<toleranceDate&&toleranceDate<24*3600000*31*12||toleranceDate===24*3600000*31*12){
    return (Math.floor(toleranceDate/(24*3600000*31))+ ' ' +(language?'months ago':'月前'))
  }
  if(24*3600000*31*12<toleranceDate){
    return (Math.floor(toleranceDate/(24*3600000*31*12))+ ' ' +(language?'years ago':'年前'))
  }
}

export default timeBeauty