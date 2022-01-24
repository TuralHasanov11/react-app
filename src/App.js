
import {Route, Routes} from 'react-router-dom'
import PostsView from './views/Posts';
import AddPostView from './views/AddPost';
import Favorites from './views/Favorites';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <PostsView />}></Route>
        <Route path='/add-meetup' element={<AddPostView/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
