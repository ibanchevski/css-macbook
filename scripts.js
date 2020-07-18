(function() {
	const findKey = (pressedKey, allKeys) => {
		if (pressedKey === 'ArrowDown')
			pressedKey = 'ArrowUp';
		return allKeys.find(k => k.id === pressedKey);
	};

	const keyDown = (e) => {
		// e.preventDefault();
		console.log(e.code);
		const keys = [...document.querySelectorAll('.key')];
		console.log(keys);
		const foundKey = findKey(e.code, keys);
		foundKey.classList.add('pressed');
		window.addEventListener('keyup', () => keyUp(foundKey));

	};

	const keyUp = (releasedKey) => {
		releasedKey.classList.remove('pressed');
	}
	window.addEventListener('keydown', keyDown);
})();