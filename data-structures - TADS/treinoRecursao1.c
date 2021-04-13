#include <stdio.h>
#include <stdlib.h>
#include <math.h>




int alocaString(int t){

	char *s;
	s = (char*) malloc(t* sizeof(char));
	printf("Informe palavra com ate %d caracteres:" t-1);
	fflush(stdin);
	gets(s);
	printf("%s\n",s);
	

}


int main()



{

	int t;
	printf("Digite o tamanho da string:");
	scanf("%d",&t);

	alocaString(t);

	

	system("PAUSE");
	return 0;

}