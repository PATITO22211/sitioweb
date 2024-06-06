const typed = new Typed('.typed', {
	strings: [
		'<i class="texto">the best website in the world</i>',
		'<i class="texto">MID</i>',
		'<i class="texto">@da_rio.patito</i>',
		'<i class="texto">9268</i>',
		"<i class='texto'>I make the best websites</i>",
		'<i class="texto">todos enciendan un incienso no por las vibras, es por que apestan a hipocresía</i>',
		'<i class="texto">. . .</i>',
		'<i class="texto">always available</i>',
		"<i class='texto'>DXRG</i>",
		"<i class='texto'>←</i>",
		"<i class='texto'>🤫</i>",
		"<i class='texto'>I'm not crazy just nobody understands me</i>",
		// "<i class='texto'>waiting for love</i>",
		"<i class='texto'>when it will be my turn for <3 ...</i>",
		"<i class='texto'>2024...</i>",
		"<i class='texto'>I hate people called alex, not all but some of them...</i>",
		"<i class='texto'>I'm going to be the money man</i>",
		"<i class='texto'>₯←</i>",
		"<i class='texto'>Fuck that shit la nueva ola</i>",
		"<i class='texto'>Ya conoces mi arroba</i>",


	],

	// stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 12, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 15, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '🔫', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
