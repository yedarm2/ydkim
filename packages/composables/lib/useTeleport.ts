import { ref, onUnmounted } from 'vue';
import { generateRandom } from '@ydkim/utils';

// TODO: 추후에 readonly로 감싸서 반환하는 방법을 테스트해보자.
export default (element = 'div', teleportParentSelector = '.teleport-wrapper') => {
	const teleportParent = document.querySelector(teleportParentSelector) as HTMLElement;
	const teleportElement = document.createElement(element);

	const teleportSelector = generateRandom.string();

	teleportParent.appendChild(teleportElement);
	teleportElement.classList.add(teleportSelector);

	onUnmounted(() => {
		teleportParent.removeChild(teleportElement);
	});

	return ref(`.${teleportSelector}`);
};
