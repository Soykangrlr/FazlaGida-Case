import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { fetchCountryTopTracks, fetchTopArtists, fetchTopTracks } from "../api/api";
import CountryCard from "../components/country/countryCard";
import Loading from "../components/loading/loading";
import SliderTacks from "../components/slider/sliderTracks";
import ArtistCard from "../components/topArtist/artistCard";
import { handleScroll } from "../utils/handleScroll";
import {useSelector} from "react-redux"
import { Link} from "react-router-dom";
import ErrorPage from "./errorPage";

function Homepage() {
  const dark=useSelector(state=>state.dark.dark)
// TopTrack , TopArtist, CountryTracks Alındı
    const topTracks = useQuery(
      ["topTracks"],fetchTopTracks
    );
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["topArtists"], fetchTopArtists, {
    //  Scroll indikce pageParam Artırıldı
      getNextPageParam: (lastPage, allPages) => {
        // Her defasın 50 tane dat geldiği için kalan 0 değilse Son sayfa Kontrolü yapıldı
       const morePages=lastPage.length%50===0
       if (!morePages) {
        return
       }
       return allPages.length+1
      },
});
const countryTracks = useQuery(['fetcCountryTracks'], fetchCountryTopTracks)
console.log(countryTracks);
  if (status === 'loading'||topTracks.isLoading||countryTracks.isLoading) {
    return <Loading/>;
  }
  if (status === 'error'||topTracks.isError||countryTracks.isError) {
    return <ErrorPage errorMasage='Bağlantı Kurulamadı'/>
  }


  const handleTopArtistScroll=(e)=>{
      handleScroll(e,fetchNextPage)
  }

  return (
    <div >
      <div className="mb-4">
      <h1 className={`${dark?'text-card-secondary-color':'text-primary-color'} font-bold`}>Top Tracks</h1>
      <SliderTacks items={topTracks.data}/>
      </div>
     <div className="flex flex-col gap-y-10 md:flex-row gap-x-4 lg:gap-x-16">
      <div className="max-w-md flex-1 mx-auto">
      <h1 className={`${dark?'text-white':'text-gray-700'} text-center mt-2 mb-2 font-bold text-xl`}>Top Artist List</h1>
      <div
        onScroll={handleTopArtistScroll}
        className="flex flex-col gap-y-2 shadow-xl overflow-hidden hover:overflow-y-scroll p-2 max-w-md max-h-[410px] "
      >
      
       {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.map(item => (
          <Link  to={`profile/${item.name?item.name:""}`}>
           <ArtistCard item={item}/>
           </Link>
          ))}
        </React.Fragment>
      ))}
      <div className="text-center text-orange-500">
        
          {isFetchingNextPage
            ? <Loading/>
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
       
      </div>
      </div>
      </div>
      <div className=" flex-1 text-white ">
        <h1 className={`${dark?'text-white':'text-gray-700'} text-center  mt-2 mb-2 font-bold text-xl`}>Popular Tracks In Turkey</h1>
        <div className="grid grid-cols-1  xl:grid-cols-3  gap-y-10 overflow-hidden max-h-[410px] hover:overflow-y-scroll p-2">
           {countryTracks.data.map(item=>(
            <div className={`${dark?' text-white':'border-primary-color text-black'} rounded-2xl  mx-auto  hover:scale-105 p-2 transition duration-300 ease-in`}>
                 <Link  to={`profile/${item.artist.name?item.artist.name:""}`}>
            <CountryCard artistName={item.artist.name} image={item.image[0]['#text']} trackName={item.name}/>
            </Link>
            </div>
           ))}
      </div>
      </div>
      </div>
    </div>
  );
}
export default Homepage;
