import useHttp from '../hooks/http.hook';

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=e2f258598bf2326923fd80f90969ebb1';
  const baseOffset = 120;
  const baseLimit = 9;

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

  const getAllCaracters = async (offset = baseOffset, limit = baseLimit) => {
    const res = await request(`${_apiBase}characters?limit=${limit}&offset=${offset}&${_apiKey}`);

    return res.data.results.map(_transformCharacter);
  };

  const getCaracter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

    return _transformCharacter(res.data.results[0]);
  };

  return { loading, error, getAllCaracters, getCaracter, clearError, baseLimit, baseOffset };
};

export default useMarvelService;
