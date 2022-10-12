
import PropTypes from 'prop-types';
function CountryCard({image,trackName}) {
 
  return (
 
    <div className="p-2 w-44 text-center ">
        <img data-testid="image" className="  w-40 h-40 object-cover rounded-full" src={image} alt="" />
        <p data-testid="track" className="mt-3 text-xs font-semibold">{trackName}</p>
    </div>
   
  )
}

CountryCard.propTypes ={
  image:PropTypes.string,
  trackName:PropTypes.string
}
CountryCard.defaultProps={
  image:'https://ia.tmgrup.com.tr/53498a/240/240/0/0/1020/1020?u=https://i.tmgrup.com.tr/724dinle/2022/09/26/1664197809249.jpg',

  trackName:'Stand By Me'
}
export default CountryCard