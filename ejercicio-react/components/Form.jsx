import React, { useContext, useState } from 'react';
import userContext from '../context/userContext';

const Form = () => {

  // Obtener el context de Usuario
  const usuarioContext = useContext(userContext);
  const { leerInput, consultarAPI } = usuarioContext;

  // State de usuario
  const [user, setuser] = useState('');

  // Cuando el usuario da submit al form
  const onSubmitUser = e => {
    e.preventDefault();

    // Validar que no este vacio el input
    if (user.trim() === '') {
      console.log('error');
      return;
    }
    // Pasar el usuario al state general
    leerInput(user);

    // Mandar a consultar la API
    consultarAPI(user);


    // Reiniciar el form
    setuser('');
  };



  return (
    <form
      onSubmit={onSubmitUser}
    >
      <label htmlFor="user" >User: </label>

      <input
        type="text"
        placeholder='User GitHub'
        name='user'
        value={user}
        onChange={e => setuser(e.target.value)}
      />

      <input type="submit" />
    </form>

  );
};

export default Form;