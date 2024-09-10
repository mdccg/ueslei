enum Status {
  INVALID_TITLE = 'O título é obrigatório e deve conter ao menos um caractere.',
  INVALID_AREA = 'A área fornecida não é válida.',
  INVALID_AUTHOR_LIST = 'A lista de autores responsáveis por este trabalho foi omitida ou está mal formatada.',
  EXCEEDED_AUTHOR_LIMIT = 'O limite de autores permitido por esta revista científica neste trabalho foi excedido.',
  INVALID_AUTHOR = 'Um ou mais autores do trabalho em questão não preencheu seus dados corretamente.',
  INVALID_AUTHOR_NAME = 'O nome de um dos autores parece estar incorreto. Tem certeza de que nenhum erro de digitação foi cometido?',
  WOKE_FOUND = 'O gênero com o qual um dos autores se identifica não está listado na tabela de gêneros válidos.',
  INVALID_CPF = 'O cpf de um dos autores informado não segue os trâmites governamentais de um Código de Pessoa Física.',
}

export default Status;