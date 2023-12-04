let input = document.getElementById("input");
let adicionar = document.getElementById("adicionar");
let main = document.getElementById("iddomain");

function addTarefa(){
    // o valor que foi digitado no input //
    let valorInput = input.value;

    // se não for vazio, nem nulo, nem definido.
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        let novoItem = `  <div id="container-1">
        <img src="img/circulo.jpeg" alt=""/>
         
        
        <div id="lixeira">
          <button onclick="lixeira()" id="lixeira">
            <img src="img/icons8-lixeira.svg" alt="" />
          </button>
        </div>
      </div>
        `;
      main.innerHTML += novoItem;
      input.focus();
    }
}
input.addEventListener("keyup", function(event){ // a função depende de um evento. key-up, evento de teclado//
  if(event.keyCode === 13){ // o evento depende do keyCode que será semelhante a tecla Enter //
    event.preventDefault(); // quando teclado limpara o que esta escrito //
    adicionar.click();
  }
})  


function lixeira(){
  let lixeira = document.getElementById("container-1" , "container-2");
  lixeira.remove();
}
