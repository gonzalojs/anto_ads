

function search () {
  const VAL = document.getElementById('SA').value
  if ( VAL.length > 0) {
    let split = VAL.split(' ')
/*     console.log(split) */
    let pars = '&p='
    let join = split.join(pars)

    window.location.href= '/search?p=' + join
  }
}

