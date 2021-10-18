CREATE DATABASE highFive;
USE highFive;

CREATE TABLE cidade (
  id int(10) AUTO_INCREMENT,
  nome varchar(200),
  cidade varchar(200),
  PRIMARY KEY (`id`)
);

CREATE TABLE cliente (
  id int(10) AUTO_INCREMENT,
  id_cidade int(20),
  nome varchar(200),
  email text (200),
  cpf varchar (11),
  rg varchar (20),
  dataNasc date,
  telefone int (20),
  login varchar (200),
  senha varchar (200),
  logradouro varchar (500),
  numero int (10),
  bairro varchar (100),
  cep int (10),
  PRIMARY KEY (`id`)
);

create table forma_pagamento(
	id int(10) AUTO_INCREMENT,
	descricao varchar (5000),
	PRIMARY KEY (`id`)
);

create table categorias(
	id int(10) AUTO_INCREMENT,
	descricao varchar (5000),
	PRIMARY KEY (`id`)
);

create table produtos(
	id int(10) AUTO_INCREMENT,
	idCategoria int (100),
	descricao varchar (5000),
	preco float (10),
	imagem varchar (5),
	nome varchar (100),
	PRIMARY KEY (`id`)
);

create table itensPedidos(
	id int(10) AUTO_INCREMENT,
	idProduto int (20),
	idPedido int (20),
	quantidade int (100),
	PRIMARY KEY (`id`)
);

create table status(
	id int(10) AUTO_INCREMENT,
	situacao varchar (100),
	PRIMARY KEY (`id`)
);

create table adm(
	id int(10) AUTO_INCREMENT,
	nome varchar (100),
	login varchar (100),
	senha varchar (100),
	PRIMARY KEY (`id`)
);

create table Pedido(
	id int(10) AUTO_INCREMENT,
	idLogin int(30),
	IdFormaPAG int (30),
	frete float (10),
	total float (10),
	IdStatus int (30),
	data date,
	PRIMARY KEY (`id`)
);

ALTER TABLE cliente 
ADD FOREIGN KEY (id_cidade) REFERENCES cidade(id)

alter table Pedido
add foreign key (idLogin) references cliente(id)

alter table Pedido 
add foreign key (idFormaPAG) references forma_pagamento(id)

alter table pedido
add foreign key (idStatus) references status (id)

ALTER TABLE produtos 
ADD FOREIGN KEY (idCategoria) REFERENCES categorias(ID)

alter table itensPedidos
add foreign key (idProduto) references produtos(id)

alter table itensPedidos
add foreign key (idPedido) references pedido(id)

