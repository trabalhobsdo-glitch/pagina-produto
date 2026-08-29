const reviews=[
['Isabela N.','Estou utilizando as panelas há dez dias e além de serem lindas, até agora superou minhas expectativas. São super fáceis de lavar, a espessura é muito boa, muito boas no cozimento dos alimentos…estou gostando.','Há 2 horas','assets/images/avatar-isabela.png',['assets/images/foto-panelas-armario.png','assets/images/foto-panelas-fogao.png']],
['Camila S.','As panelas são maravilhosas. Vieram em perfeito estado e muito bem embaladas. Ainda não as preparei para uso. Assim que usar volto para dar um melhor feedback.','Há 5 horas','assets/images/avatar-camila.png',['assets/images/foto-panelas-caixa.png']],
['Fernanda M.','Produto excelente, recomendo!','Há 1 dia','assets/images/avatar-fernanda.png',[]],
['Juliana R.','Demorei muito pra achar a cor, diz que pode em fogão de gás, porém acho que ela são para indução, não manchou no a gás… eu não tenho fogão a indução mas realmente a cor é a quantidade são perfeitas!','Há 2 dias','assets/images/avatar-juliana.png',['assets/images/foto-panelas-mesa.png']]
];
document.getElementById('reviews').innerHTML=reviews.map(r=>`<article class="review"><div class="review-top"><img class="review-avatar" src="${r[3]}" alt="${r[0]}"><span class="review-name">${r[0]}</span><span class="verified">✓ Compra confirmada</span></div><div class="review-head"><span class="stars">★★★★★</span><small>${r[2]} atrás</small></div><p>${r[1]}</p>${r[4].length?`<div class="review-photos">${r[4].map(p=>`<img src="${p}" alt="Foto enviada por ${r[0]}">`).join('')}</div>`:''}</article>`).join('');

document.querySelectorAll('.thumb').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.thumb').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.getElementById('mainProductImage').src=btn.dataset.src}));
const variants=[['Mármore',87.90,1],['Quartzo',79.90,0],['Grafite',89.90,0],['Oliva',89.90,0]];
function money(v){return 'R$ '+v.toFixed(2).replace('.',',')}
function renderVariants(){document.getElementById('variants').innerHTML=variants.map((v,i)=>`<div class="variant"><div><div class="variant-name">✓ ${v[0]}</div><div class="variant-price">${money(v[1])}</div></div><div class="qty"><button onclick="changeQty(${i},-1)">−</button><span>${v[2]}</span><button onclick="changeQty(${i},1)">+</button></div></div>`).join('');const total=variants.reduce((s,v)=>s+v[1]*v[2],0);const items=variants.reduce((s,v)=>s+v[2],0);document.getElementById('total').textContent=money(total);document.getElementById('items').textContent=items}
function changeQty(i,d){variants[i][2]=Math.max(0,variants[i][2]+d);renderVariants()}
function openSheet(){document.getElementById('modal').classList.add('show');renderVariants()}
function closeSheet(){document.getElementById('modal').classList.remove('show')}
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeSheet()});
let seconds=507;setInterval(()=>{if(seconds>0)seconds--;const m=Math.floor(seconds/60),s=seconds%60;document.getElementById('timer').textContent=`00:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`},1000);renderVariants();
