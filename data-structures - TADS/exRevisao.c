#include <stdio.h>
#include <stdlib.h>


int vetorA[8];
int contadora = 0;
int soma = 0;
float media;
int i;


int main()
{




	printf("Digite valores para o vetor A:");

	for(i = 0; i < 8; i++){

			scanf("%d", &vetorA[i]);

			soma = soma + vetorA[i];

	}		

			media = soma / 8;

	

	printf("\n O media eh: %.2f \n",media);


	for(i = 0; i < 8; i++){

		if(vetorA[i] > media ){
		contadora++;
	}
	
	}



	printf("\n O total de valores acima da media eh: %d \n", contadora);


	system("PAUSE");
	return 0;

