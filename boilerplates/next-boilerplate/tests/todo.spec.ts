import { test, expect } from '@playwright/test';

test('todo 목록 페이지 테스트', async ({ page }) => {
	await page.goto('http://localhost:3000/todo');

	await expect(page).toHaveTitle('todo 리스트');
});

const textSymbol = `${Math.random()}/${new Date().toString()}`;
const testTitle = `테스트 타이틀/${textSymbol}`;
const testContent = `테스트 타이틀/${textSymbol}`;

test('todo 생성 테스트', async ({ page }) => {
	await page.goto('http://localhost:3000/todo');

	await page.getByRole('link', { name: 'todo 목록 추가' }).click();

	await expect(page).toHaveTitle('todo 생성');

	await page.getByPlaceholder('작업 요약').fill(testTitle);
	await page.getByPlaceholder('작업 내용').fill(testContent);
	await page.getByRole('button', { name: 'todo 목록 생성' }).click();

	await expect(page).toHaveTitle('todo 리스트');
	await page.locator(`li:has-text("${testTitle}")`).click();

	await expect(page).toHaveTitle(testTitle);
	await page.getByRole('heading', { name: testTitle }).click();
	await page.getByText(testContent).click();

	await page.getByRole('link', { name: '목록으로' }).click();
	await expect(page).toHaveURL('http://localhost:3000/todo');
});
