import React from 'react'
import ReactMarkdown from 'react-markdown'

const Readme = (props) => {
  return (
    <div>
      REDME
      <div id="description">
        <ReactMarkdown source={props.readme} />
      </div>
    </div>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
