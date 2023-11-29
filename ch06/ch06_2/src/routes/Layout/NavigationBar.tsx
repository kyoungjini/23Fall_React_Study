// import {Link} from 'react-router-dom'
import {Link} from '../../components'

export default function NavigationBar() {
  return (
    <div className="flex p-2 navbar bg-base-100">
      <Link to="/" className="btn btn-link">
        Home
      </Link>
      <Link to="/board" className="btn btn-link ml-4">
        Board
      </Link>
    </div>
  )
}
