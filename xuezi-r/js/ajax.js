function ajax(method,url,postStr){
  return new Promise((resolve,reject)=>{
    //1、获取 xhr
    var xhr = (function(){//匿名函数自调方式
      if(window.XMLHttpRequest){
        return new XMLHttpRequest();
      }else{
        return new ActiveXObject("Microsoft.XMLHttp");
      }
    })();
    //2、创建请求
    xhr.open(method,url,true);
    
    //4、设置请求消息头
    if(method=="post"){
      xhr.setRequestHeader(
        "Content-Type", "application/x-www-form-urlencoded");
    }
    //3、设置回调
    xhr.onreadystatechange=function(){
      if(xhr.readyState == 4)
        if(xhr.status == 200){
          if(url.indexOf(".php")!=-1)//将JSON字符串 转换成 JS对象
            resolve(JSON.parse(xhr.responseText));
          else//其它直接接收
            resolve(xhr.responseText);
        }else
          reject("ajax出错啦！"+xhr.status);
    }
    //5、发送
    xhr.send(postStr);
  })
}