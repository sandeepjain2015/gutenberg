
import './style-editor.scss';
import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import { RichText,BlockControls,AlignmentToolbar,InspectorControls,PanelColorSettings,getColorClassName } from '@wordpress/editor';
import { Toolbar,DropdownMenu,PanelBody,ToggleControl,ColorPicker, ColorPalette } from '@wordpress/components';

import edit from './edit';
import classnames from 'classnames';
registerBlockType('mytheme-blocks/fifthhblock',{
	title: __('Fifth sandeep block','mytheme-blocks'),
	description: __('Our Fifth block','mytheme-blocks'),
	category: 'my_theme_category',
	icon: 'buddicons-activity',
	attributes : {
		content: {
		type: 'string',
		source : 'html',
		selector : 'p'
		},
		alignment:{
			type: 'string'
		},
		backgroundColor :{
			type:'string'
		},
		textColor :{
			type: 'string'
		},
		customBackgroundColor :{
			type:'string'
		},
		customTextColor :{
			type: 'string'
		}
	},
	styles:[
		{
			name: 'rounded',
			label : __('Rounded', 'my-theme')
		},
		{
			name: 'outlined',
			label : __('outlined', 'my-theme')
		},
		{
			name: 'squred',
			label : __('squred', 'my-theme')
		}
	],
	edit : edit,
	save: ({attributes})=>{
		const {content,alignment,backgroundColor,textColor,customBackgroundColor, customTextColor} = attributes;
		const backgroundClass = getColorClassName('background-color',backgroundColor);
		const textClass = getColorClassName('color',textColor);
		
		const classes = classnames({
			[backgroundClass]: backgroundClass,
			[textClass]: textClass,
		}
		);
		return <RichText.Content
		tagName='p'
		className = {classes}
		value={content}
		style ={{
			textAlign:alignment,
			backgroundColor:backgroundClass?undefined:customBackgroundColor,
			color:textClass?undefined:customTextColor
		}}
		/>;
	}
});