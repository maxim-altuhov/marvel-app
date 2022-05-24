import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

const ComicsList = () => {
  const { loading, error, getAllComics, baseLimitForComics, baseOffset } = useMarvelService();
  const [comicsList, setComicsList] = useState([]);
  const [offset, setOffset] = useState(baseOffset);
  const [newComicsLoading, setNewComicsLoading] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);

  useEffect(() => {
    onRequest(offset, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
    getAllComics(offset).then(onComicsLoaded);
  };

  const onComicsLoaded = (newComicsList) => {
    let ended = false;

    if (newComicsList.length < baseLimitForComics) {
      ended = true;
    }

    setComicsList([...comicsList, ...newComicsList]);
    setNewComicsLoading(false);
    setOffset(offset + baseLimitForComics);
    setComicsEnded(ended);
  };

  const renderComicsList = (comicsList) => {
    const listWithComics = comicsList.map((comics, i) => {
      const { title, thumbnail, id, price } = comics;

      return (
        <li className="comics__item" key={i}>
          <Link to={`/comics/${id}`}>
            <img src={thumbnail} alt={title} className="comics__item-img" />
            <div className="comics__item-name">{title}</div>
            <div className="comics__item-price">{price}</div>
          </Link>
        </li>
      );
    });

    return <ul className="comics__grid">{listWithComics}</ul>;
  };

  const items = renderComicsList(comicsList);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newComicsLoading ? <Spinner /> : null;

  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      {items}
      <button
        className="button button__main button__long"
        onClick={() => onRequest(offset)}
        disabled={newComicsLoading}
        style={{ display: comicsEnded ? 'none' : 'block' }}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
