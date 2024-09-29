import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <table className='relative w-full h-[100svh] m-0 p-0 border-separate' cellPadding="0" cellSpacing="0">
      <tbody>
        <tr><td><Navbar /></td></tr>
        <tr>
          <td className='h-full align-top'>
            <div className='container-xl lg:container m-auto mt-7' >
              <Outlet />
              <ToastContainer />
            </div>
          </td>
        </tr>
        <tr><td><Footer /></td></tr>
      </tbody>
    </table>
  )
}

export default App