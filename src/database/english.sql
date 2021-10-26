CREATE DATABASE highfive;
USE highfive;

CREATE TABLE clients (
    ClientID INT(99) NOT NULL AUTO_INCREMENT,
    ClientCityID INT(99),
    ClientName varchar(200),
    ClientEmail varchar(200),
    ClientPassword varchar(200),
    ClientCPF varchar(11),
    ClientRG varchar(20),
    ClientBirth date,
    ClientPhone varchar(20),
    ClientAddress varchar(500),
    ClientHouseNumber varchar(10),
    ClientDistrict varchar(100),
    ClientCity varchar(200),
    ClientState varchar(200),
    ClientZip INT(10),
    PRIMARY KEY(`ClientID`)
);

create table payments(
	PaymentID INT(99) NOT NULL AUTO_INCREMENT,
	PaymentDescription varchar (50),
    PRIMARY KEY(`PaymentID`)
);

create table categories(
	CategoryID INT(99) NOT NULL AUTO_INCREMENT,
	CategoryName varchar (50),
    PRIMARY KEY(`CategoryID`)
);

create table products(
	ProductID INT(99) NOT NULL AUTO_INCREMENT,
    ProductName varchar(100),
	ProductDesc varchar(5000),
	ProductPrice decimal(30,2),
	ProductImage varchar (200),
    ProductCategoryID int(99),
    PRIMARY KEY(`ProductID`),
    FOREIGN KEY (ProductCategoryID) REFERENCES categories(CategoryID)
);

create table status(
	StatusID INT(10) NOT NULL AUTO_INCREMENT,
	StatusType varchar(100),
    PRIMARY KEY(`StatusID`)
);

create table orders(
    OrderID INT(99) NOT NULL AUTO_INCREMENT,
    OrderClientID INT(99),
    OrderPaymentID INT(99),
    OrderShipping decimal(30,2),
    OrderTotal decimal(30,2),
    OrderStatusID INT(10),
    OrderDate timestamp,
    PRIMARY KEY(`OrderID`),
    FOREIGN KEY (OrderClientID) REFERENCES clients(ClientID),
    FOREIGN KEY (OrderPaymentID) REFERENCES payments(PaymentID),
    FOREIGN KEY (OrderStatusID) REFERENCES status(StatusID)
);

create table order_items(
	ItemID INT(99) NOT NULL AUTO_INCREMENT,
	ItemProductID INT(99),
	ItemOrderID INT(99),
	ItemQuantity INT(99),
    PRIMARY KEY(`ItemID`),
    FOREIGN KEY (ItemProductID) REFERENCES products(ProductID),
    FOREIGN KEY (ItemOrderID) REFERENCES orders(OrderID)
);

create table administrators(
	AdminID INT(99) NOT NULL AUTO_INCREMENT,
	AdminName varchar(100),
	AdminUser varchar(100),
	AdminPass varchar(100),
    PRIMARY KEY(`AdminID`)
);
