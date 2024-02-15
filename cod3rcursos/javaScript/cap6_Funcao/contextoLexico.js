const valor = 'Global'

function minhaFuncao()  {
    //const valor = 'Local'
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

/*
    Função carrega consigo o local onde ela foi definido, então ela procura dentro do escopo léxico de onde foi definida.
    Não localizando no escopo local e sim em no local onde foi definida. 
*/