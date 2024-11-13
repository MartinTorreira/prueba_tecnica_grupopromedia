# Formulario de Contacto

El formulario se valida en el frontend y, una vez válido, se envía a un backend PHP que guarda la información en una base de datos MySQL.

## Estructura del Proyecto

- **`js/`**: Contiene los archivos JavaScript que gestionan la interfaz de usuario, incluyendo la validación del formulario y la interacción con el backend.
- **`php/`**: Contiene el archivo `submit_form.php`, que recibe los datos enviados desde el formulario y los guarda en la base de datos MySQL.
- **`css/`**: Contiene los archivos CSS para los estilos del formulario y la interfaz.
- **`index.html`**: El archivo HTML principal que contiene la estructura del formulario y los elementos de la interfaz de usuario.
  
## Requisitos

### 1. Servidor Backend (PHP y MySQL)

Se configura un servidor PHP y una base de datos MySQL configurados.

### 2. Configuración de la Base de Datos

```sql
CREATE DATABASE formulario_contacto;

USE formulario_contacto;

CREATE TABLE contactos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(15),
    asunto VARCHAR(255),
    mensaje TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
