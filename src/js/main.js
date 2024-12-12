jq(document).ready(function () {

  jq('a[href="https://raizeducacao.zeev.it/my/notifications"]').removeClass("d-lg-none");

    // Alterar texto "Notificações" para "Mensagens"
  jq('a.nav-link.active').each(function() {
      const spanElement = jq(this).find('span').first(); // Seleciona o primeiro <span> dentro do <a>
      const originalText = spanElement.text();
      const updatedText = originalText.replace(/Notificações/g, 'Mensagens');
      spanElement.text(updatedText);
  });

  // Remover a classe d-none do badge de contagem de notificações
  jq('a.nav-link.active .notification-count').removeClass('d-none');
  
  //MOSTRA A VERSÃO DO JQUERY NO CONSOLE
  console.log("Versão do JQuery: ", jq.fn.jquery);
  if(window.location.href === "https://raizeducacao.zeev.it/my/notifications"){
    // Alterar o título principal
    jq('.page-title h1').each(function() {
        const originalText = jq(this).text();
        const updatedText = originalText.replace(/Notificações/g, 'Mensagens');
        jq(this).text(updatedText);
    });
    // Alterar o botão "Nova notificação"
    jq('.btn-new-notification span').each(function() {
        const originalText = jq(this).text();
        const updatedText = originalText.replace(/notificação/g, 'mensagem');
        jq(this).text(updatedText);
    });
  }

  jq('#aHeaderMenuHomeName').text('Ticket Raiz');

  // Configuração do MutationObserver para monitorar mudanças no DOM
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'childList') {
        // Verifica se algum novo nó adicionado contém .card-title
        jq(mutation.addedNodes).find('.card-title').each(function () {
          if (jq(this).text().startsWith('[Atendimento]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/89/89719.png",
              alt: "Atendimento",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[BI]')) {
            var icon = jq('<img>', {
              src: "https://img.icons8.com/?size=512&id=03aYi0fY0D9X&format=png",
              alt: "BI",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[Operações]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/995/995320.png",
              alt: "Operações",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[P&C]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/2688/2688387.png",
              alt: "P&C",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[Comercial]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/2104/2104014.png",
              alt: "Comercial",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[Recursos Humanos]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/271/271332.png",
              alt: "Recursos Humanos",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[Departamento Pessoal]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/1642/1642054.png",
              alt: "Departamento Pessoal",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[Fiscal]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/3358/3358993.png",
              alt: "Fiscal",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[Financeiro]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/2543/2543363.png",
              alt: "Financeiro",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[Jurídico]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/1130/1130019.png",
              alt: "Jurídico",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[TI]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/897/897219.png",
              alt: "TI",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[Cobrança]')) {
            var icon = jq('<img>', {
              src: "https://cdn-icons-png.flaticon.com/512/6328/6328321.png",
              alt: "Cobrança",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
          } else if (jq(this).text().startsWith('[TOTVS]')) {
            var icon = jq('<img>', {
              src: "https://cdn.icon-icons.com/icons2/2148/PNG/512/totvs_icon_131953.png",
              alt: "TOTVS",
              style: "width: 32px; height: 32px; margin-right: 10px;"
            });
            jq(this).prepend(icon);
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

  if (window.location.href === "https://raizeducacao.zeev.it/my/services") {
    verificaAtrasos();
  } else {
    console.log("A URL da página não corresponde à esperada.");
  }
  
  
  ocultaCancelar();
});

async function verificaAtrasos() {
  const tokenElement = jq('input[name="__RequestVerificationToken"]');
  const token = tokenElement.length ? tokenElement.val() : null;

  if (!token) {
    console.error("Token de verificação não encontrado.");
    return;
  }

  const url = "https://raizeducacao.zeev.it/api/internal/bpms/1.0/assignments?pagenumber=1&simulation=N&codreport=6x6Iw2g5qn7z%252Bt743f1Lbg%253D%253D&reporttype=mytasks&codflowexecute=&=&codtask=&taskstatus=S&field=&operator=Equal&fieldvaluetext=&fielddatasource=&fieldvalue=&requester=&codrequester=&=&tasklate=Late&startbegin=&startend=&sortfield=&sortdirection=ASC&keyword=&chkReload=on";

  const headers = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "x-sml-antiforgerytoken": token
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
      credentials: "include"
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success && data.success.itens && data.success.itens.length > 0) {
        const items = data.success.itens;

        // Cria a tabela HTML
        let tableRows = '';
        items.forEach(item => {
          tableRows += `
          <tr>
            <td style="white-space: nowrap;"><a href="${item.lk}" data-key="${item.cfetp}" tabindex="0" role="button">${item.cfe}</a></td>
            <td style="color: #dc3545; padding: 3px 10px; white-space: nowrap;">${item.el}</td>
            <td style="white-space: nowrap;">${item.t}</td>
          </tr>`;
        });

        // Supondo que `items` contenha os dados retornados
        const totalSolicitacoes = items.length;

        const modalHTML = `
          <div id="modalOverlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); z-index: 89 !important;"></div>
          <div id="colorbox" class="" role="dialog" tabindex="-1" style="display: block; visibility: visible; top: 50%; left: 50%; transform: translate(-50%, -50%); position: fixed; width: 400px; height: 350px; background: white; z-index: 90 !important; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); padding: 16px; overflow: hidden;">
            <h2 style="margin: 0; text-align: center; padding: 3px 0; font-size: 18px;">Atenção!</h2>
            <p style="text-align: left; font-size: 14px; margin-bottom: 3px;">
              Você possui um total de <strong style="color: #dc3545">${totalSolicitacoes}</strong> solicitações com o SLA expirado.
            </p>
            <div style="overflow-x: auto; overflow-y: auto; height: 200px;">
              <table style="width: 100%; text-align: left; border-collapse: collapse; margin-top: 3px;">
                <thead>
                  <tr style="border: none;">
                    <th style="border: none; padding: 3px; white-space: nowrap;">#</th>
                    <th style="border: none; padding: 3px 10px; white-space: nowrap;">Venc.</th>
                    <th style="border: none; padding: 3px; white-space: nowrap;">Tarefa</th>
                  </tr>
                </thead>
                <tbody>
                  ${tableRows}
                </tbody>
              </table>
            </div>
            <div class="spaced text-right" style="margin-top: 3px; text-align: center;">
              <button type="button" class="btn btn-success" id="closeModalBtn" style="padding: 6px 12px;">OK</button>
            </div>
          </div>`;

        // Adicionando o modal ao DOM
        jq('body').append(modalHTML);

        // Adiciona evento ao botão OK para fechar o modal
        jq('#closeModalBtn').on('click', function () {
          // Remove o modal e o overlay
          jq('#colorbox').remove();
          jq('#modalOverlay').remove();

          // Remove qualquer estilo residual que possa bloquear interações
          jq('body').css({ pointerEvents: 'auto', overflow: 'auto' });
        });

      } else {
        console.warn("Nenhum item encontrado ou estrutura inesperada");
      }
    } else {
      console.error("Erro HTTP:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}

function ocultaCancelar() {
  jq('#inpMobileFinalize option').filter(function () {
    return jq(this).text().trim() === 'Cancelar solicitação';
  }).hide();
}
