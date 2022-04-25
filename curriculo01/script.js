const var1 = document.getElementById('h1');
const var2 = document.getElementById('p1');
const var3 = document.getElementById('p2');
const var4 = document.getElementById('p3');
const var5 = document.getElementById('p4');
const var6 = document.getElementById('p5');
const var7 = document.getElementById('p6');
const var8 = document.getElementById('p7');
const var9 = document.getElementById('p8');
const var10 = document.getElementById('p9');

typeWriter(var1);
typeWriter(var2);
typeWriter(var3);
typeWriter(var4);
typeWriter(var5);
typeWriter(var6);
typeWriter(var7);
typeWriter(var8);
typeWriter(var9);
typeWriter(var10);

function typeWriter(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach((letra, i) => {
    setTimeout(function() {
      elemento.innerHTML += letra;
    }, 80 * i)
  });           
}