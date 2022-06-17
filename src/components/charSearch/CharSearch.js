import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import { object, string } from 'yup';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charSearch.scss';

const CharSearch = () => {
  const [char, setChar] = useState(null);
  const { process, setProcess, getCharacterByName, clearError } = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updateChar = (charName) => {
    clearError();

    getCharacterByName(charName)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  const errorMessage =
    process === 'error' ? (
      <div className="char__search-critical-error">{setContent('error')}</div>
    ) : null;
  const results = !char ? null : char.length > 0 ? (
    <div className="char__search-wrapper">
      <div className="char__search-success">There is! Visit {char[0].name} page?</div>
      <Link to={`/characters/${char[0].id}`} className="button button__secondary">
        <div className="inner">To page</div>
      </Link>
    </div>
  ) : (
    <div className="char__search-error">
      The character was not found. Check the name and try again
    </div>
  );

  return (
    <div className="char__search-form">
      <Formik
        initialValues={{ charName: '' }}
        validationSchema={object({
          charName: string().min(2, 'Min 2 symbols').required('This field is required'),
        })}
        onSubmit={({ charName }) => updateChar(charName)}
      >
        <Form>
          <label className="char__search-label" htmlFor="charName">
            Or find a character by name:
          </label>
          <div className="char__search-wrapper">
            <Field id="charName" name="charName" type="text" placeholder="Enter name" />
            <button type="submit" className="button button__main" disabled={process === 'loading'}>
              <div className="inner">{process === 'loading' ? 'searching...' : 'Find'}</div>
            </button>
          </div>
          <FormikErrorMessage component="div" className="char__search-error" name="charName" />
        </Form>
      </Formik>
      {errorMessage}
      {results}
    </div>
  );
};

export default CharSearch;
