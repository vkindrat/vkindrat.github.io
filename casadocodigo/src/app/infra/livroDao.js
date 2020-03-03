class LivroDao{

	constructor(db){
		this._db = db;
	}

	lista(){
		return new Promise((resolve,reject) => {

		this._db.all('SELECT * FROM livros', 
			(erro, resultados) => {

				if(erro) return reject('Não foi possível obter lista de livros.')


				return resolve(resultados);
				
			}

		)

	});

}


	adiciona(livro){

		return new Promise((resolve,reject) => {

			this._db.run(`

				 INSERT INTO LIVROS (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)

                `
                ,
                [
                livro.titulo,
                livro.preco,
                livro.descricao
                ],
	                function(err){
	                if(err){
	                	console.log(err)
	                	return reject('Não foi possivel adicionar o livro. ')
	                }

	                resolve()

					}
                )

		})
		
	}

	buscaPorId(id){

		return new Promise((resolve, reject) => {
			this._db.get(`
				SELECT * FROM LIVROS 
				WHERE id = ?
				`,
				[id],
				(erro, livro) => {
					if(erro){
						return reject('Não foi possível encontrar o livro!');
					}
					return resolve(livro)
				}
			);

		});
		
	}
	

	
	atualiza(livro){
		     return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    }



	remove(id){

		  return new Promise((resolve, reject) => {
            this._db.run(
                `
                    DELETE 
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o livro!');
                    }
                    return resolve();
                }
            );
        });
    }


}







module.exports = LivroDao;