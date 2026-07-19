import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'
import { navigation } from './data/navigation.js'

// Build a flat list of every route referenced by the nav so each link
// resolves to something (either Home or the shared Placeholder page).
const flatRoutes = navigation.flatMap((item) => [item, ...(item.children || [])])

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {flatRoutes
          .filter((item) => item.to !== '/')
          .map((item) => (
            <Route
              key={item.to}
              path={item.to}
              element={<Placeholder title={item.label} />}
            />
          ))}
        <Route path="*" element={<Placeholder title="Page not found" />} />
      </Route>
    </Routes>
  )
}
