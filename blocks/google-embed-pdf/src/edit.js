/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Loads components
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */

import { TextControl, ToggleControl, PanelBody, PanelRow, Button } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element and add Inspector Controls
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';


import {useState} from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( {attributes, setAttributes} ) {

	const [ UrlValue, setUrlValue ] = useState(attributes.embedURL);

	//textbox for the URL
	const inputStyle = {
		width: '100%'
		}
	const isURLSet = !! attributes.embedURL;

	var embedString = attributes.embedURL;

	var embedID = embedString ? embedString.match(/(?<=id=|d\/)([a-zA-Z0-9\-\_\~\.])+/g) : '';
	var resourceKey = embedString ? embedString.match(/(?<=resourcekey=)([a-zA-Z0-9\-\_\~\.])+/g) : '';

	
	var fullscreen = attributes.heightFullscreen ? 'full' : '';
	var frameHeight = attributes.heightFullscreen ? '' : attributes.embedHeight + 'px';
	var setHeight = embedID ? frameHeight : '' ;
	
	const blockProps = useBlockProps({
		className: { fullscreen },
		style: { height: setHeight }
	});


	const URLInput = () => {
		return (
			<div className="url_container">
			<TextControl
				name= 'googleUrl'
				label='Google Drive PDF URL'
				value= { attributes.embedURL } 
				help = {__('eg. https://drive.google.com/open?id=1aC6slHadaja2zhbjvHWAozLvlsOPLIzx','fim-blocks')}
				style = { inputStyle }
				className = 'url-input'
				onChange = {( value ) => setUrlValue( value )}/>
			<Button
				onClick= { () => setAttributes({ embedURL : UrlValue}) }
			>{__('Set PDF URL') }</Button>

			</div>
		);
	}

	return (
		<div {...blockProps}>
			{! isURLSet && (
				<URLInput />
			)}
			
			{ isURLSet && (
				<div className={'inner_frame'}>
				<Button className={'edit_url_button'}>{__('Edit URL')}</Button>
				<iframe src={'https://drive.google.com/file/d/'+embedID+'/preview?resourcekey='+resourceKey}/>
				</div>
			)}

			<InspectorControls>
				<PanelBody
                        title={ __( 'Display Settings', 'fim-blocks' ) }
                    >
                    
						<PanelRow>
							  <ToggleControl
								label={__("Full Screen Height", "fim-blocks")}
								checked={attributes.heightFullscreen ? attributes.heightFullscreen : null}
								onChange={heightFullscreen => setAttributes({ heightFullscreen })}
							  />
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__("Height in Pixels", "fim-blocks")}
								value= { attributes.embedHeight }
								className = 'height'
								onChange= { embedHeight => setAttributes({ embedHeight }) }
								disabled = {attributes.heightFullscreen ? 'disabled' : null}
							/>
						</PanelRow>
                    </PanelBody>
			</InspectorControls>
			
		</div>
	);
}
