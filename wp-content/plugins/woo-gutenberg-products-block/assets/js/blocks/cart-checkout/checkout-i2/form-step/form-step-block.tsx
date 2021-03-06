/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { PlainText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import FormStepHeading from './form-step-heading';
import { useBlockPropsWithLocking } from '../hacks';
export interface FormStepBlockProps {
	attributes: { title: string; description: string; showStepNumber: boolean };
	setAttributes: ( attributes: Record< string, unknown > ) => void;
	className?: string;
	children?: React.ReactNode;
}

/**
 * Form Step Block for use in the editor.
 */
export const FormStepBlock = ( {
	attributes: { title = '', description = '', showStepNumber = true },
	setAttributes,
	className = '',
	children,
}: FormStepBlockProps ): JSX.Element => {
	const blockProps = useBlockPropsWithLocking( {
		className: classnames( 'wc-block-components-checkout-step', className, {
			'wc-block-components-checkout-step--with-step-number': showStepNumber,
		} ),
	} );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody
					title={ __(
						'Form Step Options',
						'woo-gutenberg-products-block'
					) }
				>
					<ToggleControl
						label={ __(
							'Show step number',
							'woo-gutenberg-products-block'
						) }
						checked={ showStepNumber }
						onChange={ () =>
							setAttributes( {
								showStepNumber: ! showStepNumber,
							} )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<FormStepHeading>
				<PlainText
					className={ '' }
					value={ title }
					onChange={ ( value ) => setAttributes( { title: value } ) }
				/>
			</FormStepHeading>
			<div className="wc-block-components-checkout-step__container">
				<p className="wc-block-components-checkout-step__description">
					<PlainText
						className={ '' }
						value={ description }
						onChange={ ( value ) =>
							setAttributes( { description: value } )
						}
					/>
				</p>
				<div className="wc-block-components-checkout-step__content">
					{ children }
				</div>
			</div>
		</div>
	);
};
