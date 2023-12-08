import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import TodoForm from './TodoForm'
import Tabs from './Tabs'
import Todos from './Todos'

const Layout = () => {
  return (
    <div>
       <Navbar/>
      <Header/>
      <TodoForm/>
      <Tabs/>
      <Todos/>
    </div>
  )
}

export default Layout
