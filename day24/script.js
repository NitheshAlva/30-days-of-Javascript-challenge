const temprature=document.querySelector("#temperature")
const weatherinfo=document.querySelector("#weather-detail")
const humidity=document.querySelector("#humidity")
const city=document.querySelector("#city")
const errmsg=document.querySelector("#errmsg")
const searchform=document.querySelector("#searchform")
const inputbar=document.querySelector("#inputbar")

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
    const response= await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`)
    if(!response.ok)
        throw new Error("Unable to fetch weather information: "+response.statusText)
    const result = await response.json();
    console.log((result))
    return [result.main.humidity,result.main.temp,result.name,result.weather[0].description]
  }
  catch(err){
    console.error(err.message)
    return ["00","00.00","default","Not Available"]
  }

}

const displayweather= async (location)=>{
  try{
    let [humid,temp,name,desc]= await getWeather(location)
    humidity.innerHTML="Humidity: "+humid
    city.innerHTML="Place: "+name
    temprature.innerHTML=(temp-273.15).toFixed(2);
    weatherinfo.innerHTML=desc
  }
  catch(err){
    errmsg.innerHTML="Unable to display weather information!!"
    console.error(err)
  }
}




window.addEventListener("load",()=>{
  displayweather("mangalore")
})

searchform.addEventListener("submit",(event)=>{
  event.preventDefault();
  displayweather(inputbar.value)
  inputbar.value=""
  errmsg.innerHTML=""
})


