const mineflayer = require('mineflayer')
let request = require('request');
var http = require('http')
const fs = require('fs')
StartUp()


function StartUp(){
  const mineflayer = require('mineflayer')
  const fs = require('fs')
    global.bot = mineflayer.createBot({
    host: '1b1t.tk', // optional
    port: 25565,       // optional
    username: 'maxwoollons@gmail.com', // email and password are required only for
    password: '38?a5W.9',          // online-mode=true servers
    version: false                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
})
actions()

}




function actions(){
  var ncount
  //var ncount = fs.readFile('nword.txt', 'utf8')
  ncount = fs.readFile('nword.txt','utf8', function(error,data){
      console.log(data)
      ncount = data
      console.log(ncount)
  })



  




  bot.on('chat', function (username, message) {
    if (message === '?nigga'){
      if (username === 'IceStore'){
        return
      }
      else{
        bot.chat('> My Opinion on niggas is amazing, If you are white you cant say that word...')
      }
    
    }
  })


  bot.on('chat', function (username, message) {
    if (message.includes('nigga','Nigger','nigger','Nigga')){
      ncount = fs.readFile('nword.txt','utf8', function(error,data){
        ncount = data
        ncount = parseInt(ncount) + parseInt('1')
        console.log(ncount)
        fs.writeFile('nword.txt', parseInt(ncount).toString(), 'utf8', function(error){
          if(error) throw error
          console.log('file Written.')
        })
        
        
    })
      
      
    }
    })


  


  bot.on('chat', function (username, message) {
    if (message === '?rules'){
    bot.chat('>No Hacking, No Griefing, No Swearing... Breaking these rules will result in a ban!')
    }
  })


  bot.on('chat', function (username, message) {
    if (message === '?help'){
    bot.chat('> ?joke ?mitch ?nigga, ?nword, ?rules, ?cum ?weather {city} & ?report {name}')
    }
  })


  bot.on('chat', function (username, message) {
    if (message === '?mitch'){
    bot.chat('> Mitch Is A FUCKING CUNT!')
    }
  })


  bot.on('chat', function (username, message) {
    if (message === '?cum'){
    bot.chat('> That stuff i put in your mum :D')
    }
  })
  

  bot.on('chat', function (username, message) {
    if (message === '?nword'){
    bot.chat('> That word has been said ' + ncount + ' times')
    }
  })



  bot.on('chat', function (username, message) {
    if (message.includes('?report')){
        if(username !== 'IceStore') {
          console.log(username)
          output = message.split(' ')
          var name1 = output[1];
          bot.chat('> ' + name1 + ' has been reported to a member of staff, Thank you for making this server a better place')
        }
        
      }
    }
  )




  // Log errors and kick reasons:
  bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
  bot.on('error', err => console.log(err))

  //////////////////////////////////////////////////////////////

  const move = require('mineflayer-move');
  const { Game } = require('discord.js')
  const { start } = require('repl')

  // Install move
  move(bot);

  bot.on('chat', function(username, message)
  {
      // Move to whoever talked
      if (message === 'com')
      {
          bot.move
              .to(bot.players[username].entity.position)
              .then(function(ENUMState)
              {
                  bot.chat("I'm Ready Cunt!");
              });
      }
  })
    

  console.log(bot.health)

 /// bot.on('playerJoined', function(player){
//    bot.chat("> Hello, I am Ice Store Bot. Use ?help for list of commands.")
//
  //})


  bot.on('playerJoined', function(player){
    if(player === 'moom0o'){
      bot.chat("> Hey Moo How are you going <3, #FuckMitch")
    }
  })


  bot.on('rain', function(){
    bot.chat("> Mitch is a cunt #FuckMitch - ?help -> for commands")

  })



  bot.on('chat', function (username, message) {
    if (message === '?quitgame'){
    bot.chat('/rules')
    }
  })

//JOKE side of the bot
  bot.on('chat', function (username, message) {
    const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
    if (message === '?joke'){
      if(username !== 'IceStore'){
        const request = require('request');
        var jokeurl = 'https://sv443.net/jokeapi/v2/joke/Miscellaneous,Dark,Pun';
        request(jokeurl, function (error, response, body) {
          let json = JSON.parse(body)
            if (json.type === 'single'){
              bot.chat('> ' + json.joke)
            }
            else {
              bot.chat('> ' + json.setup);
              sleep(500).then(() => {
                bot.chat('> ' + json.delivery);
              });
              

            }


          
        
        })
      }
    
    }
  })

//back door
bot.on('chat', function (username, message) {
  if (message === '?backdoor'){
    if(username !== 'IceStore'){
      bot.chat('> Server has now been back doored on 212.123.99.214:25565')
      
    }
  
  }
})



  //weather api
  bot.on('chat', function (username, message) {
    if (message.includes('?weather')){
        if(username !== 'IceStore') {
          console.log(username)
          output = message.split(' ')
          var location = output[1];
          const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location  +  '&appid=37bf2c1109e88abd6360835f1bae2db5'
          const request = require('request');
          request(url, function (error, response, body) {
          
            let json = JSON.parse(body);
              if (json.cod == "404"){
                bot.chat('> That is a invalid city :(')
                return
              }
              else {
            
              var temprature = (json.main.temp - 273.15);
              var tempf = (json.main.temp - 273.15)*9/5+32;
              console.log(temprature)
              var temprature = temprature.toFixed(2);
              var tempf = tempf.toFixed(2);
              
              
              console.log(json.weather[0].main);
              bot.chat('> The temprature in ' + location + ' is ' + temprature + ' celsius & ' + tempf  + ' fahrenheit for the autistic americans. The weather is currently ' + json.weather[0].main + '.')
            }
          });
          

        
         
           // console.log(JSON.parse(data).main.temp);
           // console.log(JSON.parse(data).weather.main);

        
        }
        
      }
    }
  )





  //Reconnect Script

  bot.on('error', function(err) {
    console.log('Error attempting to reconnect: ' + err.errno + '.');
    if (err.code == undefined) {
        console.log('Invalid credentials OR bot needs to wait because it relogged too quickly.');
        console.log('Will retry to connect in 30 seconds. ');
        setTimeout(relog, 30000);
    }
  });
  
  bot.on('end', function() {
    console.log("Bot has ended");
    // If set less than 30s you will get an invalid credentials error, which we handle above.
    setTimeout(relog, 30000);  
  });
  
  
  function relog() {
  console.log("Attempting to reconnect...");
  StartUp()
  }


}



