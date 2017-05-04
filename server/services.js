import config from './config/environment';

import NutritionixTrackApi from './services/nutritionix/trackApi';

export default function(app) {
  app.use((req, res, next) => {
    req.nutritionix = {
      track: new NutritionixTrackApi(config.nutritionix.appId, config.nutritionix.appKey)
    };
    next();
  });
}
