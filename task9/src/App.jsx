import {Routes,Route,Navigate} from "react-router-dom"
import ProtectedRoute from "./pages/ProtectedRoute"
import Homepage from "./pages/Homepage"
import Formpage from "./pages/Formpage"
import UserTable from "./pages/UserTable"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/dashboardPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/form" element={<Formpage />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/table" element={<UserTable />} />
        <Route path="/dashboardPage" element={<DashboardPage   />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  )
}

export default App