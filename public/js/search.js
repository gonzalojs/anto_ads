let boton = document.getElementById('boton')


function search() {
  const VAL = document.getElementById('SA').value
  if (VAL.length > 0) {
    let split = VAL.split(' ')
    let pars = '&p='
    let join = split.join(pars)

    window.location.href = '/buscar?p=' + join
  }
}

/* on keys */
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    search()
  }
})