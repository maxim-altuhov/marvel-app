import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(120);
  const [charEnded, setCharEnded] = useState(false);
  const marvelService = new MarvelService();

  useEffect(() => {
    updateCharList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCharList = (offset) => {
    onCharListLoading();
    marvelService.getAllCaracters(offset).then(onCharListLoaded).catch(onError);
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) ended = true;

    setCharList((charList) => [...charList, ...newCharList]);
    setLoading(false);
    setNewItemLoading(false);
    setOffset((offset) => offset + 9);
    setCharEnded(ended);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const refArray = useRef([]);

  const focusOnElem = (id) => {
    refArray.current.forEach((elem) => elem.classList.remove('char__item_selected'));
    refArray.current[id].classList.add('char__item_selected');
    refArray.current[id].focus();
  };

  const renderList = (charList) => {
    const listСharacters = charList.map((elem, i) => {
      const { name, thumbnail, id } = elem;
      const noImgStyle = thumbnail.includes('image_not_available')
        ? { objectPosition: 'top', objectFit: 'fill' }
        : {};

      return (
        <li
          className="char__item"
          key={id}
          tabIndex="0"
          ref={(elem) => (refArray.current[i] = elem)}
          onClick={() => {
            props.onCharSelected(id);
            focusOnElem(i);
          }}
          onKeyPress={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              props.onCharSelected(id);
              focusOnElem(i);
            }
          }}
        >
          <img src={thumbnail} alt={name} style={noImgStyle} />
          <div className="char__name">{name}</div>
        </li>
      );
    });

    return <ul className="char__grid">{listСharacters}</ul>;
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? renderList(charList) : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      {content}
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: charEnded ? 'none' : '' }}
        onClick={() => updateCharList(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
