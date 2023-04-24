const typed = new Typed('.typed', {
	strings: [
		'<i class="texto">Mi Nombre es Darío</i>',
		'<i class="texto">Sé programar</i>',
		'<i class="texto">Html, Js, python, css</i>',
		'<i class="texto">estoy aprendiendo C++</i>',
		'<i class="texto">Tengo 13 años</i>',
		'<i class="texto">Soy de México</i>',
		'<i class="texto">Me estoy metiendo al campo de las IA</i>',
		'<i class="texto">eso es todo</i>',
		'<i class="texto"></i>'

	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
