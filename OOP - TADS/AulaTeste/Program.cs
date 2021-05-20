
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AulaTeste.Classes;

namespace AulaTeste
{
    class Program
    {
        static void Main(string[] args)
        {
            Avaliacao A = new Avaliacao();

            A.Nota = 0;
            A.Peso = 7;
            A.Gabarito = new System.Collections.Generic.
                Dictionary<Questoes, string>();

            A.Questoes = new System.Collections.Generic.List<Questao>();
            A.Questoes.Add(new Questao { 
                
                
                Pergunta = Questoes.QUESTAO1, 
                Resposta ="B",
                Peso = 1
            
            
            });
            A.Questoes.Add(new Questao
            {


                Pergunta = Questoes.QUESTAO2,
                Resposta = "A",
                Peso = 2

            });
            A.Questoes.Add(new Questao
            {


                Pergunta = Questoes.QUESTAO3,
                Resposta = "C",
                Peso = 3

            });

        }



    }
}
