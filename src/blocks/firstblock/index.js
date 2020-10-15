var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;
registerBlockType('mytheme-blocks/firstblock',{
	title: __('fist sandeep block','mytheme-blocks'),
	description: __('Our first block','mytheme-blocks'),
	category: 'common',
	icon: 'buddicons-activity',
	edit: function(){
		return el('p',null, 'editor');
	},
	save: function(){
		return el('p',null, 'Save editor');
	}
});