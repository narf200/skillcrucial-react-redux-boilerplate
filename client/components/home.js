import React, { useState, useEffect } from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import axios from 'axios'

import Head from './head'
import Maine from './maine'
import Repos from './repos'
import Readme from './readme'
import Header from './header'

const Home = () => {
  const { user, repository } = useParams()
  const url = `https://api.github.com/users/${user}/repos`
  const urlReadme = `https://api.github.com/repos/${user}/${repository}/readme`
  const [repositoriesList, setRepos] = useState([])

  useEffect(() => {
    if (typeof user !== 'undefined') {
      axios.get(url).then((it) => {
        setRepos(it.data.map(({ name, id }) => ({ name, id })))
      })
    }
  }, [url, user])

  const [readme, setReadme] = useState('')

  useEffect(() => {
    if (typeof user !== 'undefined' && typeof repository !== 'undefined') {
      axios.get(urlReadme).then(({ data }) => {
        axios(data.download_url).then(({ data: text }) => {
          setReadme(text)
        })
      })
    }
  }, [urlReadme, user, repository])

  return (
    <div>
      <Head title="Home" />
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Maine />} />
        <Route exact path="/:user" component={() => <Repos repos={repositoriesList} />} />
        <Route exact path="/:user/:repository" component={() => <Readme readme={readme} />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
