/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Import Block dependencies
 */

import { TextControl, ToggleControl, PanelBody, PanelRow, Button, Popover, Dropdown, ToolbarButton } from '@wordpress/components';
import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';
import {pencil} from '@wordpress/icons';
import {useEffect, useState} from '@wordpress/element';

/**
 * CSS process
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function
 */
export default function Edit( {attributes, setAttributes, isSelected} ) {
	
	const [ isEditingURL, setIsEditingURL ] = useState( false );
	const isURLSet = !! attributes.embedURL;
	const [ UrlValue, setUrlValue ] = useState('');


	//textbox for the URL
	const inputStyle = {
		width: '100%'
		}
	
	var embedString = attributes.embedURL;
	var embedID = embedString ? embedString.match(/(?<=id=|d\/)([a-zA-Z0-9\-\_\~\.])+/g) : '';
	var resourceKey = embedString ? embedString.match(/(?<=resourcekey=)([a-zA-Z0-9\-\_\~\.])+/g) : '';
	var fullscreen = attributes.heightFullscreen ? 'full' : '';
	var frameHeight = attributes.heightFullscreen ? '' : attributes.embedHeight + 'px';
	var setHeight = embedID ? frameHeight : '' ;
	
	useEffect( () => {
		if ( ! isSelected ) {
			setIsEditingURL( false );
		}
	}, [ isSelected ] );

	//Functions
	function handleURLInput(){
		setAttributes({embedURL : UrlValue });
		setIsEditingURL( false );
	}

	function toggleEditing( event ) {
		event.preventDefault();
		if(isEditingURL == false){
			setIsEditingURL( true );
			setUrlValue(attributes.embedURL);
		} else {
			setIsEditingURL( false );
		}
		
	}

	const URLInput = () => {
		return (
			<div className="url_container">
			<TextControl
				name= 'googleUrl'
				label='Google Drive PDF URL'
				value= { UrlValue } 
				help = {__('eg. https://drive.google.com/open?id=1aC6slHadaja2zhbjvHWAozLvlsOPLIzx','fim-blocks')}
				style = { inputStyle }
				className = 'url-input'
				onChange = {(val) => setUrlValue(val)}/>
			<Button
				variant = 'tertiary'
				onClick= { () => handleURLInput()  }
			>{__('Set PDF URL') }</Button>

			</div>
		);
	}


	
	const blockProps = useBlockProps({
		className: { fullscreen },
		style: { height: setHeight }
	});

	

	return (
		<div {...blockProps}>
			{! isURLSet && (
				<URLInput />
			)}
			
			{ isURLSet && (
				<div className={'inner_frame'}>
					
				<Button
					variant = 'tertiary'
					className={'edit_url_button'} />
				<iframe src={'https://drive.google.com/file/d/'+embedID+'/preview?resourcekey='+resourceKey}/>
				</div>
			)}
			
			

			<BlockControls>
				{isURLSet && (
					<ToolbarButton
						name="editURL"
						icon={ pencil }
						title={ __( 'Edit URL' ) }
						onClick = { toggleEditing }
					> Edit PDF URL 
					</ToolbarButton>
				)}
				{ isURLSet && isEditingURL && (
					<Popover
						position = 'bottom center'
						onClose={ () => { setIsEditingURL( false ); } }
					>
					<URLInput />

					</Popover>
			)}
			</BlockControls>

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
