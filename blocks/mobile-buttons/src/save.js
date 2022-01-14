/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * FontAwesome container
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {

	var target = attributes.targetBlank ? '_blank': null;
	var rel = attributes.targetBlank ? 'noopener noreferrer' : null;

	const isCustomIcon = !! attributes.iconURL;

	
	const blockProps = useBlockProps.save({
		style: {backgroundColor: attributes.buttonColor, color: attributes.iconColor }
	});

	return (
		<div {...blockProps} >
		 <a href={attributes.url} target={target} rel={rel}>
		<div className='inner_button'>
			{! isCustomIcon && (
				<div className='icon'>
					<FontAwesomeIcon icon={attributes.icon} />
				</div>
			)}			
		{isCustomIcon && (
			<img src={attributes.iconURL}  className={'custom-icon'} />
		)}
		<span className='buttonText'>{ attributes.buttonText }</span>
		</div>
		</a>
		</div>
	);
}
