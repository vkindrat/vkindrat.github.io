#include <stdio.h>
#include <stdlib.h>


int i;

int main()
{




	struct p{

		int codigo, quantidade;
		char nome[25];
		float preco;

	} produto[5];



	struct ped{

		int codigo, quantidade;

	}pedido;


	for(i =0; i < 5; i++){

	printf("\n Informe o codigo do produto: \n");
	fflush(stdin);
	gets(p[i].codigo);

	printf("\nInforme a quantidade do produto: \n");
	fflush(stdin);
	gets(p[i].quantidade);

	printf("\nInforme o nome do produto: \n");
	fflush(stdin);
	gets(p[i].nome);

	printf("\nInforme o preco do produto: \n");
	fflush(stdin);
	gets(p[i].preco);




	}

	printf("Faca um pedido:");
	fflush(stdin);
	gets(pedido.codigo, pedido.quantidade);

	if(pedido.quantidade > p[i]){

	}

	system("PAUSE");
	return 0;
}
