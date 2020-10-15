
const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;
registerBlockType('mytheme-blocks/thirdblock',{
	title: __('third sandeep block','mytheme-blocks'),
	description: __('Our third block','mytheme-blocks'),
	category: 'common',
	icon: 'buddicons-activity',
	edit: function(){
		return <p>third editor</p>;
	},
	save: function(){
		return <p>third save editor</p>;
	}
});