using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AulaTeste.Classes
{


    

    public class Questao
    {
        public Questoes Pergunta { get; set; }
        public string Resposta { get; set; }

        public decimal Peso { get; set; }

        public Questao() { }




    }
    public class Avaliacao
    {

        public Dictionary<Questoes, string> Gabarito { get; set; }

        public List<Questao> Questoes { get; set; }

        public int Peso { get; set; }
        public decimal Nota { get; set; }

        public Avaliacao()
        {

        }
    }




}
