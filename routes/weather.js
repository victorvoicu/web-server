var express = require('express');
var router = express.Router();

//pt jquery in node,necesita npm install jquery si jsdom
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

//cheia personala pt un api de weather
let openwkey = '8abcfb33f9dbbf37ed94c46d8ec7cd3a'


router.get('/weather',function (req,res) {
    let obj={
        forecast:'a',
        location:''
    }
    res.render('weather.ejs',{date:JSON.stringify(obj),name:'v'})
    
  })

//primesc nume oras de la client (view), interoghez cu jqajax ambele api si la final 
//trimit raspunsul cu res.json catre client
//la client preiau response.name (orice alte propr din obiect) si il folosesc in pagina

router.get('/weather/ceva',function (req,res) { 
  console.log(req.query.city)
  let city=req.query.city
let openwkey = '8abcfb33f9dbbf37ed94c46d8ec7cd3a'
$.ajax({
          type: "get",
          url: "https://api.mapbox.com/geocoding/v5/mapbox.places/" + city + ".json?access_token=pk.eyJ1IjoiYWRlcXVhY3kiLCJhIjoiY2tpZGgycWUyMHUwMzJycGU3Y3JwcHVoMyJ9.Y7D3ekjQbd8P_8iD1XDhTQ",
          //  url:'https://api.mapbox.com/geocoding/v5/mapbox.places/targu%20jiu.json?access_token=pk.eyJ1IjoiYWRlcXVhY3kiLCJhIjoiY2tpZGgycWUyMHUwMzJycGU3Y3JwcHVoMyJ9.Y7D3ekjQbd8P_8iD1XDhTQ',
          error: function (jqXHR, textStatus, errorThrown) {
              console.log(errorThrown);
              console.log('eroarea')
          },//erorile in async se gestioneaza cu jqXHR, in functie de statusul lui
          success: function (response) {
      
              console.log(response.features[0].text + ' ajax1 ' + response.features[0].center);
             
              $.ajax({
                  type: "get",
                  //  url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8abcfb33f9dbbf37ed94c46d8ec7cd3a",
                  url: `http://api.openweathermap.org/data/2.5/weather?lat=${response.features[0].center[1]}&lon=${response.features[0].center[0]}&appid=${openwkey}`,
                  success: function (response, status) {
      
                      console.log(response.main.temp + ' ajax2 ' + response.name);
                      console.log(status);
                      res.json(response)
                   },
                  error: function (jqXHR, textStatus, errorThrown) {
                      // console.log(textStatus);
                      // console.log(errorThrown+' ceva');
                      // console.log('ceva nu a mers: '+jqXHR.responseJSON.message);
                      console.log(jqXHR);
                  }
              });
          }
      });
 })

module.exports={router}

 