let newsdata = document.getElementById('news');

var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'q=coronavirus&' +
          'apiKey=2fe23c6efa794d17bdc8b5181508f400';

var myInit = { 
method: 'GET',
// headers: myHeaders,
headers:{
    'Accept':'application/json',
    'Content-Type':'application/json',
},
mode: 'no-cors'
// cache: 'default' 
};

const request = async () => {
    const response = await fetch(url,myInit);
    console.log(response);
    
    const json = await response.body();
    console.log(json);
}

request();



// http://newsapi.org/v2/top-headlines?country=in&q=coronavirus&apiKey=c0ea8fd251e44bb6813966915365b008

var req = new Request(url, myInit);
fetch(req)
    // ,{
    // mode: 'no-cors'
    // }
    .then(res => res.json())
    .then(data => {
            console.log(data)
    })



// fetch('https://newsapi.org/v2/top-headlines?country=in&q=coronavirus&apiKey=2fe23c6efa794d17bdc8b5181508f400')
//     .then(res => {
//         console.log('hi');
//         res.json()
//     })
//     .then(data => {
//             console.log(data)
//     });
