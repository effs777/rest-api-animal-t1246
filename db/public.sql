-- Active: 1706044690405@@localhost@5432@api_zoologico
create table tbl_animal (
    id SERIAL PRIMARY KEY, nombre VARCHAR(500), sonido VARCHAR(10), creado TIMESTAMP DEFAULT current_timestamp
);