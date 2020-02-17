const cards =["queen", "queen", "king", "king"];
const cardsInPlay = [];
const cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped" + cardOne);
const cardTwo = cards[2];
cardsInPlay.push(cardTwo);
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("you found a match!");
}
else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert(" sorry, try again");
}
}
