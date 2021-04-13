#include <stdio.h>
#include <stdlib.h>



int main()


{
	int x;
	int y;
	


	int *pont1;
	int *pont2;

	pont1 = &x;
	pont2 = &y;
	

	printf("\n Digite um valor para x:\n");
	scanf("%d",&x);

	printf("\n Digite um valor para y: \n");
	scanf("%d",&y);



	printf("\n %x \n %x \n ",pont1,pont2);

	if(pont1 > pont2){

		printf("\n endereco da variavel x: %x \n conteudo da variavel x: %d \n",pont1,*pont1);
	}
	else{

		printf("\n endereco da variavel y: %x \n conteudo da variavel y: %d \n",pont2,*pont2);
	}
	



	system("PAUSE");
	return 0;

}