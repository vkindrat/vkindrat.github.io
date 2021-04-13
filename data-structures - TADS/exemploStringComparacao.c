#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
    struct livro {
        char nome[20];
        int cod;
    }*exemplar;

    int i,codigo;
    char nomeL[20];
    exemplar = (struct livro *) malloc(5 * sizeof(struct livro));

    for(i=0; i<5 ; i++){
        printf("Informe nome:\n");
        scanf("%s", exemplar[i].nome);
        printf("Informe codigo:\n");
        scanf("%d", &exemplar[i].cod);
    }
    printf("qual nome deseja consultar?\n");
    scanf("%s",&nomeL);


    for(i=0; i<5 ; i++){
        if(!strcmp(nomeL,exemplar[i].nome)){
            printf("Nome: %s\n", exemplar[i].nome);
            printf("Codigo: %d\n", exemplar[i].cod);
        }
    }
    free(exemplar);

}
