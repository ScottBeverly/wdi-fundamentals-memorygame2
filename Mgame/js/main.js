const cards =["queen", "queen", "king", "king"];
const cardsInPlay = [];

function  checkformatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert(" sorry, try again");
	}
}

function flipCard(CardId) {
	const cardTwo = cards[2];
	const cardOne = cards[0];
	cardsInPlay.push(cardOne);
	cardsInPlay.push(cardTwo);
	console.log("user flipped" + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
}
flipCard(0);
flipCard(2);
if (cardsInPlay.length === 2){

checkformatch();
}
