import './Index.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Index() {
  return (
    <div className='App'>
      <Sidebar />

      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Outlet />

        <span>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Index