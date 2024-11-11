const cardContainer = document.getElementById('card-container');
const overlay = document.getElementById('overlay');

// - Funzione toggle per mostrare e non l'overlay
function displayOverlay() {
	overlay.classList.toggle('d-none');
}

// - Faccio una richiesta all'API per avere 6 foto (con rispettivi URL e TITLE)
fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
	.then((response) => response.json())
	.then((data) => {
		// - Per ogni oggetto ricevuto creo una carta (con rispettivi URL e TITLE)
		data.forEach((element) => {
			cardContainer.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 g-4">
				<div class="card h-100  p-3">
					<img class="pin" src="./img/pin.svg" alt="pin" />
					<img class="main-image rounded" src=${element.url} alt="${element.title}" />
				<div class="card-subtitle my-3 h3">${element.title}</div>
				</div>
			</div>
					`;
		});

		// - Prendo le carte generate e gli do un eventListener (click)
		const cards = document.querySelectorAll('#card-container .card');
		let mainImage;
		cards.forEach((card) => {
			card.addEventListener('click', () => {
				// - Prendo il nodo dell'immagine cliccata
				mainImage = card.querySelector('.main-image');

				displayOverlay();

				// - Creo un bottone, un immagine e un sottotitolo all'interno dell'overlay
				const overlay = document.getElementById('overlay');
				overlay.innerHTML = `
				<button class="btn btn-primary">Chiudi</button>
				<img class="main-image rounded d-block mt-4" src="${mainImage.src}" alt="" />
				<p class="container card-subtitle my-3 h5 text-light">${mainImage.alt}</p>
				`;

				// - Al click del pulsante "chiudi" l'overlay torna a "display none"
				const closeButton = document.querySelector('#overlay .btn');
				closeButton.addEventListener('click', displayOverlay);
			});
		});
	});
