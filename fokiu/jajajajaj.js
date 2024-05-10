const typed = new Typed('.typed', {
	strings: [
		'<i class="texto">the best website in the world</i>',
		'<i class="texto">MID</i>',
		'<i class="texto">@da_rio.patito</i>',
		'<i class="texto">Siempre tiene que haber lluvia para que las flores puedan salir.</i>',
		// '<i class="texto">why are you here??</i>',
		'<i class="texto">. . .</i>',
		'<i class="texto">I think Im falling in love</i>',
		"<i class='texto'>I think she's perfect</i>",
		"<i class='texto'>but don't say anything...</i>",
		"<i class='texto'>🤫</i>",



	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 60, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 15, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
