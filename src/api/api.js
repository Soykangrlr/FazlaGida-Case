import axios from "axios";

export const fetchTopTracks=async()=>{

    const topTrack=await axios.get(`${process.env.REACT_APP_API_BASE}2.0/?method=chart.gettoptracks&api_key=${process.env.REACT_APP_API_KEY}&format=json&limit=20`)
  return topTrack.data.tracks.track
  
}

export const fetchTopArtists=async({ pageParam = 1 })=>{

  const topArtist=await axios.get(`${process.env.REACT_APP_API_BASE}2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json&page=${pageParam}`)
return topArtist.data.artists.artist

}

export const fetchArtistTopAlbums=async({ pageParam = 1,artist })=>{
 
  const artistTopAlbum=await axios.get(`${process.env.REACT_APP_API_BASE}2.0/?method=artist.gettopalbums&&artist=${artist}&api_key=${process.env.REACT_APP_API_KEY}&format=json&page=${pageParam}`)

return artistTopAlbum.data.topalbums.album

}
export const fetchArtistTopTracks=async({ pageParam = 1,artist })=>{
 
  const artistTopTracks=await axios.get(`${process.env.REACT_APP_API_BASE}2.0/?method=artist.gettoptracks&&artist=${artist}&api_key=${process.env.REACT_APP_API_KEY}&format=json&page=${pageParam}`)

return artistTopTracks.data.toptracks.track

}

export const fetchArtist=async(artist)=>{
 
  const artistInfo=await axios.get(`${process.env.REACT_APP_API_BASE}2.0/?method=artist.getinfo&artist=${artist}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)

return artistInfo.data.artist

}

export const fetchCountryTopTracks=async()=>{
 
  const countryTracks=await axios.get(`${process.env.REACT_APP_API_BASE}2.0/?method=geo.gettoptracks&country=turkey&api_key=${process.env.REACT_APP_API_KEY}&format=json`)

return countryTracks.data.tracks.track

}
