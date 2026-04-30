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
// ATIVIDADE 4 (base da atividade 3)
// ==============================

// Dentro do evento de adicionar item:

// 1. Criar o botão de remover
// → usar document.createElement()

// 2. Adicionar texto ao botão
// → exemplo: "Remover" ou "X"

// 3. Adicionar evento de clique no botão
// → quando clicar:
//    - remover o item da lista (li.remove())

// 4. Colocar o botão dentro do <li>
// → usar appendChild()