#include<stdio.h>
#include<stdlib.h>

int main(){

    int *x, i,media,n;


    x = (int*) malloc(n* sizeof(int));

    if(x==NULL){
        printf("Erro na Alocacao!!!\n");
        exit(1);


    }


    printf("Digite o tamanho do vetor n");
    scanf("%d",&n);

    for(i=0;i<n;i++){

        printf("Informe posicao x[%d]: ", i);

        scanf("%d",&x[i]);


    }

    for(i=0;i<n;i++){

        printf("%5d", x[i]);
        
    }

    

    printf("\n");

    free(x);

    system("pause");
}