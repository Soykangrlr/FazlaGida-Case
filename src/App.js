import {useSelector} from "react-redux"

import Index from './pages';

function App() {
  const dark=useSelector(state=>state.dark.dark)
  return (
    <div className={`${dark?"bg-third-color":"bg-light-third-color"} overflow-hidden transition duration-300 ease-in`} >
      <Index/>
    </div>
  );
}

export default App;
