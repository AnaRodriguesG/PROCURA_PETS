import React from 'react';

function AnimalPerdido({ animal, onConcluir, onRemover }) {
  const handleConcluir = () => {
    const novoStatus = animal.status === 'Perdido' ? 'Resgatado' : 'Perdido';
    onConcluir(animal.id, novoStatus);
  };

  const handleRemover = () => {
    onRemover(animal.id);
  };

  return (
    <div className={`animal-bloco ${animal.status === 'Resgatado' ? 'concluido' : ''}`} key={animal.id}>
      {animal.foto && (
        <img
          src={animal.foto}
          alt={`Foto do animal ${animal.raca}`}
          className="foto-animal"
          style={{
            maxWidth: '100%',
            maxHeight: '150px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '10px',
          }}
        />
      )}

      <div className="descricao">
        <span><b>Raça:</b> {animal.raca}</span> <br />
        <span><b>Local:</b> {animal.local}</span> <br />
        <span><b>Status:</b> {animal.status}</span> <br />
      </div>

      <div className='acoes'>
        <button className='botaoConcluir' onClick={handleConcluir}>
          Mudar Status
        </button>
        <button className='botaoRemover' onClick={handleRemover}>
          <span class="material-symbols-outlined">
            delete_sweep
          </span>
        </button>
      </div>
    </div>
  );
}

export default AnimalPerdido;
