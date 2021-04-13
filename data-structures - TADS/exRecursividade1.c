#include <stdio.h>
#include <stdlib.h>



int recursiva(int n){

	if(n == 1){

		return 1;
	}

	else{

		return (n + recursiva(n - 1));

	}


}



int main()
{
	int n;
	printf("Digite um numero:");
	scanf("%d",&n);
	printf("%d",recursiva(n));


	system("PAUSE");
	return 0;

}