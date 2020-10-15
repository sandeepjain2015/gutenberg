
const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;
registerBlockType('mytheme-blocks/fourthblock',{
	title: __('Fourth sandeep block','mytheme-blocks'),
	description: __('Our Fourth block','mytheme-blocks'),
	category: 'common',
	icon: 'buddicons-activity',
	edit: function(){
		return <p>Fourth editor</p>;
	},
	save: function(){
		return <p>Fourth save editor</p>;
	}
});