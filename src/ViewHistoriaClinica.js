import React, { useState } from 'react';

const HistoriaClinicaComponent = () => {
  const [documentoPaciente, setDocumentoPaciente] = useState('');
  const [historiaClinica, setHistoriaClinica] = useState(null);

  const handleEnviarSolicitud = async () => {
    try {
      const response = await fetch('http://34.170.65.69:3000/historias/historia_clinica/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documento_paciente: documentoPaciente,
        }),
      });

      if (!response.ok) {
        throw new Error('Respuesta no exitosa del servicio de historia clínica');
      }

      const data = await response.json();
      setHistoriaClinica(data);
      console.log('Historia clínica obtenida:', data);
    } catch (error) {
      console.error('Error al comunicarse con el servicio de historia clínica:', error.message);
    }
  };

  return (
    <div>
      <h2>Historia Clínica</h2>
      <label>
        Documento del Paciente:
        <input
          type="text"
          value={documentoPaciente}
          onChange={(e) => setDocumentoPaciente(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleEnviarSolicitud}>Obtener Historia Clínica</button>
      <br />
      {historiaClinica && (
        <div>
          <h3>Respuesta del Servicio:</h3>
          <pre>{JSON.stringify(historiaClinica, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default HistoriaClinicaComponent;
