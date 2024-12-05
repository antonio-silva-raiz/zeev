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
                    if ($(this).text().startsWith('[Atendimento]')) {
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/89/89719.png",
                            alt: "Atendimento",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[BI]')){
                        var icon = $('<img>', {
                            src: "https://img.icons8.com/?size=512&id=03aYi0fY0D9X&format=png",
                            alt: "BI",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[Operações]')){
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/995/995320.png",
                            alt: "Operações",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[P&C]')){
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/2688/2688387.png",
                            alt: "P&C",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[Comercial]')){
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/2104/2104014.png",
                            alt: "Comercial",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[Recursos Humanos]')){
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/271/271332.png",
                            alt: "Recursos Humanos",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[Departamento Pessoal]')){
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/1642/1642054.png",
                            alt: "Departamento Pessoal",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[Fiscal]')){
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/3358/3358993.png",
                            alt: "Fiscal",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[Financeiro]')){
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/2543/2543363.png",
                            alt: "Financeiro",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[Jurídico]')){
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/1130/1130019.png",
                            alt: "Jurídico",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[TI]')){
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/897/897219.png",
                            alt: "TI",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[Cobrança]')){
                        var icon = $('<img>', {
                            src: "https://cdn-icons-png.flaticon.com/512/6328/6328321.png",
                            alt: "Cobrança",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
                    } else if($(this).text().startsWith('[TOTVS]')){
                        var icon = $('<img>', {
                            src: "https://cdn.icon-icons.com/icons2/2148/PNG/512/totvs_icon_131953.png",
                            alt: "TOTVS",
                            style: "width: 32px; height: 32px; margin-right: 10px;"
                        });
                        $(this).prepend(icon);
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
