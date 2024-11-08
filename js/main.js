const photos = [];
const cardContainer = document.querySelector('.card-container');

// - Funzione toggle per mostrare e non l'overlay
function displayOverlay() {
	const overlay = document.getElementById('overlay');
	overlay.classList.toggle('d-none');
	overlay.innerHTML = '';
}

// - Faccio una richiesta all'API per avere 6 foto (con URL e TITLE)
fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
	.then((response) => response.json())
	.then((data) => {
		// - Per ogni oggetto ricevuto creo una carta con rispettivi URL e TITLE
		data.forEach((element) => {
			cardContainer.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 g-4">
						<div class="card h-100  p-3">
							<img class="pin" src="./img/pin.svg" alt="" />
							<img class="main-image rounded" src=${element.url} alt="${element.title}" />
							<div class="card-subtitle my-3 h3">${element.title}</div>
						</div>
					</div>
            `;

			// - Prendo le carte generate e gli do un eventListener (click)
			const cards = document.querySelectorAll('.card');
			cards.forEach((card) => {
				card.addEventListener('click', function () {
					// - Prendo il nodo dell'immagine cliccata tramite
					const mainImage = card.querySelector('.main-image');

					displayOverlay();

					// - Creo un bottone, un immagine e un sottotitolo all'interno dell'overlay
					const overlay = document.getElementById('overlay');
					overlay.innerHTML = `
					<button class="btn btn-primary">Chiudi</button>
					<img class="main-image rounded d-block mt-4" src="${mainImage.src}" alt="" />
					<div class="container card-subtitle my-3 h5 text-light">${mainImage.alt}</div>
					`;

					// - Al click del pulsante "chiudi" l'overlay torna a "display none"
					const closeButton = document.querySelector('.overlay .btn');
					closeButton.addEventListener('click', displayOverlay);
				});
			});
		});
	});
