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

    console.log(data)

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


b.addEventListener("blur", takeout)
function takeout() {
    a.style.display = "none";
    b.value = null;
}


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


// function goto(el){
//     console.log(el.Title)
//     console.log(el.imdbID)
// }

