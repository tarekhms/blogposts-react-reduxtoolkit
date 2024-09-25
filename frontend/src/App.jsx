import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container-xl lg:container m-auto' >
        <Outlet />
      </div>
      <ToastContainer />
    </>
  )
}

export default App