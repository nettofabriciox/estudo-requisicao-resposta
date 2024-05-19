//function primeiraFunction(){

   // return new Promise((resolve) => {
      //  setTimeout(() => {
           // console.log("Esperou isso aqui pohhhahaha")
           // resolve()
       // }, 1000);
   // })
//}

  function getUser(id) {
   
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((dado)=> dado.json())
    .catch((err)=> console.log(err))
}

async function exibirUserName(id) {

    try {
        const user = await getUser(id)
        console.log(`O nome do usuario é: ${user.data.first_name}`)
    } catch (error) {
        console.log(`Error: ${err}`)
    }
}

exibirUserName(3)