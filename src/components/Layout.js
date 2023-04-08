import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div id="root">
      <div id="header">
        <nav>
          <Link to="members">Members</Link>
          <Link to="teams">Teams</Link>
          <Link to="todo-list">Todo List</Link>
        </nav>
      </div>
      <div id="content">
        {children}
      </div>
    </div>
  )
}

export default Layout
