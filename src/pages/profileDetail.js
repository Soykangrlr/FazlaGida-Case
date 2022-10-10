import { useParams } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchArtist, fetchArtistTopAlbums, fetchArtistTopTracks } from "../api/api";
import {useSelector} from "react-redux"

import { handleScroll } from "../utils/handleScroll";
import Card from "../components/profile/card";
import React from "react";
import Loading from "../components/loading/loading";
function ProfileDetail() {
  const { artist } = useParams()
  const dark=useSelector(state=>state.dark.dark)


  const topAlbum = useInfiniteQuery(["artistsTopALbum", artist], () => fetchArtistTopAlbums({ artist }), {

    getNextPageParam: (lastPage, allPages) => {

      const morePages = lastPage.length % 50 === 0
      if (!morePages) {
        return
      }
      return allPages.length + 1
    },
  });
  const topTrack = useInfiniteQuery(["artistsTopTrack", artist], () => fetchArtistTopTracks({ artist }), {

    getNextPageParam: (lastPageTrack, allTrackPages) => {

      const morePages = lastPageTrack.length % 50 == 0
      if (!morePages) {
        return
      }
      return allTrackPages.length + 1
    },
  });

  const artistInfo = useQuery(['fetcArtistInfo', artist], () => fetchArtist(artist))
  if (topAlbum.status === 'loading'||topTrack.status === 'loading'||artistInfo.isLoading) {
    return <Loading/>;
  }
  if (topAlbum.status === 'error'||topTrack.status === 'error'||artistInfo.isError) {
    <p>Error: {topAlbum.error.message}</p>
  }

  const handleTopAlbumScroll = (e) => {
    handleScroll(e, topAlbum.fetchNextPage)
  }
  const handleTopTrackScroll = (e) => {
    handleScroll(e, topTrack.fetchNextPage)
  }
  return (
    <>

      <div className="bg-light-card-secondary-color  rounded-2xl  overflow-hidden  flex items-center gap-x-8">
        <img src={artistInfo.data.image[2]['#text']} alt="" />
        <p className="text-2xl font-extrabold">{artist}</p>
      </div>
      <div className=" lg:flex-row flex-col gap-y-10 flex mx-10 gap-x-4 mt-3  ">
        <div className="lg:flex-1 mx-auto">
          <h5 className={`${dark?'text-white after:border-white ':'text-black after:border-black'} text-xl p-2 relative mb-2 after:content-[''] after:w-96 after:border-b-2 after:absolute after:left-0 after:bottom-0`}>Top Album</h5>
          <div
            onScroll={handleTopAlbumScroll}
            className="flex flex-col gap-y-2 overflow-hidden mt-5  hover:overflow-y-scroll p-2 max-w-md max-h-[400px] "
          >
            {topAlbum.data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.map(item => (
                  <Card item={item} />
                ))}
              </React.Fragment>
            ))}
            <div className="text-center text-orange-500">

              {topAlbum.isFetchingNextPage
                ? 'Loading more...'
                : topAlbum.hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}

            </div>

          </div>
        </div>
        <div className="lg:flex-1 mx-auto">
          <h5 className={`${dark?'text-white after:border-white ':'text-black after:border-black'} text-xl p-2 relative mb-2 after:content-[''] after:w-96 after:border-b-2 after:absolute after:left-0 after:bottom-0`}>Top Track</h5>
          <div
            onScroll={handleTopTrackScroll}
            className="flex flex-col gap-y-2 overflow-hidden mt-5  hover:overflow-y-scroll p-2 max-w-md max-h-[400px] "
          >
            {topTrack.data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.map(item => (
                  <Card item={item} />
                ))}
              </React.Fragment>
            ))}
            <div className="text-center text-orange-500">

              {topTrack.isFetchingNextPage
                ? 'Loading more...'
                : topTrack.hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default ProfileDetail