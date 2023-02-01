import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { AdminBoard , Administrators , Adventures , Teams ,Seasons, Challenges, Stages, Activities , LeaderBoard,  Competitions , Submissions } from "./pages";
import {Ecommerce , Orders, Calenders, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor} from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css'
import { fromJSON } from 'postcss';

const App = () => {
  const {activeMenu} = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex:'1000'}}>
            <TooltipComponent content="settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background: 'blue', borderRadius: '50%' }}>
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"> 
              <Sidebar/>
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar/>
            </div>
          )
        }
        <div className={
          `dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? 'md:ml-72' : 'flex-2'}` 
         }>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
           <Navbar/>           
          </div>
       

        <div>
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<AdminBoard/>}/>
            <Route path="/adminBoard" element={<AdminBoard/>}/>

            {/* People */}
            <Route path="/administrators" element={<Administrators/>}/>
            <Route path="/adventures" element={<Adventures/>}/>
            <Route path="/teams" element={<Teams/>}/>

             {/* Competitions */}
             <Route path="/seasons" element={<Seasons/>}/>
            <Route path="/challenges" element={<Challenges/>}/>
            <Route path="/stages" element={<Stages/>}/>

             {/* board */}
             <Route path="/leaderBoard" element={<LeaderBoard/>}/>
            <Route path="/submissions" element={<Submissions/>}/>
            <Route path="/activities" element={<Activities/>}/>
          </Routes>
        </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App