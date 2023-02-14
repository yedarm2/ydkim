import { getUserProfile } from '../../api/github';
import createAsyncHunk from '../../lib/createAsyncThunk';
import { getUserProfileAsync } from './actions';

export const getUserProfileThunk = createAsyncHunk(getUserProfileAsync, getUserProfile);
