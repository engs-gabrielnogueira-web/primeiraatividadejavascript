

const botao = document.getElementById('teste');
const minhaDiv = document.getElementById('divA');




botao.addEventListener('click', () => {
   
    minhaDiv.textContent = "O texto foi alterado com sucesso!";
    console.log("Botão clicado!");
});
