// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

let str = "moose"

function isIsogram(str){
 return new Set(str.toUpperCase()).size === str.length // new Set te hace un objeto con las letras de la cadena SIN REPETIR
                                                        // por ejemplo de moose en el ejemplo hace: M O S E, un objeto con 4 elementos.