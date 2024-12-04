$(document).ready(function () {
  //MOSTRA A VERSÃO DO JQUERY NO CONSOLE
  console.log("Versão do JQuery: ", $.fn.jquery);
  ocultaCancelar();

    // Seleciona todos os elementos com a classe '.card-title'
    $('.card-title').each(function() {
        // Verifica se o texto do título começa com '[Atendimento]'
        if ($(this).text().startsWith('[Atendimento]')) {
            // Cria a imagem
            var icon = $('<img>', {
                src: "https://cdn-icons-png.flaticon.com/512/3889/3889482.png",
                alt: "Atendimento",
                style: "width: 20px; height: 20px; margin-right: 10px;"
            });

            // Adiciona a imagem antes do texto do título
            $(this).prepend(icon);
        }
    });

});

function ocultaCancelar() {
    $('#inpMobileFinalize option').filter(function () {
        return $(this).text().trim() === 'Cancelar solicitação';
    }).hide();
}
