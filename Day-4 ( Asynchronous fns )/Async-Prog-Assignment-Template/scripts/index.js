

let i = 0;
let imageData = [
    {url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4490/674490-h"},
    {url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4226/1084226-h-7c2d08d39e53"},
    {url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4507/674507-h"},
]

let box1 = document.querySelector("#slideshow")
let image = document.querySelector("img")

setInterval(function(){
    if(i==imageData.length){
        i = 0
    }
    // console.log(imageData[i].url)
    box1.style.backgroundImage=`url(${imageData[i].url})`
    i++;
},3000)

// Moviesdata

let moviedata = [
    {
      "Title": "The Avengers",
      "Year": "2012",
      "imdbID": "tt0848228",
	"imdbRating": "8.0",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      "Title": "Avengers: Endgame",
      "Year": "2019",
      "imdbID": "tt4154796",
	"imdbRating": "8.4",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    },
    {
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "imdbID": "tt4154756",
	"imdbRating": "8.4",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Avengers: Age of Ultron",
      "Year": "2015",
      "imdbID": "tt2395427",
	 "imdbRating": "7.3",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
    },
    {
      "Title": "The Avengers",
      "Year": "1998",
      "imdbID": "tt0118661",
	 "imdbRating": "3.8",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
      "Title": "The Avengers: Earth's Mightiest Heroes",
      "Year": "2010-2012",
      "imdbID": "tt1626038",
	"imdbRating": "8.3",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
    },
    {
      "Title": "Ultimate Avengers: The Movie",
      "Year": "2006",
      "imdbID": "tt0491703",
	"imdbRating": "6.7",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"
    },
    {
      "Title": "Ultimate Avengers II",
      "Year": "2006",
      "imdbID": "tt0803093",
	"imdbRating": "6.6",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Avengers",
      "Year": "1961-1969",
      "imdbID": "tt0054518",
	"imdbRating": "8.3",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
      "Title": "Avengers Assemble",
      "Year": "2012-2019",
      "imdbID": "tt2455546",
	"imdbRating": "7.0",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
    }
  ]
localStorage.setItem("movies" ,JSON.stringify(moviedata))

let data = JSON.parse(localStorage.getItem("movies"))||[]
console.log(data)
data.forEach(function(el){
    let box = document.createElement("div")
    box.id = "moviebox"
        let image = document.createElement("img")
        image.src = el.Poster
    let headingbox = document.createElement("div")
    headingbox.id="heading"
        let title = document.createElement("p")
        title.innerText=el.Title
        let year = document.createElement("p")
        year.innerText=`Year: ${el.Year}`
        let rating = document.createElement("p")
        rating.innerText = `IMDB Rating: ${el.imdbRating}`
        headingbox.append(title,year,rating)
    box.append(image,headingbox)
    document.querySelector("#movies").append(box)

})


function sorthigh(){
    // let data = JSON.parse(localStorage.getItem("movies"))||[]
    data.sort(function(x,y){
      return Number(x.imdbRating)-Number(y.imdbRating)
    })
    console.log(data)
    let a=document.querySelector("#movies").innerHTML=null;
    data.forEach(function(el){
        let box = document.createElement("div")
        box.id = "moviebox"
            let image = document.createElement("img")
            image.src = el.Poster
        let headingbox = document.createElement("div")
        headingbox.id="heading"
            let title = document.createElement("p")
            title.innerText=el.Title
            let year = document.createElement("p")
            year.innerText=`Year: ${el.Year}`
            let rating = document.createElement("p")
            rating.innerText = `IMDB Rating: ${el.imdbRating}`
            headingbox.append(title,year,rating)
        box.append(image,headingbox)
        document.querySelector("#movies").append(box)
    
    })
    
}

function sortlow(){
    // let data = JSON.parse(localStorage.getItem("movies"))||[]
    data.sort(function(x,y){
       return Number(y.imdbRating)-Number(x.imdbRating)
    })
    console.log(data)
    let a=document.querySelector("#movies").innerHTML=null;
    data.forEach(function(el){
        let box = document.createElement("div")
        box.id = "moviebox"
            let image = document.createElement("img")
            image.src = el.Poster
        let headingbox = document.createElement("div")
        headingbox.id="heading"
            let title = document.createElement("p")
            title.innerText=el.Title
            let year = document.createElement("p")
            year.innerText=`Year: ${el.Year}`
            let rating = document.createElement("p")
            rating.innerText = `IMDB Rating: ${el.imdbRating}`
            headingbox.append(title,year,rating)
        box.append(image,headingbox)
        document.querySelector("#movies").append(box)
    
    })
}
