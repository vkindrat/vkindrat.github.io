#include <stdio.h>
#include <stdlib.h>



int main()


{
	int x = 8;
	int y = 22;
	


	int *pont1;
	int *pont2;

	pont1 = &x;
	pont2 = &y;
	

	printf("\n %x \n %x \n \n",pont1,pont2);
	

	if(pont1 > pont2){

		printf("\n %x \n",pont1);
	} else{

		printf("\n %x \n",pont2);
	}

	system("PAUSE");
	return 0;

}