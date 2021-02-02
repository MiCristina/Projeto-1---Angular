# Primeiro projeto em Angular

Cada commit será comentado o que foi feito!!

# Anotações:<br>
# <strong>* 1° commit:</strong>
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
# <strong>* 2° commit:</strong>
  + Rotas:
    - <strong>Ex.:</strong>
     ```
    { path: 'primeiro-componente', component: PrimeiroComponenteComponent }
    ```
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
        
------------------------------------------------------------------------------------------------------------------------------------------------------
# <strong>* 3° commit:</strong>
  + Operadores lógicos:
    - '===' Igual
    - '!==' Diferente
    - '<' Menor
    - '>' Maior
    - '<=' Menor ou igual
    - '>=' maior ou igual
    - '||' ou
    - '&&' e
  + Diretiva If:
    - São condições passadas dentro das tags no HTML
    <br> <strong>Ex.:</strong> <br>
    ```
    <p *ngIf="nome === 'Ana Clara'">Minha tag p </p>
    ```
    <br>
    Baseado no que foi aprendido nos commits anteriores, quando o usuário digitar 'Ana Clara', no input irá aparecer o parágrafo 'minha tag p'
  + Diretiva For:
    - É representado como um laço de repetição, para que ele funcione é necessário:
    <br><strong> .component.ts </strong>
    ```
    arrayValores = ['Mi', 'Ana', 'Bruna', '2', '5', '6'];
    ```
    <strong> .component.html </strong>
    ```
    <div *ngFor="let item of arrayValores">
      {{item}}
    </div>
    ```
    <strong> Explicação do bgFor: </strong>
    <br> * let --> A declaração de uma variável 
    <br> * item --> A minha variável declarada (pelo let)
    <br> * of --> Para criar a referência 
    <br> * arrayValores --> Nome referenciado do meu array<br>
  + Opções com a junção do For e do If
    <br> No exemplo abaixo o for tem como objetivo pucxar o array, sendo que o if tem como objetivo criar a condição para que... se item for direfente de 'Mi', 'Mi' não será exibido.<br>
    <strong> Ex.: </strong>
    ```
    <div *ngFor="let item of arrayValores">
      <p *ngIf="item !== 'Mi'"> {{item}} </p>
    </div>
    ```
    
    ------------------------------------------------------------------------------------------------------------------------------------------------------
# <strong>* 4° commit:</strong>
  + Criar arquivo com diretórios:
    - Iniciar o angular --> $ ng g s services/api --skipTests
      <br> <strong>Obs.:</strong> Para não gerar o arquivo .spec.ts (que serve para teste) é so adicionar "--skipTests" como mencionado acima
    - Criando base para buscar api: <br>
      <strong> Arquivo: </strong> services/api.service.ts
      ```
      public getImg(): Observable<any>{
        return this.http.get("link daminha api");
      }
      ```
      <strong> Obs.: </strong> Acima foi criada uma função que tem como objetivo executar um método, sendo: <br>
        - <strong>método:</strong> Observable
        - <strong>tipo:</strong> any (any é todos os tipos de dados vão entrar)
    - No código foi criado uma pasta "models", é comum criar ela para adicionar os dados que serão recuperados
      <br>
      <strong> Arquivo: </strong> models/api.ts <br> Nesse arquivo eu adicionei todos os campos da minha api (gestão de informação)
      ```
      export class Image{
        public albumId : number;
        public id : number;
        public title : string;
        public url : string;
        public thumbnailUrl : string;
      }
      ```
    - Para que as informações fossem chamadas pela api quando a tela for renderizada é necessario adicionar a seguinte linha:
      <br>
      <strong> Arquivo: </strong> services/api.service.ts <br>
      ```
      constructor(private http:HttpClient ) { }
      ```
      Foi criado um componente chamado api para exibir as informações da api (vamos mostrar as informações em .html em api). 
      <br> Para chamar nossa api temos que chamar da seguinte forma:
      <br>
      <strong> Arquivo: </strong> api/api.component.ts <br>
      ```
      constructor(private apiService: ApiService) {
        this.pegarImage();
      }

      pegarImage() {
        this.apiService.getImg().subscribe(

        );
      }
      ```
    ------------------------------------------------------------------------------------------------------------------------------------------------------
# <strong>* 5° commit:</strong>
  + Foi importado HttpClient para que a requisição a api funcione;
  + api/api.component.ts
    - em "pegarImagem(){...}" que foi criado, vai realizar a chamada de dados <br>
      ```
      pegarImagem() {
        this.apiService.getImg().subscribe(
          (data:Imagem) => {
            this.imagens = data;
            console.log("deu bom", data);
          },
          (error:any) => {
            this.erro = error;
            console.log("nn deu bom", error);
          }
        );
      }
      ```
  + api/component.html
    - Realizei minha chamada com "*ngFor=" <br>
      ```
      <div *ngFor="let item of imagens">
        <p>{{item.title}}</p>
        <img [attr.src]="item.thumbnailUrl">
      </div>

      ```
  + app.component.html
    - Fazer a chamada principal <br>
      ```
      <app-api></app-api>

      ```
