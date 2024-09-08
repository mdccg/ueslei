import { createContext, useState } from 'react';

const initialValue = {
  data: [
    {
      id: 1,
      especie: 'Cavalo',
      nome: 'Pégazo',
      raca: 'SRD',
      porteAnimal: 'Grande',
      corPredominante: 'caramelo',
      observacao: 'Consultas preventivas '
    },
    {
      id: 2,
      especie: 'Gato',
      nome: 'Miguel',
      raca: 'SRD',
      porteAnimal: 'pequeno',
      corPredominante: 'cinza',
      observacao: 'Exames laboratoriais .'
    },
    {
      id: 3,
      especie: 'Cachorro',
      nome: 'Fred',
      raca: 'SRD',
      porteAnimal: 'Grande',
      corPredominante: 'preto e branco',
      observacao: 'Vacinação .'
    },
    {
      id: 4,
      especie: 'Gato',
      nome: 'Luiz Garcia',
      raca: 'Siamês',
      porteAnimal: 'Médio',
      corPredominante: 'marrom',
      observacao: 'Cirurgias de esterilização .'
    },
  ],
  setData: () => {},
};

export const UserContext = createContext(initialValue);

export const UserContextProvider = ({ children }) => {
  const [data, setData] = useState(initialValue.data);

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
}