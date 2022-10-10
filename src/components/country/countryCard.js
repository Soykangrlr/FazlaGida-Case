import { Link} from "react-router-dom";
function CountryCard({item}) {
  console.log(item);
  return (
    <Link to={`profile/${item.artist.name}`}>
    <div className="p-2 w-44 text-center">
        <img className="  w-40 h-40 object-cover rounded-full" src={item.image[0]['#text']} alt="" />
        <p className="mt-3 text-xs font-semibold">{item.name}</p>
    </div>
    </Link>
  )
}
export default CountryCard