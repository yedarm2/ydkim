import React from 'react';
import classnames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, className, ...rest }) {
	return (
		<button
			className={classnames(
				'button',
				size,
				color,
				{
					outline,
					fullWidth,
				},
				className,
			)}
			{...rest}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	size: 'medium',
	color: 'blue',
};

export default Button;
