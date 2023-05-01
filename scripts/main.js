const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';
function multiplica(num1,num2) {
    let resultado = num1 * num2;
    return resultado;
  }
  console.log(multiplica(4,7));
  let miImage = document.querySelector('img');
  miImage.onclick = function () {
      let miSrc = miImage.getAttribute('src');
      if (miSrc === 'images/descarga.jpg') {
        miImage.setAttribute('src','images/lobito.jpg');
      } else {
        miImage.setAttribute('src', 'images/descarga.jpg');
      }
  }