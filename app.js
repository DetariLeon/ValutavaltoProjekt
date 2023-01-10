function valutavalto() {
    let huf = document.getElementById("forint").value;
    let eur = 404
    let usd = 376.48
    let yen = 2.88
    document.getElementById('eur').innerHTML = (huf / eur).toFixed(2) + " EUR"
    document.getElementById('usd').innerHTML = (huf / usd).toFixed(2) + " USD"
    document.getElementById('yen').innerHTML = (huf / yen).toFixed(2) + " JPY"
    return false
  }