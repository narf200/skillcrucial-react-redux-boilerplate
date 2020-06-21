import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { user, repository } = useParams()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-white font-bold">
      <div id="repositiry-name">{repository || user || 'Welcome'}</div>
      <div className="flex justify-end">
        {user && (
          <Link to="/" id="go-back" className="mr-2">
            Go Home
          </Link>
        )}
        {repository && (
          <Link to={`/${user}`} id="go-repository-list">
            Go Repository List
          </Link>
        )}
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
