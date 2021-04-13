#include<stdio.h>
#include<stdlib.h>


int primo (int m, int *p1, int *p2){
    int x,cont=0, i=1;
    for (x=m-1; x>0; x--){//menor primo que numero informado
        for (i=1; i<=x; i++){
            if(x%i==0){
                cont++;
            }
        }
        if(cont == 2){
            *p1 = x;
            break;
        }
        cont=0;
    }

    cont =0;
    
   for (x=m+1;; x++){// maior primo do numero informado
        for (i=1; i<=x; i++){
            if(x%i==0){
                cont++;
            }
        }
        if(cont == 2){
            *p2 = x;
            break;
        }
        cont=0;
    }
}


int main(){
    int m, p1=0, p2=0;
    printf("Informe numero de base para identificar primos\n");
    scanf("%d",&m);
    primo(m, &p1, &p2);
    printf("Maior primo abaixo de %d eh %d\n", m, p1);
    printf("Menor primo acima de %d eh %d\n", m, p2);
    system("pause");
}
