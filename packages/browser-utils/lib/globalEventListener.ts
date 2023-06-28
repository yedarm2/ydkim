import { ArrayMap } from '@ydkim/utils';

type EventListener = (event: Event) => void;

type WindowEventListener<WindowEventName extends keyof WindowEventMap> = (
	this: Window,
	eventCallback: WindowEventMap[WindowEventName],
) => any;

const eventListenerListMap = new ArrayMap<EventListener>();
const eventListnerMap = new Map<string, EventListener>();

export const addWindowEventListener = <WindowEventName extends keyof WindowEventMap>(
	eventName: WindowEventName,
	listener: WindowEventListener<WindowEventName>,
	options?: boolean | AddEventListenerOptions,
) => {
	const mapKey = `window/${eventName}`;
	if (eventListnerMap.has(mapKey)) {
		eventListenerListMap.add(mapKey, listener as EventListener);
	} else {
		const eventListener = (event: Event) => {
			const eventListenerList = eventListenerListMap.get(mapKey);

			for (const eventListener of eventListenerList) {
				eventListener(event);
			}
		};

		window.addEventListener(eventName, eventListener, options);
		eventListnerMap.set(mapKey, eventListener);
	}
};

export const removeWindowEventListener = <WindowEventName extends keyof WindowEventMap>(
	eventName: WindowEventName,
	listener: WindowEventListener<WindowEventName>,
) => {
	const mapKey = `window/${eventName}`;
	eventListenerListMap.remove(mapKey, listener as EventListener);

	if (eventListenerListMap.count(mapKey)) return;

	const eventListener = eventListnerMap.get(mapKey);
	window.removeEventListener(eventName, eventListener);
	eventListnerMap.delete(mapKey);
};
