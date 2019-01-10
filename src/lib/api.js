import _shared from './shared';

function setupDOM(handler) {
  if (!handler.ptrElement) {
    console.error('ptrElement not found');
  }

  return handler;
}

function onReset(handler) {
  handler.ptrElement.classList.remove(`${handler.classPrefix}refresh`);
  handler.ptrElement.style[handler.cssProp] = '0px';

  setTimeout(() => {
    // reset state
    _shared.state = 'pending';
  }, handler.refreshTimeout);
}

function update(handler) {
  const iconEl = handler.ptrElement.querySelector(`.${handler.classPrefix}icon`);
  const textEl = handler.ptrElement.querySelector(`.${handler.classPrefix}text`);

  if (iconEl) {
    if (_shared.state === 'refreshing') {
      iconEl.innerHTML = handler.iconRefreshing;
    } else {
      iconEl.innerHTML = handler.iconArrow;
    }
  }

  if (textEl) {
    if (_shared.state === 'releasing') {
      textEl.innerHTML = handler.instructionsReleaseToRefresh;
    }

    if (_shared.state === 'pulling' || _shared.state === 'pending') {
      textEl.innerHTML = handler.instructionsPullToRefresh;
    }

    if (_shared.state === 'refreshing') {
      textEl.innerHTML = handler.instructionsRefreshing;
    }
  }
}

export default {
  setupDOM,
  onReset,
  update,
};
