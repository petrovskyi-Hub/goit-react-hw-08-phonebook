import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import Container from './components/Container/Container';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

// storage.save('Contacts', [
//   { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
//   { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
//   { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
//   { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
// ]);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              {/* <Route exact path="/" component={HomeView} /> */}
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              {/* <Route path="/register" component={RegisterView} /> */}
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              {/* <Route path="/login" component={LoginView} /> */}
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default App;
