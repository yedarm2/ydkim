export class ArrayMap<Value, Key = string | number> {
	private listMap: Map<Key, Value[]>;

	constructor() {
		this.listMap = new Map<Key, Value[]>();
	}

	get(key: Key) {
		return this.listMap.get(key);
	}

	add(key: Key, item: Value) {
		const { listMap } = this;

		if (!listMap.has(key)) listMap.set(key, [item]);
	}

	remove(key: Key, item: Value) {
		const { listMap } = this;

		const itemList = listMap.get(key);
		const itemIndex = itemList.indexOf(item);

		if (itemIndex === -1) return;
		listMap.set(key, itemList.splice(itemIndex, 1));

		if (!itemList.length) listMap.delete(key);
	}

	count(key: Key) {
		return this.listMap.get(key).length ?? 0;
	}

	clear(key: Key) {
		this.listMap.delete(key);
	}

	allClear() {
		this.listMap.clear();
	}

	getMap() {
		return this.listMap;
	}
}
