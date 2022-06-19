





document.querySelector("form").addEventListener("submit" , check)
var data = JSON.parse(localStorage.getItem("details"))||[]
console.log(data)
function check(){
    event.preventDefault();
    let email = document.querySelector("#email").value
    let pwd = document.querySelector("#pwd").value
    

    for(let i=0;i<data.length;i++){
        bag =null;
        if(email == data[i].Email && pwd == data[i].Pwd){
            
            bag = null;
            window.location.href="index.html"
            break;
        }
        else{

            bag = "invalid Credentials"
        }
    }
    if(bag!=null){
        alert(bag)
    }
}

