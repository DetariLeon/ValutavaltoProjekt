function valutavalto() {
    var huf = document.getElementById("forint").value;
    let eur = 404
    let usd = 376.48
    let yen = 2.88
    
    document.getElementById('eur').value = (huf / eur).toFixed(2)
    document.getElementById('usd').value = (huf / usd).toFixed(2)
    document.getElementById('yen').value = (huf / yen).toFixed(2)
    return false
}