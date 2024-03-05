//Promise
//O que é uma Promise?
//Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa")
//representa um valor que pode estar disponível agora, no futuro ou nunca.

//Por que conhecer as Promises?
//As Promises são usadas para processamento assíncrono.
//Elas são muito úteis para evitar o callback hell e para trabalhar com requisições assíncronas.

const sucesso = Math.random() > 0.5;

const firstFunction = (sucess) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (sucess) {
          resolve("Success 1");
        } else {
          throw new Error("Failure 1");
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
};

const secondFunction = (sucess) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (sucess) {
          resolve("Success 2");
        } else {
          throw new Error("Failure 2");
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
};

const thirdFunction = (sucess, valorDeSucesso) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (sucess) {
          resolve(valorDeSucesso);
        } else {
          throw new Error("Failure 3");
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
};

const executePromises = () => {
  firstFunction(sucesso)
    .then((promiseResolved) => {
      console.log(promiseResolved);
      return secondFunction(sucesso);
    })
    .then((promiseResolved) => {
      console.log(promiseResolved);
      return thirdFunction(sucesso, promiseResolved);
    })
    .then((promiseResolved) => {
      console.log(`Valor da promise 3 ${promiseResolved}`);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// executePromises();

//Callbacks
//O que é um callback?
//Callback é uma função que é passada como parâmetro para outra função.
//O callback é executado após a função que o recebeu terminar de executar.

//Por que conhecer os callbacks?
//Os callbacks são muito usados em JavaScript
//Eles são usados para processamento assíncrono.
//Eles são usados para eventos.
//Eles são usados para trabalhar com requisições assíncronas.
//Qual a diferença entre Promises e callbacks?
//Promises são objetos que representam o sucesso ou a falha de uma operação assíncrona.
//Callbacks são funções que são passadas como parâmetro para outras funções.

const callbackFunction = (success, callback) => {
  setTimeout(() => {
    try {
      if (success) {
        callback(null, "Success");
      } else {
        throw new Error("Failure");
      }
    } catch (error) {
      callback(error);
    }
  }, 3000);
};

// callbackFunction(sucesso, (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

//Codigo de promise transformado em callback
const firstFunctionCB = (sucess, callback) => {
  setTimeout(() => {
    try {
      if (sucess) {
        callback(null, "Success 1");
      } else {
        throw new Error("Failure 1");
      }
    } catch (error) {
      callback(error, null);
    }
  }, 3000);
};

const secondFunctionCB = (sucess, callback) => {
  setTimeout(() => {
    try {
      if (sucess) {
        callback(null, "Success 2");
      } else {
        throw new Error("Failure 2");
      }
    } catch (error) {
      callback(error, null);
    }
  }, 3000);
};

const thirdFunctionCB = (sucess, callback) => {
  setTimeout(() => {
    try {
      if (sucess) {
        callback(null, "Success 3");
      } else {
        throw new Error("Failure 3");
      }
    } catch (error) {
      callback(error, null);
    }
  }, 3000);
};

const executeCallbacks = () => {
  firstFunctionCB(sucesso, (error, result) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(result);
      secondFunctionCB(sucesso, (error, result) => {
        if (error) {
          console.log(error.message);
        } else {
          console.log(result);
          thirdFunctionCB(sucesso, (error, result) => {
            if (error) {
              console.log(error.message);
            } else {
              console.log(result);
            }
          });
        }
      });
    }
  });
};

// executeCallbacks();

//Async/Await
//O que é o async/await?
//Async/await é uma forma de escrever código assíncrono de forma síncrona.
//async e await são palavras-chave em JavaScript que são usadas para trabalhar com Promises de uma maneira mais confortável e fácil de ler.
//A palavra-chave async é colocada antes de uma função para indicar que a função retornará uma Promise.
//Quando uma função assíncrona é chamada, ela retorna uma Promise.
//Quando a Promise é resolvida, o valor de resolução é o valor retornado pela função assíncrona.
//Se a Promise é rejeitada, a rejeição é tratada como uma exceção.

async function minhaFuncao() {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Olá, mundo!"), 2000);
  });

  const resultado = await promessa; // Espera até que a promessa seja resolvida

  console.log(resultado); // Imprime: Olá, mundo!
}

// minhaFuncao();

//Codigo convertido de promise para async/await
const randomFunctionPromise = (sucess) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (sucess) {
          resolve("Success 1");
        } else {
          throw new Error("Failure 1");
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
};

const secondFunctionPromise = (sucess) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (sucess) {
          resolve("Success 2");
        } else {
          throw new Error("Failure 2");
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
};

const executePromisesWithAwait = async () => {
  try {
    const promiseResolved1 = await randomFunctionPromise(sucesso);
    console.log(promiseResolved1);
    const promiseResolved2 = await secondFunctionPromise(sucesso);
    console.log(promiseResolved2);
  } catch (error) {
    console.log(error.message);
  }
};

executePromisesWithAwait();
