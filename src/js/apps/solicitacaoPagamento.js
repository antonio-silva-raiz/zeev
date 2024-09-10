$(document).ready(function () {
    $('#inptipoDePedido').prop('readonly', true)
    $('#inptipoDePedido').val('REGULAR')

    var dataAtual = new Date();
    var dataVencimento = adicionarDiasUteis(dataAtual, 6);
    $('#inpdataDeVencimento').val(formatarData(dataVencimento));
});

/*
  ##############################
  ########## ONCHANGE ##########
  ##############################

  TODAS AS FUNÇÕES ABAIXO SÃO CHAMADAS QUANDO O VALOR DE UM CAMPO SOFRE ALTERAÇÃO
*/

function validaDataVencimento(input) {
    let dataInput = input.value;
    let [dia, mes, ano] = dataInput.split('/');
    let dataEscolhida = new Date(ano, mes - 1, dia);

    let dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);

    if (dataEscolhida <= dataAtual) {
        cryo_alert('<p style="color: red; text-align: center;">A data escolhida não pode ser a data atual ou uma data anterior.</p>');
        input.value = '';
        $('#inptipoDePedido').hide();
        return;
    }

    while (isFeriadoOuFimDeSemana(dataEscolhida)) {
        dataEscolhida.setDate(dataEscolhida.getDate() + 1);
    }

    const diferencaTempo = dataEscolhida - dataAtual;
    const diferencaDias = diferencaTempo / (1000 * 3600 * 24);

    if (diferencaDias <= 7) {
        $('#inptipoDePedido').val('EMERGÊNCIAL');
    } else {
        $('#inptipoDePedido').val('REGULAR');
    }

    $('#inptipoDePedido').show();

    input.value = formatarData(dataEscolhida);
}

function vencimentoParcela(input) {
    let dataSelecionada = input.value

    var datasDeVencimento = [];

    $('input[data-name="vencimentoDaParcela"]').each(function () {
        var valorData = $(this).val().trim();

        if (valorData !== '') {
            var partesData = valorData.split('/');
            var dataISO = new Date(partesData[2], partesData[1] - 1, partesData[0]);

            datasDeVencimento.push(dataISO);
        }
    });

    if (datasDeVencimento.length > 0) {
        var menorData = new Date(Math.min.apply(null, datasDeVencimento));
        var menorDataFormatada = menorData.toLocaleDateString('pt-BR');
        console.log('A menor data de vencimento é: ' + menorDataFormatada);
    } else {
        console.log('Nenhuma data de vencimento encontrada.');
    }
}