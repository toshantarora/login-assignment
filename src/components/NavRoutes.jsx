import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom';
// import { Header } from './Header';

//Pages for Routing

const SignInPage = React.lazy(() => import('./SignIn'));
const SignUpPage = React.lazy(() => import('./SignUp'));
const ProfilePage = React.lazy(() => import('./Profile'));
const ForgotPassword = React.lazy(() => import('./Forgotpass'));
const ChangePassword = React.lazy(() => import('./ChangePassword'));

const NavRoutes = () => {
    return (
        <HashRouter>
            <React.Suspense fallback={<div>Loading....</div>}>
                {/* <Header/> */}
                <Switch>
                    {/* <Route
                      name="Home Page"
                      path="/"
                      render={(props) => <HomePage {...props} />}
                    /> */}
                    <Route
                      exact
                      name="SigIn Page"
                      path="/"
                      render={(props) => <SignInPage />}
                    />
                    <Route
                      exact
                      name="SignUp Page"
                      path="/signup"
                      render={(props) => <SignUpPage />}
                    />
                    <Route
                      exact
                      name="Profile Page"
                      path="/profile"
                      render={(props) => <ProfilePage/>}
                    /> 
                    <Route
                      exact
                      name="Forgot Password"
                      path="/forgotpassword"
                      render={(props) => <ForgotPassword/>}
                    /> 
                    <Route
                      exact
                      name="Change Password"
                      path="/changepassword"
                      render={(props) => <ChangePassword/>}
                    />
                </Switch>
            </React.Suspense>
        </HashRouter>
    )
}

export default NavRoutes;
