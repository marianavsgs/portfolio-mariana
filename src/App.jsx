import { RouterProvider, createHashRouter } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home.jsx'
import ProjectDetailPage from './Pages/ProjectDetail.jsx'
import AppLayout from './AppLayout.jsx'

const route = createHashRouter([
  {element: <AppLayout/>,
  children:[
    {index: true, element: <HomePage />},
    {path: ':projectId', element: <ProjectDetailPage />}
  ]}
])

function App() {
  //const [count, setCount] = useState(0)

  return (
    <RouterProvider router={route} />

  )
}

export default App
