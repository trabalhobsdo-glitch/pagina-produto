const reviews=[
['Cliente verificado','Produto excelente, recomendo!','Há 1 dia'],
['Cliente verificado','Material muito bom e acabamento bonito.','Há 3 dias'],
['Cliente verificado','Chegou bem embalado e dentro do prazo.','Há 5 dias'],
['Cliente verificado','Gostei bastante do conjunto e da quantidade de peças.','Há 1 semana'],
['Cliente verificado','Muito bonito e fácil de limpar.','Há 2 semanas']
];
document.getElementById('reviews').innerHTML=reviews.map(r=>`<article class="review"><div class="review-head"><span>${r[0]} <span class="verified">Compra confirmada</span></span><span class="stars">★★★★★</span></div><small>${r[2]}</small><p>${r[1]}</p></article>`).join('');

document.querySelectorAll('.thumb').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.thumb').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.getElementById('mainProductImage').src=btn.dataset.src}));
const variants=[['Mármore',87.90,1],['Quartzo',79.90,0],['Grafite',89.90,0],['Oliva',89.90,0]];
function money(v){return 'R$ '+v.toFixed(2).replace('.',',')}
function renderVariants(){document.getElementById('variants').innerHTML=variants.map((v,i)=>`<div class="variant"><div><div class="variant-name">✓ ${v[0]}</div><div class="variant-price">${money(v[1])}</div></div><div class="qty"><button onclick="changeQty(${i},-1)">−</button><span>${v[2]}</span><button onclick="changeQty(${i},1)">+</button></div></div>`).join('');const total=variants.reduce((s,v)=>s+v[1]*v[2],0);const items=variants.reduce((s,v)=>s+v[2],0);document.getElementById('total').textContent=money(total);document.getElementById('items').textContent=items}
function changeQty(i,d){variants[i][2]=Math.max(0,variants[i][2]+d);renderVariants()}
function openSheet(){document.getElementById('modal').classList.add('show');renderVariants()}
function closeSheet(){document.getElementById('modal').classList.remove('show')}
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeSheet()});
let seconds=507;setInterval(()=>{if(seconds>0)seconds--;const m=Math.floor(seconds/60),s=seconds%60;document.getElementById('timer').textContent=`00:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`},1000);renderVariants();
