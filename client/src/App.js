import { Switch, Route } from 'react-router-dom';
import { BooksList } from './pages/BooksList';
import { CreateBook } from './pages/CreateBook';
import { UpdateBook } from './pages/UpdateBook';
import { NavBar } from './shared';


function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/create-book" component={CreateBook} />
        <Route path="/update-book/:id" component={UpdateBook} />
        <Route exact path="/" component={BooksList} />
      </Switch>
    </>
  );
}

export default App;
