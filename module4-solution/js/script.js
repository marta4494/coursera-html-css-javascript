(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var prop in names){
    var firstLetter = names[prop].toLowerCase().charAt(0);
    if (firstLetter == 'j'){
      byeSpeaker.speak(names[prop]);
    } else {
      helloSpeaker.speak(names[prop]);
    }
  }
})();
