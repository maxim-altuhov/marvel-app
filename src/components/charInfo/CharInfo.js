import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import Skeleton from '../skeleton/Skeleton';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './charInfo.scss';

const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const { loading, error, getCaracter, clearError } = useMarvelService();

  const updateChar = () => {
    const { charID } = props;

    if (!charID) return;

    clearError();
    getCaracter(charID).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  useEffect(() => {
    updateChar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.charID]);

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  const maxComics = 10;

  const noImgStyle = thumbnail.includes('image_not_available') ? { objectFit: 'contain' } : {};
  let comicsList = [];

  for (let i = 0; i < comics.length; i++) {
    if (i >= maxComics) break;

    comicsList.push(
      <li key={i} className="char__comics-item">
        {comics[i].name}
      </li>,
    );
  }

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={noImgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comicsList.length > 0 ? comicsList : 'There is no comics about this character.'}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charID: PropTypes.number,
};

export default CharInfo;
