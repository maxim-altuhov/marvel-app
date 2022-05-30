import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const { process, setProcess, getCharacter, clearError } = useMarvelService();

  const updateChar = () => {
    const { charID } = props;

    if (!charID) return;

    clearError();
    getCharacter(charID)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  useEffect(() => {
    updateChar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.charID]);

  return <div className="char__info">{setContent(process, View, char)}</div>;
};

const View = ({ data }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = data;
  const maxComics = 10;

  const noImgStyle = thumbnail.includes('image_not_available') ? { objectFit: 'contain' } : {};
  let comicsList = [];

  for (let i = 0; i < comics.length; i++) {
    if (i >= maxComics) break;

    const comicsID = comics[i].resourceURI.match(/\d{2,}/g)[0];

    comicsList.push(
      <li key={i} className="char__comics-item">
        {comicsID ? (
          <Link to={`/comics/${comicsID}`}>{comics[i].name}</Link>
        ) : (
          <span>{comics[i].name}</span>
        )}
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
