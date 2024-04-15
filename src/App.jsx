import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Home/></>
    },
    {
      path : "/about",
      element : <><About/></>
    },
    {
      path : "/projects",
      element : <><Projects/></>
    },
    {
      path : "/contact",
      element : <><Contact/></>
    }
  ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
