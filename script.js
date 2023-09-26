function enviarImagem() {
    var imagem = document.getElementById("imagem").files[0];
    var formData = new FormData();
    formData.append("imagem", imagem);

    fetch("https://api-nsfw.onrender.com/prever", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Classe predita: " + data.classe_predita + "<br>";
        resultado.innerHTML += "Confianças:<br>";
        for (var classe in data.confiancas) {
            resultado.innerHTML += classe + ": " + data.confiancas[classe].toFixed(1) + "%<br>";
        }
    })
    .catch(error => console.error("Erro:", error));
}
