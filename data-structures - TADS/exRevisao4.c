#include <stdio.h>
#include <stdlib.h>


int matrizA[5][5], i, j, a, soma;

int main()


{

	printf("Preencha a matriz:");

	for(i = 0; i < 5; i++){

		for(j = 0; j < 5; j++){


			scanf("%d",&matrizA[i][j]);

		}

	}

	printf(" Valores da matriz:\n");
	
	for(i =0; i< 5; i++){

		for(j = 0; j <5; j++){

			printf("%d",matrizA[i][j]);

		}

		printf("\n");

	}

	for(i =0; i< 5; i++){

		for(j = 0; j <5; j++){

			
			if(i == j){

				soma = soma + matrizA[i][j];
			}

		}

		printf("\n");

	}

	printf("A soma dos elementos da matriz 5x5 eh: %d \n",soma);

	

	system("PAUSE");
	return 0;
}
