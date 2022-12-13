function somar() {
  let tn1 = document.getElementById('soma1')
  let tn2 = document.getElementById('soma2')
  let res = document.getElementById('resSoma')
  let n1 = Number(tn1.value)
  let n2 = Number(tn2.value)
  let s = n1 + n2
  res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}

function pnz() {
  let tn2 = document.getElementById('pnz1')
  let n2 = Number(tn2.value)
  let res = 'ZERO!'
  if (n2 == 0) {
    res = 'ZERO!'
  } else if (n2 > 0) {
    res = 'POSITIVO!'
  } else {
    res = 'NEGATIVO!'
  }
  resPnz.innerHTML = `<strong>${res}</strong>`
}

function pi() {
  let tn2 = document.getElementById('pi1')
  let n2 = Number(tn2.value)
  let res = 'VAZIO!'
  if (n2 % 2 == 1 || n2 % 2 == -1) {
    res = 'IMPAR'
  } else {
    res = 'PAR'
  }
  rip.innerHTML = `<strong>${res}</strong>`
}

function maior() {
  let n1 = 0,
    n2 = 0
  let tn1 = document.getElementById('maior1')
  let tn2 = document.getElementById('maior2')
  n1 = Number(tn1.value)
  n2 = Number(tn2.value)
  res = 'VAZIO'
  if (n2 == n1) {
    resMaior.innerHTML = `Ambos os Números <strong>são iguais</strong> `
    return 0
  } else if (n2 > n1) {
    res = n2
  } else {
    res = n1
  }
  resMaior.innerHTML = `O numero maior é <strong>${res}</strong> `
}

function menor() {
  let n1 = 0,
    n2 = 0,
    n3 = 0
  let tn1 = document.getElementById('menor1')
  let tn2 = document.getElementById('menor2')
  let tn3 = document.getElementById('menor3')
  n1 = Number(tn1.value)
  n2 = Number(tn2.value)
  n3 = Number(tn3.value)
  let res = 'VAZIO'
  if (n1 <= n2 && n1 <= n3) {
    res = n1
  } else if (n2 <= n3 && n2 <= n1) {
    res = n2
  } else {
    res = n3
  }
  resMenor.innerHTML = `O numero menor é <strong>${res}</strong> `
}

function somaMaior() {
  const n = []
  let tn1 = document.getElementById('sm1')
  let tn2 = document.getElementById('sm2')
  let tn3 = document.getElementById('sm3')
  let res = 'VAZIO'
  n[0] = Number(tn1.value)
  n[1] = Number(tn2.value)
  n[2] = Number(tn3.value)
  n.sort(function (a, b) {
    return a - b
  })
  res = n[1] + n[2]

  rsm.innerHTML = `a Soma de <strong>${n[1]}</strong> e <strong>${n[2]}</strong> é <strong>${res}</strong> `
}

function lo() {
  const n = []
  let tn1 = document.getElementById('lo1')
  let tn2 = document.getElementById('lo2')
  n[0] = Number(tn1.value)
  n[1] = Number(tn2.value)
  n.sort(function (a, b) {
    return a - b
  })
  resLo.innerHTML = `A ordem Crescente é <strong>${n}</strong>`
}

function reajuste() {
  let n1 = 0,
    n2 = 0
  let tn1 = document.getElementById('salario1')
  let tn2 = document.getElementById('reajuste1')
  let res = 0
  let t = n2
  n1 = Number(tn1.value)
  n2 = Number(tn2.value)
  let af = n2
  n2 /= 100
  res = n1 + n2 * n1
  resReajuste.innerHTML = `o Salario ${n1.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })} com Reajuste de ${af}% é de <strong>${res.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })}</strong>`
}

function time() {
  let n1 = 0,
    n2 = 0
  let tn1 = document.getElementById('time1')
  let tn2 = document.getElementById('gols1')
  let tn3 = document.getElementById('time2')
  let tn4 = document.getElementById('gols2')
  n1 = Number(tn2.value)
  n2 = Number(tn4.value)
  if (n1 == n2) {
    resTime.innerHTML = `<strong>EMPATE</strong> entre <strong>${tn1.value.toUpperCase()}</strong> e <strong>${tn3.value.toUpperCase()}</strong>`
  } else if (n1 > n2) {
    resTime.innerHTML = `O ganhador é <strong>${tn1.value.toUpperCase()}</strong> com ${n1} a ${n2}, </strong> contra ${tn3.value.toUpperCase()}`
  } else {
    resTime.innerHTML = `O ganhador é <strong>${tn3.value.toUpperCase()}</strong> com ${n2} a ${n1}, </strong> contra ${tn1.value.toUpperCase()}`
  }
}

function nota() {
  let n1 = 0,
    n2 = 0
  let tn1 = document.getElementById('av1')
  let tn2 = document.getElementById('av2')
  let res = 0
  n1 = Number(tn1.value)
  n2 = Number(tn2.value)
  if ((n1 + n2) / 2 < 4) {
    res = 'REPROVADO'
  } else if ((n1 + n2) / 2 < 6) {
    res = 'Deve fazer AV3'
  } else {
    res = 'APROVADO'
  }
  resNota.innerHTML = `<strong>${res}</strong>; Nota: <strong>${
    (n1 + n2) / 2
  }</strong>`
}

function fibonacci() {
  let elementoNumeroFibonacci = document.getElementById('numero')
  const numeroFibonacci = Number(elementoNumeroFibonacci.value)
  
  if (numeroFibonacci <= 0) return alert('Digite um numero valido')
  
  let res = 0
  let penúltimo = 0
  let ultimo = 1
  
  if (numeroFibonacci <= 2) {
    res = numeroFibonacci - 1
  } else
    for (let count = 3; count <= numeroFibonacci; count++) {
      res = ultimo + penúltimo
      penúltimo = ultimo
      ultimo = res
    }
  resFibonacci.innerHTML = `O ${numeroFibonacci}º termo é <strong>${res}</strong>`
}
