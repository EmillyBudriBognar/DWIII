fetch("/rota1")
    .then(function(resposta){
        if(!resposta.ok){
            throw new Error("Erro HTTP: " + resposta.status);
        }
        return resposta.json();
    })
    .then(function(dados){
        var div = document.getElementById("conteudoJson");
        var html = "";
        
        if (Array.isArray(dados)) {
            html += "<ul>";
            for (var i=0; i<dados.length; i++){
                html += "<li class='profile-item'>" + JSON.stringify(dados[i]) + "</li>";
            }
            html += "</ul>";
        } else {
            html += `
                <div class="profile-item">
                    <span class="label">Nome</span>
                    <span class="value">${dados.nome}</span>
                </div>
                <div class="profile-item">
                    <span class="label">Curso</span>
                    <span class="value">${dados.curso}</span>
                </div>
                <div class="profile-item">
                    <span class="label">Instituição</span>
                    <span class="value">${dados.faculdade}</span>
                </div>
            `;
        }

        div.innerHTML = html;
    })
    .catch(function(erro){
        var div = document.getElementById("conteudoJson");
        div.innerHTML = "<div class='error'>Erro ao carregar experiência</div>";
        console.error(erro);
    })
