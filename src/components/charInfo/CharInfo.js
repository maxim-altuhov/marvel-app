import { Component } from 'react';
import Skeleton from '../skeleton/Skeleton';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charInfo.scss';

class CharInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false,
  };

  marvelService = new MarvelService();

  updateChar = () => {
    const { charID } = this.props;

    if (!charID) return;

    this.onCharLoading();
    this.marvelService.getCaracter(charID).then(this.onCharLoaded).catch(this.onError);
  };

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false,
    });
  };

  onCharLoading = () => {
    this.setState({
      loading: true,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.charID !== this.props.charID) {
      this.updateChar();
    }
  }

  componentDidMount() {
    this.updateChar();
  }

  render() {
    const { char, loading, error } = this.state;
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
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;

  const noImgStyle = thumbnail.includes('image_not_available') ? { objectFit: 'contain' } : {};
  let comicsList = [];

  for (let i = 0; i < comics.length; i++) {
    if (i >= 10) break;

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

export default CharInfo;
