
import {Route, Routes} from 'react-router-dom'
import PostsView from './views/Posts';
import AddPostView from './views/AddPost';
import Favorites from './views/Favorites';
import Layout from './components/layouts/Layout';
import PostView from './views/Post'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <PostsView />}></Route>
        <Route path='/add-post' element={<AddPostView/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path='/posts/:post' element={ <PostView />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
