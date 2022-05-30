import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleCharacterPage.scss';

const SingleCharacterPage = ({ data }) => {
  const navigate = useNavigate();
  const { name, description, thumbnail } = data;

  return (
    <div className="single-char">
      <Helmet>
        <meta name="description" content={`${name} character page}`} />
        <title>{name}</title>
      </Helmet>
      <img src={thumbnail} alt={name} className="single-char__char-img" />
      <div className="single-char__info">
        <h2 className="single-char__name">{name}</h2>
        <p className="single-char__descr">{description}</p>
      </div>
      <button onClick={() => navigate(-1)} className="single-char__back">
        Back
      </button>
    </div>
  );
};

export default SingleCharacterPage;
