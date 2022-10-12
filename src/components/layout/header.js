import { Link} from "react-router-dom";
import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md'
import {useSelector,useDispatch} from "react-redux"
import { handleMode } from "../../redux/darkMode";
function Header() {
    const dark=useSelector(state=>state.dark.dark)
    const dispatch=useDispatch()

    return (
        <div className="bg-primary-color text-secondary-color sticky top-0 z-20 ">
            <div className="container mx-auto h-14 p-2 flex items-center justify-between">
                <Link className="text-lg font-extrabold" to="/">MusicList</Link>
                <a data-testid='deneme'   className="hover:cursor-pointer" onClick={()=>dispatch(handleMode(!dark))}>
                    {/* Dark Mode Göre (Redux) İcon değiştirildi. */}
                    {!dark?<MdOutlineDarkMode size={30}/>:<MdOutlineLightMode size={30}/>}
                </a>
            </div>

        </div>
    )
}
export default Header