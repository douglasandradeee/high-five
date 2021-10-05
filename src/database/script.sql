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
	descricao varchar (5000),
	preco float (10),
	imagem varchar (5),
	nome varchar (100),
	PRIMARY KEY (`id`)
);

create table itensPedidos(
	id int(10) AUTO_INCREMENT,
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
	frete float (10),
	total float (10),
	data date,
	PRIMARY KEY (`id`)
);