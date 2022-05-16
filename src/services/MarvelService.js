class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=e2f258598bf2326923fd80f90969ebb1';

  _transformCharacter = (char) => {
    return {
      name: char.name,
      description: char.description || 'There is no data about this character',
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    }
  }  

  getResources = async (url) => {
    let res = await fetch(url);

    if (!res.ok) throw new Error(`Could not fetch ${url}, status ${res.status}`);

    return await res.json();
  }

  getAllCaracters = async () => {
    const res = await this.getResources(`${this._apiBase}characters?limit=9&offset=120&${this._apiKey}`);

    return res.data.results.map(this._transformCharacter)
  }

  getCaracter = async (id) => {
    const res = await this.getResources(`${this._apiBase}characters/${id}?${this._apiKey}`);

    return this._transformCharacter(res.data.results[0]);
  }
}

export default MarvelService;