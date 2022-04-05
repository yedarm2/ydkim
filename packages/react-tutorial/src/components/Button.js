import { classNames } from '@ydkim/browser-utils';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, className, ...rest }) {
	return (
		<button
			className={classNames(
				'button',
				size,
				color,
				{
					outline,
					fullWidth,
				},
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
}

Button.defaultProps = {
	size: 'medium',
	color: 'blue',
};

export default Button;
