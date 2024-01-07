import { createSchool } from '@/controllers/school';
import { Button, Input } from '@/components/form';
import { FileUploader } from '@/components/form/FileUploader';
import { schoolFormRowStyle, schoolFormStyle, schoolFormTitleStyle } from './SchoolForm.css';

export const SchoolForm = () => {
	return (
		<form className={schoolFormStyle} action={createSchool}>
			<h2 className={schoolFormTitleStyle}>학교 생성 페이지</h2>
			<div className={schoolFormRowStyle}>
				<div className="title">학교 이름</div>
				<div className="divider" />
				<div className="input-wrapper">
					<Input name="name" placeholder="학교 이름" required />
				</div>
			</div>
			<div className={schoolFormRowStyle}>
				<div className="title">학교 이미지</div>
				<div className="divider" />
				<div className="input-wrapper">
					<FileUploader name="schoolImage" placeholder="학교 이미지" required />
				</div>
			</div>
			<Button className="submit-button">생성</Button>
		</form>
	);
};
