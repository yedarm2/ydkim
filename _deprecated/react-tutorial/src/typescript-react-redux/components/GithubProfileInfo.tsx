import React, { FC } from 'react';
import './GithubProfileInfo.scss';

type GithubProfileInfoProps = {
	name: string;
	thumbnail: string;
	bio: string;
	blog: string;
};

const GithubProfileInfo: FC<GithubProfileInfoProps> = ({ name, thumbnail, bio, blog }) => {
	return (
		<div className="GithubProfileInfo">
			<div className="profile-head">
				<img src={thumbnail} alt="user thumbnail" />
				<div className="name">{name}</div>
			</div>
			<p>{bio}</p>
			<div>{blog !== '' && <a href={blog}>블로그</a>}</div>
		</div>
	);
};

export default GithubProfileInfo;
