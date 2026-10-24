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
de uso. Na primeira visita aparece um aviso com os botões **Concordo** e
**Não concordo**:
- **Concordo** libera o app, guarda a escolha e o tema neste aparelho e carrega
  as fontes do Google Fonts;
- **Não concordo** mantém o app bloqueado e não salva nem carrega nada.

A Política de Privacidade abre dentro da própria página (`#privacidade`), sem
recarregar. O link "Alterar minha escolha", no rodapé, mostra o aviso de novo.
Contato: lucastorrestecnologia01@gmail.com

## Arquivos
`index.html` (página e política), `style.css`, `script.js` (gerador),
`lgpd.js` (aviso e política), `qrcode.lib.js` (biblioteca) e `logo.webp`.
