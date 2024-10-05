import { lazy, Suspense, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Action
import { isAuthenticated } from './store/selectors/AuthSelectors';

// Style
import "./css/style.css";
import Index from "./jsx";
import Markup from './jsx';

const SignUp = lazy(() => import('./jsx/pages/Registration'));
const ForgotPassword = lazy(() => import('./jsx/pages/ForgotPassword'));
const Login = lazy(() => import('./jsx/pages/Login'));

const Loader = () => (
  <div id="preloader">
    <div className="sk-three-bounce">
      <div className="sk-child sk-bounce1"></div>
      <div className="sk-child sk-bounce2"></div>
      <div className="sk-child sk-bounce3"></div>
    </div>
  </div>
);

function App(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // checkAutoLogin(dispatch, navigate);
  }, [dispatch, navigate]);

  let routeblog = (
    <Routes>
      <Route path='*' element={<Markup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/page-register' element={<SignUp />} />
      <Route path='/page-forgot-password' element={<ForgotPassword />} />
    </Routes>
  );

  if (props.isAuthenticated) {
    return (
      <>
        <Suspense fallback={<Loader />}>
          <Index />
        </Suspense>
      </>
    );
  } else {
    return (
      <div className="vh-100">
        <Suspense fallback={<Loader />}>
          {routeblog}
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(App);
