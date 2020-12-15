import { ref, onUnmounted } from 'vue';
import { generateRandom } from 'ydkim-utils';

export default (element = 'div', teleportParentSelector = '.teleport') => {
	console.info(1);
	const teleportParent = document.querySelector(teleportParentSelector) as HTMLElement;
	console.info(2);
	const teleportElement = document.createElement(element);

	const teleportSelector = ref(generateRandom.string());

	teleportParent.appendChild(teleportElement);
	teleportElement.classList.add(teleportSelector.value);

	onUnmounted(() => {
		teleportParent.removeChild(teleportElement);
	});

	return {
		teleportSelector,
	};
};
