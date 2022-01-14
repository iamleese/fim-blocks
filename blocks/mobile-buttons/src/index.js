/**
 * Registers a new block
 **/
import { registerBlockType } from '@wordpress/blocks';

/**
 * Webpack process for scss
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Registration
 */
registerBlockType('fim-blocks/mobile-buttons', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
