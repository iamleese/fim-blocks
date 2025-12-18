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

	const embedString = attributes.embedURL;

	const embedID = embedString
		? embedString.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1]
		: '';

	const fullscreen = attributes.heightFullscreen ? 'full' : '';
	const frameHeight = attributes.heightFullscreen ? '' : attributes.embedHeight + 'px';

	const blockProps = useBlockProps.save({
		className: fullscreen,
		style: attributes.heightFullscreen ? {} : { height: frameHeight },
	});

	return (
		<div {...blockProps}>
			<iframe
				src={`https://drive.google.com/file/d/${embedID}/preview`}
				allowFullScreen
			/>
		</div>
	);
}
