
const c=document.getElementById("city1");

const h11=document.getElementById("h");



async function getData(){

    let city=c.value ;
    const res=await fetch(`https://api.weatherstack.com/current?access_key=57015934f3e11f22e1ec9c8b0076c335&query=${city}`);

    const data=await res.json();

    

    h11.innerHTML=`Welcome to weather of ${data.location.name}`;
    div1.innerHTML=`City :${data.location.name}`;
    div2.innerHTML=`Temperature :${data.current.temperature}`;
    div3.innerHTML=`Weather Description :${data.current.weather_descriptions[0]}`;
    div4.innerHTML=`Humidity :${data.current.humidity}`;


}