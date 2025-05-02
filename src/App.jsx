import { useState } from 'react'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'
import Home from './Home'
import Repositories from './Repositories'
import Analysis from './Analysis'
import Navbar from './components/Navbar'
import Fullrepo from './components/Fullrepo'
import NotFound from './components/NotFound'

// Create a wrapper component to handle URL parameters
const AnalysisWithParams = ({username}) => {
  const { reponame } = useParams()
  return <Fullrepo username={username} reponame={reponame} />
}

function App() {
  const [username, setusername] = useState("")
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home username={username} setusername={setusername}/></>
    },
    {
      path: "/repositories",
      element: <><Navbar /><Repositories username={username} setusername={setusername} /></>
    },
    {
      path: "/analysis",
      element: <><Navbar /><Analysis username={username} setusername={setusername} /></>
    },
    {
      path: "/repositories/:reponame",
      element: <><Navbar /><AnalysisWithParams username={username} /></>
    },
    {
      path: "/*",
      element: <><Navbar /><NotFound /></>
    }
  ])
  return (<>
  
    <RouterProvider router={router} />
  </>
  )
}

export default App
