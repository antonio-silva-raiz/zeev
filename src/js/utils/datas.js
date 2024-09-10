
function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function obterDataFormatadaMesDia(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    return `${mes}-${dia}`;
}

function isFeriadoOuFimDeSemana(data) {
    const feriados = ['01-01', '04-21', '05-01', '09-07', '10-12', '11-02', '11-15', '12-25'];
    const diaSemana = data.getDay();
    const dataFormatadaMesDia = obterDataFormatadaMesDia(data);

    const isFimDeSemana = (diaSemana === 0 || diaSemana === 6);
    const isFeriado = feriados.includes(dataFormatadaMesDia);

    return isFimDeSemana || isFeriado;
}

function adicionarDiasUteis(data, diasUteis) {
    let diasAdicionados = 0;
    let novaData = new Date(data);

    while (diasAdicionados < diasUteis) {
        novaData.setDate(novaData.getDate() + 1);

        if (!isFeriadoOuFimDeSemana(novaData)) {
            diasAdicionados++;
        }
    }

    return novaData;
}
