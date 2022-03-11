// USEI 1.0 NO COMMIT MAS NEM SEI SE VOU CONTINUAR ISSO KAAKA, NEM SEI PQ TO COMENTANDO NO JS, MAS OK AKKAKAK

// TENTEI DEIXAR  CODIGO DE MANEIRA LEGIVEL COM OS COMENTARIOS PQ REALMENTE TÁ BEM BAGUNÇADO


var personagens_nome = ["Luffy","Zoro","Naruto"]

// Variaveis HTML
//// HEADER
var HTML_nome_user = document.getElementById("nome_user");
var HTML_nome_personagem = document.getElementById("nome_personagem");

//// PRIMEIRA PARTE - container 1
var HTML_container_1 = document.querySelector(".container-1");
var HTML_pedra = document.getElementById("pedra");
var HTML_papel = document.getElementById("papel");
var HTML_tesoura = document.getElementById("tesoura");
var HTML_options = [HTML_pedra,HTML_papel,HTML_tesoura]

//// SEGUNDA PARTE - container 2 | FRAME 1
var HTML_container_2 = document.querySelector(".container-2");
var HTML_select = document.getElementById("select");
var HTML_imagem_personagem = document.querySelectorAll(".imagem_personagem");
var btn_play = document.getElementById("play");

//// SEGUNDA PARTE - container 2 | FRAME 2
var HTML_escolha_personagem = document.getElementById("escolha_personagem");
var HTML_escolha_user = document.getElementById("escolha_user");

// Variaveis js
var nome_personagem;
var real_nome_user;
var pontos_user = 0;
var pontos_pc = 0;
//functions

const start = (foto)=>{
    HTML_container_2.style.display = "flex";
    HTML_container_1.style.display = "none";
    game();
}
// adicionar personagens
const addPerson = ()=>{
    for(let c = 0;c < personagens_nome.length;c++){
        if(c == 1){
            HTML_select.innerHTML+=`
                <option value=${personagens_nome[c].toLowerCase()} selected>${personagens_nome[c]}</option>
            `
        }else{
            HTML_select.innerHTML+=`
                <option value=${personagens_nome[c].toLowerCase()}>${personagens_nome[c]}</option>
            `
        }
    }
}

// Adicionar player
const setarPlayer = (nome,elemento,playerPontos,pc)=>{
    if(pc === true){
        nome_personagem = nome;
        elemento.innerHTML = ` ${nome}: <span id="pontos-pc">${playerPontos}</span> `
    }else{
        real_nome_user = nome;
        elemento.innerHTML = ` ${nome}: <span id="pontos-user">${playerPontos}</span> `
    }
}

// Pegar nome de usuario
const pegarNome = ()=>{
    const nome_user = window.prompt("Digite seu nome para jogar:","Seu nome aqui...");
    if(nome_user == null){
        window.alert("Se você não digitar seu nome, não vai poder jogar :(");
        pegarNome();
    }else if(nome_user.length === 0){
        pegarNome();
        console.log(nome_user)
    }else if(nome_user.substring(1,0) === " " || nome_user === "Seu nome aqui..."){
        window.alert("Por favor digite corretamente");
        pegarNome();
    }else{
        window.alert(`Bem vindo ${nome_user}, se divirta.`);
        setarPlayer(nome_user,HTML_nome_user,pontos_user,false)
    }

}

// selecionar personagem
const selectPerson = (func)=>{
    var selectText = select.options[select.selectedIndex].text;
    var selectValue = select.options[select.selectedIndex].value;
    setarPlayer(selectText,HTML_nome_personagem,pontos_pc,true)
    
    HTML_imagem_personagem.forEach((img)=>{
        img.src = `imgs/${selectValue}.png`
    })
    if(func == true){
        start(selectValue)
    }
}
// pc escolhendo 
const pc = ()=>{
    let options = [];
    HTML_options.forEach(img=>{
        options.push(img.getAttribute("id"))
    })
    let num = Math.floor(Math.random() * options.length);
    return options[num]
}
// adicionar funcão pras imgs de escolha
const game = ()=> {

    // VOU ARRUMAR ESSE MONTE DE IFS, PRA DEIXAR DE UMA MANEIRA MAIS PROFISSIONAL ASSIM QUE TIVER TEMPO.
    HTML_options.forEach((img)=> {
        img.addEventListener("click",()=> {
            var escolha_user = img.getAttribute("id");
            var escolha_personagem = pc();
            var textPc = "Ganhei hehe"
            var textUser = "Ganhei hehe"
            if(escolha_personagem == escolha_user){
                textPc = "Empate rs"
                textUser = "Empate rs"
                pontos_pc = pontos_pc + 0;
                pontos_user = pontos_user + 0;
            }else if(escolha_personagem == "pedra" && escolha_user == "tesoura"){
                textPc = "Ganhei hehe"
                textUser = "foi sorte"
                pontos_pc = pontos_pc + 1;
                pontos_user = pontos_user + 0;
            }else if(escolha_user == "pedra" && escolha_personagem == "tesoura"){
                textUser = "Ganhei hehe"
                textPc = "foi sorte"
                pontos_user = pontos_user + 1;
                pontos_pc = pontos_pc + 0;
            }else if(escolha_personagem == "tesoura" && escolha_user == "papel"){
                textPc = "Ganhei hehe"
                textUser = "foi sorte"
                pontos_pc = pontos_pc + 1;
                pontos_user = pontos_user + 0;
            }else if(escolha_user == "tesoura" && escolha_personagem == "papel"){
                textUser = "Ganhei hehe"
                textPc = "foi sorte"
                pontos_user = pontos_user + 1;
                pontos_pc = pontos_pc + 0;
            }else if(escolha_personagem == "papel" && escolha_user == "pedra"){
                textPc = "Ganhei hehe"
                textUser = "foi sorte"
                pontos_pc = pontos_pc + 1;
                pontos_user = pontos_user + 0;
            }else if(escolha_user == "papel" && escolha_personagem == "pedra"){
                textUser = "Ganhei hehe"
                textPc = "foi sorte"
                pontos_user = pontos_user + 1;
                pontos_pc = pontos_pc + 0;
            }else{
                alert("Ocorreu um erro")
            }
            HTML_escolha_user.innerHTML = `
                ${escolha_user}<br>${textUser}
            `

            HTML_escolha_personagem.innerHTML = `
                ${escolha_personagem}<br>${textPc}
            `
            // ATUALIZANDO OS PONTOS
            setarPlayer(nome_personagem,HTML_nome_personagem,pontos_pc,true)
            setarPlayer(real_nome_user,HTML_nome_user,pontos_user,false)
        })
    })
}
//chamando as functions
select.addEventListener("click",()=> selectPerson(false) )
btn_play.addEventListener("click",()=> selectPerson(true) )



pegarNome()
addPerson()