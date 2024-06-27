// scripts.js

// Abrir a aba padrão ao carregar a página
document.getElementById("defaultOpen").click();

// Função para abrir abas
function openTab(evt, tabName) {
    // Esconder todos os elementos com class="tabcontent" (conteúdo da aba)
    const tabcontents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    // Remover a classe "active" de todos os botões com class="tablinks" (botões de aba)
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar o conteúdo da aba selecionada e adicionar a classe "active" ao botão de aba correspondente
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
