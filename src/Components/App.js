import {Switch, Route} from 'react-router-dom';

import {
  Home,
  Navbar,
  CreatePost,
  PostDetail
} from './'

// import Home from "./Home";
// import Navbar from "./navbar";
// import CreatePost from "./CreatePost";
// import PostDetail from "./PostDetail";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:postId" component={PostDetail} />
      <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
