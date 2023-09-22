function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
  
}
const ritzel = document.querySelector('.ritzel');
const titulo = document.querySelector('.title');
const titulo2 = document.querySelector('.title2');
    const textoritzel = ritzel.innerHTML.split('');
    ritzel.innerHTML = ' ';
typeWrite(titulo);

setTimeout(()=>{
    titulo.classList.remove("title")
    ritzel.classList.add("title")
    textoritzel.forEach(function(letra, i){   
        setTimeout(function(){
            ritzel.innerHTML += letra;
        }, 75 * i)
    
      });
}, 700)

typeWrite(titulo2)