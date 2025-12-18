/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

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

	var embedString = attributes.embedURL;
	var embedID = embedString ? embedString.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]+)/)?.[1] : '';
	var fullscreen = attributes.heightFullscreen ? 'full' : '';
	var frameHeight = attributes.heightFullscreen ? '' : attributes.embedHeight + 'px';
	var setHeight = embedID ? frameHeight : '' ;

	const blockProps = useBlockProps.save({
		className: { fullscreen },
		style:  fullscreen ? '' : { height: setHeight } 
	});

	return (
		<div {...blockProps}>
			<iframe src={'https://drive.google.com/file/d/'+embedID+'/preview'}/>
		</div>
	);
}
