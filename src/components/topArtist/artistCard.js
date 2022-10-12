

import PropTypes from 'prop-types';
import {useSelector} from "react-redux"

function ArtistCard({ item }) {
  const dark=useSelector(state=>state.dark.dark)

  return (
  
      <div className={`${dark?'bg-card-color':'bg-light-card-color'} flex transition duration-300 ease-in gap-x-4 w-full p-3 mx-auto items-center   text-white rounded-lg  max-w-sm hover:scale-105 hover:cursor-pointer`}>
        <img data-testid='image' className="object-cover w-[100px] h-full " src={item.image[0]['#text']} alt="" />
        <div className="leading-normal w-full ">
          <h5 data-testid='header' className=" relative mb-2 text-yellow-50 p-2 after:content-[''] after:w-32 after:border-b-2 after:absolute after:left-0 after:bottom-0 after:border-black ">Artist</h5>
          <div className="flex items-center  justify-between">
            <div>
              <h1 data-testid="name" className="text-sm md:text-md font-bold">{item.name}</h1>
            </div>
            <div className="text-xs flex flex-col gap-y-2 text-gray-800">
              <p data-testid='listener' ><span className={`${dark?'text-orange-500':'text-blue-900'}`}>listeners:</span> {item.listeners}</p>
              <p  data-testid='playCount'><span className={`${dark?'text-yellow-500':'text-green-900'}`}>playcount:</span> {item.playcount}</p>
            </div>
          </div>
        </div>
      </div>
  

  )
}
export default ArtistCard
ArtistCard.propTypes ={
  item:PropTypes.object
}
ArtistCard.defaultProps={
  item:{name:'Kenya West',listeners:'12345',playcount:'154545', image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]}
}
