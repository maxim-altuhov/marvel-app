import { useNavigate } from 'react-router-dom';

import './singleCharacterPage.scss';

const SingleCharacterPage = ({ data }) => {
  const navigate = useNavigate();
  const { name, description, thumbnail } = data;

  return (
    <div className="single-char">
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
