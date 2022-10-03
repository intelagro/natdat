import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import ResetPassView from '../pages/ResetPass.view'
import {
  DEFAULT_PATH,
  LOGIN_PATH,
  RESET_PASS_PATH,
  HOME_PATH,
  DASHBOARD_PATH,
  MODULE_LAMPARAS_PATH
} from './paths'
import PublicRoute from './PrivateRoute'
import PrivateRoute from './PublicRoute'
// Views
import LoginView from '../pages/Login.view'
import HomeView from '../pages/Home.view'
import ModuleLamparasView from '../pages/Module.Lamparas.view'
import Layout from '../components/Layout'

const Router = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        {/* Public routes */}
        <Route path={DEFAULT_PATH} element={<PublicRoute />}>
          <Route index element={<Navigate to={LOGIN_PATH} />} />
          <Route path={LOGIN_PATH} element={<LoginView />} />
          <Route path={RESET_PASS_PATH} element={<ResetPassView />} />
        </Route>
        {/* Dashboard */}
        <Route path={HOME_PATH} element={<PrivateRoute />}>
          <Route path={HOME_PATH} element={<Layout />}>
            <Route index element={<HomeView />} />
          </Route>
        </Route>
        <Route path={DASHBOARD_PATH} element={<PrivateRoute />}>
          <Route index element={<Navigate to={HOME_PATH} />} />
          <Route path={DASHBOARD_PATH} element={<Layout />}>
            <Route
              path={MODULE_LAMPARAS_PATH}
              element={<ModuleLamparasView />}
            />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default Router
