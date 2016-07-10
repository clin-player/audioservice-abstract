var nope = () => {
	throw 'Method not implemented';
};


/**
 * @type {IDataView}
 * @interface
 */
module.exports = function() {
	return class IDataView {
		constructor() {}

		/**
		 * @return {Promise<Array<IDataView>>}
		 */
		getChildren() {
			return nope();
		}

		/**
		 * @return {string}
		 */
		toString() {
			return nope();
		}
	};
};
