# ejercicio-react
Este codigo hecho en React con Vite consiste en leer la entrada de un usuario de GitHub y mostrar informacion de interes. En caso de no encotrar resultados o en estado de consulta, muestra un spinner y un boton para volver a al formulario. 

Para el flujo de los datos de usa la logica useContext con useReducer, de esta forma se puede acceder desde cualquier componente al state y quedan todas las funciones centralizadas en un solo archivo. Las consultas a la API de GitHub se hacen mediante Axios y se usa una hoja de estilos para estilizar los componentes.
