document.getElementById('formDNI').addEventListener('submit', function(e){
    e.preventDefault();

    const dni = Number(document.getElementById('dni').value);
    const letraUsuario = document.getElementById('letra').value.toUpperCase();
    const resultado = document.getElementById('resultado');

    if (dni < 0 || dni > 99999999) {
        resultado.textContent = "Número de DNI no válido.";
        resultado.style.color = "red";
        return;
    }

    const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    const letraCalculada = letras[dni % 23];

    if (letraUsuario !== letraCalculada) {
        resultado.textContent = `La letra indicada no es correcta. La letra correcta sería: ${letraCalculada}`;
        resultado.style.color = "red";
    } else {
        resultado.textContent = `¡DNI y letra correctos!`;
        resultado.style.color = "green";
    }
});
