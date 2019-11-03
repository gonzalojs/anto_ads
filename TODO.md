* @ req.body es una array de objects con 236 de titulo y el value es el body

* Object.values = return solo los values de un objeto, no las keys
* Object.values(objeto) regresa una array con todos los values. Hay que usar [0] para
- acceder al primero y solo imprimir el texto

- Modificar api_data
- call api_data y usarlo para crear un endpoint o simplemente para call en search


Llenar la array api_data
mandar el primer elemento a la DB
cortar el primer elemento de api_data con shift()
volver a llamar a la función al final de todo
check si la array está limpia. Si lo está, no llamar a la función


extraer text value de search.
Post a algú route que crea la nueva url
mover a la nueva url con los params de la search box


TODO: search POST


TODO:
  * Anto login & register paginas
  * Cambiar el submit de anto a anto/submit
  * Anto va a ser el panel principal, desde ahí puede ir a opciones o subir cosa
  * opciones cambia las cosas de página: El título, el header, etc