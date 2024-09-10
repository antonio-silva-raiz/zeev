$(document).ready(function () {
  //MOSTRA A VERSÃO DO JQUERY NO CONSOLE
  console.log("Versão do JQuery: ", $.fn.jquery);
  ocultaCancelar();
});

function ocultaCancelar() {
    $('#inpMobileFinalize option').filter(function () {
        return $(this).text().trim() === 'Cancelar solicitação';
    }).hide();
}