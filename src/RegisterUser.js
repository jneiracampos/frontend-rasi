import React, { useState } from 'react';

const RegisterComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://34.41.63.144:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          rol,
        }),
      });

      if (!response.ok) {
        throw new Error('Respuesta no exitosa del servicio de registro');
      }

      const data = await response.json();
      console.log('Registro exitoso:', data);
    } catch (error) {
      console.error('Error al comunicarse con el servicio de registro:', error.message);
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Rol:
        <input type="text" value={rol} onChange={(e) => setRol(e.target.value)} />
      </label>
      <br />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default RegisterComponent;
