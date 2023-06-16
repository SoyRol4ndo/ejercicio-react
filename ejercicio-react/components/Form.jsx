import React, { useState } from 'react';

const Form = () => {

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


    // Mandar a consultar la API


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