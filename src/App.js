import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce,Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Pyramide } from './pages';
import { useStateContext } from './context/ContextProvider';



const App = () => {
  const {activeMenu,setActiveMenu}=useStateContext()
  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
          <TooltipComponent content="Settings" position="Top">
            <button
              className="text-3xl p-3 hover:drop-shadow-xl
                        hover:bg-light-gray text-white"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
          </div>

          {
            activeMenu ? (
              <div className='w-72 fixed sidebar
               dark:bg-secondary-dark-bg bg-white'>
                  <Sidebar/>
              </div>
            ):(
              <div className='w-0 dark:bg-secondary-dark-bg'>
                  <Sidebar/>
              </div>
            )
          }

          <div className={
            `dark:bg-main-bg  bg-main-bg min-h-screen w-full 
            ${ activeMenu ? 'md:ml-72':'flex-2'}`
            }>
              <div className='fixed md:static
               bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                  <Navbar/>
              </div>
        
          <div>
          <Routes>
            {/* DashBoead */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/Ecommerce" element={<Ecommerce/>} />

            {/* Pages */}
            <Route path="/Orders" element={<Orders/>} />
            <Route path="/Employees" element={<Employees />} />
            <Route path="/Customers" element={<Customers />} />

            {/* Apps */}
            <Route path="/Kanban" element={<Kanban />} />
            <Route path="/Editor" element={<Editor />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/Color-pick" element={<ColorPicker />} />

            {/* Charts */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/finacial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramide />} />
            <Route path="/stacked" element={<Stacked />} />
          </Routes>
          </div>
          </div>
      </div>
    </BrowserRouter>
  );
};

export default App;