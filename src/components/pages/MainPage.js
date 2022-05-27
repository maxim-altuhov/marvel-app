import { useState } from 'react';

import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import CharSearch from '../charSearch/CharSearch';

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
  const [selectedID, setSelectedID] = useState(null);

  const onCharSelected = (id) => {
    setSelectedID(id);
  };

  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
            <CharInfo charID={selectedID} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearch />
          </ErrorBoundary>
        </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
