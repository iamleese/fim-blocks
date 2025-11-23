<?php
/**
 * Plugin Name:       FIM Blocks
 * Description:       Custom blocks built by Faith in Marketing. Contains Facebook Album Embed, Google Drive PDF Embed, and Mobile Buttons.
 * Requires at least: 6.0
 * Requires PHP:      7.1
 * Version:           2.1.3
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fim-blocks
 *
 */

/**
 * Register all blocks
 */
function fim_blocks_block_init() {
	//Google PDF Embed
	register_block_type( __DIR__  . '/build/google-embed-pdf' );
	//Mobilt Button Group
	register_block_type( __DIR__  . '/build/mobile-buttons' );
	//Mobile Buttons
	register_block_type( __DIR__  . '/build/mobile-button-group' );
}
add_action( 'init', 'fim_blocks_block_init' );
