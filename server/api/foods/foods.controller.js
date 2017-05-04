/**
 * Using Rails-like standard naming convention for endpoints.
 * POST     /api/foods              ->  post
 */

'use strict';

// Gets a list of foods
export function index(req, res) {
  // const userId = req.userId
  // Using development user id for this template
  const userId = 0;
  req.nutritionix.track.nutrients(userId, req.body).pipe(res);
}
