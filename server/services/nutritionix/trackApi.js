import request from 'request';

const TRACK_API_BASE_URL = 'https://trackapi.nutritionix.com/v2/';

class NutritionixTrackApi {
  constructor(id, key) {
    this.request = request.defaults({
      baseUrl: TRACK_API_BASE_URL,
      json: true,
      headers: {
        'x-app-id': id,
        'x-app-key': key
      }
    });
  }

  _post(url, userId, data) {
    return this.request.post({
      url,
      headers: { 'x-remote-user-id': userId },
      body: data
    });
  }

  nutrients(userId, query) {
    return this._post('natural/nutrients', userId, query);
  }
}

export default NutritionixTrackApi;
