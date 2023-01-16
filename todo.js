let input = document.getElementById("nam")
let c=0
let val=0
let u=0
input.focus()
input.addEventListener("keypress",function(event) {
  
    if(event.key === "Enter" ){
        event.preventDefault();
        if(input.value.length > 0){
          document.querySelector('#tasks').innerHTML += `
       
        <li id ="ab${++u}" ${++c} ${val++} class="m-2 p-1  rounded pill border-bottom border-start border-end shadow-lg border-info  ">
        <br>
          <input type="checkbox" id ="myCheck${c}"  onClick="ck(${c})"> 
      <label id ="lb${c}" onClick="lb(${c})" class="fw-bold" class="text-center ">  ${document.querySelector('#nam').value}</label> 
    <button id="btn${c}" onClick="btn(${u})" class="btn btn-sm btn-outline-danger  float-left"> <i class="material-icons " </i>delete
        </button> 
        <hr>
       </li> 
      
         `
         //<i class="material-icons " </i>
         let cv = document.getElementById("Count")
         cv.innerHTML=`Task left is  ${val}`
         
        
          
        }else{
          alert("please Enter value")
        }
         nam.value="";
          
    }
  
  
})

function btn(u){
console.log('btn click',`myCheck${u}`);
var t = document.getElementById("tasks")
var sr= document.getElementById(`myCheck${u}`) //ck
console.log('id',sr);
if(sr.checked==true)
{
  var mc=document.getElementById(`ab${u}`) //lb
  t.removeChild(mc)
  

}
if(sr.checked==false){
 
  var mc=document.getElementById(`ab${u}`) //lb
  t.removeChild(mc)
  let cv = document.getElementById("Count")
            cv.innerHTML=`Task left is ${--val}`
               
                     
}
}

function lb(c){
 

  var r = document.getElementById(`lb${c}`);
  r.addEventListener("click",function(e){
  
    e.preventDefault()
    var u=document.getElementById(`lb${c}`).innerHTML
    document.getElementById(`lb${c}`).innerHTML=" "
    var box = document.createElement("input");
    box.type = "text";
    box.value=u.trimLeft()
    
    box.id=`bx${c}`;

    document.getElementById(`lb${c}`).appendChild(box).focus()
   
    r.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
      event.preventDefault();
      
      if(box.value.length > 0){
      
        document.getElementById(`lb${c}`).innerHTML = `${document.getElementById(`bx${c}`).value}`
    }else{
        alert('enter some value')
    }
}
    });
   
    })
}

function ck(c){
    
    var sr= document.getElementById(`myCheck${c}`)
  
    var mc=document.getElementById(`lb${c}`);
   
     if(sr.checked==true){
      mc.style.textDecoration = "line-through";
      let cv = document.getElementById("Count")
      cv.innerHTML=`Task left is ${--val}`
    
    }else if(sr.checked==false){
      mc.style.textDecoration = "none";
      let cv = document.getElementById("Count")
      cv.innerHTML=`Task left is ${++val}`
    }
        
}
        