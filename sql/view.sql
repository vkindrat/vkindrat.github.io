use sakila_db;

create view cliente_cidade_vw as
select c.primeiro_nome as Nome, cd.cidade as Cidade from cliente c
join endereco e on e.endereco_id = c.endereco_id
join cidade cd on cd.cidade_id = e.cidade_id;

select * from cliente_cidade_vw;