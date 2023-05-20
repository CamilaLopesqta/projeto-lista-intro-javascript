// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
    return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("Qual a altura de um retângulo?"))
const largura = Number(prompt("Qual a largurade um retângulo?"))
calculaAreaRetangulo = (altura*largura)
console.log(calculaAreaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Qual ano atual?"))
let anoNascimento = Number(prompt("Em que ano você nasceu?"))
imprimeIdade = (anoAtual-anoNascimento)
console.log(imprimeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return (peso/(altura*altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Qual é o seu nome?")
let idade = Number(prompt("qual é a sua idade"))
let email = prompt("Qual é o seu email?")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Qual sua cor favorita?")
const cor2 = prompt("Qual sua cor favorita?")
const cor3 = prompt("Qual sua cor favorita?")
const imprimeTresCoresFavoritas = [cor1, cor2, cor3]
console.log(imprimeTresCoresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return (custo/valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let string3 = string1.length
let string4 = string2.length
return (string3 === string4)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const array1 = [array]
return (array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const array1 = [array]
  return (array[array.length-1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroIndice = array[0]
const ultimoIndice = array[array.length-1]
array[0] = ultimoIndice
array[array.length-1] = primeiroIndice
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Qual o ano atual?"))
let anoNascimento = Number(prompt("Qual o ano do seu nascimento?"))
let emissaoRg = Number(prompt("Qual o ano de emissão do seu RG?"))
let idade = anoAtual-anoNascimento
let renovacaoRG = anoAtual-emissaoRg
let vinteAnos = ((idade <= 20) && (renovacaoRG >= 5))
let vinteAteCinquentaAnos = (((idade > 20) && (idade <= 50)) && (renovacaoRG >= 10))
let maiorCinq = ((idade > 50) && (renovacaoRG >= 15))
const checaRenovacaoRG = (vinteAnos) || (vinteAteCinquentaAnos) || (maiorCinq)
console.log(checaRenovacaoRG)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
let condicao = (((ano % 400)  === 0) || ((ano % 4) === 0) && ((ano % 100) !== 0))
return condicao
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
let idade = prompt("Você tem mais de 18 anos? Responda sim ou não")
let escolaridade = prompt("Você possui Ensino Médio completo? Responda sim ou não")
let horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? Responda sim ou não")
const podeFazerOCurso = ((idade === "sim") && (escolaridade === "sim") && (horario === "sim"))
const naoPodeFazer = ((idade === "não") && (escolaridade === "não") && (horario === "não"))
checaValidadeInscricaoLabenu = ((podeFazerOCurso) || (naoPodeFazer))
console.log(checaValidadeInscricaoLabenu)
}