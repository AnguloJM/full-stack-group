import React from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Products from './screens/PostCreate/PostCreate'
import ProductCreate from './screens/PostDetails/PostDetails'
import ProductEdit from './screens/Post/PostEdit'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route exact path="/products/:id" component={PostDetails} />
      </Switch>
    </div>
  )
}

export default App