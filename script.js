function primeiraFunction(){

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Esperou isso aqui pohhhahaha")
            resolve()
        }, 1000)
    })
}

 async function segundaFuncao() {

    console.log("iniciou")

  await  primeiraFunction()

    console.log("Terminou")
}

segundaFuncao()