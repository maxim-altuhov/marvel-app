import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div style={{ fontSize: '24px', textAlign: 'center' }}>
      <ErrorMessage />
      <p>Page not found</p>
      <Link to="/" style={{ marginTop: '40px', textDecoration: 'underline' }}>
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
