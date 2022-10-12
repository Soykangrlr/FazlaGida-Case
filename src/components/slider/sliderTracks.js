import { Link} from "react-router-dom";
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import Slider from "react-slick";
import SliderCard from "./sliderCard";
import PropTypes from 'prop-types';

function SliderTacks({items}) {
  console.log(items);
  function PrevBtn(props) {
    const {className, onClick } = props;
    return (
      //  next ve Prev Butonları eklendi
      <button
        className='absolute top-1/2 -left-6 text-card-secondary-color -translate-y-1/2 text-brand-color'
        onClick={onClick}
      ><IoIosArrowBack size={22}/></button>
    );
  }
  function NextBtn(props) {
    const {className, onClick } = props;
    return (
      <button
      className='absolute text-card-secondary-color top-1/2 -right-6 -translate-y-1/2 text-brand-color'
        onClick={onClick}
      ><IoIosArrowForward size={22}/></button>
    );
  }
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      nextArrow: <NextBtn />,
      prevArrow: <PrevBtn />,
      // Responsive slider yapıldı
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
      };
     
  return (
    <div  >
       <Slider {...settings}>
        {items.map(item=>
        // link Slider Card tıklandığında Profile Detail Yönlendirme yapıldı
        <Link data-testid='link' to={`profile/${item.artist.name}`}>
          <SliderCard item={item}/>
          </Link>
          )}

        </Slider>
    </div>
  )
}
SliderTacks.propTypes ={
  item:PropTypes.array
}
SliderTacks.defaultProps={
  items:[ {name:"Stronger",artist:{name:'Kenya West'},image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]},
  {name:"Stronger",artist:{name:'Kenya West'},image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]},
  {name:"Stronger",artist:{name:'Kenya West'},image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]},
  {name:"Stronger",artist:{name:'Kenya West'},image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]},
  {name:"Stronger",artist:{name:'Kenya West'},image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]},
  {name:"Stronger",artist:{name:'Kenya West'},image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]},
  {name:"Stronger",artist:{name:'Kenya West'},image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]},
  
]
 
}
export default SliderTacks