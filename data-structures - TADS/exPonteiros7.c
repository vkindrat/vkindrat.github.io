#include<stdio.h>
#include<stdlib.h>
#include<math.h>
float pi = 3.14;

void calc_esfera(float R, float *area, float *volume){
    *area = 4 * pi * pow(R,2);
    *volume = (4/3) * pi * pow(R,3);
}


int main(){
    float R, area, volume;
    printf("Informe tamanho do raio\n");
    scanf("%f",&R);
    calc_esfera(R, &area, &volume);
    printf("A area da esfera eh: %.2f\n", area);
    printf("O volume da esfera eh: %.2f\n", volume);
    system("pause");
}
