export * from './color';
export * from './size';

// * storybook 스토리 파일에서 emotion 관련 props들의 컨트롤을 제거하기 위한 객체
export const emotionCommonArgTypes = {
	theme: { table: { disable: true } },
	as: { table: { disable: true } },
};
