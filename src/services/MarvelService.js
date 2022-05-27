import useHttp from '../hooks/http.hook';

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=e2f258598bf2326923fd80f90969ebb1';
  const baseOffset = 120;
  const baseLimit = 9;
  const baseLimitForComics = 8;

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description || 'There is no data about this character.',
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
      price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
      description: comics.description || 'There is no description',
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : 'No information about the number of pages',
      language: comics.textObjects.language || 'en-us',
    };
  };

  const getAllCharacters = async (offset = baseOffset, limit = baseLimit) => {
    const res = await request(`${_apiBase}characters?limit=${limit}&offset=${offset}&${_apiKey}`);

    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

    return _transformCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset = baseOffset, limit = baseLimitForComics) => {
    const res = await request(
      `${_apiBase}comics?orderBy=issueNumber&limit=${limit}&offset=${offset}&${_apiKey}`,
    );

    return res.data.results.map(_transformComics);
  };

  const getComics = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);

    return _transformComics(res.data.results[0]);
  };

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);

    return res.data.results.map(_transformCharacter);
  };

  return {
    loading,
    error,
    baseLimit,
    baseLimitForComics,
    baseOffset,
    getAllCharacters,
    getCharacter,
    getCharacterByName,
    getAllComics,
    getComics,
    clearError,
  };
};

export default useMarvelService;
