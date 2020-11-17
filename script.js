//Referencias
var tabelaLancamentos = document.querySelector('table')
var botaoAdicionar = document.querySelector('button')
var inputData = document.querySelector('input[name=data]')
var inputTitulo = document.querySelector('input[name=titulo]')
var inputCategoria = document.querySelector('input[name=categoria]')
var inputCindicativa = document.querySelector('input[name=cindicativa]')


tabelaLancamentos.addEventListener('dblclick', function(event){
    if(event.target.parentNode.tagName != 'TR'){
        alert('Clique dentro do campo para apagar a informação')
        return;
    }
    event.target.parentNode.remove()
})



botaoAdicionar.addEventListener('click', function(){
    
    var data = inputData.value

    var tr = document.createElement('tr')
    var td = document.createElement('td')

    td.innerText = data
    tr.appendChild(td)
    tabelaLancamentos.appendChild(tr)
    inputData.value = ''
    
    var titulo = inputTitulo.value
    
    td = document.createElement('td')

    td.innerText = titulo
    tr.appendChild(td)
    tabelaLancamentos.appendChild(tr)
    inputTitulo.value = ''
    
    var categoria = inputCategoria.value

    td = document.createElement('td')

    td.innerText = categoria
    tr.appendChild(td)
    tabelaLancamentos.appendChild(tr)
    inputCategoria.value = ''

    
    var cindicativa = inputCindicativa.value

    td = document.createElement('td')    

    td.innerText = cindicativa
    tr.appendChild(td)
    tabelaLancamentos.appendChild(tr)
    inputCindicativa.value = ''

    
})