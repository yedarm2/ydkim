'use client';
import { DragEventHandler, useId, useRef, useState } from 'react';
import { FaRegFileImage } from 'react-icons/fa';

import { Input, InputProps } from './Input';
import {
	fileUploaderDefaultSvgStyle,
	fileUploaderElementStyle,
	fileUploaderElementStyleDragging,
	fileUploaderStyle,
} from './FileUploader.css';
import { classNames } from '@ydkim/browser-utils';

interface FileUploaderProps extends Omit<InputProps, 'type'> {}

export const FileUploader = ({ ...props }: FileUploaderProps) => {
	const inputId = useId();
	const [isDragging, setIsDragging] = useState(false);
	const inputElementRef = useRef<HTMLInputElement>(null);

	const onDrag: DragEventHandler<HTMLLabelElement> = event => {
		event.preventDefault();
		setIsDragging(true);
	};

	const onDragLeave: DragEventHandler<HTMLLabelElement> = () => {
		setIsDragging(false);
	};

	const onDrop: DragEventHandler<HTMLLabelElement> = event => {
		event.preventDefault();

		setIsDragging(false);
		(inputElementRef.current as HTMLInputElement).files = event.dataTransfer.files;
		setPreviewIamge(event.dataTransfer.files[0]);
	};

	const [previewImageSrc, setPreviewImageSrc] = useState('');
	const setPreviewIamge = (imageFile: File) => {
		const fileReader = new FileReader();

		fileReader.addEventListener('load', event => {
			setPreviewImageSrc(fileReader.result as string);
		});

		fileReader.readAsDataURL(imageFile);
		console.log('setPreviewIamge');
	};

	return (
		<div className={fileUploaderStyle}>
			<label
				htmlFor={inputId}
				className={classNames(fileUploaderElementStyle, {
					[fileUploaderElementStyleDragging]: isDragging,
				})}
				onDragEnter={onDrag}
				onDragOver={onDrag}
				onDragLeave={onDragLeave}
				onDrop={onDrop}
			>
				{!previewImageSrc ? (
					<FaRegFileImage className={fileUploaderDefaultSvgStyle} />
				) : (
					<img
						src={previewImageSrc}
						alt="미리보기 이미지"
						className={fileUploaderDefaultSvgStyle}
					/>
				)}
			</label>
			<Input id={inputId} ref={inputElementRef} type="file" {...props} setFile={setPreviewIamge} />
		</div>
	);
};
