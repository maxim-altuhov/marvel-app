import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = (props) => {
  const { loading, error, getAllCaracters, baseLimit, baseOffset } = useMarvelService();

  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(baseOffset);
  const [charEnded, setCharEnded] = useState(false);

  useEffect(() => {
    onRequest(offset, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllCaracters(offset).then(onCharListLoaded);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < baseLimit) ended = true;

    setCharList([...charList, ...newCharList]);
    setNewItemLoading(false);
    setOffset(offset + baseLimit);
    setCharEnded(ended);
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

  const items = renderList(charList);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      {items}
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: charEnded ? 'none' : '' }}
        onClick={() => onRequest(offset)}
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
