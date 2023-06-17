import React, { useContext, useEffect, useState } from 'react';
import userContext from '../context/userContext';

const Form = () => {

  // Obtener el context de Usuario
  const usuarioContext = useContext(userContext);
  const { leerInput, consultarAPI, limpiarResultados } = usuarioContext;

  // State de usuario
  const [user, setuser] = useState('');

  // Cuando el usuario da submit al form
  const onSubmitUser = e => {
    e.preventDefault();

    // Validar que no este vacio el input
    while (user.trim() === '') {
      limpiarResultados();
      return;
    }
    // Pasar el usuario al state general
    leerInput(user);

    // Reiniciar el form
    setuser('');
  };

  useEffect(() => {

    // Mandar a consultar la API
    consultarAPI(user);
  }, [user]);


  return (

    <form
      onSubmit={onSubmitUser}
      className='form'
    >
      <fieldset className='fieldset'>
        <legend>Usuario GitHub</legend>

        <div>
          <label htmlFor="user" >User: </label>

          <input
            className='input-form'
            type="text"
            placeholder='User GitHub'
            name='user'
            value={user}
            id='user'
            onChange={e => setuser(e.target.value)}
          />
        </div>
        <button
          className='btn'
          type="submit"
          disabled={!user}
        >Buscar</button>
      </fieldset>
    </form>
  );
};

export default Form;