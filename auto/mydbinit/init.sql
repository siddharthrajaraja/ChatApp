DROP DATABASE IF EXISTS chatapp;

SELECT NULL as "I am in";

CREATE DATABASE chatapp
    WITH
    OWNER = postgres
    ENCODING = 'UTF-8'
    CONNECTION LIMIT =-1;

\c chatapp

CREATE TABLE sample_tbl ( uname varchar(50) );

CREATE TABLE user_tbls (
    username varchar(50) NOT NULL,
    mobile bigint,
    email varchar(50),
    password varchar(100) NULL,
    PRIMARY KEY(mobile,email)
 );