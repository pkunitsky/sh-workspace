import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

export const default_scrollbar_height = 750;

export const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  swipeEasing: true
};

export const PERFECT_SCROLLBAR_CONFIG_NO_SUPPRESS: PerfectScrollbarConfigInterface = {
  suppressScrollY: false,
  suppressScrollX: false,
  swipeEasing: true
};

export const PERFECT_SCROLLBAR_CONFIG_NO_WHEEL_PROPAGATION: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export const PERFECT_SCROLLBAR_CONFIG_HIDE: PerfectScrollbarConfigInterface = {
  suppressScrollY: true,
  suppressScrollX: true
};
