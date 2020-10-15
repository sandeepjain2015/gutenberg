import {Component} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import { RichText,BlockControls,AlignmentToolbar,InspectorControls,PanelColorSettings,withColors, ContrastChecker } from '@wordpress/editor';
import { Toolbar,DropdownMenu,PanelBody,ToggleControl,ColorPicker, ColorPalette } from '@wordpress/components';
class Edit extends Component{
		onChangeContent = (content)=>{ this.props.setAttributes({content})};
		onChangeAlignment = (alignment)=>{this.props.setAttributes({alignment})};
		
		 
	render(){
		
		const {className,attributes,setTextColor,setBackgroundColor,backgroundColor,textColor} = this.props;
		const {content,alignment} = attributes;
		return (
			<>
			<InspectorControls>
				<PanelColorSettings
				title = {__('Panel','my-theme')}
				colorSettings ={
					[
						{
							value : backgroundColor.color,
							onChange :setBackgroundColor,
							label : __('Backgroung color','my-theme')
						},
						{
							value : textColor.color,
							onChange :setTextColor,
							label : __('Text color','my-theme')
						}
					]
				}
				>
	<ContrastChecker
	textColor= {textColor.color} 
	backgroundColor ={backgroundColor.color}
	></ContrastChecker>
				</PanelColorSettings>
			</InspectorControls>
			<BlockControls>
			<AlignmentToolbar
			value ={alignment}
		onChange ={(v)=>{this.onChangeAlignment(v)}}
		/>
			{ ( content && content.length>0) &&
			<Toolbar>
				<DropdownMenu
				icon='editor-table'
				label ={__('test2','my-theme') }
				controls ={ [
					[{ icon : 'wordpress',
					title : __('test2','my-theme'),
					onClick : ()=>alert('hello'),
					isActive: false
				}],
				[{ icon : 'wordpress',
					title : __('hello2','my-theme'),
					onClick : ()=>alert('hello1'),
					isActive: true
				}]
				]
				}
				/>
			</Toolbar>
		}
		
			
			</BlockControls>
			< RichText
			tagName='p'
			className={className}
			onChange = {this.onChangeContent}
			value = {content}
			formattingControls={['bold']}
			style ={{textAlign:alignment, backgroundColor:backgroundColor.color, color:textColor.color}}
			/>;
			</>
			);
	}
}
export default withColors('backgroundColor',{'textColor':'color'})(Edit);