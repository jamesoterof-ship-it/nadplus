/* ============================================================
   FÁBRICA JAYE — MOTOR (app.js)
   Renderiza la página desde window.CONFIG, aplica la paleta,
   anima (reveal + contadores) y conserva el backend que ya
   vende (Apps Script + n8n confirmación + panel + Meta Pixel +
   captura de carrito abandonado + región/comuna + packs).
   NO se edita por producto: solo se toca config.js.
   ============================================================ */
(function(){
const C = window.CONFIG || {};
const $ = (s,r)=> (r||document).querySelector(s);
const $$ = (s,r)=> [].slice.call((r||document).querySelectorAll(s));
const money = n => "$" + Math.round(n).toLocaleString(C.pais && C.pais.locale || "es-CL");
const set = (id,txt)=>{ var e=$("#"+id); if(e) e.textContent=txt; };
const html = (id,h)=>{ var e=$("#"+id); if(e) e.innerHTML=h; };

/* ---------- 1) PALETA → variables CSS ---------- */
(function(){
  var p = C.paleta||{}; var r = document.documentElement.style;
  if(p.pri) r.setProperty("--pri", p.pri);
  if(p.sec) r.setProperty("--sec", p.sec);
  if(p.acc) r.setProperty("--acc", p.acc);
  if(p.priD) r.setProperty("--pri-d", p.priD);
  if(p.ink) r.setProperty("--ink", p.ink);
})();

/* ---------- 2) Cabecera / SEO / contacto ---------- */
$$("[data-cfg]").forEach(function(el){
  var v = C[el.getAttribute("data-cfg")];
  if(v==null) return;
  if(el.tagName==="META") el.setAttribute("content", v);
  else el.textContent = v;
});
document.documentElement.lang = "es-" + ((C.pais&&C.pais.cc)||"cl").toUpperCase();
if(C.img && C.img.logo){ var bl=$("#brandLogo"); bl.src=C.img.logo; bl.hidden=false; bl.onerror=function(){this.hidden=true;}; }
var _bn=$("#brandName"); if(C.marca && _bn){ _bn.innerHTML = C.marca.replace(/Group/i,'<span class="g">Group</span>'); }
var waLink = "https://wa.me/"+(C.whatsapp||"")+"?text="+encodeURIComponent("Hola, quiero pedir el "+(C.productoCorto||C.producto||""));
["#navWa","#waFloat"].forEach(function(s){ var e=$(s); if(e) e.href=waLink; });
set("footTitle", C.footTitle||C.marca||"JAYE GROUP");
set("footAddr", C.footAddr||"");
var fm=$("#footMail"); if(fm){ fm.textContent=C.footMail||""; fm.href="mailto:"+(C.footMail||""); }
var fw=$("#footWa"); if(fw){ fw.textContent="+"+(C.whatsapp||""); fw.href=waLink; }
set("year", new Date().getFullYear());

/* ---------- 3) Marquees ---------- */
(function(){
  var items = ["Calidad Premium","Envío Gratis","Pago Contra Entrega","Satisfacción Garantizada","Mejores Precios"];
  var h = items.concat(items).map(function(t){return "<span>✦ "+t+"</span>";}).join("");
  html("mq1", h); html("mq2", h);
})();

/* ---------- 4) HERO ---------- */
set("heroKicker", C.heroKicker||"");
html("heroTitle", C.heroTitle||C.producto||"");
set("heroLead", C.heroLead||"");
set("heroTag", C.heroTag||"Envío gratis");
set("heroPrice", money(C.precioUnidad||0));
html("heroBadges", (C.badges||[]).map(function(b){return "<span>"+b+"</span>";}).join(""));
var hImg=$("#heroImg"); if(hImg && C.img){ hImg.src=C.img.hero||C.img.oferta||""; hImg.alt=C.producto||""; }
set("introPrice", money(C.precioUnidad||0));

/* ---------- 5) TRUST ---------- */
html("trust", (C.trust||[]).map(function(t){
  return '<div class="t"><div class="em">'+t.em+'</div><b>'+t.b+'</b><span>'+t.s+'</span></div>';
}).join(""));

/* ---------- 6) BENEFICIOS ---------- */
set("benTitle", C.benTitle||"Beneficios");
set("benSub", C.benSub||"");
html("benefits", (C.beneficios||[]).map(function(b,i){
  return '<div class="card" data-rv data-rv-d="'+(i*90)+'"><div class="ic">'+b.ic+'</div><h3>'+b.t+'</h3><p>'+b.d+'</p></div>';
}).join(""));

/* ---------- 7) CÓMO ACTÚA ---------- */
set("howTitle", C.howTitle||"");
set("howIntro", C.howIntro||"");
html("howSteps", (C.howSteps||[]).map(function(s,i){
  return '<div class="step" data-rv data-rv-d="'+(i*90)+'"><div class="n">'+(i+1)+'</div><h3>'+s.t+'</h3><p>'+s.d+'</p></div>';
}).join(""));

/* ---------- 8) OFERTA ---------- */
set("offerTitle", C.offerTitle||"");
set("offerSub", C.offerSub||"");
set("offerWas", money(C.offerWas||0));
set("offerNew", money(C.offerNew||0)+" CLP");
var oImg=$("#offerImg"); if(oImg && C.img){ oImg.src=C.img.oferta||C.img.hero||""; oImg.alt=C.offerTitle||""; }

/* ---------- 9) GALERÍA ---------- */
html("gallery", ((C.img&&C.img.galeria)||[]).map(function(src){
  return '<img src="'+src+'" loading="lazy" alt="'+(C.productoCorto||"")+'">';
}).join(""));

/* ---------- 10) STATS ---------- */
set("statTitle", C.statTitle||"Resultados");
html("stats", (C.stats||[]).map(function(s){
  return '<div class="s"><div class="em">'+s.em+'</div><b data-count="'+s.valor+'" data-suf="'+(s.suf||"")+'">0</b><p>'+s.d+'</p></div>';
}).join(""));

/* ---------- 11) COMPARATIVA ---------- */
set("cmpTitle", C.cmpTitle||"");
set("cmpUs", C.productoCorto||C.marca||"Nosotros");
var _CHK='<svg class="cmpi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
var _XIC='<svg class="cmpi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
html("compare", (C.comparativa||[]).map(function(f){
  return '<tr><td>'+f+'</td><td class="us">'+_CHK+'</td><td class="ot">'+_XIC+'</td></tr>';
}).join(""));

/* ---------- 12) GARANTÍA ---------- */
set("garDias", C.garDias||30);
set("garTitle", C.garTitle||"");
set("garText", C.garText||"");

/* ---------- 13) FAQ ---------- */
html("faqList", (C.faq||[]).map(function(f,i){
  return '<details'+(i===0?' open':'')+'><summary>'+f.q+'</summary><div class="a">'+f.a+'</div></details>';
}).join(""));

/* ---------- 14) Carriers ---------- */
if(C.carriers && C.carriers.length){
  $("#carriers").hidden=false;
  html("cbadges", C.carriers.map(function(src){return '<img src="'+src+'" alt="" onerror="this.remove()">';}).join(""));
}

/* ---------- 15) PACKS + resumen ---------- */
var packsWrap = $("#packs");
html("packs", (C.packs||[]).map(function(p,i){
  var sel = (i===1 || (C.packs.length===1));
  var thumb = i===0 ? (C.img&&C.img.packThumb1) : (C.img&&C.img.packThumb2);
  return '<label class="pack'+(sel?' sel':'')+'" data-qty="'+p.qty+'" data-price="'+p.price+'">'+
    (p.tag?'<span class="tag">'+p.tag+'</span>':'')+
    '<span class="radio"></span>'+
    (thumb?'<img class="thumb" src="'+thumb+'" alt="" onerror="this.style.display=\'none\'">':'')+
    '<span class="info"><span class="t">'+p.label+'</span><span class="s">'+p.sub+'</span></span>'+
    '<span class="pr"><span class="n">'+money(p.price)+'</span>'+(p.was>p.price?'<span class="w">'+money(p.was)+'</span>':'')+'</span>'+
  '</label>';
}).join(""));

var packs = $$("#packs .pack");
var current = packs.find(function(p){return p.classList.contains("sel");}) || packs[0];
function selectPack(qty){
  var p = packs.find(function(x){return x.dataset.qty===String(qty);});
  if(!p) return;
  packs.forEach(function(x){x.classList.remove("sel");});
  p.classList.add("sel"); current=p; refresh();
}
packs.forEach(function(p){ p.addEventListener("click",function(e){ e.preventDefault(); selectPack(p.dataset.qty); }); });
function refresh(){
  if(!current) return;
  var qty=parseInt(current.dataset.qty,10), price=parseInt(current.dataset.price,10);
  var unit=C.precioUnidad||price, sub=unit*qty, disc=sub-price;
  set("sumSub", money(sub)); set("sumDisc", "-"+money(disc)); set("sumTot", money(price));
}
refresh();

/* ---------- 16) Reveal on scroll + contadores ---------- */
(function(){
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      var el=e.target, d=parseInt(el.getAttribute("data-rv-d")||"0",10);
      setTimeout(function(){ el.classList.add("in"); }, d);
      if(el.hasAttribute("data-count")) animateCount(el);
      io.unobserve(el);
    });
  },{threshold:.15});
  $$("[data-rv]").forEach(function(el){ io.observe(el); });
  $$("[data-count]").forEach(function(el){ io.observe(el); });
  function animateCount(el){
    var meta=parseFloat(el.getAttribute("data-count")), suf=el.getAttribute("data-suf")||"";
    var dec = meta%1!==0, v=0, step=meta/55;
    var t=setInterval(function(){ v+=step; if(v>=meta){v=meta;clearInterval(t);} el.textContent=(dec?v.toFixed(1):Math.floor(v))+suf; },20);
  }
})();

/* ---------- 17) Countdown de 2 días que se reinicia solo (ciclo de 48h) ---------- */
(function(){
  var pad=function(n){return String(n).padStart(2,"0");};
  var CYCLE=2*86400; /* 2 días en segundos */
  function tick(){
    var now=Math.floor(Date.now()/1000);
    var rem=CYCLE-(now%CYCLE); /* cuenta de 2 días a 0 y vuelve a empezar */
    set("cd-d",pad(Math.floor(rem/86400)));
    set("cd-h",pad(Math.floor(rem%86400/3600)));
    set("cd-m",pad(Math.floor(rem%3600/60)));
    set("cd-s",pad(rem%60));
  }
  tick(); setInterval(tick,1000);
})();

/* ---------- 18) Scroll suave + nav móvil ---------- */
function goTo(sel){
  var el=$(sel); if(!el) return;
  var off=($(".header")?$(".header").offsetHeight:0)+8;
  window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-off,behavior:"smooth"});
}
$$("[data-scroll]").forEach(function(b){
  b.addEventListener("click",function(){
    if(b.dataset.qty) selectPack(b.dataset.qty);
    goTo(b.dataset.scroll);
    var nav=$("#nav"); if(nav) nav.classList.remove("open");
    if(b.dataset.scroll==="#pedido" && !_checkout){ _checkout=true; fb("InitiateCheckout",{content_name:C.producto,value:current?+current.dataset.price:C.precioUnidad,currency:C.pais.moneda}); trackPanel("visita_form"); }
  });
});
$("#ham").addEventListener("click",function(){ $("#nav").classList.toggle("open"); });

/* ---------- 19) Sticky CTA ---------- */
(function(){
  var bar=$("#stickycta"), form=$("#pedido");
  window.addEventListener("scroll",function(){
    var ft=form.getBoundingClientRect().top;
    bar.classList.toggle("show", window.scrollY>520 && ft>window.innerHeight*0.5);
  },{passive:true});
})();

/* ---------- 20) Selector código de país ---------- */
(function(){
  var paises=[["+56","cl","Chile"],["+57","co","Colombia"],["+595","py","Paraguay"],["+54","ar","Argentina"],["+591","bo","Bolivia"],["+593","ec","Ecuador"],["+51","pe","Perú"],["+598","uy","Uruguay"],["+58","ve","Venezuela"],["+52","mx","México"],["+1","us","Estados Unidos"],["+34","es","España"]];
  var pre=(C.pais&&C.pais.prefijo)||"+56", cc=(C.pais&&C.pais.cc)||"cl";
  html("ccList", paises.map(function(p){return '<button type="button" data-code="'+p[0]+'" data-cc="'+p[1]+'"><img src="https://flagcdn.com/'+p[1]+'.svg" alt="">'+p[2]+'<span class="code">'+p[0]+'</span></button>';}).join(""));
  $("#ccFlag").src="https://flagcdn.com/"+cc+".svg"; set("ccCode",pre); $("#codpais").value=pre;
  var box=$("#cc"), btn=$("#ccBtn"), list=$("#ccList");
  btn.addEventListener("click",function(e){ e.stopPropagation(); list.hidden=!list.hidden; });
  $$("#ccList button").forEach(function(b){ b.addEventListener("click",function(){ $("#codpais").value=b.dataset.code; $("#ccFlag").src="https://flagcdn.com/"+b.dataset.cc+".svg"; set("ccCode",b.dataset.code); list.hidden=true; }); });
  document.addEventListener("click",function(e){ if(!box.contains(e.target)) list.hidden=true; });
})();

/* ---------- 21) Regiones / comunas (Chile) ---------- */
(function(){
  var region=$("#region"), comuna=$("#comuna");
  var data = window.CHILE_REGIONES;
  if(!data){ return; }
  Object.keys(data).forEach(function(r){ var o=document.createElement("option"); o.value=r; o.textContent=r; region.appendChild(o); });
  region.addEventListener("change",function(){
    comuna.innerHTML='<option value="">Selecciona…</option>';
    (data[region.value]||[]).forEach(function(c){ var o=document.createElement("option"); o.value=c; o.textContent=c; comuna.appendChild(o); });
    comuna.disabled=(data[region.value]||[]).length===0;
  });
})();

/* ============================================================
   BACKEND (igual que las landings que ya venden)
   ============================================================ */
var SHEET_URL=C.sheetUrl||"", N8N=C.n8nConfirm||"", PANEL=C.panelUrl||"", PRODUCTO=C.producto||"";
function trackPanel(tipo){ if(!PANEL) return; try{ fetch(PANEL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({tipo:tipo})}).catch(function(){}); }catch(e){} }
try{ if(!sessionStorage.getItem("jaye_vis")){ sessionStorage.setItem("jaye_vis","1"); trackPanel("visita"); } }catch(e){ trackPanel("visita"); }

/* Meta Pixel: base + PageView se cargan en el <head> del index. Aquí solo se disparan los eventos. */
function fb(ev,d){ if(window.fbq){ try{ fbq("track",ev,d||{}); }catch(e){} } }
fb("ViewContent",{content_name:PRODUCTO,content_type:"product",value:C.precioUnidad,currency:C.pais.moneda});
var _checkout=false;

/* ---------- Reseñas ---------- */
(function(){
  var list=$("#revList"); if(!list) return;
  set("revScore", C.revScore||4.8);
  var NAMES=["José Muñoz","Matías Soto","Felipe Contreras","Sebastián Silva","Vicente Sepúlveda","Diego Rodríguez","Cristóbal Fuentes","Ignacio Torres","Benjamín Flores","Tomás Valenzuela","Martín Tapia","Agustín Gutiérrez","Rodrigo Vargas","Carlos Núñez","Manuel Riquelme","Pedro Cáceres","Andrés Salazar","Jorge Fuentealba","Luis Carrasco","Patricio Bravo","Francisco Vera","Gonzalo Pizarro","Héctor Aravena","Roberto Sandoval","Claudio Miranda","Marcelo Ortiz","Óscar Vergara","Ramón Cisternas","Eduardo Lagos","Hernán Maturana","Mauricio Fuentes","Cristián Poblete","Juan Espinoza","Alejandro Rojas","Sergio Castillo","Pablo Herrera","Nicolás Reyes","Víctor Morales","Raúl Pérez","Fernando Díaz","Álvaro Bravo","Gabriel Muñoz","Esteban Ruiz","Joaquín Tapia"];
  var TEXTS=["Excelente producto, llegó rápido y se siente la diferencia.","Lo recomiendo 100%, ya voy por el segundo frasco.","Llevo dos semanas y ando con mucha más energía.","Más vitalidad y menos cansancio en las tardes.","El pago contra entrega me dio confianza para pedir.","Se nota el cambio desde la primera semana.","Ando con mejor ánimo y más energía todo el día.","Llegó a regiones sin problema, muy buena atención.","Tremendo suplemento, lo noto en el gimnasio.","Más foco y claridad para el trabajo, dejé el café de la tarde.","A mis 58 me siento con otra pila, recomendado.","Despierto con más energía y rindo todo el día.","Se lo recomendé a mi hermano y también quedó conforme.","Buen precio por la cantidad de ingredientes que trae.","Me ayudó con el bajón de las cuatro de la tarde.","Calidad premium, se nota que no es cualquier vitamina.","Lo pedí desconfiado y quedé sorprendido, funciona.","Duermo mejor y amanezco con más energía.","Después del mes me siento más activo y de mejor humor.","Atención por WhatsApp muy rápida, llegó en dos días.","Para la próstata me ha venido muy bien, más tranquilo.","Nada de nervios ni taquicardia como otros energizantes.","Lo tomo en la mañana y rindo hasta la noche sin bajón.","Hasta mi señora me nota más animado y con más ganas.","Recomendado para los que pasamos sentados todo el día.","Volví a entrenar con más fuerza, gran producto.","Se nota en la concentración, ando más despejado.","Llegó bien embalado y antes de lo esperado.","Vale cada peso, ya lo volví a pedir.","Mejoró mi energía y mi estado de ánimo en general.","Sin estimulantes raros, energía limpia y pareja.","A mi edad cuesta encontrar algo que funcione, este sí.","Me siento más joven y con más ganas de hacer cosas.","Buenísimo, lo recomendé a mis amigos del trabajo.","Más resistencia en el día y mejor recuperación.","Pedido fácil, pagué al recibir, todo perfecto.","Noté mejor circulación y menos pesadez en las piernas.","Lo uso hace un mes y no pienso dejarlo.","Energía estable, sin el bajón del café.","Mejor rendimiento físico y más vitalidad, muy conforme.","Producto serio, se nota la calidad de la fórmula.","Llegó a Antofagasta en tres días, excelente.","Más vitalidad en todo sentido, muy conforme.","Lo mejor es la energía sin ponerme acelerado."];
  var IMGS=["img/r1.webp","img/r2.webp","img/r3.webp","img/r4.webp","img/r5.webp","img/r6.webp","img/r7.webp","img/r8.webp","img/r9.webp"];
  var seedN=C.revSeed||40, SEED=[];
  for(var k=0;k<seedN;k++){ var st=(k%9===4)?4:(k%24===7?3:5); var dd=String((k*7)%28+1).padStart(2,"0"); var mm=String((k%5)+1).padStart(2,"0");
    SEED.push({name:NAMES[k%NAMES.length],stars:st,ver:(k%3===0),text:TEXTS[k%TEXTS.length],date:dd+"/"+mm+"/2026",img:IMGS[k]||""}); }
  var KEY="rev_"+(C.productoCorto||"prod").replace(/\W+/g,"_");
  function load(){ try{ return JSON.parse(localStorage.getItem(KEY)||"[]"); }catch(e){ return []; } }
  function save(a){ try{ localStorage.setItem(KEY,JSON.stringify(a)); }catch(e){} }
  function stars(n){ var s=""; for(var i=1;i<=5;i++){ s+= i<=n?"★":'<span class="off">★</span>'; } return s; }
  function av(n){ return (n||"?").trim().charAt(0).toUpperCase(); }
  function card(r){ return '<div class="rev"><div class="top"><span class="av">'+av(r.name)+'</span><div><div class="who">'+r.name+(r.ver?'<span class="ver">✓ Verificado</span>':'')+'</div><div class="date">'+r.date+'</div></div></div><div class="st">'+stars(r.stars)+'</div><p>'+r.text+'</p>'+(r.img?'<img class="rev-img" src="'+r.img+'" loading="lazy" onerror="this.remove()">':'')+'</div>'; }
  function render(){ var all=load().concat(SEED); list.innerHTML=all.slice(0,8).map(card).join(""); var auto=$("#revAuto"); if(auto){ var rest=SEED.slice(8,32); auto.innerHTML=rest.concat(rest).map(card).join(""); } set("revCount",(C.revSeed||40)+load().length); }
  render();
  var modal=$("#revModal"), rating=0, picks=$$("#starPick span");
  function paint(n){ picks.forEach(function(s,i){ s.classList.toggle("on",i<n); }); }
  picks.forEach(function(s){ s.addEventListener("click",function(){ rating=+s.dataset.v; paint(rating); }); s.addEventListener("mouseenter",function(){ paint(+s.dataset.v); }); });
  $("#starPick").addEventListener("mouseleave",function(){ paint(rating); });
  $("#btnWrite").addEventListener("click",function(){ modal.hidden=false; });
  $("#revClose").addEventListener("click",function(){ modal.hidden=true; });
  modal.addEventListener("click",function(e){ if(e.target===modal) modal.hidden=true; });
  $("#revSubmit").addEventListener("click",function(){
    var name=$("#revName").value.trim(), text=$("#revText").value.trim(), msg=$("#revMsg");
    if(!rating){ msg.style.color="#e1283c"; msg.textContent="Elige cuántas estrellas."; return; }
    if(name.length<2||text.length<3){ msg.style.color="#e1283c"; msg.textContent="Escribe tu nombre y tu reseña."; return; }
    var hoy=new Date(), review={name:name,text:text,stars:rating,ver:false,date:String(hoy.getDate()).padStart(2,"0")+"/"+String(hoy.getMonth()+1).padStart(2,"0")+"/"+hoy.getFullYear()};
    var mine=load(); mine.unshift(review); save(mine); render();
    if(SHEET_URL){ fetch(SHEET_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({tipo:"resena",producto:PRODUCTO,nombre:name,estrellas:rating,resena:text,fecha:review.date})}).catch(function(){}); }
    msg.style.color="#27ae60"; msg.textContent="¡Gracias! Tu reseña se publicó. 🎉";
    $("#revName").value=""; $("#revText").value=""; rating=0; paint(0);
    setTimeout(function(){ modal.hidden=true; msg.textContent=""; },1200);
  });
})();

/* ---------- Validación + envío + carrito abandonado ---------- */
(function(){
  var form=$("#orderForm");
  function setInvalid(id,bad){ $("#"+id).closest(".field").classList.toggle("invalid",bad); }
  var SID="AB"+Date.now()+Math.floor(Math.random()*1e6);
  function telLimpio(){ var cc=(form.codpais.value||"").replace(/\D/g,""), d=(form.telefono.value||"").replace(/\D/g,""); if(cc&&d.indexOf(cc)===0&&d.length-cc.length>=8) d=d.slice(cc.length); return d; }
  function sendSheet(p){ if(!SHEET_URL) return; try{ fetch(SHEET_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(p)}).catch(function(){}); }catch(e){} }
  function formData(){ return { sid:SID, producto:PRODUCTO, cantidad:current?parseInt(current.dataset.qty,10):"", total:current?parseInt(current.dataset.price,10):"", nombre:form.nombre.value.trim(), indicativo:form.codpais.value, telefono:telLimpio(), correo:form.correo.value.trim(), direccion:form.direccion.value.trim(), referencia:form.referencia.value.trim(), region:form.region.value, comuna:form.comuna.value, pagina:location.href, fecha:new Date().toLocaleString(C.pais.locale) }; }
  var abSent=false, abTimer, leadTracked=false;
  function captureAb(){ if(form.telefono.value.replace(/\D/g,"").length<8) return; abSent=true; sendSheet(Object.assign(formData(),{tipo:"abandonado",estado:"INCOMPLETO"})); if(!leadTracked){ leadTracked=true; fb("Lead",{content_name:PRODUCTO,value:current?+current.dataset.price:C.precioUnidad,currency:C.pais.moneda}); } }
  ["telefono","nombre","correo","direccion","referencia"].forEach(function(id){ var e=$("#"+id); if(e) e.addEventListener("blur",function(){ clearTimeout(abTimer); abTimer=setTimeout(captureAb,300); }); });
  ["region","comuna"].forEach(function(id){ var e=$("#"+id); if(e) e.addEventListener("change",function(){ clearTimeout(abTimer); abTimer=setTimeout(captureAb,300); }); });
  form.telefono.addEventListener("input",function(){ if(form.telefono.value.replace(/\D/g,"").length>=8){ clearTimeout(abTimer); abTimer=setTimeout(captureAb,1200); } });

  form.addEventListener("submit",async function(e){
    e.preventDefault();
    var ok=true,bad;
    var nombre=form.nombre.value.trim(), tel=form.telefono.value.replace(/\D/g,""), dir=form.direccion.value.trim();
    bad=nombre.length<2; setInvalid("nombre",bad); if(bad)ok=false;
    bad=tel.length<8; setInvalid("telefono",bad); if(bad)ok=false;
    bad=dir.length<4; setInvalid("direccion",bad); if(bad)ok=false;
    var hasRegion=$("#region").options.length>1;
    if(hasRegion){ bad=!form.region.value; setInvalid("region",bad); if(bad)ok=false; bad=!form.comuna.value; setInvalid("comuna",bad); if(bad)ok=false; }
    if(!ok){ var inv=form.querySelector(".invalid"); if(inv) inv.scrollIntoView({behavior:"smooth",block:"center"}); return; }
    var qty=parseInt(current.dataset.qty,10), total=parseInt(current.dataset.price,10);
    var data={ sid:SID, producto:PRODUCTO, cantidad:qty, total:total, nombre:nombre, indicativo:form.codpais.value, telefono:telLimpio(), direccion:dir, correo:form.correo.value.trim(), referencia:form.referencia.value.trim(), region:form.region.value, comuna:form.comuna.value, pagina:location.href, fecha:new Date().toLocaleString(C.pais.locale) };
    var btn=$("#submitBtn"); btn.disabled=true; btn.textContent="Enviando…";
    try{
      if(SHEET_URL) await fetch(SHEET_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(data)});
      if(N8N){ var telWA=(form.codpais.value+"").replace(/\D/g,"")+telLimpio();
        fetch(N8N,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ customer:{phone:telWA}, shipping_address:{first_name:nombre.split(" ")[0],address1:dir}, order_number:"JG-"+String(Date.now()).slice(-6), line_items:[{title:PRODUCTO,quantity:qty}], total_price:String(total) })}).catch(function(){}); }
      if(abSent) sendSheet(Object.assign(formData(),{tipo:"abandonado",estado:"COMPLETADO"}));
      fb("Purchase",{content_name:PRODUCTO,value:total,currency:C.pais.moneda});
      form.style.display="none"; $("#packs").style.display="none"; document.querySelector(".summary").style.display="none";
      set("okName",nombre.split(" ")[0]); $("#okMsg").style.display="block"; $("#okMsg").scrollIntoView({behavior:"smooth",block:"center"});
    }catch(err){ btn.disabled=false; btn.textContent="COMPRAR (pagar al recibir)"; alert("Hubo un problema al enviar. Intenta de nuevo o escríbenos por WhatsApp."); }
  });
})();

})();
