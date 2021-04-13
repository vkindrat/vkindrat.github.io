#include <stdio.h>
#include <stdlib.h>


int matrizA[3][3];
int i;
int j;
int soma;
int vetorSoma;

int main()
{



	printf("Digite os valores para a matriz:");
	for(i = 0; i < 3; i++){

		for(j = 0; j <3; j++){

			scanf("%d",&matrizA[i][j]);
		}

	}

	printf("matrizA: \n");
	for(i = 0; i < 3; i++){


		for(j = 0; j <3; j++){

			printf("%d",matrizA[i][j]);
		}

		printf("\n");
	}


	for(i = 0; i < 3; i++){


		for(j = 0; j <3; j++){

			
				soma = soma + matrizA[i][j];
				printf(" \n %d \n",soma);
			
		}

		printf("\n");
	}




	system("PAUSE");
	return 0;
}
