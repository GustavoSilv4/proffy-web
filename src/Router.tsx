import { Route, Routes } from 'react-router-dom'
import { ClassList } from './pages/ClassList'
import { Home } from './pages/Home'
import { RegisterClass } from './pages/RegisterClass'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registerclass" element={<RegisterClass />} />
      <Route path="/classlist" element={<ClassList />} />
    </Routes>
  )
}
