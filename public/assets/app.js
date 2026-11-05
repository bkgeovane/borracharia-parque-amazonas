if (location.search.includes("print")) document.documentElement.classList.add("print");
const WA = "5562982368263";
const BASE = [-16.7349391, -49.278605];

const ico = {
  furo: '<circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="8"/><path d="M40 10l6 6-14 14-6-6z" fill="currentColor"/>',
  socorro: '<path d="M6 40V26l8-12h22l8 12h12v14z" fill="currentColor"/><circle cx="18" cy="44" r="6" fill="#1c1c1c" stroke="currentColor" stroke-width="3"/><circle cx="46" cy="44" r="6" fill="#1c1c1c" stroke="currentColor" stroke-width="3"/><path d="M28 2v8M20 5l3 6M36 5l-3 6" stroke="currentColor" stroke-width="3"/>',
  bateria: '<rect x="6" y="18" width="52" height="34" rx="4" fill="none" stroke="currentColor" stroke-width="5"/><path d="M14 18v-6h8v6M42 18v-6h8v6M34 24l-10 14h8l-4 10 12-16h-8z" fill="currentColor"/>',
  troca: '<circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" stroke-width="8"/><path d="M8 20A26 26 0 0 1 50 10l4-4v14H40l6-6A20 20 0 0 0 14 22z" fill="currentColor"/>',
  calibragem: '<circle cx="32" cy="36" r="24" fill="none" stroke="currentColor" stroke-width="5"/><path d="M32 36l12-14" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><circle cx="32" cy="36" r="5" fill="currentColor"/><path d="M28 4h8v8h-8z" fill="currentColor"/>',
  montagem: '<circle cx="26" cy="38" r="20" fill="none" stroke="currentColor" stroke-width="7"/><path d="M40 6l18 18-6 6-18-18z" fill="currentColor"/>',
  eletricos: '<circle cx="14" cy="46" r="9" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="50" cy="46" r="9" fill="none" stroke="currentColor" stroke-width="5"/><path d="M36 4L22 28h10l-4 16 16-24H34z" fill="currentColor"/>',
  pneucarro: '<circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="10"/><circle cx="32" cy="32" r="9" fill="currentColor"/><path d="M32 2v6M32 56v6M2 32h6M56 32h6" stroke="#1c1c1c" stroke-width="4"/>',
  pneumoto: '<circle cx="14" cy="44" r="10" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="50" cy="44" r="10" fill="none" stroke="currentColor" stroke-width="5"/><path d="M14 44l12-16h12l12 16M30 28l-4-8h-6M38 28l6-10h6" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>',
  vulcanizacao: '<circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="8"/><path d="M32 14c6 8 8 12 8 17a8 8 0 0 1-16 0c0-5 2-9 8-17z" fill="currentColor"/>',
  rodizio: '<circle cx="16" cy="16" r="9" fill="currentColor"/><circle cx="48" cy="16" r="9" fill="currentColor"/><circle cx="16" cy="48" r="9" fill="currentColor"/><circle cx="48" cy="48" r="9" fill="currentColor"/><path d="M28 16h8M48 28v8M36 48h-8M16 36v-8" stroke="currentColor" stroke-width="4"/>',
  outro: '<circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="6"/><path d="M32 20v24M20 32h24" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>'
};

const SERV = [
  { id: "furo", nome: "Pneu furado / remendo", desc: "Conserto rápido do furo.", preco: 20 },
  { id: "socorro", nome: "Socorro no local", desc: "Vamos até você (até 10 km).", preco: 20, label: "Saída" },
  { id: "bateria", nome: "Carga na bateria", desc: "Chupeta para o carro pegar.", preco: 20, ate: 25 },
  { id: "troca", nome: "Troca de pneu / estepe", desc: "Colocamos o estepe pra você.", preco: 20, ate: 25 },
  { id: "eletricos", nome: "Carros e motos elétricas", desc: "Troca e conserto de pneu em elétricos.", preco: 20, ate: 25 },
  { id: "calibragem", nome: "Calibragem", desc: "Pressão certa, pneu durando mais." },
  { id: "montagem", nome: "Montagem e desmontagem", desc: "Pneu novo ou usado na roda.", preco: 20, ate: 25 },
  { id: "vulcanizacao", nome: "Vulcanização", desc: "Reparo em cortes e bolhas.", preco: 20, ate: 25 },
  { id: "pneucarro", nome: "Pneu de carro seminovo", desc: "Qualquer aro, até 17 e 18.", preco: 130, venda: true },
  { id: "pneumoto", nome: "Pneu de moto original", desc: "Pneu novo para sua moto.", preco: 200, venda: true },
  { id: "outro", nome: "Outro serviço", desc: "Conte o que precisa." }
];

const LOJA = [
  { id: "booster", nome: "Auxiliar de partida portátil", desc: "Booster com cabos de emergência. Dá partida sem outro carro.", preco: 300, cartao: true },
  { id: "compressor", nome: "Compressor digital portátil", desc: "Enche o pneu em qualquer lugar, com visor digital." },
  { id: "sensor", nome: "Sensor de estacionamento", desc: "Kit com sensores e aviso sonoro. Instalamos." },
  { id: "parafusadeira", nome: "Parafusadeira / chave de impacto", desc: "A bateria, ideal para trocar roda." },
  { id: "calibrador", nome: "Calibrador digital", desc: "Confira a pressão do pneu em segundos." },
  { id: "kitreparo", nome: "Kit reparo de pneu", desc: "Macarrão e ferramentas pra emergência." },
  { id: "cabos", nome: "Cabos de chupeta", desc: "Cabos reforçados para bateria." },
  { id: "carregador", nome: "Carregador veicular e suporte", desc: "USB rápido e suporte de celular." },
  { id: "triangulo", nome: "Triângulo e colete", desc: "Itens de segurança obrigatórios." },
  { id: "soquetes", nome: "Chave de roda e soquetes", desc: "Chave em cruz e jogo de soquetes." }
];
LOJA.forEach((p) => (p.loja = true));
const TODOS = [...SERV, ...LOJA];

const $ = (s) => document.querySelector(s);
const brl = (v) => "R$ " + v.toFixed(2).replace(".", ",");
let loc = null;

// cards
const card = (s) => `
  <label class="card reveal" data-id="${s.id}">
    <input type="checkbox" name="serv" value="${s.id}">
    ${s.preco ? `<span class="price">${s.label ? s.label + " " : ""}${s.ate ? "R$ " + s.preco + " a " + s.ate : brl(s.preco)}</span>` : `<span class="price consulta">Consulte</span>`}
    <span class="check" aria-hidden="true">✓</span>
    <div class="art">
      <svg viewBox="0 0 64 64" aria-hidden="true">${ico[s.id] || ico.outro}</svg>
      <img src="assets/img/${s.id}.webp" alt="${s.nome}" loading="lazy" onerror="this.remove()">
    </div>
    <div class="info"><h3>${s.nome}</h3><p>${s.desc}</p>
      ${s.cartao ? '<p class="cartao">💳 Passa no cartão</p>' : ""}
      ${s.id === "outro" ? '<input class="outro" name="outroTxt" placeholder="Qual serviço?">' : ""}
    </div>
  </label>`;
$("#grid").innerHTML = SERV.map(card).join("");
$("#loja").innerHTML = LOJA.map(card).join("");

const selecionados = () => [...document.querySelectorAll('input[name=serv]:checked')].map((i) => TODOS.find((s) => s.id === i.value));

function atualiza() {
  document.querySelectorAll(".card").forEach((c) => c.classList.toggle("on", c.querySelector("input[name=serv]").checked));
  const sel = selecionados();
  const tot = sel.reduce((a, s) => a + (s.preco || 0), 0);
  $("#count").textContent = sel.length ? `${sel.length} item(ns) selecionado(s)` : "Nenhum serviço selecionado";
  $("#total").textContent = tot ? "A partir de " + brl(tot) : "";
  $("#barra").hidden = !sel.length;
  document.body.classList.toggle("com-barra", sel.length > 0);
  $("#barraTxt").textContent = `${sel.length} item(ns)` + (tot ? ` · ${brl(tot)}` : "");
}
document.querySelectorAll(".grid").forEach((g) => g.addEventListener("change", atualiza));
$("#grid").addEventListener("click", (e) => { if (e.target.classList.contains("outro")) e.preventDefault(); });

// localização + cálculo do raio
const RAIO = 10;
let dist = null, map = null, userMark = null;
const km = (a, b) => {
  const R = 6371, r = Math.PI / 180, dLat = (b[0] - a[0]) * r, dLon = (b[1] - a[1]) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h)) * 1.25; // 1.25 ≈ distância real pelas ruas
};
function veredito() {
  if (dist == null) return "";
  const d = dist.toFixed(1).replace(".", ",");
  return dist <= RAIO ? `✅ Você está a ~${d} km. Atendemos aí!` : `⚠️ Você está a ~${d} km, fora do nosso raio de ${RAIO} km. Chame no WhatsApp que a gente combina.`;
}
function pegarLocal(onDone) {
  const sts = document.querySelectorAll(".locStatus");
  const set = (t, cls) => sts.forEach((x) => { x.textContent = t; x.className = "locStatus " + (cls || ""); });
  if (!navigator.geolocation) return set("Seu navegador não permite. Descreva o local na observação.");
  set("Buscando sua localização...");
  navigator.geolocation.getCurrentPosition(
    (p) => {
      const me = [p.coords.latitude, p.coords.longitude];
      loc = `https://maps.google.com/?q=${me[0].toFixed(6)},${me[1].toFixed(6)}`;
      dist = km(BASE, me);
      set(veredito(), dist <= RAIO ? "ok" : "fora");
      if (map) {
        userMark && userMark.remove();
        userMark = L.circleMarker(me, { radius: 9, color: "#fff", weight: 3, fillColor: "#25d366", fillOpacity: 1 }).addTo(map).bindPopup("Você está aqui");
        map.fitBounds(L.latLngBounds([BASE, me]).pad(0.3));
      }
      onDone && onDone();
    },
    () => set("Não foi possível pegar a localização. Descreva o local na observação."),
    { enableHighAccuracy: true, timeout: 10000 }
  );
}
document.querySelectorAll("[data-loc]").forEach((b) => b.addEventListener("click", () => pegarLocal()));

const waUrl = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const qrSvg = (txt) => { const q = qrcode(0, "M"); q.addData(txt); q.make(); return q.createSvgTag({ cellSize: 4, margin: 2, scalable: true }); };
const desktop = () => matchMedia("(pointer:fine) and (min-width:761px)").matches;
function abrirWA(msg) {
  const url = waUrl(msg);
  if (!desktop() || !window.qrcode) return window.open(url, "_blank", "noopener");
  $("#qrBox").innerHTML = qrSvg(url);
  $("#qrLink").href = url;
  $("#qrModal").showModal();
}
$("#qrFechar").addEventListener("click", () => $("#qrModal").close());
$("#qrModal").addEventListener("click", (e) => e.target.id === "qrModal" && e.target.close());

// pedido
$("#pedido").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const sel = selecionados();
  if (!sel.length) { $("#count").textContent = "⚠️ Escolha pelo menos um serviço"; $("#servicos").scrollIntoView(); return; }
  const outro = (f.get("outroTxt") || "").trim();
  const linhas = sel.map((s) => `• ${s.id === "outro" && outro ? "Outro: " + outro : s.nome}${s.preco ? " (" + (s.ate ? "R$ " + s.preco + " a " + s.ate : brl(s.preco)) + ")" : ""}`);
  const sv = linhas.filter((_, i) => !sel[i].loja), pr = linhas.filter((_, i) => sel[i].loja);
  let msg = "Olá! Vim pelo site da borracharia.";
  if (sv.length) msg += `\n\n🔧 *Serviços:*\n${sv.join("\n")}`;
  if (pr.length) msg += `\n\n🛒 *Tenho interesse em:*\n${pr.join("\n")}`;
  msg += `\n\n🚗 Veículo: ${f.get("veiculo")}`;
  if (f.get("nome")) msg = msg.replace("Olá!", `Olá, sou ${f.get("nome").trim()}!`);
  if (f.get("obs")) msg += `\nObs.: ${f.get("obs").trim()}`;
  if (loc) msg += `\n📍 Minha localização: ${loc}`;
  abrirWA(msg);
});

// SOS e botões diretos
document.querySelectorAll("[data-sos]").forEach((a) => a.addEventListener("click", (e) => {
  e.preventDefault();
  abrirWA("🚨 SOS! Preciso de socorro agora." + (loc ? `\n📍 Minha localização: ${loc}` : "\nVou mandar minha localização."));
}));
document.querySelectorAll("[data-wa]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); abrirWA(a.dataset.wa); }));

// animação ao rolar
const io = new IntersectionObserver((es) => es.forEach((x) => x.isIntersecting && (x.target.classList.add("in"), io.unobserve(x.target))), { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 3) * 80 + "ms"; io.observe(el); });

// mapa + QR fixo
window.addEventListener("load", () => {
  if (window.qrcode) $("#qrFixo").innerHTML = qrSvg(waUrl("Olá! Vi o site e quero atendimento."));
  if (!window.L) return;
  map = L.map("map", { scrollWheelZoom: false }).setView(BASE, 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(map);
  L.circle(BASE, { radius: 10000, color: "#ffc400", fillOpacity: 0.12 }).addTo(map);
  L.circle(BASE, { radius: 7000, color: "#ffc400", dashArray: "6", fillOpacity: 0.08 }).addTo(map);
  L.marker(BASE).addTo(map).bindPopup("<b>Borracharia Parque Amazonas</b><br>7h às 18h").openPopup();
});

// aberto ou fechado (horário de Goiânia)
(() => {
  const d = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
  const aberto = d.getDay() !== 0 && d.getHours() >= 7 && d.getHours() < 18;
  $("#status").classList.toggle("fechado", !aberto);
  $("#status span:last-child").textContent = aberto ? "Aberto agora · até 18h" : "Fechado agora · abrimos às 7h (Seg a Sáb)";
})();

$("#barraBtn").addEventListener("click", () => $("#pedido").scrollIntoView({ behavior: "smooth", block: "center" }));
