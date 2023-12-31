import { Fragment } from 'react';
import './App.css';
import Counter from './components/Counter';
import Auth from './components/Auth'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  
  
  
  return (
    <div>
      <Fragment>
        <Header/>
        {!isAuth && <Auth/>}
        {isAuth && <UserProfile/>}
      <Counter />
      </Fragment>
       
    </div>
  )
}

export default App;
