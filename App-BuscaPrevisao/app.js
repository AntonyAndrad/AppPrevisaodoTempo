const key ="ade61ad695fc8a6d682cda0fbf92d8e6"

function DadosTela(dados){
document.querySelector('.titulo-cidade').innerHTML ="Tempo em " + dados.name
document.querySelector('.graus') .innerHTML = Math.floor(dados.main.temp) + "C°"
document.querySelector('.img-previsao') .src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
document.querySelector('.umidade') .innerHTML = "Umidade relativa do ar: " + dados.main.humidity +"%"
}

async function BuscarDados(cidade){
   const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${ key}&lang=pt_br&units=metric`).then(Response => Response.json());
   console.log(dados)
    DadosTela(dados)
}


function CliqueBotao(){
    const cidade = document.querySelector('.input-cidade').value
    BuscarDados(cidade)
}