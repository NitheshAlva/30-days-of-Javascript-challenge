const temprature=document.querySelector("#temperature")
const weatherinfo=document.querySelector("#weather-detail")
const humidity=document.querySelector("#humidity")
const date=document.querySelector("#date")
const place=document.querySelector("#place")
const errmsg=document.querySelector("#errmsg")
const searchform=document.querySelector("#searchform")
const inputbar=document.querySelector("#inputbar")
const prev=document.querySelector("#prev")
const next=document.querySelector("#next")
let index=0,length;
let data;

const getCords=async (location)=>{

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    const apiId="98d59afeef93405dcb35822a0686efe1";
  
    const response= await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiId}`, requestOptions);
    if(!response.ok)
        throw new Error("Unable to fetch cordinates: "+response.statusText)
    const result=await response.json()
    console.log(result[0].lat,result[0].lon)
    return [result[0].lat,result[0].lon];
  }
  
  
  const getWeather=async(location)=>{
    try{
      const [lat,lon]= await getCords(location);
      const apiId="98d59afeef93405dcb35822a0686efe1";
      const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiId}`)
      if(!response.ok)
          throw new Error("Unable to fetch weather information: "+response.statusText)
      const result = await response.json();
      console.log((result))

      length=result.cnt;
      place.innerHTML=result.city.name
      index=0
      data=result;
    }
    catch(err){
      console.error(err.message)
    }
  }

  const displayWeather=  async ()=>{
    try{
        date.innerHTML=data.list[index].dt_txt
        temprature.innerHTML=(data.list[index].main.temp-273.15).toFixed(2)
        humidity.innerHTML=data.list[index].main.humidity
        weatherinfo.innerHTML=data.list[index].weather[0].description
    }
    catch(err){
        errmsg.innerHTML="Unable to display weather information!!"
        console.error(err)
    }
  }

prev.addEventListener("click",()=>{
    index--;
    if(index<0)
            index=length-1
    displayWeather();
})

next.addEventListener("click",()=>{
    index=(index+1)%length
    displayWeather();
})

searchform.addEventListener("submit",async (event)=>{
    event.preventDefault();
    await getWeather(inputbar.value)
    displayWeather()
    errmsg.innerHTML=""
    inputbar.value=""
})


window.addEventListener("load",async()=>{
    await getWeather("mangalore")
    displayWeather()
})