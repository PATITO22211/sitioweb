const typed = new Typed('.typed', {
	strings: [
		  '<i class="texto">¿te gustaría iniciar de nuevo?</i>',
    '<i class="texto">¿si?</i>',
		// '<i class="texto">¿te gustaría ser mi novia?</i>'
		// '<i class="texto">Python</i>',
		// '<i class="texto">CSS</i>',
		// '<i class="texto">Y estoy aprendiendo sobre C++</i>',
		// '<i class="texto">me gusta más programar en python</i>',
		// '<i class="texto">estoy haciendo un proyecto en python y con linux para controlar una pc remotamente</i>',
		// '<i class="texto"></i>'

	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 57, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 30, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});