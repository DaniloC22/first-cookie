<?php
//Conectar con la base de datos
if ($_SERVER["REQUEST_METHOD" == "POST"]) {
    $conexion = new mysqli("location", "root", "", "usuariosBD");


    //Obtener los datos del formulario
    $nombre = $conexion->real_escape_string($_POST["nombre"]);
    $email = $conexion->real_escape_string($_POST["email"]);
    $password = $conexion->real_escape_string($_POST["password"]);
    $password2 = $conexion->real_escape_string($_POST["confirmpassword"]);

    //real_escape_string: ayuda a que los datos no comprometan la seguridad de la base de datos

    //Verificar si el usuario o el email ya existen en la base de datos

    $sql_check = "SELECT 1 FROM usuarios WHERE nombre = '$nombre' OR email = '$email'";

    $resultado = $conexion->query($sql_check);
}
// SELECT 1 se utiliza para seleccionar datos de una base de datos

if ($resultado->num_rows > 0) {
    //Redirigir si existe un usuario con el mismo nombre o mail
    header("Location:rechazar.php");
    exit();
}
    /* num_rows > 0 verifica si una consulta SQL que devuelve 
    un resultado, tenga al menos una fila*/

    //Encriptar la contraseña e insertar el usuario en la b. de d.

    $password_encriptada = password_hash($password, PASSWORD_BCRYPT);

    $sql_insert = "INSERT INTO usuarios (nombre,email,password)
    VALUES('$nombre', '$email', '$password_encriptada')";

    //Registro correcto del usuario
    if ($conexion->query($sql_insert) === TRUE) {
        header("Location: confirmar.php");
        exit();
    }

    // Cerrar conexión
    $conexion->close();