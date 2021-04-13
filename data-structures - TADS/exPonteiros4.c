#include <stdio.h>
#include <stdlib.h>




int soma(int *a, int *b){



	*a = *a + *b;
	printf("\n FUNCAO SECUNDARIA:  \n Soma de a + b : %d \n",*a);

}


int main()


{

	int a,b;

	printf("Digite um valor para a e para b:");
	scanf("%d %d", &a,&b);

	

	soma(&a,&b);
	printf("\n FUNCAO PRINCIPAL\n ");
	printf("\n Valores de a e b: %d \n %d \n" ,a, b);

	system("PAUSE");
	return 0;

}