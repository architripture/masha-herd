(() => {
 const data = window.MASHA_PICKS || [];
 const root = document.getElementById("cards");
 document.getElementById("total").textContent = data.length;
 const arts = {
  diary: '<rect x="83" y="28" width="154" height="228" rx="12" fill="#fffaf0" stroke="#bdbaa9" stroke-width="3" transform="rotate(-9 160 142)"/><path d="M118 69l-19 165" stroke="#d4d5c5" stroke-width="3"/><text x="128" y="125" font-family="Georgia" font-size="24" font-style="italic" fill="#3c6866">a moment</text><text x="128" y="153" font-family="Georgia" font-size="24" font-style="italic" fill="#3c6866">for me</text><path d="M135 186h73M135 202h63" stroke="#d9c6b6" stroke-width="2"/>',
  folios: '<rect x="60" y="45" width="128" height="194" rx="9" fill="#c27b79" transform="rotate(-18 124 142)"/><rect x="105" y="30" width="132" height="202" rx="9" fill="#eecb7c" transform="rotate(10 170 131)"/><rect x="116" y="65" width="117" height="177" rx="8" fill="#fef9ec" transform="rotate(4 175 154)"/><path d="M151 112l44 2 M148 132l49 2 M146 152l36 2" stroke="#cbbba4" stroke-width="3"/><path d="M155 185q19-28 34 0" fill="none" stroke="#c27b79" stroke-width="3"/>',
  radix: '<rect x="87" y="53" width="145" height="193" rx="10" fill="#f8f5eb"/><rect x="87" y="53" width="145" height="36" rx="8" fill="#2a6967"/><text x="110" y="135" fill="#2a6967" font-family="Arial" font-size="26" font-weight="bold">RADIX</text><path d="M114 165h85M114 179h65" stroke="#c5d1c8" stroke-width="4"/><ellipse cx="160" cy="214" rx="42" ry="10" fill="#caa86f"/>',
  broth: '<ellipse cx="161" cy="227" rx="100" ry="20" fill="#d3b7a8"/><path d="M81 102h160l-16 126H97z" fill="#f9f2df" stroke="#9f8066" stroke-width="3"/><rect x="83" y="89" width="156" height="23" rx="7" fill="#99755e"/><rect x="105" y="135" width="112" height="69" rx="7" fill="#6c8875"/><text x="160" y="162" text-anchor="middle" font-size="17" font-family="Georgia" fill="#fff9e8">BONE</text><text x="160" y="183" text-anchor="middle" font-size="17" font-family="Georgia" fill="#fff9e8">BROTH</text>',
  vest: '<path d="M114 54l-36 35-14 140h65v-83h62v83h65L241 89l-37-35-30 31h-31z" fill="#263e44"/><path d="M129 70l-13 82m91-82l12 82" stroke="#527177" stroke-width="8"/><rect x="107" y="125" width="110" height="73" rx="6" fill="#38575e"/><path d="M125 142h74m-74 17h74m-74 17h74" stroke="#5d7b7d" stroke-width="3"/>',
  yoto: '<rect x="82" y="53" width="156" height="174" rx="32" fill="#e79d65"/><rect x="100" y="70" width="120" height="114" rx="12" fill="#283f48"/><g fill="#e6b66b"><circle cx="147" cy="120" r="18"/><circle cx="174" cy="120" r="18"/></g><circle cx="116" cy="209" r="15" fill="#ffdeb5"/><circle cx="205" cy="209" r="15" fill="#ffdeb5"/><rect x="130" y="33" width="62" height="22" rx="5" fill="#efceb0"/>',
  blocks: '<rect x="61" y="144" width="100" height="83" rx="9" fill="#e1a46e"/><rect x="164" y="98" width="99" height="129" rx="9" fill="#8aa7a0"/><rect x="102" y="43" width="99" height="102" rx="9" fill="#ce8995"/><text x="111" y="107" font-family="Georgia" font-size="44" fill="#fff6e8">A</text><text x="192" y="180" font-family="Georgia" font-size="44" fill="#fff6e8">B</text><text x="91" y="199" font-family="Georgia" font-size="44" fill="#fff6e8">C</text>',
  mic: '<rect x="131" y="39" width="64" height="130" rx="31" fill="#2b6465"/><path d="M109 116a55 55 0 0 0 109 0" fill="none" stroke="#a86b7b" stroke-width="9"/><path d="M164 173v48m-45 0h90" fill="none" stroke="#2b6465" stroke-width="10" stroke-linecap="round"/><path d="M144 76h39m-39 19h39m-39 19h39" stroke="#a8d2c4" stroke-width="5"/>',
  waves: '<circle cx="163" cy="136" r="86" fill="#fff9eb"/><path d="M96 150v-29m19 61V91m20 114V70m20 151V57m20 152V68m20 117V90m20 65v-33" stroke="#568783" stroke-width="12" stroke-linecap="round"/>',
  chat: '<rect x="60" y="52" width="186" height="145" rx="27" fill="#fff6e7"/><path d="M110 191v36l42-34" fill="#fff6e7"/><rect x="86" y="86" width="133" height="13" rx="6" fill="#9eb9ab"/><rect x="86" y="117" width="100" height="13" rx="6" fill="#9eb9ab"/><rect x="86" y="146" width="116" height="13" rx="6" fill="#ddb3ad"/>',
  links: '<rect x="104" y="56" width="123" height="174" rx="15" fill="#fff9eb" stroke="#88a89c" stroke-width="5"/><rect x="121" y="85" width="88" height="25" rx="12" fill="#e5c48c"/><rect x="121" y="125" width="88" height="25" rx="12" fill="#9cbcb0"/><rect x="121" y="165" width="88" height="25" rx="12" fill="#d4a1a1"/>',
  payment: '<rect x="61" y="76" width="205" height="132" rx="14" fill="#fff9eb"/><rect x="61" y="100" width="205" height="33" fill="#3c6968"/><rect x="88" y="155" width="66" height="11" rx="5" fill="#b3c6bc"/><rect x="88" y="176" width="102" height="8" rx="4" fill="#d9cdb6"/><circle cx="234" cy="186" r="22" fill="#d8a47e"/>'
 };
 const escape = s => String(s || "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 const valid = s => { try { const u = new URL(s); return ["http:","https:"].includes(u.protocol) ? u.href : "#"; } catch { return "#"; } };
 const statusNames = {mine:"Пользуюсь / люблю",curious:"Присматриваюсь",trying:"Хочу попробовать",wish:"Мечтаю"};
 const artFallback = item => '<svg viewBox="0 0 320 280" role="img" aria-label="Иллюстрация" xmlns="http://www.w3.org/2000/svg">'+(arts[item.art]||arts.folios)+'</svg>';
 let categoryFilter = "all";
 let statusFilter = "all";
 function card(item) {
   const linked = Boolean(item.referralUrl || item.affiliateUrl || item.promoCode);
   const url = valid(item.affiliateUrl || item.referralUrl || item.url);
   const fallback = artFallback(item);
   const img = item.imageUrl ? '<img class="real-photo" loading="lazy" decoding="async" alt="Фото: '+escape(item.title)+'" src="'+escape(valid(item.imageUrl))+'">' : fallback;
   const credit = item.imageUrl ? '<span class="image-credit">Фото: '+escape(item.imageSource || "сайт бренда")+'</span>' : "";
   const badge = linked ? '<span class="cover-stamp cover-stamp--benefit">Есть бонус</span>' : '<span class="cover-stamp">'+(item.status === "wish" ? "Мечта" : "Моя находка")+'</span>';
   const promo = item.promoCode ? '<div class="promo-row"><span><small>Промокод</small><code>'+escape(item.promoCode)+'</code></span><button type="button" data-copy="'+escape(item.promoCode)+'" aria-label="Скопировать промокод '+escape(item.promoCode)+'">Скопировать</button></div>' : "";
   const benefit = item.benefit ? '<p class="product-benefit"><span aria-hidden="true">✦</span> '+escape(item.benefit)+'</p>' : "";
   const referralNote = linked ? '<span class="referral-line">По этой ссылке или коду я могу получить бонус / комиссию</span>' : "";
   const photoClass = item.imageUrl ? " has-photo" : "";
   return '<article class="product" data-category="'+escape(item.category)+'" data-status="'+escape(item.status)+'"><div class="product-cover'+photoClass+'">'+badge+img+credit+'</div><div class="product-body"><div class="status-row"><span class="status-pill status-'+escape(item.status)+'">'+escape(statusNames[item.status] || "Находка")+'</span></div><div class="product-eyebrow">'+escape(item.eyebrow)+'</div><h3>'+escape(item.title)+'</h3><p class="product-desc">'+escape(item.description)+'</p>'+benefit+promo+'<a class="product-link" target="_blank" rel="noopener noreferrer'+(linked ? " sponsored" : "")+'" href="'+escape(url)+'">'+escape(item.label || "Перейти на сайт")+' <span aria-hidden="true">↗</span></a>'+referralNote+'</div></article>';
 }
 function render() {
   const items = data.filter(i => (categoryFilter==="all" || i.category===categoryFilter) && (statusFilter==="all" || i.status===statusFilter));
   const names = {family:"Для ребёнка",joy:"Для себя и удовольствия",health:"Для здоровья и силы",work:"Для работы и творчества",dreams:"Мои мечталки"};
   const descriptions = {family:"Вещи для движения, воображения и совместных открытий.",joy:"Красивые ритуалы, знания и маленькие удовольствия.",health:"Не ради идеальности, а чтобы чувствовать себя сильнее.",work:"Сервисы, которые помогают создавать и не теряться в задачах.",dreams:"То, что пока на горизонте — и это тоже часть жизни."};
   const groupedCards = [];
   let last = null;
   for(const item of items){
      if(categoryFilter==="all" && item.category!==last){
        groupedCards.push('<div class="category-heading"><div><span class="category-kicker">МОИ НАХОДКИ</span><h3>'+escape(names[item.category] || item.category)+'</h3><p>'+escape(descriptions[item.category] || "")+'</p></div><span aria-hidden="true">✳</span></div>');
        last=item.category;
      }
      groupedCards.push(card(item));
   }
   root.innerHTML = groupedCards.length ? groupedCards.join("") : '<p class="no-results">В этой категории пока ничего нет. Можно посмотреть другие находки.</p>';
   root.querySelectorAll("img.real-photo").forEach(img => img.addEventListener("error", () => {
     img.outerHTML = '<div class="image-fallback">Фото временно недоступно</div>';
   }, {once:true}));
   const shown = document.getElementById("shown-count"); if(shown) shown.textContent = items.length;
 }
 document.querySelectorAll(".filter[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{
   categoryFilter = btn.dataset.filter;
   document.querySelectorAll(".filter[data-filter]").forEach(b=>{b.classList.toggle("active",b===btn);b.setAttribute("aria-pressed",String(b===btn));});
   render();
 }));
 document.querySelectorAll(".status-filter").forEach(btn=>btn.addEventListener("click",()=>{
   statusFilter = btn.dataset.status;
   document.querySelectorAll(".status-filter").forEach(b=>{b.classList.toggle("active",b===btn);b.setAttribute("aria-pressed",String(b===btn));});
   render();
 }));
 root.addEventListener("click", async e=>{
   const btn = e.target.closest("[data-copy]");if(!btn)return;
   try {await navigator.clipboard.writeText(btn.dataset.copy);btn.textContent="Скопировано ✓";setTimeout(()=>btn.textContent="Скопировать",2400);}
   catch {window.prompt("Скопируй промокод",btn.dataset.copy);}
 });
 const bookLink = document.getElementById("book-link"); if(bookLink) bookLink.href=valid(window.MASHA_BOOK_URL || "https://architripture.github.io/architect-emotions-book/");
 render();
})();