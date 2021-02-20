### Ejercicio 1

- El componente Main debe tener una cabecera propia con las siguientes caracteristicas:
- Título alineado a la izquierda
- Un botón "Agregar" alineado a la derecha

Para resolver esto:

- Crear un componente Header que reciba las props necesarias. Tener en cuenta que una de esas props debe funcionar como evento de click. Recordar la teoría de pasaje de funciones como props.

### Ejercicio 2

- Crear una pagina Agregar tarea con su título correspondiente.
- Esta pagina tiene un formulario que perimte dar de alta tareas.
- Por el momento, las tareas tienen un título, una fecha, una descripción y un asignado.
- Crear una pagina Tareas con su título correspondiente y botón de agregar
- Esta pagina tiene una grilla con todas las tareas creadas hasta el momento.
- Las tareas pueden cambiar de estados (pendiente, realizada, cancelada).

(https://coderthemes.com/hyper/saas/apps-projects-list.html)
(https://coderthemes.com/hyper/saas/apps-tasks.html)
(https://coderthemes.com/hyper/saas/apps-kanban.html)

### Ejercicio 3

- Crear una pagina Agregar usuario con su titulo correspondiente.
- Esta pagina tiene un formulario que permite dar de alta usuarios.
- Por el momento, los usuarios tienen nombre, apellido, email y password.
- Crear una pagina Usuarios con su título correpondiente
- Esta pagina tiene una tabla con los usuarios creados hasta el momento.
- Resolver la funcionalidad de edición de usuario.
- Resolver la funcionalidad de eliminación de usuario.

### Ejercicio 4

- Agregar en utils un js que lleve comonombre firebase-config.
- El fichero debe tener el siguiente formato:

```js
import firebaseAuth from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "??????????????????????????????????",
  authDomain: "??????????????????????????????????",,
  databaseURL: "??????????????????????????????????",,
  projectId: "??????????????????????????????????",,
  storageBucket: "??????????????????????????????????",,
  messagingSenderId: "??????????????????????????????????",,
  appId: "??????????????????????????????????",,
};

firebaseAuth.initializeApp(firebaseConfig);
```

Los datos de tu cuenta se obtienen en la solapa "General" luego de hacer click en el engranaje que se encuentra al lado de "Información general".

- Exportar firebaseAuth

### Ejercicio 5

- Crear una pagina SignUp que permita registrar ususarios usando Nombre y apellido, Email, contraseña y repetir contraseña.

(https://coderthemes.com/hyper/saas/pages-register.html)
(https://coderthemes.com/hyper/saas/pages-register-2.html)

### Ejercicio 6

- Crear una pagina Login donde solo se muestre el footer del sitio.
- Los ususarios deben acceder con email y contraseña.

(https://coderthemes.com/hyper/saas/pages-login.html)
(https://coderthemes.com/hyper/saas/pages-login-2.html)

### Implementación de firebase

- Agregar la dependencia firebase (npm install firebase).
- Asi como hicimos el uso de axios exportando api, ahora haremos uso de firebase exportanto firebaseAuth.
- firebaseAuth contiene un método auth que a su vez nos da acceso a métodos como:
- signInWithEmailAndPassword
- createUserWithEmailAndPassword
- Una vez creado el usuario, se puede hacer uso del método "updateProfile" para agregar al usuario, en nombre y apellido. updateProfile recibe un objeto con la prop displayName.

### Ejercicio 7

- Crear un hook que resuelva todas las tareas apropiadas para manejar la sesión de usuarios. (Un nombre como ayuda podría ser "useAuth")
- El hook debe exportar (function > login, function > register, function > logout, boolean > isAuthenticated, object > user)
