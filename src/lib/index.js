import { h } from 'hyperapp';
import ptr from './init';

ptr.setPassiveMode(true);

const PullToRefresh = ({
  key,

  // pull to refresh options
  distThreshold,
  distMax,
  distReload,
  distIgnore,
  mainElement,
  triggerElement,
  // ptrElement,
  // classPrefix,
  cssProp,
  iconArrow,
  iconRefreshing,
  instructionsPullToRefresh,
  instructionsReleaseToRefresh,
  instructionsRefreshing,
  refreshTimeout,
  // getMarkup,
  // getStyles,
  // onInit,
  onRefresh,
  resistanceFunction,
  shouldPullToRefresh,

  // others
  // hyperapp event
  ...props
}, children) => (
  <div
    {...props}
    key={key}
    oncreate={(element) => {
      element.pulltorefresh = ptr.init({
        distThreshold,
        distMax,
        distReload,
        distIgnore,
        mainElement: mainElement || element,
        triggerElement: triggerElement || element,
        cssProp,
        iconArrow,
        iconRefreshing,
        instructionsPullToRefresh,
        instructionsReleaseToRefresh,
        instructionsRefreshing,
        refreshTimeout,
        onRefresh,
        resistanceFunction,
        shouldPullToRefresh,
      });
      props.oncreate && props.oncreate(element);
    }}
    ondestroy={(element) => {
      ptr.destroyAll();
      props.ondestroy && props.ondestroy(element);
      delete element.pulltorefresh;
    }}
  >
    <div class="ha_ptr">
      <div class="ha_ptr__box">
        <div class="ha_ptr__content">
          <div class="ha_ptr__icon" />
          <div class="ha_ptr__text" />
        </div>
      </div>
    </div>
    {children}
  </div>
);

export default PullToRefresh;
