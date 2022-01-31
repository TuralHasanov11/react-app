
import {Route, Routes, Navigate, } from 'react-router-dom'
import PostsView from './views/Posts';
import AddPostView from './views/AddPost';
import Favorites from './views/Favorites';
import Layout from './components/layouts/Layout';
import PostView from './views/Post'
import AuthView from './views/Auth';
import ProfileView from './views/Profile'
import { useContext } from 'react';
import AuthContext from './store/auth-context';

function App() {

  const authCtx = useContext(AuthContext)

  return (
    <Layout>
      <Routes>
          <Route path='/' exact element={ <PostsView />}></Route>
          <Route path='/auth' exact element={ <AuthView />}></Route>
          <Route path='/profile' exact element={ authCtx.isAuthenticated ? <ProfileView />: <Navigate to='/auth' />}></Route>
          <Route path='/add-post' element={<AddPostView/>}></Route>
          <Route path='/favorites' element={<Favorites/>}></Route>
          <Route path='/posts' exact element={ <PostsView />}></Route>
          <Route path='/posts/:post' element={ <PostView />}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;