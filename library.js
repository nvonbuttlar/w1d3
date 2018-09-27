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
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var playlistID in library.playlists) {
    var playlist = library.playlists[playlistID];
    console.log(playlist.id + ':' + playlist.name + ' - ' + playlist.tracks.length + 'tracks')
  }
}

// printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var trackID in library.tracks) {
    var track = library.tracks[trackID];
    console.log(track.id + ':' + track.name + ' by ' + track.artist + '(' + track.album + ')')
  }
}

 // printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  playListInfo = library.playlists[playlistId];
  console.log(playListInfo.id + ': ' + playListInfo.name + ' - ' + playListInfo.tracks.length + ' tracks');

  var trackInfo = playListInfo.tracks;
  for (var i = 0; i < trackInfo.length; i++) {
    var trackRef = library.tracks[trackInfo[i]];
    console.log(trackRef.id + ': ' + trackRef.name + ' by ' + trackRef.artist + '(' + trackRef.album + ')');
  }
}

// printPlaylist("p02");


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists);
}

// addTrackToPlaylist("t01", "p02");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (newName, newArtist, newAlbum) {
  var newId = uid();
  var value = {
    id: newId,
    name: newName,
    artist: newArtist,
    album: newAlbum
  }
  library.tracks[newId] = value;
}

// addTrack("Its my life", "Bon jovi", "Not sure");
// console.log(library.tracks);


// adds a playlist to the library

var addPlaylist = function (plName) {
   var anotherId = uid();
   var newPlaylist = {
    id: anotherId,
    name: plName,
    tracks: []
  }
  library.playlists[anotherId] = newPlaylist ;
}
addPlaylist("first added playlist");
console.log(library.playlists)

