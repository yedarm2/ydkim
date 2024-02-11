import { SchoolDetail, schoolService } from '@ydkim/core-service';
import Link from 'next/link';
import { DetailTemplate } from '../common/DetailTemplate';
import { CardBox } from '../common/CardBox';
import { schoolViewStyle } from './SchoolView.css';
import Image from 'next/image';

interface SchoolViewProps {
	school: SchoolDetail;
	clubCount: number;
}

export const SchoolView = ({ school, clubCount }: SchoolViewProps) => {
	return (
		<DetailTemplate className={schoolViewStyle}>
			<div className="school-info">
				<CardBox className="logo-box">
					<Image
						src={school.imageAsset.url as string}
						width={140}
						height={140}
						alt={`${school.name} 로고`}
					/>
				</CardBox>
				<CardBox>학교 이름: {school.name}</CardBox>
				<CardBox>
					<Link href={`/club?school=${school.id}`}>동아리 수: {clubCount}</Link>
				</CardBox>
				<CardBox>
					<Link href={`/form/club/${school.id}`}>동아리 생성</Link>
				</CardBox>
			</div>
			<CardBox className="list-link-box">
				<Link href="/school">목록으로 돌아가기</Link>
			</CardBox>
		</DetailTemplate>
		// <ul>
		// 	<li>학교 이름: {school?.name}</li>
		// 	<li>
		// 		학교 로고: <img src={school?.imageAsset?.url} alt="" />
		// 	</li>
		// 	<li>
		// 		<Link href={`/form/club/${school.id}`}>동아리 생성</Link>
		// 	</li>
		// 	<li>
		// 		<Link href="/school">돌아가기</Link>
		// 	</li>
		// </ul>
	);
};
