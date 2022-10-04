(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&e(p)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function S(){const o=document.createElement("header");o.classList.add("header");const a=document.createElement("a");a.classList.add("header__link"),a.href="/",a.title="Retourner \xE0 l'accueil";const t=document.createElement("img");t.classList.add("header__logo"),t.src="/assets/svgs/logo.svg",t.alt="FishEye accueil",a.append(t);const e=document.createElement("h1");return e.classList.add("header__title"),e.textContent="Nos photographes",location.pathname==="/"?o.append(a,e):o.append(a),o}function w(o){const a=document.createElement("article");a.classList.add("photographer-card"),a.id=o.id;const t=document.createElement("a");t.classList.add("photographer-card__link"),t.href=o.slug,t.title=`Voir le profil de ${o.name}`;const e=document.createElement("div");e.classList.add("photographer-card__image-wrapper");const r=document.createElement("img");r.classList.add("photographer-card__image"),r.src=o.avatar,r.alt=`Photo de ${o.name}`,e.append(r);const i=document.createElement("h2");i.classList.add("photographer-card__name"),i.textContent=o.name,t.append(e,i);const p=document.createElement("div");p.classList.add("photographer-card__infos");const l=document.createElement("p");l.classList.add("photographer-card__location"),l.textContent=`${o.city}, ${o.country}`;const d=document.createElement("p");d.classList.add("photographer-card__tagline"),d.textContent=o.tagline;const s=document.createElement("p");return s.classList.add("photographer-card__price"),s.textContent=`${o.price}\u20AC / jour`,p.append(l,d,s),a.append(t,p),a}function A(o){const a=document.createElement("section");a.classList.add("photographer-summary");const t=document.createElement("div");t.classList.add("photographer-summary__text");const e=document.createElement("h1");e.classList.add("photographer-summary__name"),e.textContent=o.name;const r=document.createElement("div");r.classList.add("photographer-summary__infos");const i=document.createElement("h2");i.classList.add("photographer-summary__location"),i.textContent=`${o.city}, ${o.country}`;const p=document.createElement("p");p.classList.add("photographer-summary__tagline"),p.textContent=o.tagline,r.append(i,p),t.append(e,r);const l=document.createElement("button");l.classList.add("photographer-summary__contact"),l.title=`Contacter ${o.name}`,l.textContent="Contactez-moi",l.setAttribute("aria-controls","modal-form");const d=document.createElement("div");d.classList.add("photographer-summary__image-wrapper");const s=document.createElement("img");s.classList.add("photographer-summary__image"),s.src=o.avatar,s.alt=`Photo de ${o.name}`,d.append(s),a.append(t,l,d);const n=()=>{document.querySelector(".modal-form").showModal(),document.body.style.overflow="hidden"};return l.addEventListener("click",n),a}function j(){const o=document.createElement("div");o.classList.add("filter-medias");const a=document.createElement("span");a.classList.add("filter-medias__label"),a.textContent="Trier par";const t=document.createElement("div");t.classList.add("filter-medias__select");const e=document.createElement("div");e.classList.add("filter-medias__current-state"),e.tabIndex=0,e.setAttribute("aria-expanded","false"),e.setAttribute("aria-controls","filter-medias__options-group");const r=()=>{e.setAttribute("aria-expanded","true"),l.setAttribute("aria-hidden","false")},i=()=>{e.setAttribute("aria-expanded","false"),l.setAttribute("aria-hidden","true")},p=()=>{e.getAttribute("aria-expanded")==="true"?i():r()};e.addEventListener("click",p),e.addEventListener("keydown",s=>{s.key==="Enter"&&p()}),document.addEventListener("click",s=>{e.getAttribute("aria-expanded")==="true"&&(t.contains(s.target)||i())});const l=document.createElement("ul");return l.classList.add("filter-medias__options-group"),l.setAttribute("aria-hidden","true"),[{value:"popularity",label:"Popularit\xE9"},{value:"date",label:"Date"},{value:"title",label:"Titre"}].forEach(s=>{const n=document.createElement("li");n.classList.add("filter-medias__option"),n.textContent=s.label,n.tabIndex=0,s.value==="popularity"&&(e.textContent=s.label,e.dataset.value=s.value,n.style.display="none");const c=()=>{l.querySelectorAll(".filter-medias__option").forEach(y=>y.style.display="block"),n.style.display="none",e.textContent=s.label,e.dataset.value=s.value,i();const g=document.querySelector(".medias-grid");g&&(g.dataset.sort=s.value)};n.addEventListener("click",c),n.addEventListener("keydown",g=>{g.key==="Enter"&&c()}),l.append(n)}),e.addEventListener("keydown",s=>{s.key==="Enter"&&l.querySelector('.filter-medias__option:not([style*="display: none"])').focus()}),t.append(e,l),o.append(a,t),o}function M(o,a){const t=document.createElement("section");t.classList.add("photographer-medias"),t.append(a);const e=document.createElement("div");e.classList.add("medias-grid"),e.dataset.sort="popularity";const r=(d,s,n=!1)=>{if(d.image){const c=document.createElement("img");return c.classList.add(s),c.src=d.src,c.alt="Repr\xE9sentation du m\xE9dia "+d.title,c.loading="lazy",c.id=d.id,c}if(d.video){const c=document.createElement("video");return c.classList.add(s),c.src=d.src,c.id=d.id,c.controls=n,c}},i=d=>{const s=document.createElement("article");s.classList.add("media-card"),s.dataset.id=d.id;const n=document.createElement("div");n.classList.add("media-card__media-wrapper"),n.title=d.title,n.tabIndex=0,n.append(r(d,"media-card__media")),d.video&&(n.onmouseover=()=>n.querySelector("video").play(),n.onfocus=()=>n.querySelector("video").play(),n.onmouseout=()=>n.querySelector("video").pause(),n.onblur=()=>n.querySelector("video").pause(),n.querySelector("video").muted=!0);const c=document.createElement("div");c.classList.add("media-card__infos");const g=document.createElement("h3");g.classList.add("media-card__title"),g.textContent=d.title;const y=document.createElement("div");y.classList.add("media-card__likes");const _=document.createElement("p");_.classList.add("media-card__likes-count"),_.textContent=d.likes;const m=document.createElement("button");m.classList.add("media-card__likes-button"),m.title="J'aime",m.addEventListener("click",()=>{const f=document.querySelector(".photographer-aside__likes-count");m.dataset.state=m.dataset.state==="liked"?"unliked":"liked",m.dataset.state==="liked"?_.textContent++&f.textContent++:_.textContent--&f.textContent--}),m.addEventListener("animationend",()=>{m.style.animation=""}),m.addEventListener("click",()=>{m.style.animation="likes 150ms ease-in-out"}),m.addEventListener("animationstart",()=>{document.querySelector(".photographer-aside__likes-icon").style.animation="likes 150ms ease-in-out"}),m.addEventListener("animationend",()=>{document.querySelector(".photographer-aside__likes-icon").style.animation=""});const E=document.createElement("img");E.classList.add("media-card__likes-icon"),E.src="/assets/svgs/heart-red.svg",E.alt="J'aime",m.append(E),y.append(_,m),c.append(g,y),s.append(n,c),e.append(s);const L=()=>{l(d),document.body.style.overflow="hidden",document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])').forEach(u=>{u.setAttribute("tabindex","-1")}),document.querySelector(".medias-lightbox__close").setAttribute("tabindex","0"),document.querySelector(".medias-lightbox__previous").setAttribute("tabindex","0"),document.querySelector(".medias-lightbox__next").setAttribute("tabindex","0")};n.onclick=()=>{L()},n.onkeydown=f=>{f.key==="Enter"&&L()}};o.mediasSort.popularity.forEach(d=>i(d)),new MutationObserver(d=>{d.forEach(s=>{s.attributeName==="data-sort"&&(e.innerHTML="",e.dataset.sort==="popularity"&&o.mediasSort.popularity.forEach(n=>i(n)),e.dataset.sort==="date"&&o.mediasSort.date.forEach(n=>i(n)),e.dataset.sort==="title"&&o.mediasSort.title.forEach(n=>i(n)))})}).observe(e,{attributes:!0}),t.append(e);const l=d=>{const s=document.createElement("div");s.classList.add("medias-lightbox");const n=document.createElement("div");n.classList.add("medias-lightbox__container");const c=document.createElement("button");c.classList.add("medias-lightbox__close"),c.title="Fermer la fen\xEAtre";const g=document.createElement("img");g.classList.add("medias-lightbox__close-icon"),g.src="assets/svgs/close-white.svg",g.alt="Fermer la fen\xEAtre",c.append(g);const y=document.createElement("button");y.classList.add("medias-lightbox__next"),y.title="Voir le m\xE9dia suivant";const _=document.createElement("img");_.classList.add("medias-lightbox__next-icon"),_.src="assets/svgs/chevron-white.svg",_.alt="Voir le m\xE9dia suivant",y.append(_);const m=document.createElement("button");m.classList.add("medias-lightbox__previous"),m.title="Voir le m\xE9dia pr\xE9c\xE9dent";const E=document.createElement("img");E.classList.add("medias-lightbox__previous-icon"),E.src="assets/svgs/chevron-white.svg",E.alt="Voir le m\xE9dia pr\xE9c\xE9dent",m.append(E);const L=document.createElement("div");L.classList.add("medias-lightbox__content");const f=document.createElement("div");f.classList.add("medias-lightbox__media-wrapper"),f.append(r(d,"medias-lightbox__media",!0));const u=document.createElement("h3");u.classList.add("medias-lightbox__media-title"),u.textContent=d.title,L.append(f,u),n.append(c,m,L,y),s.append(n),t.append(s);const v=()=>{s.remove(),document.body.style.overflow="auto",document.querySelectorAll('a, button, [tabindex]:not([tabindex="0"])').forEach(b=>{b.setAttribute("tabindex","0")})};c.onclick=v,document.addEventListener("keydown",h=>{h.key==="Escape"&&v()});const k=h=>{const b=o.mediasSort[e.dataset.sort],x=b.indexOf(d);h==="next"&&(x===b.length-1?d=b[0]:d=b[x+1]),h==="previous"&&(x===0?d=b[b.length-1]:d=b[x-1]),f.innerHTML="",f.append(r(d,"medias-lightbox__media",!0)),u.textContent=d.title};y.onclick=()=>k("next"),document.addEventListener("keydown",h=>{h.key==="ArrowRight"&&k("next")}),m.onclick=()=>k("previous"),document.addEventListener("keydown",h=>{h.key==="ArrowLeft"&&k("previous")})};return t}function P(o){const a=document.createElement("aside");a.classList.add("photographer-aside");const t=document.createElement("div");t.classList.add("photographer-aside__likes");const e=document.createElement("span");e.classList.add("photographer-aside__likes-count"),e.textContent=o.medias.reduce((p,l)=>p+l.likes,0);const r=document.createElement("img");r.classList.add("photographer-aside__likes-icon"),r.src="/assets/svgs/heart-black.svg",r.alt="Ic\xF4ne de coeur",r.title="Total des likes",t.append(r,e);const i=document.createElement("p");return i.classList.add("photographer-aside__price"),i.textContent=o.price+"\u20AC / jour",a.append(t,i),a}function T(o){const a=document.createElement("dialog");a.classList.add("modal-form");const t=document.createElement("div");t.classList.add("modal-form__wrapper");const e=document.createElement("header");e.classList.add("modal-form__header");const r=document.createElement("h2");r.classList.add("modal-form__title"),r.textContent=`Contacter ${o.name}`;const i=document.createElement("button");i.classList.add("modal-form__close"),i.type="button",i.title="Fermer la fen\xEAtre",i.setAttribute("aria-controls","modal-form");const p=document.createElement("img");p.classList.add("modal-form__close-icon"),p.src="/assets/svgs/close-white.svg",p.alt="Fermer la fen\xEAtre",p.setAttribute("aria-controls","modal-form"),i.append(p),e.append(r,i);const l=document.createElement("form");l.classList.add("modal-form__form"),l.method="post",l.noValidate,[{label:"Pr\xE9nom",type:"text",name:"firstName",pattern:"^[a-zA-Z]{2,}$",required:!0},{label:"Nom",type:"text",name:"lastName",pattern:"^[a-zA-Z]{2,}$",required:!0},{label:"Email",type:"email",name:"email",pattern:"[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}",required:!0},{label:"Message",type:"textarea",name:"message",required:!0}].forEach(u=>{const v=document.createElement("div");v.classList.add("modal-form__field-wrapper");const k=document.createElement("label");k.classList.add("modal-form__field-label"),k.htmlFor=u.name,k.textContent=u.label;let h=null;u.type==="textarea"?(h=document.createElement("textarea"),h.minLength=10,h.maxLength=500):(h=document.createElement("input"),h.type=u.type,h.pattern=u.pattern),h.classList.add("modal-form__field-input"),h.name=u.name,h.id=u.name,h.required=u.required,v.append(k,h),l.append(v)});const s=document.createElement("button");s.classList.add("modal-form__submit"),s.type="submit",s.textContent="Envoyer",l.append(s);const n=document.createElement("div");n.classList.add("modal-form__success");const c=document.createElement("h3");c.classList.add("modal-form__success-title"),c.textContent="Message envoy\xE9 !";const g=document.createElement("p");g.classList.add("modal-form__success-text"),g.textContent="Merci pour l'int\xE9r\xEAt que vous portez au travail de photographerName. Ce photographe vous r\xE9pondra dans les plus brefs d\xE9lais.";const y=document.createElement("span");y.classList.add("modal-form__success-name"),y.textContent=o.name,g.innerHTML=g.innerHTML.replace("photographerName",y.outerHTML);const _=document.createElement("button");_.classList.add("modal-form__success-close"),_.type="button",_.title="Fermer la fen\xEAtre",_.textContent="Fermer la fen\xEAtre",_.setAttribute("aria-controls","modal-form"),n.append(c,g,_),t.append(e,l,n),a.append(t);const m=()=>{a.setAttribute("is-closing",""),a.addEventListener("animationend",()=>{a.removeAttribute("is-closing"),a.close(),document.body.style.overflow="auto"},{once:!0})};i.addEventListener("click",m),a.addEventListener("click",u=>{u.target===a&&m()}),a.addEventListener("keydown",u=>{u.key==="Escape"&&(u.preventDefault(),m())});const E={firstName:"Veuillez entrer 2 caract\xE8res ou plus pour le champ du pr\xE9nom.",lastName:"Veuillez entrer 2 caract\xE8res ou plus pour le champ du nom.",email:"Veuillez entrer une adresse email valide.",message:"Veuillez entrer entre 10 et 500 caract\xE8res pour le champ du message."},L=()=>{l.querySelectorAll(".modal-form__field-input").forEach(v=>{const k=v.closest(".modal-form__field-wrapper");v.validity.valid?k.removeAttribute("data-error"):k.setAttribute("data-error",E[v.name])})},f=()=>{m(),setTimeout(()=>{l.style.display="flex",n.style.display="none",l.reset(),l.removeEventListener("input",L)},500)};return s.addEventListener("click",u=>{u.preventDefault(),L(),l.addEventListener("input",L),l.checkValidity()&&(l.style.display="none",n.style.display="flex",_.focus(),_.addEventListener("click",()=>{f()}),a.addEventListener("click",v=>{v.target===a&&f()}),a.addEventListener("keydown",v=>{v.key==="Escape"&&(v.preventDefault(),f())}),i.addEventListener("click",()=>{f()}))}),a}function B(o){const a=document.createElement("main");a.classList.add("main"),a.id="main-home";const t=document.createElement("section");return t.classList.add("photographers-grid"),o.sort((e,r)=>e.id-r.id).forEach(e=>{t.append(w(e))}),a.append(t),a}function F(o){const a=document.createElement("main");return a.classList.add("main"),a.id="main-photographer",a.append(A(o),M(o,j()),P(o),T(o)),a}function q(){const o=document.createElement("main");o.classList.add("main"),o.id="main-404";const a=document.createElement("section");a.classList.add("not-found");const t=document.createElement("h1");t.classList.add("not-found__title"),t.textContent="Oups... \u{1F63F}";const e=document.createElement("p");e.classList.add("not-found__text"),e.textContent="Malheuresement la page currentPage n'existe pas ou n'est plus disponible.";const r=window.location.pathname.slice(1),i=document.createElement("span");i.classList.add("not-found__text--page"),i.textContent=r,e.innerHTML=e.innerHTML.replace("currentPage",i.outerHTML);const p=document.createElement("a");return p.classList.add("not-found__link"),p.href="/",p.title="Retourner \xE0 l'accueil",p.textContent="Retourner \xE0 l'accueil",a.append(t,e,p),o.append(a),o}function C(o){const a=(t,e)=>{const r=document.querySelector("#app");r.textContent="",r.append(S(),t),document.title=e+" \u2014 FishEye",document.querySelector('meta[name="title"]').setAttribute("content",document.title),document.querySelector('meta[property="og:title"]').setAttribute("content",document.title),document.querySelector('meta[property="twitter:title"]').setAttribute("content",document.title)};if(window.location.pathname==="/")a(B(o),"Home");else if(o.map(t=>t.slug).includes(window.location.pathname.replace("/",""))){const t=o.find(e=>e.slug===window.location.pathname.replace("/",""));a(F(t),t.name)}else a(q(),"404")}function W(o){C(o),window.addEventListener("popstate",()=>{C(o)}),document.addEventListener("click",a=>{const t=a.target.closest("a");if(t&&t.origin===window.location.origin){a.preventDefault();const e=new URL(t.href);e.pathname!==window.location.pathname&&(window.history.pushState({},"",e),C(o))}})}const R=[{name:"Mimi Keel",id:243,city:"London",country:"UK",tagline:"Voir le beau dans le quotidien",price:400,portrait:"MimiKeel.jpg"},{name:"Ellie-Rose Wilkens",id:930,city:"Paris",country:"France",tagline:"Capturer des compositions complexes",price:250,portrait:"EllieRoseWilkens.jpg"},{name:"Tracy Galindo",id:82,city:"Montreal",country:"Canada",tagline:"Photographe freelance",price:500,portrait:"TracyGalindo.jpg"},{name:"Nabeel Bradford",id:527,city:"Mexico City",country:"Mexico",tagline:"Toujours aller de l'avant",price:350,portrait:"NabeelBradford.jpg"},{name:"Rhode Dubois",id:925,city:"Barcelona",country:"Spain",tagline:"Je cr\xE9e des souvenirs",price:275,portrait:"RhodeDubois.jpg"},{name:"Marcel Nikolic",id:195,city:"Berlin",country:"Germany",tagline:"Toujours \xE0 la recherche de LA photo",price:300,portrait:"MarcelNikolic.jpg"}],H=[{id:342550,photographerId:82,title:"Fashion Yellow Beach",image:"Fashion_Yellow_Beach.jpg",likes:62,date:"2011-12-08",price:55},{id:8520927,photographerId:82,title:"Fashion Urban Jungle",image:"Fashion_Urban_Jungle.jpg",likes:11,date:"2011-11-06",price:55},{id:9025895,photographerId:82,title:"Fashion Pattern on a Pattern",image:"Fashion_Pattern_on_Pattern.jpg",likes:72,date:"2013-08-12",price:55},{id:9275938,photographerId:82,title:"Wedding Gazebo",image:"Event_WeddingGazebo.jpg",likes:69,date:"2018-02-22",price:55},{id:2053494,photographerId:82,title:"Sparkles",image:"Event_Sparklers.jpg",likes:2,date:"2020-05-25",price:55},{id:7324238,photographerId:82,title:"18th Anniversary",image:"Event_18thAnniversary.jpg",likes:33,date:"2019-06-12",price:55},{id:8328953,photographerId:82,title:"Wooden sculpture of a horse",video:"Art_Wooden_Horse_Sculpture.mp4",likes:24,date:"2011-12-08",price:100},{id:7502053,photographerId:82,title:"Triangle Man",image:"Art_Triangle_Man.jpg",likes:88,date:"2007-05-07",price:55},{id:8523492,photographerId:82,title:"Purple Tunnel",image:"Art_Purple_light.jpg",likes:24,date:"2018-05-05",price:55},{id:75902334,photographerId:82,title:"Art Mine",image:"Art_Mine.jpg",likes:75,date:"2019-11-25",price:55},{id:73852953,photographerId:925,title:"8 Rows",image:"Sport_2000_with_8.jpg",likes:52,date:"2013-02-30",price:70},{id:92758372,photographerId:925,title:"Fashion Wings",image:"Fashion_Wings.jpg",likes:58,date:"2018-07-17",price:70},{id:32958383,photographerId:925,title:"Melody Red on Stripes",image:"Fashion_Melody_Red_on_Stripes.jpg",likes:11,date:"2019-08-12",price:70},{id:928587383,photographerId:925,title:"Venture Conference",image:"Event_VentureConference.jpg",likes:2,date:"2019-01-02",price:70},{id:725639493,photographerId:925,title:"Product Pitch",image:"Event_ProductPitch.jpg",likes:3,date:"2019-05-20",price:70},{id:23394384,photographerId:925,title:"Musical Festival Keyboard",image:"Event_KeyboardCheck.jpg",likes:52,date:"2019-07-18",price:70},{id:87367293,photographerId:925,title:"Musical Festival Singer",image:"Event_Emcee.jpg",likes:23,date:"2018-02-22",price:70},{id:593834784,photographerId:925,title:"Animal Majesty",image:"Animals_Majesty.jpg",likes:52,date:"2017-03-13",price:70},{id:83958935,photographerId:925,title:"Cute puppy on sunset",video:"Animals_Puppiness.mp4",likes:52,date:"2016-06-12",price:70},{id:394583434,photographerId:527,title:"Rocky mountains from the air",video:"Travel_Rock_Mountains.mp4",likes:23,date:"2017-03-18",price:45},{id:343423425,photographerId:527,title:"Outdoor Baths",image:"Travel_Outdoor_Baths.jpg",likes:101,date:"2017-04-03",price:45},{id:73434243,photographerId:527,title:"Road into the Hill",image:"Travel_Road_into_Hill.jpg",likes:99,date:"2018-04-30",price:45},{id:23425523,photographerId:527,title:"Bridge into the Forest",image:"Travel_Bridge_into_Forest.jpg",likes:34,date:"2016-04-05",price:45},{id:23134513,photographerId:527,title:"Boat Wonderer",image:"Travel_Boat_Wanderer.jpg",likes:23,date:"2017-03-18",price:45},{id:92352352,photographerId:527,title:"Portrait Sunkiss",image:"Portrait_Sunkissed.jpg",likes:66,date:"2018-05-24",price:45},{id:34513453,photographerId:527,title:"Shaw Potrait",image:"Portrait_Shaw.jpg",likes:52,date:"2017-04-21",price:45},{id:23523533,photographerId:527,title:"Alexandra",image:"Portrait_Alexandra.jpg",likes:95,date:"2018-11-02",price:45},{id:525834234,photographerId:527,title:"Afternoon Break",image:"Portrait_AfternoonBreak.jpg",likes:25,date:"2019-01-02",price:45},{id:623534343,photographerId:243,title:"Lonesome",image:"Travel_Lonesome.jpg",likes:88,date:"2019-02-03",price:45},{id:625025343,photographerId:243,title:"Hillside Color",image:"Travel_HillsideColor.jpg",likes:85,date:"2019-04-03",price:45},{id:2525345343,photographerId:243,title:"Wednesday Potrait",image:"Portrait_Wednesday.jpg",likes:34,date:"2019-04-07",price:45},{id:2523434634,photographerId:243,title:"Nora Portrait",image:"Portrait_Nora.jpg",likes:63,date:"2019-04-07",price:45},{id:398847109,photographerId:243,title:"Raw Black Portrait",image:"Portrait_Background.jpg",likes:55,date:"2019-06-20",price:45},{id:2534342,photographerId:243,title:"Seaside Wedding",image:"Event_SeasideWedding.jpg",likes:25,date:"2019-06-21",price:45},{id:65235234,photographerId:243,title:"Boulder Wedding",image:"Event_PintoWedding.jpg",likes:52,date:"2019-06-25",price:45},{id:23523434,photographerId:243,title:"Benevides Wedding",image:"Event_BenevidesWedding.jpg",likes:77,date:"2019-06-28",price:45},{id:5234343,photographerId:243,title:"Wild horses in the mountains",video:"Animals_Wild_Horses_in_the_mountains.mp4",likes:142,date:"2019-08-23",price:60},{id:95234343,photographerId:243,title:"Rainbow Bird",image:"Animals_Rainbow.jpg",likes:59,date:"2019-07-02",price:60},{id:52343416,photographerId:195,title:"Japanese Tower, Kyoto",image:"Travel_Tower.jpg",likes:25,date:"2019-04-03",price:60},{id:2523434,photographerId:195,title:"Senset on Canals, Venice",image:"Travel_SunsetonCanals.jpg",likes:53,date:"2019-05-06",price:60},{id:95293534,photographerId:195,title:"Mountain and Lake",image:"Travel_OpenMountain.jpg",likes:33,date:"2019-05-12",price:60},{id:356234343,photographerId:195,title:"City Bike and Stair, Paris",image:"Travel_Bike_and_Stair.jpg",likes:53,date:"2019-06-20",price:60},{id:235234343,photographerId:195,title:"Adventure Door, India",image:"Travel_Adventure_Door.jpg",likes:63,date:"2019-06-26",price:60},{id:6234234343,photographerId:195,title:"Contrast, St Petersburg",image:"Architecture_Contrast.jpg",likes:52,date:"2019-06-30",price:60},{id:6525666253,photographerId:195,title:"On a Hill, Tibet",image:"Architecture_On_a_hill.jpg",likes:63,date:"2019-07-20",price:60},{id:98252523433,photographerId:195,title:"Leaning Tower, Pisa",image:"Architecture_Dome.jpg",likes:88,date:"2020-01-05",price:60},{id:9259398453,photographerId:195,title:"Drone shot of Buenos Aires highways",video:"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",likes:57,date:"2020-01-20",price:65},{id:3523523534,photographerId:195,title:"Corner Building and Blue Sky",image:"Architecture_Corner_Room.jpg",likes:54,date:"2020-05-05",price:60},{id:952343423,photographerId:930,title:"Tricks in te air",video:"Sport_Tricks_in_the_air.mp4",likes:150,date:"2018-02-30",price:70},{id:235234343,photographerId:930,title:"Climber",image:"Sport_Next_Hold.jpg",likes:101,date:"2018-03-05",price:65},{id:235343222,photographerId:930,title:"Surfer",image:"sport_water_tunnel.jpg",likes:103,date:"2018-03-10",price:70},{id:7775342343,photographerId:930,title:"Skier",image:"Sport_Sky_Cross.jpg",likes:77,date:"2018-04-16",price:50},{id:9253445784,photographerId:930,title:"Race End",image:"Sport_Race_End.jpg",likes:88,date:"2018-04-22",price:65},{id:22299394,photographerId:930,title:"Jump!",image:"Sport_Jump.jpg",likes:95,date:"2018-04-27",price:70},{id:3452342633,photographerId:930,title:"White Light",image:"Architecture_White_Light.jpg",likes:52,date:"2018-05-03",price:75},{id:939234243,photographerId:930,title:"Water on Modern Building",image:"Architecture_Water_on_Modern.jpg",likes:55,date:"2018-05-10",price:72},{id:222959233,photographerId:930,title:"Horseshoe",image:"Architecture_Horseshoe.jpg",likes:85,date:"2018-05-15",price:71},{id:965933434,photographerId:930,title:"Cross Bar",image:"Architecture_Cross_Bar.jpg",likes:66,date:"2018-05-20",price:58},{id:777723343,photographerId:930,title:"Connected Curves",image:"Architecture_Connected_Curves.jpg",likes:79,date:"2018-05-21",price:80}],I={photographers:R,media:H};function N(){const o=I.photographers,a=I.media;return o.forEach(t=>{t.medias=a.filter(e=>e.photographerId===t.id),t.slug=t.name.toLowerCase().replace(/ /g,"-"),t.avatar=`/assets/avatars/${t.portrait.replace(".jpg",".webp")}`,t.medias.forEach(e=>{e.image?e.src=`/assets/medias/${t.id}/images/${e.image.replace(".jpg",".webp")}`:e.video&&(e.src=`/assets/medias/${t.id}/videos/${e.video}`)}),t.mediasSort={popularity:[...t.medias].sort((e,r)=>r.likes-e.likes),date:[...t.medias].sort((e,r)=>new Date(r.date)-new Date(e.date)),title:[...t.medias].sort((e,r)=>e.title.localeCompare(r.title))}}),o}window.onload=()=>{W(N())};
