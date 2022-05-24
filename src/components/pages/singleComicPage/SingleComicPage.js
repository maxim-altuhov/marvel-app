import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';
import useMarvelService from '../../../services/MarvelService';

import './singleComicPage.scss';

const SingleComicPage = () => {
  const { comicsID } = useParams();
  const [comics, setComics] = useState(null);
  const { loading, error, getComics, clearError } = useMarvelService();

  useEffect(() => {
    updateComics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comicsID]);

  const updateComics = () => {
    clearError();
    getComics(comicsID).then(onComicsLoaded);
  };

  const onComicsLoaded = (comics) => {
    setComics(comics);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comics) ? <View comics={comics} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ comics }) => {
  const navigate = useNavigate();
  const { title, thumbnail, price, description, pageCount, language } = comics;

  return (
    <div className="single-comic">
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
