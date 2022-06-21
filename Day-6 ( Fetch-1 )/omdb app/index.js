
// https://api.themoviedb.org/3/trending/movie/week?api_key=60d025cf9a3ba5930d281ce992a3dfbe

async function getdata(){
    let b = document.querySelector("#search").value
    if(b.length == 0){
        var url1="https://api.themoviedb.org/3/search/movie?api_key=60d025cf9a3ba5930d281ce992a3dfbe&language=en-US&page=1&include_adult=false&query=avengers"
    }
    else{
        var url1=`https://api.themoviedb.org/3/search/movie?api_key=60d025cf9a3ba5930d281ce992a3dfbe&language=en-US&page=1&include_adult=false&query=${b}`
    }
    let res =await fetch(url1)
    res = await res.json()
    // console.log(res.results)
    dataappend(res.results)

}
// https://image.tmdb.org/t/p/original/[poster_path]
function dataappend(data){
    console.log(data , data.length)
    if(data.length == 0){
       
        let cont = document.querySelector("#container1")
        cont.innerHTML = null;
        let image = document.createElement("img")
        image.src="https://pbs.twimg.com/media/DDPKLHNVwAA87D5.jpg"
        image.id="errimage"
        cont.append(image)
        return;
    }

    
    else{
    let cont = document.querySelector("#container1")
    cont.innerHTML = null;
    data.forEach(function(el){

    let box=document.createElement("div")
    box.id="box1"
    let image=document.createElement("img")
    // image.src="https://www.omdbapi.com/src/poster.jpg"
    image.src=`https://image.tmdb.org/t/p/original/${el.poster_path}`
    let detailslist=document.createElement("div")
    detailslist.id="details1"
    let name=document.createElement("p")
    name.innerText=el.original_title
    let date=document.createElement("p")
    date.innerText=el.release_date
    let rating=document.createElement("p")
    
    rating.innerText=`Imdb Rating: ${1+Number(el.vote_average)}`

    let rec=document.createElement("button")
    rec.innerText = "Recommended"
    rec.id="recommended"
    if((1+Number(el.vote_average))>=8.5){

        detailslist.append(name,date,rating,rec)
    }

    else detailslist.append(name,date,rating)

    box.append(image,detailslist)
    cont.append(box)
    
})
    }
}


var id


async function main(){

    let data=await getdata()
    
    if (data === undefined) {
        return false;
    }
    dataappend(data)
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


getdata()
