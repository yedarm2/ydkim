import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import RouterHookSample from './RouterHookSample';

export default function Profiles() {
	return (
		<div>
			<h3>사용자 목록</h3>
			<ul>
				<li>
					<NavLink
						to="/profiles/yedarm"
						activeStyle={{
							background: 'black',
							color: 'white',
						}}>
						yedarm
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/profiles/homer"
						activeStyle={{
							background: 'black',
							color: 'white',
						}}>
						homer
					</NavLink>
				</li>
			</ul>

			<Route path="/profiles" exact render={() => <div>사용자를 선택해주세요.</div>} />
			<Route path="/profiles/:username" component={Profile} />
			<RouterHookSample />
		</div>
	);
}
