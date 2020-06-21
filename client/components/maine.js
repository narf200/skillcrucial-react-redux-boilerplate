import React, { useState } from 'react'
import { history } from '../redux'

const Maine = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onClick = () => {
    history.push(`/${value}`)
  }

  return (
    <div>
      <div>{value}</div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-black text-black font-bold rounded-lg border shadow-lg p-10">
          <input
            value={value}
            onChange={onChange}
            className="mr-3 p-2"
            type="text"
            id="input-field"
          />
          <button
            className="bg-indigo-500 hover:text-black text-white  font-bold rounded-lg  shadow-lg p-2"
            type="button"
            id="search-button"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Maine.propTypes = {}

export default Maine
