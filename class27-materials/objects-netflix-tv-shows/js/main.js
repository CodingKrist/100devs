//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTvShow{
    constructor(title, genre, rating, numOfEp) {
        this.title = title;
        this.genre = genre;
        this.rating = rating
        this.numOfEp = numOfEp;
    }

    play() {
        console.log("Playing...")
    }
    stop() {
        console.log("Stoping...")
    }
    saveToList() {
        console.log("Saved to List")
    }
}

let bridgerton = new NetflixTvShow('Bridgerton', 'Period Romantic Drama', '99%', 16)