import { Link } from 'react-router-dom';

export default function HomePage () {

  return (
    <>
      <h1>My Home Page</h1>
      <p>List of products.<Link to='/products'>Click here</Link></p>
    </>
  );
}