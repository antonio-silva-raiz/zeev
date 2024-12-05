$(document).ready(function () {
    //MOSTRA A VERSÃO DO JQUERY NO CONSOLE
    console.log("Versão do JQuery: ", $.fn.jquery);


    // Verifica se o jQuery está funcionando e se os elementos existem
    console.log('Existem', $('.card-title').length, 'elementos .card-title na página.');

    // Configuração do MutationObserver para monitorar mudanças no DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // Verifica se algum novo nó adicionado contém .card-title
                $(mutation.addedNodes).find('.card-title').each(function() {
                    console.log('Novo elemento .card-title encontrado:', $(this).text());
                    if ($(this).text().startsWith('[Atendimento]')) {
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/3889/3889482.png",
                            alt: "Atendimento",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                        console.log('Título com ícone: ' + $(this).text());
                    }
                });
            }
        });
    });

    // Inicia o MutationObserver no body da página
    observer.observe(document.body, {
        childList: true, // Monitorar adição/remoção de filhos diretos
        subtree: true    // Monitorar alterações em todos os níveis do DOM
    });
    ocultaCancelar();

});

function ocultaCancelar() {
    $('#inpMobileFinalize option').filter(function () {
        return $(this).text().trim() === 'Cancelar solicitação';
    }).hide();
}
