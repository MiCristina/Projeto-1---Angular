# Primeiro projeto em Angular

Cada commit será comentado o que foi feito!!

Anotações:<br>
<strong>* 1° commit:</strong>
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
------------------------------------------------------------------------------------------------------------------------------------------------------
<strong>* 2° commit:</strong>
  + Rotas:
    - Ex.: { path: 'primeiro-componente', component: PrimeiroComponenteComponent }
      <br> <strong>path:</strong> caminho <br> <strong>component:</strong> componente a ser chamado 
  + Explicações:
    - Construtor --> é a primeira leitura feita após realizar a chamada
    - ngOnInit --> é a primeira leitura feita após a tela ser iniciada
    <br> <strong>Obs.:</strong> É uma hábito adicionar as variáveis antes do construtor
    <br> <strong>Ex.:</strong> nome: string;
  + Informações importantes consideradas no respectivo commit
    - Quando eu crio uma variável com valor atribuído no HTML eu realizo a chamada da seguinte forma:
      + <strong>no HTML:</strong> <br> {{nome}}
      + <strong>Dentro de um elemento:</strong> 
        <br> <strong> (input)=".... </strong> --> atualiza automaticamente na tela quando o usuário digita
        <br> <strong> (change)=".... </strong> --> atualiza depois que a informação é escrita pelos usuário 
        <br> <strong> (blur)=".... </strong> --> atualiza depois que a informação é escrita pelos usuário 
        <br><br> <input type="text" (input)="this.nome = $event.target.value" />        
        <br> <strong>Obs.:</strong> Quando é realizado o que foi exemplificado acima, o valor que o usuário adicionar no input será atribuido a minha variável 'nome'
        <br> <strong>Ex.:</strong> nome = Michelli, se o usuário digitar 'Ana', nome = Ana
