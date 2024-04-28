// Creating a function (make_album)
function make_album(artist_name, album_title, tracks) {
    //Building a Object describing a music album
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//  calling our function three times by a varaible name with different values 
var album1 = make_album("Talwiinder", "Album_title no.1");
var album2 = make_album("Atif Aslam", "Album_title no.2");
var album3 = make_album("Yunus", "Album_title no.3", 45);
// Printing our function
console.log(album1);
console.log(album2);
console.log(album3);
