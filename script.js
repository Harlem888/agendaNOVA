function atualizarData() {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    const dia = hoje.getDate().toString().padStart(2, '0');
    
    const dataFormatada = `${ano}-${mes}-${dia}`;
    document.getElementById('dataAtual').value = dataFormatada;
}


setInterval(atualizarData, 86400000);


atualizarData();