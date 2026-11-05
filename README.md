# Borracharia Parque Amazonas — site

Site estático (HTML/CSS/JS puro), hospedado no Cloudflare Pages a partir deste repositório.

- `index.html` — página única + SEO (Schema AutoRepair, FAQ, Open Graph)
- `assets/app.js` — serviços/produtos (preços), pedido no WhatsApp, QR Code, cálculo do raio (10 km)
- `assets/img/` — artes geradas com Nano Banana (Gemini)
- Para mudar preço ou produto: edite as listas `SERV` e `LOJA` em `assets/app.js`.

## Publicar
Cloudflare Pages → Create → Connect to Git → este repo. Build command: (vazio). Output: `/`.

## SEO local (o que mais traz cliente)
1. Criar o **Perfil da Empresa no Google** (business.google.com) no endereço Av. José Leandro da Cruz, Parque Amazônia — categoria "Borracharia", horário 7h–18h, telefone (62) 98236-8263, link do site, fotos.
2. Pedir para clientes avaliarem no Google.
3. Cadastrar o site no Google Search Console e enviar `sitemap.xml`.
4. Se mudar o domínio, troque `borrachariaparqueamazonas.pages.dev` em `index.html`, `robots.txt` e `sitemap.xml`.
