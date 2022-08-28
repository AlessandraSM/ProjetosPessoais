![header](https://info.orcid.org/wp-content/uploads/2019/11/github-logo.jpg)

## Projeto *Chama*

Primeira Página: 
Este projeto foi inspirado em um *Search de Busca* por perfis de usuários da plataforma do GitHub, construído de forma intuitiva para o usuário que o possibilita através de um campo na página inicial onde digita uma conta e tem acesso à algumas informações como imagem, avatar, nome, e-mail e biografia mas vale lembrar que só aparecerão caso o usuário da conta tenha incluído no github caso contrário não será possível visualizar. Logo abaixo do perfil você pode navegar para página de detalhes do usuário. 

Segunda Página: 
Esta página de histórico consiste em mostrar todos os termos anteriores pesquisados pelo usuário, ordenados por timestamp (que  representa um ponto específico da linha do tempo pelo mais recente, levando em considerações a questão do fuso-horário). 
O usuario pode clicar no item do histórico e trazer o resultado do termo anteriormente pesquisado.

### Tecnologias utilizadas: 
<tr>
+ React
+ Javascript
+ CSS
+ HTML

### libs utilizadas:
<tr>

+ React-router-Dom (Biblioteca)
+ axios (Biblioteca)
+ styled-components (Responsável por estilizar cada página ou components)
+ Router(Responsável por Rotas)
+ Coordinator (Responsável Pela coordenação das páginas através de variáveis)
+ Components (Resposável por componentizar alguns Cards)


## Como foi Desenvolvido: 

Criei o projeto pensando em cada detalhe desde design posição das imagens, cores selecionadas através de uma pesquisa em sites de orientação de cores. 
Instalei as bibliotecas axios, styled-components e react-router-dom@6, de extrema importância para que o mesmo rode. 
Analisei os Endpoints: GET /users responsável por retornar uma lista de todos os usuário do GitHub, GET /users-unico responsável pelo retorno de um único usuário. 


### Realizado Por: Alessandra Sandeski Marmiroli

**Link do Surge: Chama-alessandraSM.surge.sh** 