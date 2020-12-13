let openwkey = '8abcfb33f9dbbf37ed94c46d8ec7cd3a'

//var 1: trimit ajax direct din client la cele 2 api, primesc raspunsul in client si
//scriu rezultatul in client

// $('#submitCity').click(function (e) { 
//     e.preventDefault();
//     console.log($('#city').val());
//     $.ajax({
//         type: "get",
//         url: "https://api.mapbox.com/geocoding/v5/mapbox.places/" + $('#city').val() + ".json?access_token=pk.eyJ1IjoiYWRlcXVhY3kiLCJhIjoiY2tpZGgycWUyMHUwMzJycGU3Y3JwcHVoMyJ9.Y7D3ekjQbd8P_8iD1XDhTQ",
//         //  url:'https://api.mapbox.com/geocoding/v5/mapbox.places/targu%20jiu.json?access_token=pk.eyJ1IjoiYWRlcXVhY3kiLCJhIjoiY2tpZGgycWUyMHUwMzJycGU3Y3JwcHVoMyJ9.Y7D3ekjQbd8P_8iD1XDhTQ',
//         error: function (jqXHR, textStatus, errorThrown) {
//             console.log(errorThrown);
//             console.log('eroarea')
//         },//erorile in async se gestioneaza cu jqXHR, in functie de statusul lui
//         success: function (response) {
    
//             console.log(response.features[0].text + ' ajax1 ' + response.features[0].center);
           
//             $.ajax({
//                 type: "get",
//                 //  url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8abcfb33f9dbbf37ed94c46d8ec7cd3a",
//                 url: `http://api.openweathermap.org/data/2.5/weather?lat=${response.features[0].center[1]}&lon=${response.features[0].center[0]}&appid=${openwkey}`,
//                 success: function (response, status) {
    
//                     console.log(response.main.temp + ' ajax2 ' + response.name);
//                     console.log(status);
//                     document.querySelector('#paragraspuns').innerHTML=response.name
//                     document.querySelector('#city').value=''
//                 },
//                 error: function (jqXHR, textStatus, errorThrown) {
//                     // console.log(textStatus);
//                     // console.log(errorThrown+' ceva');
//                     // console.log('ceva nu a mers: '+jqXHR.responseJSON.message);
//                     console.log(jqXHR);
//                 }
//             });
//         }
//     });
// });

//var 2: trimit doar orasul la server (cu get si query), si acolo fac interogare api si trimit inapoi raspunsul
//scriu raspunsul in client
$('#formweather').submit(function (e) { 
    e.preventDefault();
    let data=document.querySelector('#city').value
    console.log(data);
    // console.log(x);
    $.ajax({
        type: "get",
        url: "/weather/ceva?city="+data,
         
        success: function (response) {
            console.log(response);
            document.querySelector('#paragraspuns').innerHTML=response.name
            let x=document.querySelector('#formweather').childNodes
//nodelist (.childNodes) este iterabil, htmlcollection (.children) nu este iterabil
//sterg valoarea inputurilor, care nu se mai sterge automat fiindca nu fac submit (e.preventDefault())
            x.forEach(element => {
             if (element.value!='') {
                 element.value=''
             }   
            });
        }
    });
});
 