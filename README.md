# GeraQR

Gerador de QR Codes simples e rápido, sem anúncios.

## Por que existe
Eu nunca encontrava um gerador de QR Code sem propaganda. Então criei este:
tudo acontece no navegador, o texto digitado não é enviado para nenhum
servidor, e não há anúncios nem cadastro.

## Funcionalidades
- Gera QR Code a partir de texto, link ou contato (até 1500 caracteres)
- Copiar a imagem ou baixar em PNG
- Tema claro/escuro (segue o sistema ou o botão)

## Como usar
Use online em https://geraqr-lt.netlify.app/ ou abra o `index.html` no navegador.
Não precisa instalar nada. A biblioteca que gera o QR Code vem junto no
projeto, então ela não depende de nenhum serviço externo.

## Tecnologias
HTML, CSS e JavaScript puro, mais:
- [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator), de
  Kazuhiko Arase (licença MIT), guardada no projeto em `qrcode.lib.js`;
- fontes Space Grotesk e Inter, carregadas pelo Google Fonts.

## Privacidade
O texto digitado não sai do seu navegador. O site não usa cookies nem análise
de uso. Veja os detalhes em [privacidade.html](privacidade.html).
Contato: lucastorrestecnologia01@gmail.com
