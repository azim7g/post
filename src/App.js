import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PostCreator from './components/PostCreator';
import PostList from './components/PostList';
import Post from './components/Post';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Switch>
          <Route path='/post-add' component={PostCreator} />
          <Route path={'/post/:id'} component={Post} />
          <Route path={'/'} component={PostList} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
