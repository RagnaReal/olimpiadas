function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado. Favor informar o nome do atleta ou esporte.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-atleta">
                <div>
                <h2>${dado.titulo}</h2>
                
                <div>
                <p class="descricao-meta">${dado.descricao}</p>
                </div>
                <div>
                <a href="${dado.link}" target="_blank" class="link-mais-informacoes">Mais informações</a>
                </div>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }

    section.innerHTML = resultados;
}
