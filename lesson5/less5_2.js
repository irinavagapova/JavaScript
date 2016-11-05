 function change(x)
 { 
	 var arr={};
	 string=x.toString ();
	 new_string=string.split('').reverse().join('');// инвертирование строки
	 
	 if (x<1000)
	 {
		arr={'единицы': new_string[0], 'десятки': new_string[1]||0, 'сотни': new_string[2]||0} // либо число,либо ноль,если не задано значение
		console.log(arr);
	 }
	 else
	if(x>999 || x<0)
		{
			consol.log(' введите от 0 до 999');
		}
		
 }  
 x=5;
 //x=155;
 //x=34;
 change(x);