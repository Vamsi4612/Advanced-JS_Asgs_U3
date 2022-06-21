// https://www.omdbapi.com/?apikey=fd079d9d&s=${}

var id
let b = document.querySelector("#search")
let a = document.querySelector("#list")
async function getData() {
    a.style.display = "block";

    if (b.value.length === 0) {
        a.style.display = "none"
    }

    const url = `https://www.omdbapi.com/?apikey=fd079d9d&s=${b.value}`

    let res = await fetch(url)

        res = await res.json()

    let data = res.Search
    // console.log(data)
    return data
}

function appendData(data) {
    
    let a = document.querySelector("#list")
    a.innerHTML = null;

    // console.log(data)

    data.forEach(function (el) {

        let mainbox = document.createElement("div")
        mainbox.id = "box"
        
        mainbox.addEventListener("click" , function(){
            goto(el)
        })

        let image = document.createElement("img")
        image.src = el.Poster

        let detailsbox = document.createElement("div")
        detailsbox.id="details"
            let year = document.createElement("p")
            year.innerText = el.Year

            let name = document.createElement("p")
            name.innerText = el.Title
            // name.id = "names"
        detailsbox.append(name,year)

        mainbox.append(image,detailsbox)


        a.append(mainbox)
        
    })
}


// b.addEventListener("blur", takeout)
// function takeout() {
//     a.style.display = "none";
//     b.value = null;
// }


async function main(){

    let data=await getData()
    
    if (data === undefined) {
        return false;
    }
    appendData(data)
}

// Debouncing function

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func()
    },delay)
}


async function goto(el){
    a.style.display = "none";
    b.value = null;
    
    let movieid = el.imdbID

    const url = `https://www.omdbapi.com/?apikey=fd079d9d&i=${movieid}`

    let res = await fetch(url)

    res = await res.json()
    console.log(res)

    displayappend(res)

}

function displayappend(data){
    let dataarr=[]
    dataarr.push(data)
    console.log(dataarr)
    let dis = document.querySelector("#display")
    dis.innerHTML=null;
    dataarr.forEach(function(el){

    
    let divbox1=document.createElement("div")
    divbox1.id="movieimage"
    let image=document.createElement("img")
    image.src=el.Poster

    let divbox2=document.createElement("div")
    divbox2.id="moviedetails"
    
    let name=document.createElement("p")
    name.id="moviename"
    name.innerText=el.Title
    let year=document.createElement("p")
    year.innerText=`Release Year : ${el.Year}`
    let time=document.createElement("p")
    time.innerText=`Run time : ${el.Runtime}` 
    let view=document.createElement("p")
    view.innerText="Overview :"
    let brief=document.createElement("p")
    brief.id="overview"
    brief.innerText=el.Plot
    let genres=document.createElement("p")
    genres.innerText=`Genre : ${el.Genre}`
    let languages=document.createElement("p")
    languages.innerText=`Lan : ${el.Language}`
    let imdbrate=document.createElement("p")
    imdbrate.innerText=`IMDB Rating : ${el.imdbRating}`
    divbox1.append(image)
    divbox2.append(name,year,time,view,brief,genres,languages,imdbrate)
    document.querySelector("#display").append(divbox1,divbox2)

    })
}

