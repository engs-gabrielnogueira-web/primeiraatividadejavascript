const listaEl = document.querySelector('#lista ul');

function adicionarPalavra() {
  const input = document.querySelector('input');
  const texto = input.value; 
  if (texto !== "") { 
    const item = document.createElement('li');
    const botao = document.createElement('button'); 
    botao.textContent = texto;
    
    item.appendChild(botao);   
    listaEl.appendChild(item); 
    
    
    input.value = ""; 
  }
}

document.getElementById('btnAdicionar').onclick = adicionarPalavra;