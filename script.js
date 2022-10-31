//Getting HTML Buttons
let stg=document.getElementById("strong");
let sptg=document.getElementById("superStrong");
let weak=document.getElementById("weak");
let funny=document.getElementById("funny");
//Getting my DispLay Password Element
let disp=document.getElementById("dispPass");

class Password {
  constructor(alphaCaps,alphaLow,Num,Sym) {
    this.caps=alphaCaps;
    this.low=alphaLow;
    this.num=Num;
    this.sym=Sym;
  }
  strongPassword(){
    let sp="";
    let xu=Math.floor(Math.random()*25);
    let xl=Math.floor(Math.random()*25);
    let xn=Math.floor(Math.random()*9);
    let xs=Math.floor(Math.random()*6);
    sp=sp+this.caps.charAt(xu)+this.low.charAt(xl)+this.sym.charAt(xn)+this.num.charAt(xs);
    if(xl>9) xl-=xn;
    else if(xl>6) xl-=xs;
    sp+=this.low.charAt(xl);
    sp+=this.num.charAt(xn-xs)
    return sp;

  }
  superStrongPassword(){
    let spw="";
    let xu=Math.floor(Math.random()*25);
    let xl=Math.floor(Math.random()*25);
    let xn=Math.floor(Math.random()*9);
    let xs=Math.floor(Math.random()*6);
    spw=spw+this.caps.charAt(xu)+this.low.charAt(xl)+this.num.charAt(xn)+this.sym.charAt(xs);
    if(xl>9) xl-=xn;
    else if(xl>6) xl-=xs;
    spw+=this.low.charAt(xl);
    let xs2=Math.floor(Math.random()*6)
    spw+=this.sym.charAt(xs2)
    spw+=this.caps.charAt(xs2+19)
    spw+=this.num.charAt(xs2+3)
    spw+=this.low.charAt(xs2+xn+xs)
    return spw;
  }
  weakPassword(){
    let wp="";
    let xu=Math.floor(Math.random()*20);
    let xl=Math.floor(Math.random()*25);
    let xn=Math.floor(Math.random()*9);
    let xs=Math.floor(Math.random()*6);
    wp=wp+this.low.charAt(xl)+this.low.charAt(xu)+this.num.charAt(xn)+this.sym.charAt(xs);
    return wp;
  }
  funnyPassword(){
    let list=["password",
"Ineedapassword",
"changeMe",
"Secret",
"iamforgetful",
 "newpassword",
"IamACompleteIdiot",
"nothing",
"nothingagain",
 "iforgot",
 "whydoialwaysforget",
 "YouWontGuessThisOne",
"PasswordShmashword",
"iamnottellingyoumypw",
 "masterpassword",
 "Incorrect",
 "yetAnotherPassword",
"NoMorePasswords",
 "cantremember",
"dontaskdonttell",
 "memorysucks",
"EarlyAlzheimers",
"passwordforoldpeople","Insecure"]
    let ran=list[Math.floor(Math.random()*list.length-1)]
    return ran;
  }
}

let caps="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let low="abcdefghijklmnopqrstuvwxyz"
let num="0123456789"
let sym="@$_&#*~"
let pw=new Password(caps,low,num,sym)

sptg.addEventListener("click",(evt)=>{
  disp.innerHTML= "Your Super Strong Password is : "+pw.superStrongPassword()
  disp.style.backgroundColor="#ffe8ad";
})

stg.addEventListener("click",(evt)=>{
  disp.innerHTML="Your Strong Password is : "+pw.strongPassword()
  disp.style.backgroundColor="#ffe8ad";
})

weak.addEventListener("click",(evt)=>{
  disp.innerHTML="Your Weak Password is : "+pw.weakPassword()
  disp.style.backgroundColor="#ffe8ad";
})


funny.addEventListener("click",(evt)=>{
  disp.innerHTML="Your Funny Password is : "+pw.funnyPassword()
  disp.style.backgroundColor="#ffe8ad";
})


