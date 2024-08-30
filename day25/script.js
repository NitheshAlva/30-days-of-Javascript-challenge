const inputform=document.querySelector("#inputform")
const searchbar=document.querySelector("#searchbar")
const errmsg=document.querySelector("#errmsg")
const showmore=document.querySelector("#showmore")
const showless=document.querySelector("#showless")
const long=document.querySelector("#long")
const short=document.querySelector("#short")


const title=document.querySelector("#title")
const poster=document.querySelector("#poster")
const year=document.querySelector("#year")

const movieposter=document.querySelector("#movie-poster")
const movietitle=document.querySelector("#movie-title")
const releasedate=document.querySelector("#release-date")
const imdbrating=document.querySelector("#imdb-rating")
const imdbvotes=document.querySelector("#imdb-votes")
const genre=document.querySelector("#genre")
const language=document.querySelector("#language")
const runtime=document.querySelector("#runtime")
const director=document.querySelector("#director")
const writer=document.querySelector("#writer")
const actors=document.querySelector("#actors")
const plot=document.querySelector("#plot")
const country=document.querySelector("#country")



let data;
const apikey="4d1e74c9";
const defaultPoster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGodbj0sF1AYkdbc9LsjL1FDgHVGf0jHV_g&s"


const getData= async(name)=>{
    try{
        const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=${apikey}`)
        console.log(response)
        if(!response.ok)
            throw new Error("Unable to fetch data!! "+response.statusText);
        data = await response.json()
        console.log(data)
        if(data.Response=='False'){
            errmsg.innerHTML=s=data.Error
            return;
        }
    }
    catch(err){
        console.log(err.message)
        errmsg.innerHTML="Error Ocurred! Unable to get the data"
    }
}

const displayData=async()=>{
    try{
        title.innerHTML=data.Title
        year.innerHTML=data.Year
        if(data.Poster==undefined||data.Poster=='N/A')
            poster.setAttribute("src",defaultPoster)
        else
            poster.setAttribute("src",data.Poster)

            movietitle.innerHTML=data.Title
            releasedate.innerHTML=data.Released
            if(data.Poster==undefined||data.Poster=='N/A')
                movieposter.setAttribute("src",defaultPoster)
            else
                movieposter.setAttribute("src",data.Poster)
    
            imdbrating.innerHTML=data.imdbRating
            imdbvotes.innerHTML=data.imdbVotes
            genre.innerHTML=data.Genre
            language.innerHTML=data.Language
            runtime.innerHTML=data.Runtime
            director.innerHTML=data.Director
            writer.innerHTML=data.Writer
            actors.innerHTML=data.Actors
            plot.innerHTML=data.Plot
            country.innerHTML=data.Country
            
        if(!data)
            throw new Error("Could not get the data")
    }
    catch(err){
        console.log(err.message)
        errmsg.innerHTML="Error Ocurred! Unable to get the data"
    }
}


inputform.addEventListener('submit',async (event)=>{
    event.preventDefault();
     
    await getData(searchbar.value)
    showless.click()
    displayData()
    searchbar.value=""
    if(data.Response=='True')
        errmsg.innerHTML=""
})


window.addEventListener('load',async ()=>{
    long.classList.add("hidden");
    await getData("HIT")
    displayData()
    errmsg.innerHTML=""
})

showless.addEventListener('click',(event)=>{
    short.classList.remove("hidden");
    long.classList.add("hidden");
})

showmore.addEventListener('click',(event)=>{
    short.classList.add("hidden");
    long.classList.remove("hidden");
})