var cmds = [cmdFlipCoin, cmdRollDice, cmdRPS];

exports.checkCommands = function(dataHash, callback) {
  for (cmd in cmds) {
    var test = cmds[cmd](dataHash.request, callback);
    if (test) {
      if (!dataHash.funMode){
        callback(true, "Sorry I'm no fun right now", []);
        return test;
      }
      callback(true, test, []);
      return test;
    }
  }
}

exports.getCmdListDescription = function () {
  cmdArr = [
    {cmd: "/flipcoin", desc: "Returns heads or tails 50/50 chance", fun: true},
    {cmd: "/roll #d#", desc: "Will simulate a random dice roll of # number dice and # sides. EX: /roll 2d6 will roll two six sided dice.", fun: true},
    {cmd: "/rps", desc: "Returns rock, paper, or scissors 1/3 chance", fun: true}
  ];

  return cmdArr;
}

function cmdFlipCoin(request){
  var regex = /^\/flipcoin$/i;

  if (regex.test(request.text)) {
    var num = Math.floor((Math.random() * 2) + 1);
    var msg = "Heads!";
    if (num == 1) {
      msg = "Tails!";
    }

    return msg;
  } else {
    return false;
  }
}

function cmdRollDice(request){
  
}

function cmdRPS(request){
  var regex = /^\/rps$/i;
  
  if (regex.test(request.text)) {
    var num = Math.floor((Math.random() * 3) + 1);
    var msg = "Rock!";
    if (num == 2) {
      msg = "Paper!";
    } else if (num == 3) {
      msg = "Scissors!";
    }
    return msg;
  } else {
		msg = "I brokededed bzzt";
  }
