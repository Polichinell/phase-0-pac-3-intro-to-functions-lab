let shout = function (string) {
    return string.toUpperCase();
  }

  //console.log(shout("let's gooooo"))

let whisper = function (string) {
    return string.toLowerCase();
  }

let logShout = function (string) {
    console.log(string.toUpperCase())
}

let logWhisper = function (string) {
    console.log(string.toLowerCase())
}


//logShout("we're so back")

let sayHiToHeadphonedRoommate = function (string) {

    if (string===string.toLowerCase()){
      return "I can't hear you!"
    }
  
    else if (string===string.toUpperCase()) {
      return "YES INDEED!"
    }
  
    else if (string==="Let's have dinner together!") {
      return "I would love to!"
    }
  }