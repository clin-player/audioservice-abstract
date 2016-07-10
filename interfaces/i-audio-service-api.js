const EventEmitter = require('events');


/**
 * @param {string} methodName
 */
var nope = (methodName) => {
	throw 'Method' + methodName + ' not implemented'
};


/**
 * @type {IAudioServiceApi}
 */
module.exports = class IAudioServiceApi extends EventEmitter {
	constructor() {
		super();

		/**
		 * Fired with: none
		 * @const {string}
		 */
		this.EVENT_START_REQUEST = 'start-request';

		/**
		 * Fired with: none
		 * @const {string}
		 */
		this.EVENT_STOP_REQUEST = 'stop-request';
	}

	/**
	 * @param {string} query
	 * @return {Array<AudioTrack>}
	 */
	search(query) {
		nope('search');
	};

	/**
	 * @param {string} query
	 * @return {Array<AudioTrack>}
	 */
	radio(query) {
		nope('radio');
	}
};
