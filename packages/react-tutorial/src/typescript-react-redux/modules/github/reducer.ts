import { createReducer } from 'typesafe-actions';
import { GithubAction, GithubState } from './types';
import { getUserProfileAsync } from './actions';
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils';

const initialState: GithubState = {
	userProfile: asyncState.initial(),
};

const github = createReducer<GithubState, GithubAction>(initialState).handleAction(
	transformToArray(getUserProfileAsync),
	createAsyncReducer(getUserProfileAsync, 'userProfile'),
);

export default github;
