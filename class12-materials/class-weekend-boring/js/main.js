document.querySelector('#check').addEventListener('click', check)

function check() {

  const DAY = document.querySelector.('#day').value
  const okDay = day.toLowerCase()

  //Conditionals go here

  if(okDay === "saturday" || okDay === "sunday") {
    document.querySelector('#placeToSee').innerText = "Weekend!"
  }
  else if(okDay === "tuesday" || okDay === "thursday") {
    document.querySelector('#placeToSee').innerText = "Class day!"
  }
  else{
    document.querySelector('#placeToSee').innerText = "Boooring!"
  }

}
