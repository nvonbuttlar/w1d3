var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
  for (var playlistID in this.playlists) {
    var playlist = this.playlists[playlistID];
    console.log(playlist.id + ':' + playlist.name + ' - ' + playlist.tracks.length + 'tracks')
  }
},
  printTracks: function() {
  for (var trackID in this.tracks) {
    var track = this.tracks[trackID];
    console.log(track.id + ':' + track.name + ' by ' + track.artist + '(' + track.album + ')')
  }
},
  printTracksForPlaylist: function(playlistId) {

  playListInfo = this.playlists[playlistId];
  console.log(playListInfo.id + ': ' + playListInfo.name + ' - ' + playListInfo.tracks.length + ' tracks');

  var trackInfo = playListInfo.tracks;
  for (var i = 0; i < trackInfo.length; i++) {
    var trackRef = this.tracks[trackInfo[i]];
    console.log(trackRef.id + ': ' + trackRef.name + ' by ' + trackRef.artist + '(' + trackRef.album + ')');
  }
},
  addTrackToPlaylist: function(trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
  console.log(this.playlists);
},
  // generates a unique id
  // (use this for addTrack and addPlaylist)
  uniqueID: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
  addTrack: function(newName, newArtist, newAlbum) {
  var newId = this.uniqueID();
  var value = {
    id: newId,
    name: newName,
    artist: newArtist,
    album: newAlbum
  }
  this.tracks[newId] = value;
},
 addPlaylist: function(plName) {
   var anotherId = this.uniqueID();
   var newPlaylist = {
    id: anotherId,
    name: plName,
    tracks: []
  }
  this.playlists[anotherId] = newPlaylist ;
}


}

// ***FUNCTIONS TO IMPLEMENT:***

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();

console.log("-------------");


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();

console.log("-------------");


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printTracksForPlaylist("p01");

console.log("-------------");


// adds an existing track to an existing playlist

library.addTrackToPlaylist("t01", "p02");

console.log("-------------");



// adds a track to the library

library.addTrack("Its my life", "Bon jovi", "Not sure");
console.log(library.tracks);

console.log("-------------");


// adds a playlist to the library

library.addPlaylist("first added playlist");
console.log(library.playlists);

