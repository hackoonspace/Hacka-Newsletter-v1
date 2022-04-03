window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('success')){
        const successState = urlParams.get('success');

        if(successState === 'true'){
            alert('Sucesso ao realizar operação!');
        }

        if(successState === 'false'){
            alert('Falha ao realizar operação. Verifique os dados fornecidos e tente novamente');
        }
    }
}