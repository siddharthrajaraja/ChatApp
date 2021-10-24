DROP DATABASE IF EXISTS chatapp;

SELECT NULL as "I am in";

CREATE DATABASE chatapp 
    WITH
    OWNER = postgres
    ENCODING = 'UTF-8'
    CONNECTION LIMIT =-1;

\c chatapp

CREATE TABLE sample_tbl ( uname varchar(50) );
