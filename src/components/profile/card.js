import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Card({item}) {
  const dark=useSelector(state=>state.dark.dark)
//  Dark Mode olayı gerçekleştiridi
//Api kaynaklı  image Album dışında hep aynı resim geliyor. 
  return (
    <div className={`${dark?'bg-card-color ':'bg-light-card-color'} flex gap-x-4 w-full p-3 items-center transition duration-300 ease-in hover:scale-105 hover:cursor-pointer  rounded-lg  max-w-md `}>
    <img data-testid='image' className="object-cover w-[100px] h-full " src={item.image[1]['#text']} alt="" />
    <div className="leading-normal w-full ">
   
      <div className="flex flex-col md:flex-row items-center  justify-between">
        <div>
          <h1 data-testid="name" className={`${item.name.length>20?"text-xs":"text-sm"} font-bold`}>{item.name.slice(0,30)}</h1>
        </div>
        <div className="text-xs flex text-center flex-col gap-y-1 md:gap-y-2">
          {/* Eğer Listeners verisi yoksa yazdırılmayacak */}
          {item.listeners &&   <p data-testid='listener' ><span className={`${dark?'text-orange-500':'text-blue-900'}`}>listeners:</span> {item.listeners}</p>}
          <p data-testid='playCount'><span className={`${dark?'text-yellow-500':'text-green-900'}`}>playcount:</span> {item.playcount}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
Card.propTypes ={
  item:PropTypes.object,
 
}
Card.defaultProps={
  item:{name:'Kenya West',listeners:'12345',playcount:'154545', 
  image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]},

}

export default Card