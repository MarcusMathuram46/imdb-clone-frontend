import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Icon from './components/Icon';
import Home from './pages/Home';
import MovieList from './components/MovieList';
import Movie from './pages/Movie';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
        <Router>
          <Icon />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
