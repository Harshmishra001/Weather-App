const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
// AB ITNA KRNE K BAAD JAO OPENWEATHERMAP WEBSITE P VHA aCCOUNT BNAO OR VHA UPR HI API H USPE CLICK KRO USME CURRENT WEATHER DATA H USME API DOC H USME CLICK KRKE FIR USNE SCROLL KRKE NICHE AAO LIKHA HOGA NICHE BUILT IN API REQUEST BY CITY NAME

// const visibility = document.querySelector('.visibility')




const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


 async function checkWeather(city){


    const api_key = "ca1ab2713e115f0f0cd6fa248e465b8c"; //jb aap openweathermap p account bnayenge toh upr apke hi email account p my api ka option hoga uspe click kro or api copy krlo or yha paste krdo
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;  //OR VHA UPR HI API H USPE CLICK KRO USME CURRENT WEATHER DATA H USME API DOC H USME CLICK KRKE FIR USNE SCROLL KRKE NICHE AAO LIKHA HOGA NICHE BUILT IN API REQUEST BY CITY NAME  m jo phla link h usse copy krlo or paste krdo yha fir uske baad jo paste kia h usss link k last m jha api key likha h usse htao or aapne jo variable bnaya hai n just isse upr api key k naam s usse copy krke paste kro uss bracket m or bs aage dollar sign lgadena jisse vo access kr paaye upr waale api key ko, or ussi link m q= k baad likha h (city name) usse bhi htao or aapne function m jo parametre pass kiya h city k naam s toh usse copy krke paste krdo q=k bracket m jha city name tha or dollar sign lgado bs aage

    const weather_data =  await fetch(`${url}`).then(response => response.json());   //yha humne await use kia h or await hmesha asyn function m use krte h toh upr function k aage async lga denge, yha ussss url ko fetch kr re h jo just upr diye h 2 api key or ek or uske niche wala isliye .then use krke rsponse lere h or uss response ko json m convert kr re h mtlb(string m)
   console.log(weather_data);   //check krlo apna data jo fetch hunction lara h  output page p jao fir search bar p cursor laake inspect kro vha kuch bhi liko jese delhi,mumbai toh vha ka sara data fetch hojayega console p


    if(weather_data.cod === `404`){  //code hume status code  deta h 404 mtlb error h
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    // console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;  //weather data ko jb console p print kraya toh usme main tha uss main m temp tha usse trgt kr re h , or ye  hume kelvin m dega weather toh celcius m krne k liye 273 s minus krdia tb bhi,  bht bdi decimal m value aayegi celcius m convert hone k baad bhi toh hum usse math.round function ka use krke usse round off krlenge  ,SIMILARLY NICHE BAKIO KO BHI ESE HI TRGT KRLIA
    description.innerHTML = `${weather_data.weather[0].description}`;  //YHA BHI WEATHER DATA M WEATHER M JAAKE USKE 0 TH INDEX P DESCRIPTION MIL RA H TOH ISLIYE USSE ACCESS KRNE K LIYE 0 LIKHA H
    //  visibility.innerHTML=`${weather_data.visibility}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`; //SIMILARLY YHA BHI KRLIA 
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;  // YHA BHI


    switch(weather_data.weather[0].main){   // YHA WEATHER_DATA K ANDR WEATHER M JO 0 INDEX P DESCRIPTION H USME MAIN H USSE TRGT KR RE H 
        case 'Clouds':   //AGR USKE MAIN M LIKHA H CLOUDS TOH YE IMG LGADO , SIMLARLY BAKIO KA BHI ESSE HI IMG SET KRDO
           weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;  //ye break lgna jruri h vha vhi same img repeat hogi
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;

    }

    console.log(weather_data);

     

}






searchBtn.addEventListener('click', ()=>{   //yha hum bolre h searchbtn p click krte hi checkweather wala function fired/run ho
    checkWeather(inputBox.value); //or inputbox m value print hojaye
});