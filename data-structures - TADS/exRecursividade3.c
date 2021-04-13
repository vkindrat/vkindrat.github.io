#include<stdio.h>
#include<time.h>

float soma (float vet[], int n){//recursiva
    if (n == 0) {
        return 0;
    }else{
        return vet[n-1] + soma(vet, n-1);
    }
}
int main(){
    int n,i;
    srand(time(NULL));
    printf("Informe a quantidade de posicoes do vetor\n");
    scanf("%d",&n);
    float vet[n];
    printf("preencha o vetor com %d valores\n", n);
    for(i=0;i<n;i++){
        vet[i] = rand()%100;
    }
    for(i=0;i<n;i++){
        printf("%.2f  ",vet[i]);
    }
    printf("\na soma de todas as posicoes do vetor eh %f\n", soma(vet,n));
}
