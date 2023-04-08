import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Members from './pages/Members'
import Teams from './pages/Teams'
import Todo from './pages/Todo'
import TeamDetail from './pages/TeamDetail'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/members' element={<Members />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/teams/:teamId' element={<TeamDetail />} />
          <Route path='/todo-list' element={<Todo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
