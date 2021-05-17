public class Curso 
{
	public int IDCurso {get;set;}
	public string Nome {get;set;}
	
	public Professor Professor {get;set;}	
	public List<Aluno> Alunos {get;set;}
	
	public Curso()
	{		
	}
}
