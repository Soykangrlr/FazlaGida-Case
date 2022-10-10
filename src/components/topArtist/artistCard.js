
import { Link} from "react-router-dom";

function ArtistCard({ item }) {
 
  return (
    <Link  to={`profile/${item.name}`}>
      <div class="flex gap-x-4 w-full p-3 mx-auto items-center bg-light-card-color text-white rounded-lg  max-w-sm hover:scale-105 hover:cursor-pointer  ">
        <img class="object-cover w-[100px] h-full " src={item.image[1]['#text']} alt="" />
        <div class="leading-normal w-full ">
          <h5 className=" relative mb-2 text-yellow-50 p-2 after:content-[''] after:w-32 after:border-b-2 after:absolute after:left-0 after:bottom-0 after:border-black ">Artist</h5>
          <div className="flex items-center  justify-between">
            <div>
              <h1 className="text-sm md:text-md font-bold">{item.name}</h1>
            </div>
            <div className="text-xs flex flex-col gap-y-2 text-gray-800">
              <p ><span className="text-orange-400">listeners:</span> {item.listeners}</p>
              <p><span className="text-yellow-400">playcount:</span> {item.playcount}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>

  )
}
export default ArtistCard