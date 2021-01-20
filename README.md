# Primeiro projeto em Angular

Cada commit será comentado o que foi feito!!

Anotações:
* 1° commit:
  + Comandos principais:
    - Iniciar o angular --> $ ng serve
    - Criar um componente --> $ ng g c *nome-do-seu-componente*
    - Criar uma rota --> $ ng g module app-routing
  + Estrutura padrão:
    - RAIZ
      - index.html --> chamada dos componentes criados
      - src 
        - assets --> carregamento de arquivos
        - enviroments --> carregamento de políticas de configuração 
        - app --> pasta padrão contendo os componentes de inicialização do projeto
          - .html --> local de renderização do HTML
          - .spec.ts --> componente de teste
          - .component.ts --> typescript referente ao seu componente (no caso 'app') 
          - .module.ts --> carregamento de declações que são importadas no decorrer da criação do projeto
