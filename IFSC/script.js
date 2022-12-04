//Defining constants And Getting my required HTML elements
const api="https://ifsc.razorpay.com/";
let srhbtn=document.getElementById('searchbtn');
let ifsc=document.getElementById('ifsc');
let ifcd=document.getElementById('ifscCode');
let micr=document.getElementById('MICR');
let state=document.getElementById('state');
let bank=document.getElementById('bank');
let branch=document.getElementById('branch'); 
let centre=document.getElementById('centre');
let drt=document.getElementById('district');
let ct=document.getElementById('ct');

srhbtn.addEventListener("click",()=>{
  let code=ifsc.value.toUpperCase();
  //Fetching API
  let p=fetch(api+code)
  p.then((resp)=>{
    return resp.json();
  }).then((resp)=>{
    console.log(resp==="Not Found");
    if(resp!=="Not Found"){
      notFound.innerHTML="";
      ifcd.innerHTML="IFSC : "+resp.IFSC;
      micr.innerHTML="MICR : "+resp.MICR;
      bank.innerHTML="BANK : "+resp.BANK;
      branch.innerHTML="BRANCH : "+resp.BRANCH;
      centre.innerHTML="CENTRE : "+resp.CENTRE;
      drt.innerHTML="DISTRICT : "+resp.DISTRICT;
      state.innerHTML="STATE : "+resp.STATE;
      ct.innerHTML="CONTACT : "+resp.CONTACT;
    }
    else{
      notFound.innerHTML="Not Found";
      state.innerHTML="";
      drt.innerHTML="";
      centre.innerHTML="";
      bank.innerHTML="";
      ifcd.innerHTML="";
      micr.innerHTML="";
      branch.innerHTML="";
      ct.innerHTML="";
    }
  })
})

