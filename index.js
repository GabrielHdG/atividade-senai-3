var idade = "19";
var idadePermitida = "18";
const dataDoEvento = new Date("2020-06-01");
const dataAtual = new Date("2020-03-02");
var listaDeParticipantes = ["Um", "Dois", "Três", "Quatro"]; //fiz com 4 pra não ter que escrever 100 vezes

var participantes = listaDeParticipantes.length;

dataAtual.toString();
dataDoEvento.toString();

function lista() {
  for (let i = 0; i < listaDeParticipantes.length; i++) {
    var element = listaDeParticipantes[i];
    console.log(element);
  }
} //mostra a lista de participantes

if (dataAtual <= dataDoEvento && idade >= idadePermitida && participantes < 4) {
  console.log("Cadastro permitido");
  console.log("Lista de participantes: "), lista();
} else if (dataAtual > dataDoEvento && idade > idadePermitida) {
  console.log("Data inválida");
} else if (dataAtual < dataDoEvento && idade < idadePermitida) {
  console.log("Idade menor que 18");
} else if (dataAtual > dataDoEvento && idade < idadePermitida) {
  console.log("Data inválida e idade menor que 18");
} else if (
  dataAtual <= dataDoEvento &&
  idade >= idadePermitida &&
  participantes >= 1
) {
  console.log("Quantidade de vagas total preenchida");
} else {
  console.log("error");
}
