#include <stdio.h>
#include <stdlib.h>



int main()


{
	int x = 2;
	char y = 'a';
	float z = 6;


	int *pont1;
	char *pont2;
	float *pont3;

	pont1 = &x;
	pont2 = &y;
	pont3 = &z;



	printf(" %d \n %c \n %.2f \n ",x,y,z);

	*pont1 = 45;
	*pont2 = 'd';
	*pont3 = 1;
	
	printf(" %d \n %c \n %.2f \n ",x,y,z);

	system("PAUSE");
	return 0;

}