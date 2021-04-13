#include <stdio.h>
#include <stdlib.h>


int vetorA[10];
int i;
int a;
int b;


int main()


{

	printf("Preencha o vetor:");

	for(i = 0; i < 10; i++){

		scanf("%d",&vetorA[i]);

	}


	for(int i = 0; i < 10; i++){


		for(int j = i +1; j < 10; j++){


			if(vetorA[i] > vetorA[j]){

				a = vetorA[i];
				vetorA[i] = vetorA[j];
				vetorA[j] = a;


			}

		}
	}

	printf("Os numeros do vetor em ordem sao:");
	for( i = 0; i < 10; i++){

		printf("\n %d \n",vetorA[i]);
	}


	

	system("PAUSE");
	return 0;
}
