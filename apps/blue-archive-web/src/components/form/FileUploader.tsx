'use client';
import { DragEventHandler, useId, useRef, useState } from 'react';
import { FaRegFileImage } from 'react-icons/fa';

import { Input, InputProps } from './Input';
import {
	fileUploaderDefaultSvgStyle,
	fileUploaderElementStyle,
	fileUploaderStyle,
} from './FileUploader.css';
import { classNames } from '@ydkim/browser-utils';

interface FileUploaderProps extends Omit<InputProps, 'type'> {}

type DragState = 'dragging' | 'error' | 'none';

export const FileUploader = ({ ...props }: FileUploaderProps) => {
	const defaultInputId = useId();
	const inputId = props.id ?? defaultInputId;

	const [dragState, setDragState] = useState<DragState>('none');
	const inputElementRef = useRef<HTMLInputElement>(null);

	const onDrag: DragEventHandler<HTMLLabelElement> = event => {
		event.preventDefault();
		setDragState('dragging');
	};

	const onDragLeave: DragEventHandler<HTMLLabelElement> = () => {
		setDragState('none');
	};

	const onDrop: DragEventHandler<HTMLLabelElement> = event => {
		event.preventDefault();

		(inputElementRef.current as HTMLInputElement).files = event.dataTransfer.files;
		setPreviewIamge(event.dataTransfer.files[0]);
	};

	const [previewImageSrc, setPreviewImageSrc] = useState('');
	const setPreviewIamge = (imageFile: File) => {
		const fileReader = new FileReader();

		fileReader.addEventListener('load', () => {
			setDragState('none');
			setPreviewImageSrc(fileReader.result as string);
		});

		fileReader.readAsDataURL(imageFile);
	};

	return (
		<div className={fileUploaderStyle}>
			<label
				htmlFor={inputId}
				className={classNames(fileUploaderElementStyle, dragState)}
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
			<Input
				id={inputId}
				ref={inputElementRef}
				type="file"
				onInput={event => {
					setPreviewIamge((event.target as HTMLInputElement)?.files?.[0] as File);
				}}
				onInvalid={event => {
					event.preventDefault();
					setDragState('error');
				}}
				{...props}
			/>
		</div>
	);
};
