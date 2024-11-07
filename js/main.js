// - Milestone 1
// * Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

// - Milestone 2
// * Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
// * https://jsonplaceholder.typicode.com/photos?_limit=6
// * Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

// - Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

// - Bonus
// rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
// Buon Lavoro

const photos = [];
const cardContainer = document.querySelector('.card-container');

// - Faccio una richiesta all'API per avere 6 foto (con ID, URL e TITLE)
fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
	.then((response) => response.json())
	.then((data) => {
		// - Per ogni oggetto ricevuto creo una carta con rispettivi URL e TITLE
		data.forEach((element) => {
			cardContainer.innerHTML += `
            <div class="col-4 g-4">
						<div class="card h-100  p-3">
							<img class="pin" src="./img/pin.svg" alt="" />
							<img class="main-image rounded" src=${element.url} alt="" />
							<div class="card-subtitle my-3 h5">${element.title}</div>
						</div>
					</div>
            `;

			const cards = document.querySelectorAll('.card');
			cards.forEach((card) => {
				card.addEventListener('click', function () {
					const mainImage = this.querySelector('.main-image');
					console.log(mainImage);
				});
			});
		});
	});
