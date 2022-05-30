import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleComicPage.scss';

const SingleComicPage = ({ data }) => {
  const navigate = useNavigate();
  const { title, thumbnail, price, description, pageCount, language } = data;

  return (
    <div className="single-comic">
      <Helmet>
        <meta name="description" content={`${title} comics book}`} />
        <title>{title}</title>
      </Helmet>
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <button onClick={() => navigate(-1)} className="single-comic__back">
        Back
      </button>
    </div>
  );
};

export default SingleComicPage;
