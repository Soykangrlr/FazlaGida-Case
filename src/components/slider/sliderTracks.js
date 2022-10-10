import { Link} from "react-router-dom";
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import Slider from "react-slick";
function SliderTacks({items}) {
  function PrevBtn(props) {
    const {className, onClick } = props;
    return (
      <button
        className='absolute top-1/2 -left-6 text-light-card-secondary-color -translate-y-1/2 text-brand-color'
        onClick={onClick}
      ><IoIosArrowBack size={22}/></button>
    );
  }
  function NextBtn(props) {
    const {className, onClick } = props;
    return (
      <button
      className='absolute text-light-card-secondary-color top-1/2 -right-6 -translate-y-1/2 text-brand-color'
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
        <Link to={`profile/${item.artist.name}`}>
          <div className="p-2  ">
            <div className="slider-overlay relative">
            <img className="w-full  h-[170px] object-cover"  src={item.image[3]['#text']} alt="" />
           <div className="text-center absolute bottom-1 w-full  font-mono slider-content opacity-0">
            <h3 className=" font-extrabold  text-light-primary-color">{item.name}</h3>
            <p className="font-bold text-xs text-gray-800">{item.artist.name}</p>
            </div>
            </div>
          </div>
          </Link>
          )}

        </Slider>
    </div>
  )
}
export default SliderTacks