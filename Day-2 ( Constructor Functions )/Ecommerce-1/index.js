document.querySelector("form").addEventListener("submit", adding)

let arr=JSON.parse(localStorage.getItem("Products"))||[]

function adding(){
    event.preventDefault()

    let productName=document.querySelector("#name").value        
    let category=document.querySelector("#category").value      
    let imageUrl=document.querySelector("#image").value         
    let price=document.querySelector(" #price").value
    let gender=document.querySelector("#gender").value
    let sold=document.querySelector("#sold").value
    // console.log(sold)

    let obj1=new product(productName,category,imageUrl,price,gender,sold)
    arr.push(obj1)
    console.log(arr);
    localStorage.setItem("Products" , JSON.stringify(arr))
}

function product(a,b,c,d,e,f){
    this.name=a
    this.category=b
    this.image=c
    this.price=d
    this.gender=e
    this.sold=f
}