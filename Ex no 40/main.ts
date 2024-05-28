//Define make_album function 
function make_album (artist_name: string, album_title: string, tracks?: number){
let album:{
    artist: string,title:string,tracks?: number}= {
        artist:artist_name,
        title:album_title,

    };
if(tracks !==  undefined){
 album.tracks = tracks;
}

return album;

}

//Calling three functions & creating three variables  with different values
let album_1 = make_album("Mani", "Album title 1");

let album_2 = make_album("Shani", "Album title 2");

//Calling a make_album function with 3rd parameter
let album_3 = make_album("Hamdani", "Album title 3", 10);

//Printing the variables
console.log(album_1);

console.log(album_2);

console.log(album_3);




