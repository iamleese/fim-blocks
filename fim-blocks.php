<?php
/**
 * Plugin Name:       FIM Blocks - Dev
 * Description:       Custom blocks built by Faith in Marketing. Contains Facebook Album Embed, Google Drive PDF Embed, and Mobile Buttons.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           2.0.1
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fim-blocks
 *
 * @package           create-block
 */

/**
 * Register all blocks
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
