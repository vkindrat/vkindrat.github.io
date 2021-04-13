#include <stdio.h>

int soma (int num){
    int a,b;
    a = num % 10;
    b = (num - a)/10;
    if (b <= 0){
        return a;
    }else{
        return a + soma(b);
    }
}
int main(){
    int num;
    printf("informe um numero\n");
    scanf("%d",&num);
    printf("a soma dos digitos do numero eh %d\n", soma(num));
}
