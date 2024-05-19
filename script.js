// alert("hello");

let innerMenu = document.getElementById(`inner-menu`);
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById('prevBtn');

let add = 0;

let windowScreenSize = window.innerWidth;
console.log(windowScreenSize);

if(windowScreenSize <=414){
    windowScreenSize = -1120;
}else{
    windowScreenSize = -280;
}

nextBtn.addEventListener("click",()=>{
   if(add === 0){
    // alert(add);
    add = -280;
    innerMenu.style.transform=`translateX(${add}px)`;
   }
  else if(add === windowScreenSize){
    return;
  }
  else{
    // alert(add);
      add = add-280;
    innerMenu.style.transform=`translateX(${add}px)`;
  
  }  
});


prevBtn.addEventListener("click",()=>{
    if(add===0){
        return;
    }else{
        // alert(add);
        add = add+280;
        innerMenu.style.transform=`translateX(${add}px)`;  
    }
})