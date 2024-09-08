# Clínica Veterinária - App

## Sumário

- [Clínica Veterinária - App](#clínica-veterinária---app)
  - [Sumário](#sumário)
  - [Nome do Aluno](#nome-do-aluno)
  - [Pré-requisitos](#pré-requisitos)
  - [Passos para rodar o projeto](#passos-para-rodar-o-projeto)
    - [Clone o repositório](#clone-o-repositório)
    - [Instale as dependências](#instale-as-dependências)
    - [Inicie o servidor do Expo](#inicie-o-servidor-do-expo)
    - [Estrutura do Projeto](#estrutura-do-projeto)
    - [Funcionalidades](#funcionalidades)
    - [Tecnologias Utilizadas](#tecnologias-utilizadas)
    - [Contribuição](#contribuição)
    - [Licença](#licença)

Este projeto é um aplicativo móvel para gerenciamento de uma clínica veterinária, criado com Expo e React Native. Ele permite a visualização de informações sobre animais, consultas, veterinários e muito mais.

## Nome do Aluno

Ueslei Albuquerque Garcia

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (recomendado: versão LTS)
- Baixar Node.js
- Expo CLI

  * Instale globalmente com o comando:

```bash
npm install -g expo-cli
```

- Emulador Android ou iOS (ou um dispositivo físico com o aplicativo Expo Go instalado).

## Passos para rodar o projeto

### Clone o repositório

1. Primeiro, clone o repositório para sua máquina local. Navegue até o diretório onde deseja colocar o projeto e execute:

```bash
git clone https://github.com/Ueslei86/repo-clinica-veterinaria.git
```

2. Navegue até o diretório do projeto

```bash
cd repo-clinica-veterinaria
```

### Instale as dependências

3. Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

### Inicie o servidor do Expo

4. Após instalar todas as dependências, inicie o servidor do Expo com o comando:

```bash
expo start
```

- Executar o aplicativo
  * Emulador Android: Pressione a no terminal para abrir o app no emulador Android.
  * Emulador iOS: Pressione i no terminal para abrir o app no simulador iOS.
  * Dispositivo Físico: Escaneie o QR Code mostrado no terminal ou no navegador usando o aplicativo Expo Go.

### Estrutura do Projeto

```bash
.
├── assets # Arquivos estáticos como imagens, ícones
├── components # Componentes reutilizáveis da aplicação
├── screens # Telas principais da aplicação
├── App.js # Arquivo principal da aplicação
├── package.json  # Dependências e scripts do projeto
└── README.md # Instruções do projeto
```

### Funcionalidades

- Gerenciamento de Pacientes: Adicionar, editar e remover pacientes.
- Consultas Agendadas: Visualizar e gerenciar consultas veterinárias.
- Informações dos Veterinários: Exibir informações dos profissionais da clínica.

### Tecnologias Utilizadas

- React Native: Framework para desenvolvimento mobile.
- Expo: Plataforma que facilita o desenvolvimento e execução de apps React Native.
- JavaScript (ES6+): Linguagem de programação principal.

### Contribuição

Se deseja contribuir com este projeto, siga os passos:

- Faça um fork do repositório.
- Crie uma nova branch com suas modificações: `git checkout -b minha-modificacao`.
- Faça o commit de suas alterações: `git commit -m 'Descrição das modificações'`.
- Envie suas alterações para a branch principal: `git push origin minha-modificacao`.
- Crie um _Pull Request_.

### Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.