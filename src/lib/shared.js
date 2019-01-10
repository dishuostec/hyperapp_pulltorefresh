const _shared = {
  pullStartY: null,
  pullMoveY: null,
  handlers: [],
  styleEl: null,
  events: null,
  dist: 0,
  state: 'pending',
  timeout: null,
  distResisted: 0,
  passive: true,
  supportsPassive: false,
};

try {

  const options = {
    get passive() { // eslint-disable-line getter-return
      _shared.supportsPassive = true;
    },
  };
  window.addEventListener('test', null, options);
  window.removeEventListener('test', null, options);
} catch (e) {
  // do nothing
}

export default _shared;
