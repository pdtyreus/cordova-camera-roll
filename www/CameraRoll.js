var exec = require('cordova/exec');

var cameraRoll = {};

cameraRoll.getPhotos = function(successCallback, errorCallback, options) {
  exec(successCallback, errorCallback, "CameraRoll", "getPhotos", []);
};

cameraRoll.saveToCameraRoll = function(imageBase64, successCallback, errorCallback, options) {
  exec(successCallback, errorCallback, "CameraRoll", "saveToCameraRoll", [imageBase64]);
};

cameraRoll.moveVideoToCameraRoll = function(videoUrl, successCallback, errorCallback, options) {
    exec(successCallback, errorCallback, "CameraRoll", "moveVideoToCameraRoll", [videoUrl]);
};

module.exports = cameraRoll;
