let $btn = document.querySelector('#btn');

let $html = document.querySelector("#demo");

let $style= document.querySelector('#style')
let n = 0;
let string2 ='';

let string =`/*你好,我是前端初学者,希望多多指教.
请看看我的简历,多谢!
现在我打算画个太极:*/
#div1{
  width:200px;
  height:200px;
  border: 1px solid black;
}
/*首先把div变成一个圆圈*/
/* 八卦,背景渐变获取背景半黑半白*/
#div1{
  border-radius:50%;
  box-shadow:0 0 5px 0 rgba(0,0,0,0.3);
  border:none;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加2个黑白球体*/
#div1::before{
  content:'';
  display:block;
  width:100px;
  height:100px;
  position:absolute;
  top:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
content:'';
width:100px;
height:100px;
display:block;
position:absolute;
bottom:0;
left:50%;
transform:translateX(-50%);
border-radius:50%;
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 26%, 
rgba(255,255,255,1) 100%);
}
/*太极图转动*/
#div1{
  animation:3s linear 1s infinite tai
}
@keyframes  tai{
  from{
    transform:rotate(0);
  }
  to{
    transform:rotate(360deg);
}
  
`  
let step=()=>{
     
     if(string[n]===' '){
       string2 +='&nbsp'
     }else if(string[n]==='\n'){
      string2+='<br>'
     }else {
       string2+=string[n]
     }
     setTimeout(()=>{
       if(n<string.length-1){
       n+=1;
       $html.innerHTML=string2
       $style.innerHTML=string.substring(0,n)
       window.scrollTo(0,9999)
       $html.scrollTo(0,9999)
       step();
     }},0)
}
step() 



    // let step=()=>{
      //   console.log(n)
      //     console.log(string2)
      //    if(string[n]==='\n'){
      //     string2 += '<br>'
      //       //若是回车就加<br>
      //    }else if(string[n]===' '){
      //     string2 += '&nbsp'
      //     //若是空格就加$nbsp
      //    }
      //    else{
      //      string2 =string2 + string[n]
      //      //空格回车都没就照搬
      //    }

// string = string.replace(/\n/g,'<br>')
 
// string = string.replace(/\s/g,'&nbsp')
  // let step=()=>{
  //   console.log(n)
  //  if (n<string.length){
  //    setTimeout(()=>{
  //      n+=1;
  //      demo.innerHTML=string.substring(0,n) ;
  //      step();
  //    },100)
  //  }else{
  //  }
  // }










// demo.innerHTML=string.substring(0,n) ;

//substring() 方法
//返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

  

