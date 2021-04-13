#include <stdio.h>
#include <stdlib.h>


int vetorA[10];
int vetorB[10];
int vetorC[10];
int i;


int main()

		{

			printf("Digite valores para o vetor A:");

			for(i = 0; i < 10; i++){
				scanf("%d", &vetorA[i]);
			}	

			printf("Digite valores para o vetor B:");

			for(int i = 0; i < 10; i++){
				scanf("%d", &vetorB[i]);
			}

			for(int i = 0; i < 10; i++){


				if(vetorA[i] > vetorB[i] ){
					vetorC[i] = 1;
				}
				else if(vetorA[i] == vetorB[i]){
					vetorC[i] = 0;
				}
				else if(vetorA[i] < vetorB[i]){
					vetorC[i] = -1;

				}

			}



	system("PAUSE");
	return 0;
}
