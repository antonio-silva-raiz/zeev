$(document).ready(function () {
    //MOSTRA A VERSÃO DO JQUERY NO CONSOLE
    console.log("Versão do JQuery: ", $.fn.jquery);


    // Verifica se o jQuery está funcionando e se os elementos existem
    console.log('Existem', $('.card-title').length, 'elementos .card-title na página.');

    // Verifica se os elementos estão presentes antes de tentar manipulá-los
    if ($('.card-title').length === 0) {
        console.log('Nenhum elemento com a classe .card-title encontrado.');
    }

    // Itera sobre todos os títulos com a classe '.card-title'
    $('.card-title').each(function () {
        // Verifica o título atual
        console.log('Verificando título:', $(this).text());

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

            // Exibe o título que recebeu o ícone no console
            console.log('Título com ícone: ' + $(this).text());
        }
    });
    ocultaCancelar();

});

function ocultaCancelar() {
    $('#inpMobileFinalize option').filter(function () {
        return $(this).text().trim() === 'Cancelar solicitação';
    }).hide();
}
