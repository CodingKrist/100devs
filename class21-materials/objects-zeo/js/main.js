//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.brand = "Nike"
stopwatch.size = "medium"
stopwatch.shape = "round"
stopwatch.color = "black"

stopwatch.startButton = function() {
    console.log("Starting!!")
}

stopwatch.time = function(time) {
    console.log(`the time is ${time}`)
}

stopwatch.sayBrand = function() {
    console.log(stopwatch.brand)
}   