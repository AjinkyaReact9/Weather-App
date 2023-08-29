let location1='pune';
let flag = true;
document.querySelector('.mob').style.display  = 'none'
let apiKey = 'f89c4ff2d6441a4134f6b13975cc84ba';

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location1}&appid=${apiKey}`).then((response)=>{

//     let data=response.json();

//     return data

// }).then((data)=>{

// let city = data.name

//     console.log(city);

// })

// async function fetch_data(){
//     let locationNew = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location1}&appid=${apiKey}`);
//     let data = await locationNew.json();
//     console.log(data);
// }

// fetch_data();


function search()
{
    if (flag)
    {
        document.querySelector('.body1').style.display = 'none';
        document.querySelector('.mob').style.display  = 'block';
    }
}

function back()
{
    if (flag)
    {
        document.querySelector('.body1').style.display = 'block';
        document.querySelector('.mob').style.display  = 'none';
    }
}