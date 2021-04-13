#include<stdio.h>
#include<time.h>

void inverte(int vet[], int esq, int dir, int n) {
    int t,i;
    if (esq >= dir){//tamanho do vetor pode ser par ou impar
        for(i=0;i<n;i++){
            printf("%d   ",vet[i]);
        }
        return 0;
    }else{
        t = vet[esq];
        vet[esq] = vet[dir];
        vet[dir] = t;
        inverte(vet, esq+1, dir-1,n);
    }
}
int main(){
    int n,i,esq, dir;
    srand(time(NULL));//zera o clock o processador
    printf("Informe o tamanho do vetor\n");
    scanf("%d",&n);
    int vet[n];
    for(i=0;i<n;i++){
        vet[i] = rand()%100;
    }
    for(i=0;i<n;i++){
        printf("%d   ",vet[i]);
    }
    printf("\n");
    esq=0;
    dir=n-1;
    inverte(vet,esq,dir,n);
}

