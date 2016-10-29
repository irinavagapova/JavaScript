console.log('1ое задание');
var i;
var num_1 = 3;
var num_2 = 5;
for(i=1;i<=100;i++)
{
	result_1 = i%num_1;
	result_2 = i%num_2;
	if(result_1 == 0 && result_2 != 0 ){ // числа делятся только на 3
		console.log('Fizz');
	}
	/*else 
		if(result_2 == 0 && result_1 != 0)// числа делятся на 5 но не на 3
		
	{
		console.log('Buzz');		
	}*/
	
		if(result_2 == 0 && result_1 == 0) //числа делятся на 5  и на 3
		{
			console.log('FizzBuzz');
		}
	else
	{
		console.log(i);
	}

}
