

window.onload = function() {
  let numberRandom = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "J",
    "Q",
    "K"
  ];
  let symbolRandom = ["&spades;", "&hearts;", "&diams;", "&clubs;"];

  let random = Math.floor(Math.random() * 4);
  if (random == 1 || random == 2) {
    document.getElementsByClassName("symbol")[0].style.color = "red";
    document.getElementsByClassName("symbol")[1].style.color = "red";
  }

  document.getElementsByClassName("symbol")[0].innerHTML = symbolRandom[random];
  document.getElementsByClassName("symbol")[1].innerHTML = symbolRandom[random];

  document.getElementsByClassName("number")[0].innerHTML = numberRandom[Math.floor(Math.random() * 13)];
    
};