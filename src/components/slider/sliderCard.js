import PropTypes from 'prop-types';
function SliderCard({item}) {
  return (
    <div className="p-2  ">
    <div className="slider-overlay relative">
    <img data-testid='image' className="w-full  h-[170px] object-cover"  src={item.image[2]['#text']} alt="" />
    <div className="text-center absolute bottom-1 w-full  font-mono slider-content opacity-0">
    <h3 data-testid="trackName" className=" font-extrabold  text-primary-color">{item.name}</h3>
    <p data-testid="artistName" className="font-bold text-xs text-white">{item.artist.name}</p>
    </div>
    </div>
  </div>
  )
}
SliderCard.propTypes ={
    item:PropTypes.object
  }
  SliderCard.defaultProps={
    item:{name:"Stronger",artist:{name:'Kenya West'},image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]}
  }
export default SliderCard