
document.querySelector("form").addEventListener("submit" , userdetails)

let arr=[]

function construct(a,b,c,d){
    this.Name = a
    this.Number = b
    this.Email = c
    this.Pwd = d
    
}


function userdetails(){
    event.preventDefault();
    
    let Name = document.querySelector("#name").value
    if(Name.length==0){
        alert("Enter Name")
        return;
    }
    let Number = document.querySelector("#number").value
    if(Number.length==0){
        alert("Enter Number")
        return;
    }
    let Email = document.querySelector("#mail").value
    if(Email.length==0){
        alert("Enter Email")
        return;
    }
    let Pwd = document.querySelector("#password").value
    if(Pwd.length==0){
        alert("Enter Password")
        return;
    }
    
    let obj = new construct(Name,Number,Email,Pwd)
    arr.push(obj)
    console.log(arr)
    localStorage.setItem("details" , JSON.stringify(arr))
    window.location.href="login.html"
}

