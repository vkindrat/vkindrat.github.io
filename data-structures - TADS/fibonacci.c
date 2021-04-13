#include <stdio.h>
#include <stdlib.h>
int fibonacci(int x);

int num;


int fibonacci(int x){


	if(x == 1 || x == 0){

		return x;
	}

	else{

		return (fibonacci(x-1) + fibonacci(x -2));
	}



}



int main()
{

	printf("\n Digite um numero: \n");
	scanf("%d",&num);

	printf("\n fibonacci desse numero eh: %d \n",fibonacci(num));




	system("PAUSE");
	return 0;

}