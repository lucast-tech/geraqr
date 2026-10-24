/* GeraQR · aviso de privacidade e página da política
   - Até a pessoa clicar em "Concordo", o aplicativo fica bloqueado.
   - "Concordo" salva a escolha neste aparelho e carrega as fontes do Google Fonts.
   - "Não concordo" não salva nada e não carrega as fontes.
   - A política abre na própria página (endereço #privacidade), sem recarregar. */
(function () {
  'use strict';

  var KEY = 'geraqr-aceite';
  var FONTS = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap';

  var app = document.querySelector('.app');
  var consent = document.getElementById('consent');
  var consentTitle = document.getElementById('consentTitle');
  var consentText = document.getElementById('consentText');
  var consentYes = document.getElementById('consentYes');
  var consentNo = document.getElementById('consentNo');
  var policy = document.getElementById('policyView');
  var policyBack = document.getElementById('policyBack');
  var resetConsent = document.getElementById('resetConsent');

  var textoInicial = consentText.textContent;
  var accepted = false;      // vale mesmo se o navegador não deixar usar o localStorage
  var declined = false;      // só na tela, nada é salvo
  var openedFromApp = false; // true quando a política foi aberta por um clique nesta página
  var fontsLoaded = false;

  // Lê a escolha guardada (se o navegador permitir)
  try { accepted = localStorage.getItem(KEY) === 'sim'; } catch (e) {}

  // Carrega as fontes do Google só depois do "Concordo"
  function loadFonts() {
    if (fontsLoaded) return;
    fontsLoaded = true;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONTS;
    document.head.appendChild(link);
  }

  // Mostra a tela certa conforme o endereço (#privacidade) e a escolha da pessoa
  function render() {
    var policyOpen = location.hash === '#privacidade';
    policy.hidden = !policyOpen;
    app.hidden = policyOpen;

    var showConsent = !accepted && !policyOpen;
    consent.hidden = !showConsent;
    app.inert = !accepted; // enquanto não concordar, nada do app recebe clique ou foco

    if (accepted) loadFonts();

    if (declined) {
      consentTitle.textContent = 'Sem a sua concordância não dá para usar';
      consentText.textContent = 'Tudo bem. Nada foi salvo no seu aparelho. Para usar o GeraQR é preciso concordar com a Política de Privacidade.';
      consentNo.textContent = 'Ler a política';
    } else {
      consentTitle.textContent = 'Antes de usar o GeraQR';
      consentText.textContent = textoInicial;
      consentNo.textContent = 'Não concordo';
    }

    if (showConsent) consentYes.focus();
  }

  consentYes.addEventListener('click', function () {
    accepted = true;
    declined = false;
    try { localStorage.setItem(KEY, 'sim'); } catch (e) {}
    render();
    var campo = document.getElementById('qrInput');
    if (campo) campo.focus();
  });

  consentNo.addEventListener('click', function () {
    if (declined) { location.hash = '#privacidade'; return; } // 2º clique: abre a política
    declined = true;
    render();
  });

  // Rodapé: apagar a concordância e mostrar o aviso de novo
  resetConsent.addEventListener('click', function (ev) {
    ev.preventDefault();
    accepted = false;
    declined = false;
    try { localStorage.removeItem(KEY); } catch (e) {}
    render();
  });

  // Botão Voltar (canto superior esquerdo da política)
  policyBack.addEventListener('click', function () {
    if (openedFromApp) {
      history.back();
    } else {
      history.replaceState(null, '', location.pathname + location.search);
      render();
    }
    window.scrollTo(0, 0);
  });

  window.addEventListener('hashchange', function () {
    if (location.hash === '#privacidade') openedFromApp = true;
    render();
    window.scrollTo(0, 0);
  });

  render();
})();
