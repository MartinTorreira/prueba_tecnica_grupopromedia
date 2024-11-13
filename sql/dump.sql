CREATE DATABASE formulario_contacto;

USE formulario_contacto;

DROP TABLE IF EXISTS contactos;

CREATE TABLE contactos(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(100),
    asunto VARCHAR(100),
    mensaje TEXT NOT NULL
)
