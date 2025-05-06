let button = document.getElementById("button")

button.addEventListener("click", function () {
  let velCarro = document.getElementById("velCarro")
  let velPista = document.getElementById("velPista")
  let tittle = document.getElementsByTagName("h1")[0]

  let carroVel = Number(velCarro.value)
  let pistaVel = Number(velPista.value)

  let res = document.getElementById("res")

  console.log(carroVel)
  console.log(pistaVel)

  if (carroVel > pistaVel) {
    tittle.innerText = `Foi de multas amigo`
    res.innerHTML = `<p> Você está acima da velocidade da pista, então foi multado </p>
    <p> a velocidade era de <strong> ${carroVel} km/h </strong> numa pista de <strong> ${pistaVel} km/h </strong> </p>`
  } else {
    tittle.innerText = `Quase em amigo`
    res.innerHTML = `<p> Você estava abaixo da velocidade da pista, então não fez mais que sua obrigação! </p> <p> Sua velocidade era de <strong> ${carroVel} km/h </strong> numa pista de <strong> ${pistaVel} km/h </strong> </p>`
  }

  velCarro.value = ""
  velPista.value = ""
})
