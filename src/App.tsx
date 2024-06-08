import {Routes , Route } from 'react-router-dom'
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import { Home } from './_root/pages';
import RootLayout from './_root/RootLayout';


const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout/>}>
                <Route path='/sign-in' element={<SigninForm/>} />
                <Route path='/sign-up' element={<SignupForm/>} />
            </Route>

            <Route element={<RootLayout/>}>
                <Route index element={<Home/>} />
            </Route>
            {/* private routes */}
        </Routes>
    </main>
  )
}

export default App