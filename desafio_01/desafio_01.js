//DESAFIO 01:

const arrayUsers = [
    { nome: "Rogério", idade: 25, email: "rogerio.silva@gmail.com" },
    { nome: "Flávio", idade: 31, email: "flavio_souza@gmail.com" },
    { nome: "Eduardo", idade: 43, email: "eduardo_carlos@gmail.com" },
    { nome: "Felipe", idade: 19, email: "felipe_martins@gmail.com" },
    { nome: "Cláudio", idade: 21, email: "claudio_ferreira@gmail.com" }
];

const userName = myfunction("Flávio", 25, "claudio_ferreira@gmail.com", arrayUsers);

function myfunction(nome, idade, email, arrayUsers) {
    return new Promise(function (resolve, reject) {
        const findUsers = arrayUsers.find(user => user.nome === nome || user.idade === idade || user.email === email);
        if (findUsers) {
            resolve(`Usuário ${findUsers.nome} encontrado!`);
        } else {
            reject(new Error('O usuário não foi encontrado'))
        }
    })
}

userName.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error.message);
})
