export default {
  distThreshold: 60,
  distMax: 80,
  distReload: 50,
  distIgnore: 0,
  mainElement: 'body',
  triggerElement: 'body',
  ptrElement: '.ha_ptr',
  classPrefix: 'ha_ptr__',
  cssProp: 'min-height',
  iconArrow: '&#8675;',
  iconRefreshing: '&hellip;',
  instructionsPullToRefresh: 'Pull down to refresh',
  instructionsReleaseToRefresh: 'Release to refresh',
  instructionsRefreshing: 'Refreshing',
  refreshTimeout: 500,
  // getMarkup: () => _ptrMarkup,
  // getStyles: () => _ptrStyles,
  // onInit: () => {
  // },
  onRefresh: () => location.reload(),
  resistanceFunction: t => Math.min(1, t / 2.5),
  shouldPullToRefresh() {
    // console.log([
    //   this.mainElement.scrollTop, // error in chrome device emulator
    //   document.documentElement.scrollTop, // error in real device
    //   document.scrollingElement.scrollTop,
    //   window.scrollY,
    // ].join(','));

    return typeof this.mainElement === 'string'
      ? !document.querySelector(this.mainElement).scrollTop
      : (
        this.mainElement
          ? (
            this.mainElement === document.body
              ? (
                document.scrollingElement
                  ? !document.scrollingElement.scrollTop
                  : !window.scrollY
              )
              : !this.mainElement.scrollTop
          )
          : false
      );
  },
};
