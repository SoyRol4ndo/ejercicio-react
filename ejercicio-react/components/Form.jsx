import React from 'react';

const Form = () => {

  return (
    <form>
      <label htmlFor="user" >User: </label>

      <input
        type="text"
        placeholder='User GitHub'
        name='user'
      />

      <input
        value='Buscar'
        type="submit"
      />
    </form>

  );
};

export default Form;