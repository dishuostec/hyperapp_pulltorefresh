import { h } from 'hyperapp';
import ptr from './init';

const PullToRefresh = ({
                         key,

                         // pull to refresh options
                         distThreshold,
                         distMax,
                         distReload,
                         distIgnore,
                         // mainElement,
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
        mainElement: element,
        triggerElement,
        cssProp,
        iconArrow,
        iconRefreshing,
        instructionsPullToRefresh,
        instructionsReleaseToRefresh,
        instructionsRefreshing,
        refreshTimeout,
        onRefresh: () => console.log('refresh'),
        resistanceFunction,
        shouldPullToRefresh,
      });
    }}
    ondestroy={(element) => {
      element.pulltorefresh.destroy();
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
