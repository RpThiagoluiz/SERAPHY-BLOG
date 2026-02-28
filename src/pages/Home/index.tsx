import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Seraphy Blog - Home</h1>
      <p>
        <Link to="/post/1">Ver Post #1</Link>
        {' · '}
        <Link to="/post/42">Ver Post #42</Link>
      </p>
    </div>
  );
};

export default Home;
