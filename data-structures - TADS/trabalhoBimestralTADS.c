#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct calcado {
    int cod;
    char marca[20];
    int numero;
    int quantidade;
    float valor;
}*ponteiroCalcado;

int tam = 0;
int *ptrTam = &tam;

int buscaCodigo(int codigo){

    for(int i = 0; i < *ptrTam; i++)
        if(codigo == ponteiroCalcado[i].cod)
            return i;
    return -1;

}

void imprimeProduto(int i){

    printf("\n\n Codigo: %d\n", ponteiroCalcado[i].cod);
    printf(" Marca: %s\n", ponteiroCalcado[i].marca);
    printf(" Numero: %d\n", ponteiroCalcado[i].numero);
    printf(" Quantidade: %d\n", ponteiroCalcado[i].quantidade);
    printf(" Valor: %f\n", ponteiroCalcado[i].valor);

}

void registraProduto(){

    if (ponteiroCalcado  == NULL)
        printf("\n\n Erro na alocacao de memoria\n");

        else {

            ponteiroCalcado = (struct calcado*)realloc(ponteiroCalcado, (*ptrTam+1) * sizeof(struct calcado));

            if (ponteiroCalcado  == NULL)
                printf("\n\n Erro na realocacao de memoria\n");

                else {
                    printf("\n Informe codigo:\n");
                    scanf("%d", &ponteiroCalcado[*ptrTam].cod);

                    fflush(stdin);
                    printf(" Informe marca:\n");
                    scanf("%s", &ponteiroCalcado[*ptrTam].marca);

                    printf(" Informe numero:\n");
                    scanf("%d", &ponteiroCalcado[*ptrTam].numero);

                    printf(" Informe quantidade:\n");
                    scanf("%d", &ponteiroCalcado[*ptrTam].quantidade);

                    printf(" Informe valor:\n");
                    scanf("%f", &ponteiroCalcado[*ptrTam].valor);

                    (*ptrTam)++;
                    printf(" \nProduto cadastrado com sucesso.\n");
                }
        }

    printf("\n");
    system("pause");
    return;
}

void confereProduto(){

    int opcaoConsulta = 0;
    int i;

    if(*ptrTam == 0)
        printf("\n\n Nao ha itens cadastrados.\n");
    else{
        printf("\n\n Qual tipo de consulta deseja realizar: ?\n");
        printf(" Consulta por codigo: 1\n");
        printf(" Consulta por marca: 2\n");
        printf(" Consulta por numero: 3\n");
        printf(" Relatorio completo: 4\n");
        fflush(stdin);
        scanf("%d", &opcaoConsulta);

        if(opcaoConsulta ==1){

            int codigo = 0;
            fflush(stdin);
            printf("\n\n Digite o codigo do calcado: ");
            scanf("%d", &codigo);

            i = buscaCodigo(codigo);

            if(i == -1){
                printf("\n\n Codigo nao encontrado.\n");
            }

            else imprimeProduto(i);
        }

        else if(opcaoConsulta ==2){

            int flag = 0;
            char marca[20];
            printf("\n\n Digite a marca do calcado:\n");
            fflush(stdin);
            scanf("%s",&marca);

            for(i =0; i<*ptrTam; i++)
                if (strcmp(marca, ponteiroCalcado[i].marca) == 0){
                    imprimeProduto(i);
                    flag++;
                }
            if (flag == 0)
                printf("\n\n Nenhum item da marca %s encontrado.\n", marca);
        }

        else if(opcaoConsulta ==3){

            int flag = 0;
            int numero = 0;
            printf("\n\n  Digite o numero do calcado:\n");
            fflush(stdin);
            scanf("%d",&numero);

            for(i =0; i<*ptrTam; i++)
                if(numero == ponteiroCalcado[i].numero){
                    imprimeProduto(i);
                    flag++;
                }
            if (flag == 0)
                printf("\n\n Nenhum item de numero %d encontrado.\n", numero);
        }

        else if(opcaoConsulta ==4){

            if(*ptrTam == 0)
                printf("\n\n Nao ha itens cadastrados.\n");
            else
                for(i =0; i<*ptrTam; i++)
                    imprimeProduto(i);
        }

        else printf("\n\n Opcao invalida.\n\n");
    }

    printf("\n");
    system("pause");
    return;
}

void alteraProduto(){

    if(*ptrTam == 0)
        printf("\n\n Nao ha itens cadastrados.\n");
    else{
        int codigo;
        printf("\n Informe codigo:\n");
        scanf("%d", &codigo);
        int posicao = buscaCodigo(codigo);

        if(posicao == -1)
            printf("\n\n Codigo nao encontrado.\n");
        else{

            printf(" \n\nDados atuais do item:\n");
            imprimeProduto(posicao);

            fflush(stdin);
            printf("\n Informe nova marca:\n");
            scanf("%s", &ponteiroCalcado[posicao].marca);

            printf(" Informe novo numero:\n");
            scanf("%d", &ponteiroCalcado[posicao].numero);

            printf(" Informe nova quantidade:\n");
            scanf("%d", &ponteiroCalcado[posicao].quantidade);

            printf(" Informe novo valor:\n");
            scanf("%f", &ponteiroCalcado[posicao].valor);

            printf(" \n\nProduto alterado com sucesso.\n");
        }
    }
    printf("\n");
    system("pause");
    return;
}

void excluiProduto(){

    if(*ptrTam == 0)
        printf("\n\n Nao ha itens cadastrados.\n");
    else{
        int codigo;
        printf("\n Informe codigo:\n");
        scanf("%d", &codigo);
        int posicao = buscaCodigo(codigo);

        if(posicao == -1){
            printf("\n\n Codigo nao encontrado.\n");
        } else if((*ptrTam == 1) && (posicao == 0)){
            free(ponteiroCalcado);
            ponteiroCalcado = (struct calcado *) malloc(sizeof(struct calcado));
            (*ptrTam)--;
            printf("\n\n Item removido com sucesso.\n");
        }
        else {
            for(int i = posicao; i < *ptrTam - 1; i++){
                ponteiroCalcado[i].cod = ponteiroCalcado[i + 1].cod;
                strcpy(ponteiroCalcado[i].marca, ponteiroCalcado[i + 1].marca);
                ponteiroCalcado[i].numero = ponteiroCalcado[i + 1].numero;
                ponteiroCalcado[i].quantidade = ponteiroCalcado[i + 1].quantidade;
                ponteiroCalcado[i].valor = ponteiroCalcado[i + 1].valor;
            }

            ponteiroCalcado = (struct calcado*)realloc(ponteiroCalcado, (*ptrTam - 1) * sizeof(struct calcado));
            (*ptrTam)--;
            printf("\n\n Item removido com sucesso.\n");
        }
    }
    printf("\n");
    system("pause");
    return;
}

int main(){

    ponteiroCalcado = (struct calcado *) malloc(sizeof(struct calcado));

    int opcaoConsulta;
    int opcao;

    printf("\n ATIVIDADE VALENDO NOTA - ALOCACAO DINAMICA - 1o. BIMESTRE  ||  VITOR KINDRAT\n\n");

    while (1){

    printf("\n Software SAPATO SHOW - O que deseja fazer?\n\n");

    printf("\tRegistrar um produto (Digite 1)\n");
    printf("\tAlterar um produto (Digite 2)\n");
    printf("\tConferir um produto (Digite 3)\n");
    printf("\tExcluir um produto (Digite 4)\n");
    printf("\tSair (Digite 5)\n");
    printf(" > ");

    fflush(stdin);
    scanf("%d",&opcao);

    if(opcao == 1)
        registraProduto();

    else if(opcao ==2)
        alteraProduto();

    else if(opcao == 3)
        confereProduto();

    else if(opcao ==4)
        excluiProduto();

    else if(opcao ==5){
        free(ponteiroCalcado);
        system("pause");
        exit(0);
        }
    }
    return 0;
}
