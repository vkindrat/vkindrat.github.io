#include <stdlib.h>
#include <stdio.h>



int somaRecursivaPares(int num){


    if ((num > 1) && (num % 2)){

        return somaRecursivaPares(num - 1);
    }

    if((num > 1) && !(num % 2)){

        return num + somaRecursivaPares(num - 1);
    }


    return 0;
}


int main()


{
    int num;
    printf("Digite um numero ");
    scanf("%d", &num);

    printf("soma dos numeros pares ateh num : %d \n", somaRecursivaPares(num));


    system("PAUSE");
    return 0;
}