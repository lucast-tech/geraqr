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
Use online em https://geraqr-lt.netlify.app/. Para abrir o `index.html` direto
no navegador é preciso ter internet, porque a biblioteca e as fontes são
carregadas de serviços externos (veja abaixo).

## Tecnologias
HTML, CSS e JavaScript puro, mais:
- [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) 2.0.4
  (licença MIT, de Kazuhiko Arase), carregada pela CDN cdnjs, da Cloudflare;
- fontes Space Grotesk e Inter, carregadas pelo Google Fonts.

A versão da biblioteca é fixa no endereço da CDN. Se a CDN ficar fora do ar, o
QR Code deixa de ser gerado até ela voltar.

## Privacidade
O texto digitado não sai do seu navegador. O site não usa cookies nem análise
de uso. Veja os detalhes em [privacidade.html](privacidade.html).
Contato: lucastorrestecnologia01@gmail.com
