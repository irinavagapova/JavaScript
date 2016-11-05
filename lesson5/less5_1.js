/*	Написать функцию преобразования цвета из 10-ного представления в 16-ный. Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш.*/
	function rgbToHex (r, g, b)

	    { 

	        r = r.toString(16);

	        g = g.toString(16);

	        b = b.toString(16);

	         

	        if (r.length == 1) r = '0' + r;

	        if (g.length == 1) g = '0' + g;

	        if (b.length == 1) b = '0' + b;

	         

	        return (r + g + b).toUpperCase();

	    }

	//var Hex = rgbToHex (0, 0, 255);
var Hex= rgbToHex (200, 0, 255);
	console.log(Hex);