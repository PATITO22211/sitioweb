const typed = new Typed('.typed', {
	strings: [
		'<i class="texto">the best website in the world</i>',
		'<i class="texto">MID</i>',
		'<i class="texto">@da_rio.patito</i>',
	
		'<i class="texto">9268</i>',
		"<i class='texto'>I make the best websites</i>",
		"<i class='texto'>🤫</i>",
		'<i class="texto">. . .</i>',
		'<i class="texto">always available</i>',
		"<i class='texto'>DXRG</i>",
		"<i class='texto'>🗽</i>",
		"<i class='texto'>₯</i>",
		// "<i class='texto'>waiting for love</i>",
		"<i class='texto'>when it will be my turn for <3 ...</i>",
		"<i class='texto'>2024...</i>",
		'<i class="texto">Im going to be a f***king money maker</i>',

		"<i class='texto'>I'm going to be the money man</i>",
		"<i class='texto'>₯</i>",


	],

	// stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 30, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 10, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '🔫', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

const typed2 = new Typed('.typed2', {
	strings: [
		'<i class="texto">...</i>',
		'<i class="texto">+52</i>',
		'<i class="texto">😵‍💫</i>',
		"<i class='texto'>Dario monito</i>",
		'<i class="texto">Business ideas</i>',
		'<i class="texto">ⅩⅣ</i>',
		// '<i class="texto">school does not teach you how to generate money</i>',
		"<i class='texto'>DXRG</i>",
		"<i class='texto'>I'm not crazy just nobody understands me</i>",
		"<i class='texto'>→ follow me in ig ←</i>",
		"<i class='texto'>🤫</i>",
		// "<i class='texto'>waiting for love</i>",
		"<i class='texto'>2009</i>",
		"<i class='texto'>😎🔥</i>",
		"<i class='texto'>MAKING MONEY SINCE 2023</i>",
		"<i class='texto'>I'm going to be the money man</i>",
		"<i class='texto'>I hate people called alex, not all but some of them...</i>",
		'<i class="texto">Im going to be a f***king money maker</i>',
		
		
		"<i class='texto'>🧨</i>",
		"<i class='texto'>₯</i>",


	],

	// stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 10, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 9, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the infomodal
    var infoModal = document.getElementById('infoModal');

    // Get the button that opens the infomodal
    var infoBtn = document.getElementById('infoBtn');

    // Get the <span> element that closes the infomodal
    var closeBtn = infoModal.getElementsByClassName('close')[0];

    // When the user clicks the button, open the infomodal 
    infoBtn.onclick = function(event) {
        event.preventDefault();
        infoModal.classList.add('show');
        infoModal.style.display = "block";
    }

    // Function to close the modal with fade out effect
    function closeModal() {
        infoModal.classList.remove('show');
        infoModal.classList.add('fade-out');
        
        // Wait for the fade-out animation to complete before hiding the modal
        setTimeout(function() {
            infoModal.style.display = "none";
            infoModal.classList.remove('fade-out');
        }, 500);
    }

    // When the user clicks on <span> (x), close the infomodal
    closeBtn.onclick = function() {
        closeModal();
    }

    // When the user clicks anywhere outside of the infomodal, close it
    window.onclick = function(event) {
        if (event.target == infoModal) {
            closeModal();
        }
    }
});

