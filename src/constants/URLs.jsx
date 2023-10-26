import andrej from "../assets/images/andrej.jpg";
import bojan from "../assets/images/bojan.jpg";
import bube from "../assets/images/bube.jpg";
import dadi from "../assets/images/dadi.jpg";
import dame from "../assets/images/dame.jpg";
import ivanovski from "../assets/images/ivanovski.jpg";
import jovan from "../assets/images/jovan.jpg";
import luka from "../assets/images/luka.png";
import mance from "../assets/images/mance.jpg";
import marko from "../assets/images/marko.jpg";
import petar from "../assets/images/petar.jpg";
import simon from "../assets/images/simon.png";

const imageURLs = [
	andrej,
	bojan,
	bube,
	dadi,
	dame,
	ivanovski,
	jovan,
	luka,
	mance,
	marko,
	petar,
	simon,
];

const randomizedImageURLs = Array(imageURLs.length * 2).fill(null);

imageURLs.forEach((el) => {
	let cardAddedCounter = 0;
	while (cardAddedCounter < 2) {
		let randomIndex = Math.floor(Math.random() * randomizedImageURLs.length);
		if (randomizedImageURLs[randomIndex] === el || randomizedImageURLs[randomIndex] !== null) {
			continue;
		} else {
			randomizedImageURLs[randomIndex] = el;
			cardAddedCounter++;
		}
	}
});

let cards = [];
randomizedImageURLs.forEach((url, i) => {
	cards[i] = { imageURL: url, isShown: false, isCompleted: false };
});

export const CARDS = cards;
