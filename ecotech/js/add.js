const MostrarQuantidade = document.getElementById('MostrarQuantidade')
MostrarQuantidade.addEventListener('click', ()=>{

    let inHectar = parseFloat( document.getElementById('inHectar').value) 
    let inSafra = parseFloat(document.getElementById('inSafra').value)

    quantidadePorSafra = inHectar*9
    quantidadePorAno = quantidadePorSafra*inSafra

    QuantidadePorSafras.textContent = `A quantidade a ser utilizada por safra é ${quantidadePorSafra} kg`
    QuantidadePorAnos.textContent = `A quantidade a ser utilizada por ano é de ${quantidadePorAno} kg`
})
