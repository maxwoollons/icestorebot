const mineflayer = require('mineflayer')
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
    bot.chat('> ?mitch ?nigga, ?nword, ?rules, ?cum & ?report {name}')
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

  bot.on('playerJoined', function(player){
    bot.chat("> Hello, I am Ice Store Bot. Use ?help for list of commands.")

  })


  bot.on('playerJoined', function(player){
    if(player === 'moom0o'){
      bot.chat("> Hey Moo How are you going <3, #FuckMitch")
    }
  })


  bot.on('rain', function(){
    bot.chat("> Mitch is a cunt #FuckMitch - ?help -> for commands")

  })



  bot.on('chat', function (username, message) {
    if (message === '?quit'){
    bot.chat('/rules')
    }
  })

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

