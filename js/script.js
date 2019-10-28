// Variaveis Globais
var botaoAdicionar = document.querySelector("#add_dados");
var campoNome = document.querySelector("input[name='nome']");
var campoData = document.querySelector("input[name='ano']");
var corpoTabela = document.querySelector("tbody");
var hoje = new Date();
var anoAtual = hoje.getFullYear();

// Objetos
function dadosEntrevista(nome, ano) {
    this.nome = nome;
    this.anoInformado = ano;
    this.calculaIdade = function() {
        return anoAtual - this.anoInformado;
        }
    this.mostrarDados = function() {
            console.log("O nome é " + this.nome +
                " o ano é " + this.anoInformado +
                " e a idade é " + this.calculaIdade()
                )
        }
    this.criarLinhaTabela = function (){
        var linhaTabela = document.createElement("tr"); //criar elementos
        var campo_Nome = document.createElement("td"); //criar elementos
        var campo_Ano = document.createElement("td"); //criar elementos
        var campo_Idade = document.createElement("td"); //criar elementos
        campo_Nome.className = "bold" // aplicar um estilo aos elementos
        var texto_Nome = document.createTextNode(this.nome); //criar nó
        var texto_Ano = document.createTextNode(this.anoInformado); //criar nó
        var texto_Idade = document.createTextNode(this.calculaIdade()); //criar nó
        campo_Nome.appendChild(texto_Nome); // vincular os nós aos elementos
        campo_Ano.appendChild(texto_Ano); // vincular os nós aos elementos
        campo_Idade.appendChild(texto_Idade); // vincular os nós aos elementos
        linhaTabela.appendChild(campo_Nome); // vincular os nós aos elementos
        linhaTabela.appendChild(campo_Ano); // vincular os nós aos elementos
        linhaTabela.appendChild(campo_Idade); // vincular os nós aos elementos
        corpoTabela.appendChild(linhaTabela); // vincular os elementos ao documento
    }
    this.criarPeloTemplate = function () {
        var template = document.querySelector("#template1");
        lista_td = template.content.querySelectorAll("td");
        lista_td[0].textContent = this.nome;
        lista_td[1].textContent = this.anoInformado;
        lista_td[2].textContent = this.calculaIdade();
        var novaLinha = document.importNode(template.content, true);
        corpoTabela.appendChild(novaLinha);
    }
}

// Funções
function adicionarDados(event) {
    event.preventDefault();
    var anoInformado = campoData.value; //pega o valor do ano digitado no campo data
    if ( anoInformado >= 1900 && anoInformado <= anoAtual ) {
         novodadosEntrevista = new dadosEntrevista(campoNome.value, campoData.value);
         novodadosEntrevista.criarPeloTemplate();
    } else {
        document.querySelector(".alerta").innerText = "Data incorreta"
    };
};


// Rotina Principal

botaoAdicionar.addEventListener('click',adicionarDados);