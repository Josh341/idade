var agora = new Date();
var ano = Number(agora.getFullYear());
var res = document.querySelector('#resultado');
var img = document.getElementById("img");
var txt = "";
var im_g = "";
var im_i = "";

txt = "<p>Preencha os dados acima para ver o resultado!</p>";

function verificar () {
    var nasc = document.querySelector("#ano");
    var nasc = Number(nasc.value);

    var gen = document.querySelector('input[name="gen"]:checked').value;
    if (gen == "M") {
        gen = " <strong>homem</strong>";
        im_g = "homem"
    } else {
        gen = "a <strong>mulher</strong>";
        im_g = "mulher"
    }

    if(nasc <= ano) {
        if (nasc != 0) {
            var idade = ano - nasc;
            if (idade < 12) {
                im_i = "crianca"
            } else if (idade < 18) {
                im_i = "jovem"
            } else if (idade < 60) {
                im_i = "adulto"
            } else {
                im_i = "idoso"
            }
            txt = `<p>Detectamos um${gen} de ${idade} anos.</p><img id="img" src="./images/${im_g}_${im_i}.jpg" alt="Imagem">`;
            res.innerHTML = txt;
        } else {
            alert("Insira seu ano de nascimento antes de prosseguir!")
        }
    } else {
        alert(`Hahaha, você é do futuro por acaso para ter nascido em ${nasc}?`);
    }
}

res.innerHTML = txt;