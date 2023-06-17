# ejercicio-react
Este código hecho en React con Vite consiste en leer la entrada de un usuario de GitHub y mostrar información de interés. En caso de no encotrar resultados o en estado de consulta, muestra un spinner y un botón para volver al formulario. 

Para el flujo de los datos de usa la lógica useContext con useReducer, de esta forma se puede acceder desde cualquier componente al state y quedan todas las funciones centralizadas en un solo archivo. Las consultas a la API de GitHub se hacen mediante Axios y se usa una hoja de CSS para estilizar los componentes.El boton de busqueda solo se activa cuando el usuario inroduce algun caracter valido (inmune a espacios en blanco)
