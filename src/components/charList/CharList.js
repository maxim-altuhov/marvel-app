import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 120,
    charEnded: false,
  };

  marvelService = new MarvelService();

  updateCharList = (offset) => {
    this.onCharListLoading();
    this.marvelService.getAllCaracters(offset).then(this.onCharListLoaded).catch(this.onError);
  };

  componentDidMount() {
    this.updateCharList();
  }

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    });
  };

  onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) ended = true;

    this.setState(({ charList, offset }) => ({
      charList: [...charList, ...newCharList],
      loading: false,
      newItemLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }));
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  onRequest = (offset) => {
    this.updateCharList(offset);
  };

  render() {
    const { charList, loading, error, newItemLoading, offset, charEnded } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View charList={charList} props={this.props} /> : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button
          className="button button__main button__long"
          disabled={newItemLoading}
          style={{ display: charEnded ? 'none' : '' }}
          onClick={() => this.updateCharList(offset)}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

const View = ({ charList, props }) => {
  const listСharacters = charList.map((elem) => {
    const { name, thumbnail, id } = elem;
    const noImgStyle = thumbnail.includes('image_not_available')
      ? { objectPosition: 'top', objectFit: 'fill' }
      : {};

    return (
      <li className="char__item" key={id} onClick={() => props.onCharSelected(id)}>
        <img src={thumbnail} alt={name} style={noImgStyle} />
        <div className="char__name">{name}</div>
      </li>
    );
  });

  return <ul className="char__grid">{listСharacters}</ul>;
};

export default CharList;
