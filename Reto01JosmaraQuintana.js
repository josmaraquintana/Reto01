//Josmara Alexa Quintana Benitez    
function prepareSongs(songs) {
    if (songs.length === 0) {
        return []; //Si el arreglo esta vacio, retorna un arreglo vacio
    } else {
        //Primero iniciamos un ciclo for que recorre el arreglo de canciones
        for (let i = 0; i < songs.length; i++) {
            //Este segundo for se ejecuta y compara con la primera vuelta
            //del primer for y empieza a borrar los elementos duplicados si es que los hay 
            for (let j = i + 1; j < songs.length; j++) {
                if (songs[i] === songs[j]) {
                    songs.splice(j, 1);
                    j--;
                }
            }
        }    
        //Este tercer for es para ordenar el arreglo de menor a mayor
        //Este for inicia el recorrido desde la primer canción
        for (let i = 0; i < songs.length; i++) {
            //Este for inicia desde la segunda canción y compara con la primer canción
            //Si la primer canción es mayor que la segunda, se intercambian de lugar
            //De hecho esto se pare un poco al algoritmo de burbuja jsjsjs
            for (let j = i + 1; j < songs.length; j++) {
                if (songs[i] > songs[j]) {
                    let temporal = songs[i]; //Asignamos temporalmente el valor de i a uan variable
                    songs[i] = songs[j]; //Hacemos el cambio
                    songs[j] = temporal; //Le asignamos el valor de i a j 
                }
            }
        }
        return songs;
    }
}  

const songs1 = [3, 1, 2, 3, 4, 2, 5]
const playlist1 = prepareSongs(songs1)
console.log(playlist1) // [1, 2, 3, 4, 5]

const songs2 = [6, 5, 5, 5, 5]
const playlist2 = prepareSongs(songs2)
console.log(playlist2) // [5, 6]

const songs3 = []
const playlist3 = prepareSongs(songs3)
console.log(playlist3) // []
// Nadie anotó nada, la lista queda vacía

