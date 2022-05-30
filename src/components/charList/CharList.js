import { useState, useEffect, useRef, useMemo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const setContent = (process, Component, newItemLoading) => {
  switch (process) {
    case 'waiting':
      return <Spinner />;
    case 'loading':
      return newItemLoading ? <Component /> : <Spinner />;
    case 'confirmed':
      return <Component />;
    case 'error':
      return <ErrorMessage />;
    default:
      throw new Error('Unexpected process state');
  }
};

const CharList = (props) => {
  const { process, setProcess, getAllCharacters, baseLimit, baseOffset } = useMarvelService();

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
    getAllCharacters(offset)
      .then(onCharListLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onCharListLoaded = async (newCharList) => {
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
        <CSSTransition timeout={500} key={id} classNames="char__item">
          <li
            className="char__item"
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
        </CSSTransition>
      );
    });

    return (
      <ul className="char__grid">
        <TransitionGroup component={null}>{listСharacters}</TransitionGroup>
      </ul>
    );
  };

  const elements = useMemo(() => {
    return setContent(process, () => renderList(charList), newItemLoading);
    // eslint-disable-next-line
  }, [process]);

  return (
    <div className="char__list">
      {elements}
      <button
        disabled={newItemLoading}
        style={{ display: charEnded ? 'none' : 'block' }}
        className="button button__main button__long"
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
