let input = document.getElementById("nam")
let count_check_lbl_del=0
let value_li=0
let li_id=0
input.focus()
input.addEventListener("keypress",function(event) {
  
    if(event.key === "Enter" ){
        event.preventDefault();
        if(input.value.length > 0){
          document.querySelector('#tasks').innerHTML += `
       
        <li id ="ab${++li_id}" ${++count_check_lbl_del} ${value_li++} class="m-2 p-1  rounded pill border-bottom border-start border-end shadow-lg border-info  ">
        <br>
          <input type="checkbox" id ="myCheck${count_check_lbl_del}"  onClick="ck_click(${count_check_lbl_del})"> 
      <label id ="lbclick${count_check_lbl_del}" onClick="lbclick(${count_check_lbl_del})" class="fw-bold" class="text-center ">  ${document.querySelector('#nam').value}</label> 
    <button id="btnDelete${count_check_lbl_del}" onClick="btnDelete(${count_check_lbl_del})" class="btn btn-sm btn-outline-danger  float-left"> <i class="material-icons " </i>delete
        </button> 
        <hr>
       </li> 
      
         `
         //<i class="material-icons " </i>
         let cv = document.getElementById("Count")
         cv.innerHTML=`Task left is  ${value_li}`
         
        
          
        }else{
          alert("please Enter value")
        }
         nam.value="";
          
    }
  
  
})

function btnDelete(u){
     
      var t = document.getElementById("tasks")
      var sr= document.getElementById(`myCheck${u}`) //ck
      console.log('id',sr);
      if(sr.checked==true)
      {
        var mc=document.getElementById(`ab${u}`) //lbclick
        t.removeChild(mc)
        

      }
      if(sr.checked==false){
      
        var mc=document.getElementById(`ab${u}`) //lbclick
        t.removeChild(mc)
        let cv = document.getElementById("Count")
                  cv.innerHTML=`Task left is ${--value_li}`
                    
                          
      }
}

function lbclick(c){
 

  var r = document.getElementById(`lbclick${c}`);
  r.addEventListener("click",function(e){
  
    e.preventDefault()
    var u=document.getElementById(`lbclick${c}`).innerHTML
    document.getElementById(`lbclick${c}`).innerHTML=" "
    var box = document.createElement("input");
    box.type = "text";
    box.value=u.trimLeft()
    
    box.id=`bx${c}`;

    document.getElementById(`lbclick${c}`).appendChild(box).focus()
   
    r.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
      event.preventDefault();
      
      if(box.value.length > 0){
      
        document.getElementById(`lbclick${c}`).innerHTML = `${document.getElementById(`bx${c}`).value}`
    }else{
        alert('enter some value')
    }
}
    });
   
    })
}

function ck_click(c){
    
    var sr= document.getElementById(`myCheck${c}`)
  
    var mc=document.getElementById(`lbclick${c}`);
   
     if(sr.checked==true){
      mc.style.textDecoration = "line-through";
      let cv = document.getElementById("Count")
      cv.innerHTML=`Task left is ${--value_li}`
    
    }else if(sr.checked==false){
      mc.style.textDecoration = "none";
      let cv = document.getElementById("Count")
      cv.innerHTML=`Task left is ${++value_li}`
    }
        
}
        





