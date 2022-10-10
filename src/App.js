import {useSelector} from "react-redux"

import Index from './pages';

function App() {
  const dark=useSelector(state=>state.dark.dark)
  return (
    <div className={`${dark?"bg-light-third-color":"bg-light-secondary-color"} overflow-hidden`} >
      <Index/>
    </div>
  );
}

export default App;
