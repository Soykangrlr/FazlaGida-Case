import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
function ProfileCard({artistInfo}) {
   const dark=useSelector(state=>state.dark.dark)
// Reduxtan dark Mode verisi çekilip arka plan değitirildi
  return (
  
    <div className={`${dark?'bg-card-secondary-color ':'bg-light-card-secondary-color'} rounded-2xl  overflow-hidden  flex items-center gap-x-8`}>
    <img data-testid='image' src={artistInfo.data.image[2]['#text']} alt="" />
    <p data-testid='artistName' className="text-2xl font-extrabold">{artistInfo.data.name}</p>
  </div>
  )
}
ProfileCard.propTypes ={
    item:PropTypes.object
  }
  ProfileCard.defaultProps={
    artistInfo:{data:{name:"Kenya West",image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]}}
  }
export default ProfileCard