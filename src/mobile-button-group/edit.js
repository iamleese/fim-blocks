/**
 * Text Translation
 */
import { __ } from '@wordpress/i18n';

/**
 * Import Block dependencies
 */
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, RangeControl } from '@wordpress/components'; 
const validAlignments = ['full'];

/**
 * Lets webpack process CSS, SASS or SCSS
 */
import './editor.scss';

/**
 * The edit function
 */
export default function Edit({attributes, setAttributes}) {
	//Create initial button template
	const BUTTON_TEMPLATE = [
		[ 'fim-blocks/mobile-buttons' ],
		[ 'fim-blocks/mobile-buttons' ],
		[ 'fim-blocks/mobile-buttons' ]
	];

	var gapSize = attributes.gapSize + 'px';


	const blockProps = useBlockProps({
		style: { '--gap': gapSize , '--cols': attributes.columns} 
	});


	return (
		<div {...blockProps}>
			<InnerBlocks
                    allowedBlocks={['fim-blocks/mobile-buttons']}
                    template= {BUTTON_TEMPLATE}
                    renderAppender={ () => (
                        <InnerBlocks.ButtonBlockAppender />
                    )}
                />
                <InspectorControls>
                    <Panel>
                        <PanelBody title="Mobile Button Layout" className="mobileOptions" initialOpen={ true }>
							<PanelRow>
                                <RangeControl
                                    label="Columns"
                                    max={ 4 }
                                    min={ 1 }
                                    onChange={  (value) => setAttributes( { columns : value} ) }
                                    value={ attributes.columns }
                                />
                                <RangeControl
                                    label="Gap Size"
                                    max={ 20 }
                                    min={ 0 }
                                    onChange={  (gapvalue) => setAttributes( { gapSize : gapvalue} ) }
                                    value={ attributes.gapSize }
                                />
                                
                            </PanelRow>
                        </PanelBody>
                    </Panel>
                </InspectorControls>
		</div>
	);
}
