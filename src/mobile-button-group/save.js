/**
 * text translation
 */
import { __ } from '@wordpress/i18n';

/**
 * Block hooks
 *
 **/
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import classNames from 'classnames';


/**
 * The save function
 */
export default function save({attributes}) {
	
	const blockProps = useBlockProps.save({
		className: classNames('cols'+attributes.columns),
		style: {'--gap': attributes.gapSize+'px'}
	});

	return (
		<div {...blockProps} >
				<InnerBlocks.Content />
		</div>
	);
}
