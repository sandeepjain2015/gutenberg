<?php
/**
 * Plugin Name: First gutenberg block. 
 * Description: First gutenberg block.
 * Author: Sandeep jain
 * Author URI:http://sandeepjain.me/?utm_source=wp-plugins&utm_campaign=author-uri&utm_medium=wp-dash
 * Plugin URI:http://sandeepjain.me/?utm_source=wp-plugins&utm_campaign=plugin-uri&utm_medium=wp-dash
 * Version:1.0
 * License: GPL2
 * 
 * @package   First gutenberg block
 */
if(!ABSPATH){
	exit();
}
function my_block_categories( $category, $post ) {
 return array_merge(
	 $category,
	 array(
		 array(
			 'slug'=>'my_theme_category',
			 'title'=> __('My theme category', 'my-blocks'),
			 'icon'=> 'wordpress'
		 )
		)
	);
}
add_filter( 'block_categories', 'my_block_categories', 10, 2 );
function my_register_block_type($block,$options = array() ){
	register_block_type(
		sprintf( 'mytheme-blocks/%sblock', $block),
		array(
			'editor_script' => 'mytheme-editor-blocks',
			'editor_style' => 'mytheme-editor-style',
			'style' => 'mytheme-blocks-style',
			'script' => 'mytheme-blocks-script',
		)
);
}
function mythemeblockregister(){
	wp_register_script( 
		'mytheme-editor-blocks',
		 plugins_url( 'dist/editor.js', __FILE__ ),
	 array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ),
	 '1.9' 
	);
	wp_register_script(
		'mytheme-blocks-script', // Handle.
		plugins_url( 'dist/script.js', __FILE__ ),
		array( 'jquery' ),
		null,
		true // Enqueue the script in the footer.
	);
	wp_register_style( 'mytheme-editor-style', plugins_url( 'dist/editor.css', __FILE__ ),
	array( 'wp-edit-blocks' ),
	 '1.3' 
 );
 wp_register_style(
	'mytheme-blocks-style', // Handle.
	plugins_url( 'dist/script.css', __FILE__ ), // Block editor CSS.
	array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
	null 
);
 
	my_register_block_type('first');
	my_register_block_type('second');
	my_register_block_type('third');
	my_register_block_type('fourth');
	my_register_block_type('fifth');
}
add_action( 'init', 'mythemeblockregister' );