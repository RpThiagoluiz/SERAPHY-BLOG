import { Link, useParams } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Post #{id}</h1>
      <p>Detalhes do post com ID: {id}</p>
      <Link to="/">← Voltar para Home</Link>
    </div>
  );
};

export default PostDetails;
