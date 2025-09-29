function suma(a, b) {
  let wynik = a + b;
  return wynik;
  console.log('s');
}

function mnozenie(x, y) {
  let wynik = x * y;
  return wynik;
}

function kalkulator(a, b) {
  const sumaWynik = suma(a, b);
  const iloczyn = mnozenie(a, b);
  return { sumaWynik, iloczyn };
}

const a = 3;
const b = 7;

const wynik = kalkulator(a, b);
console.log(`Suma: ${wynik.sumaWynik}, Iloczyn: ${wynik.iloczyn}`);
