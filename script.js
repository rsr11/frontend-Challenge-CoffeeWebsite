// alert("hello");

let innerMenu = document.getElementById(`inner-menu`);
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById('prevBtn');

let add = 0;

let nextAdd = -280;
let prevAdd = 280;

let windowScreenSize = window.innerWidth;
console.log(windowScreenSize);

if(windowScreenSize <=414){
    windowScreenSize = -1280;
    nextAdd = -320;
    prevAdd = 320;

}else{
    windowScreenSize = -280;
}

nextBtn.addEventListener("click",()=>{
   if(add === 0){
    // alert(add);
    add = nextAdd;
    innerMenu.style.transform=`translateX(${add}px)`;
   }
  else if(add === windowScreenSize){
    return;
  }
  else{
    // alert(add);
      add = add-prevAdd;
    innerMenu.style.transform=`translateX(${add}px)`;
  
  }  
});


prevBtn.addEventListener("click",()=>{
    if(add===0){
        return;
    }else{
        // alert(add);
        add = add+prevAdd;
        innerMenu.style.transform=`translateX(${add}px)`;  
    }
})