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


		  



	void registraProduto(){

		   		 

					        if (ponteiroCalcado  == NULL) {
			    printf(" Erro na alocacao de memoria\n");
			    
			  } else {
			    printf(" Alocado dinamicamente\n");
			  

				
					
				ponteiroCalcado = (struct calcado*)realloc(ponteiroCalcado, (*ptrTam+1) * sizeof(struct calcado));


		        printf(" Informe codigo:\n");
		        scanf("%d", &ponteiroCalcado[*ptrTam].cod);
		        fflush(stdin);

		        printf(" Informe marca:\n");
		        scanf("%s", &ponteiroCalcado[*ptrTam].marca);
		        fflush(stdin);

		        printf(" Informe numero:\n");
		        scanf("%d", &ponteiroCalcado[*ptrTam].numero);
		        fflush(stdin);

		        printf(" Informe quantidade:\n");
		        scanf("%d", &ponteiroCalcado[*ptrTam].quantidade);
		        fflush(stdin);

		        printf(" Informe valor:\n");
		        scanf("%f", &ponteiroCalcado[*ptrTam].valor);
		        fflush(stdin);

		        	
		        (*ptrTam)++;


		   }
		    return;


	}


	void conferirProduto(){

		int opcaoConsulta;
		int i;


		printf(" Qual tipo de consulta deseja realizar: ?\n");
					printf(" Consulta por codigo: 1\n");
					printf(" Consulta por marca : 2\n");
					printf(" Consulta por numero : 3\n");
					printf(" Consulta geral: 4\n");
					scanf("%d", &opcaoConsulta);
					fflush(stdin);
		

					if(opcaoConsulta ==1){

						int codigo;
						printf(" Digite o codigo do calcado: ");
					    scanf("%d",&codigo);
					    fflush(stdin);

				  		

				  		for(i =0; i<*ptrTam; i++){
				        if(codigo == ponteiroCalcado[i].cod){
				        	
				      
				            printf(" Codigo: %d\n", ponteiroCalcado[i].cod);
				            printf(" Marca: %s\n", ponteiroCalcado[i].marca);
				            printf(" Numero: %d\n", ponteiroCalcado[i].numero);
				            printf(" Quantidade: %d\n", ponteiroCalcado[i].quantidade);
				            printf(" Valor: %f\n", ponteiroCalcado[i].valor);

				        }
				            
				        }
				            return;
				    

					}


					else if(opcaoConsulta ==2){
						char marca[20];
						printf(" Digite a marca do calcado:");
						scanf("%s",&marca);
						fflush(stdin);

						for(i =0; i<*ptrTam; i++){
				        if (strcmp(marca, ponteiroCalcado[*ptrTam].marca)){

				        	
				        	

				            printf(" Codigo: %d\n", ponteiroCalcado[*ptrTam].cod);
				            printf(" Marca: %s\n", ponteiroCalcado[*ptrTam].marca);
				            printf(" Numero: %d\n", ponteiroCalcado[*ptrTam].numero);
				            printf(" Quantidade: %d\n", ponteiroCalcado[*ptrTam].quantidade);
				            printf(" Valor: %f\n", ponteiroCalcado[*ptrTam].valor);
				            
				        }


				    }
				            return;
				    

					}

					else if(opcaoConsulta ==3){

						int numero;
						printf(" Digite o numero do calcado");
						scanf("%d",&numero);
						fflush(stdin);

						
						for(i =0; i<*ptrTam; i++){
						if(numero == ponteiroCalcado[*ptrTam].numero){

							
						
				            printf(" Codigo: %d\n", ponteiroCalcado[*ptrTam].cod);
				            printf(" Marca: %s\n", ponteiroCalcado[*ptrTam].marca);
				            printf(" Numero: %d\n", ponteiroCalcado[*ptrTam].numero);
				            printf(" Quantidade: %d\n", ponteiroCalcado[*ptrTam].quantidade);
				            printf(" Valor: %f\n", ponteiroCalcado[*ptrTam].valor);

				         }
				        
				    	}
				    
				            return;
				   }

				    else if(opcaoConsulta ==4){

				    		for( i = 0; i < *ptrTam; i++){
				    		printf(" Codigo: %d\n", ponteiroCalcado[*ptrTam].cod);
				            printf(" Marca: %s\n", ponteiroCalcado[*ptrTam].marca);
				            printf(" Numero: %d\n", ponteiroCalcado[*ptrTam].numero);
				            printf(" Quantidade: %d\n", ponteiroCalcado[*ptrTam].quantidade);
				            printf(" Valor: %f\n", ponteiroCalcado[*ptrTam].valor);

				        }
				    }
				        return;


				   }

				

			
	void alteraProduto(){


	}


	void excluiProduto(){


	}

	int main(){

		    ponteiroCalcado = (struct calcado *) calloc( 1, sizeof(struct calcado));
			int opcaoConsulta;
			int opcao;

		    int n = 1;

		    while (n > 0){

			    printf(" O que deseja fazer?\n");

			    printf(" Registrar um produto (Digite 1)\n ");
			    printf(" Alterar um produto (Digite 2)\n");
			    printf(" Conferir um produto (Digite 3)\n");
			    printf(" Excluir um produto (Digite 4)\n");
			    printf(" Sair (Digite 5)\n");

			    scanf("%d",&opcao);
			    fflush(stdin);

			    if(opcao == 1){
			    	registraProduto();
			    }
			    /*
			    else if(opcao ==2){
			    	alteraProduto();
			    }
				*/
			    else if(opcao == 3){
			    		
			    		conferirProduto();

					}
			    

			    /*else if(opcao ==4){
			    	excluiProduto();
			    }*/
			    else if(opcao ==5){
			    	break;
			    	exit(0);
			    }

		    }

		    system("pause");
		    free(ponteiroCalcado);

	}
