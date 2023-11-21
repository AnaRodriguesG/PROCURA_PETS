import React, { useState } from 'react';
import './App.css';
import Cadastro from './components/cadastro';
import AnimalPerdido from './components/AnimaisPerdidos';

function App() {
  const [listaAnimais, setListaAnimais] = useState([
    { id: 1, foto: 'https://static.todamateria.com.br/upload/ba/le/baleiaazul2-cke.jpg', raca: 'Cachorro', local: 'Rua Principal', status: 'Perdido' },
    { id: 2, foto: 'https://www.petz.com.br/blog/wp-content/uploads/2023/08/como-saber-quantos-meses-o-gato-tem2-1280x720.jpg', raca: 'Gato', local: 'Avenida Secundária', status: 'Perdido' },
    // Adicione mais animais conforme necessário
  ]);

  const [filtroNome, setFiltroNome] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('Todos');

  const addAnimal = (foto, raca, local, status) => {
    const newAnimal = {
      id: Math.floor(Math.random() * 1000000),
      foto,
      raca,
      local,
      status,
    };

    setListaAnimais([...listaAnimais, newAnimal]);
  };

  const concluirAnimal = (id, novoStatus) => {
    const updatedAnimais = listaAnimais.map((animal) =>
      animal.id === id ? { ...animal, status: novoStatus } : animal
    );

    setListaAnimais(updatedAnimais);
  };

  const removerAnimal = (id) => {
    const updatedAnimais = listaAnimais.filter((animal) => animal.id !== id);
    setListaAnimais(updatedAnimais);
  };

  const filtrarAnimais = () => {
    // Função para filtrar animais com base nos critérios de filtro
    return listaAnimais.filter((animal) =>
      (filtroNome === '' || animal.raca.toLowerCase().includes(filtroNome.toLowerCase())) &&
      (filtroStatus === 'Todos' || animal.status === filtroStatus)
    );
  };

  return (
    <div className="app">
      <h1>Lista de Animais Perdidos</h1>
      <div className="filtros">
        <input className='input_filter'
          type="text"
          placeholder="Filtrar por Nome"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
        />
        <select className='opc_filter'
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Perdido">Perdido</option>
          <option value="Resgatado">Resgatado</option>
        </select>
      </div>
      <Cadastro addAnimal={addAnimal} />
      <div className='listaAnimais'>
        {filtrarAnimais().map((animal) => (
          <AnimalPerdido
            key={animal.id}
            animal={animal}
            onConcluir={concluirAnimal}
            onRemover={removerAnimal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
