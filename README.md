# case-estante-virtual

Teste prático da EstanteVirtual
Jogos Olímpicos
Com a chegada dos jogos olímpicos, fomos designados para construir uma API REST em Ruby para o COB (Comitê Olímico Brasileiro), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

100m rasos: Menor tempo vence
Lançamento de Dardo: Maior distância vence
API
Através da API, deveremos ser capazes de:

Criar uma competição
Cadastrar resultados para uma competição (todos os campos são obrigatórios), ex:
{
  "competicao": "100m classificatoria 1", 
  "atleta": "Joao das Neves", 
  "value": "10.234", 
  "unidade": "s"
}
ex:

{
  "competicao": "Dardo semifinal", 
  "atleta": "Claudio", 
  "value": "70.43", 
  "unidade": "m"
}
Finalizar uma competição.
Retornar o ranking da competição, exibindo a posição final de cada atleta.
Detalhes:
A API não deve aceitar cadastros de resultados se a competição já estiver encerrada.
A API pode retornar o ranking/resultado parcial, caso a disputa ainda não estiver encerrada.
No caso da competição do lançamento de dardos, cada atleta terá 3 chances, e o resultado da competição deverá levar em conta o lançamento mais distante de cada atleta.
O Design da API, bem como input e output dos dados, fica a seu critério, sendo inclusive um dos pontos de avaliação.
Testes são obrigatórios.
Necessária criação de um Readme para informar o passo a passo de como rodar a API.
Não é necessário criar um banco de dados, podendo manter os dados na memória. (hint: sqlite)
É imperativo a utilização de Ruby para a criação da API Rest.
Sugerimos a utilização do git para versionar a solução. Um Pull Request (PR) para este repo, num branch com seu nome_sobrenome seria excelente, pois mais do que analisar o código, queremos analisar o fluxo de trabalho, a linha de pensamento e como evoluiu o código até chegar na solução.
