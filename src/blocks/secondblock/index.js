
import './style-editor.scss';
const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;
registerBlockType('mytheme-blocks/secondblock',{
	title: __('second sandeep block','mytheme-blocks'),
	description: __('Our second block','mytheme-blocks'),
	category: 'common',
	icon: 'buddicons-activity',
	edit: ({className})=>{
		return <p className={className}>second editor</p>;
	},
	save: function(){
		return <p>second save editor</p>;
	}
});