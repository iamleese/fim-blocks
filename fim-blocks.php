<?php
/**
 * Plugin Name:       Fim Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fim-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function fim_blocks_block_init() {
	//Google PDF Embed
	register_block_type( plugin_dir_path( __FILE__ ) . 'blocks/google-embed-pdf/' );
	//Mobilt Button Group
	register_block_type( plugin_dir_path( __FILE__ ) . 'blocks/mobile-buttons/' );
	//Mobile Buttons
	register_block_type( plugin_dir_path( __FILE__ ) . 'blocks/mobile-button-group/' );
}
add_action( 'init', 'fim_blocks_block_init' );
