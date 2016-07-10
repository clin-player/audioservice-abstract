const IAudioServiceApi = require('../interfaces/i-audio-service-api');
const request = require('request');


/**
 * @type {AudioServiceApiAbstract}
 * @implements {IAudioServiceApi}
 */
module.exports = (function() {
	return class AudioServiceApiAbstract extends IAudioServiceApi {
		constructor() {
			super();
		}

		/**
		 * @param {string} url
		 * @return {Promise<string>}
		 * @protected
		 */
		_request(url) {
			return new Promise((resolve, reject) => {
				this.emit(this.EVENT_START_REQUEST);

				request(url, (error, response, body) => {
					this.emit(this.EVENT_STOP_REQUEST);

					if (error) {
						return reject(error);
					} else {
						return resolve(body);
					}
				});
			});
		}
	};
})();
