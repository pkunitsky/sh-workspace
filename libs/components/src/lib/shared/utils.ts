import * as moment from 'moment-timezone';
import { Moment } from 'moment-timezone';

export enum Addresses {
  Bogdanovicha = 'Bogdanovicha',
  Chornogo = 'K. Chornogo',
  Kulman = 'Kulman'
}

export interface MomentPeriod {
  from: Moment;
  to: Moment;
}

export const momentUtc: any = moment.tz.setDefault('UTC');

export function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export function compare(value1, value2): boolean {
  return JSON.stringify(value1) === JSON.stringify(value2);
}

export function toLongNumber(value, characterBetween = ','): string {

  if (typeof value === 'number') {
    value = value.toFixed();
  }

  return String(value).replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, characterBetween);
}

export function toPrice(value): string {
  return `CHF ${toLongNumber(value)}`;
}

export function notNullNotUndefined(value) {
  return value !== null && value !== undefined;
}

export function getUrlSearchParams(): URLSearchParams {
  return new URLSearchParams(window.location.search);
}

export function getUrlParameter(name): string {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export function checkFocus(element): boolean {
  return document.activeElement === element;
}

export function searchFilterCheck(value, searchValue) {
  return value.toLowerCase().trim().includes(searchValue.toLowerCase().trim());
}

export function getSearchHTML(value: string, searchValue: string) {
  if (searchValue.trim()) {
    return value.replace(new RegExp(searchValue.trim(), 'ig'), (match) => `<mark>${match}</mark>`);
  } else {
    return value;
  }
}

export function repeatFilterCheck(value: any, values: Array<any>) {
  return !values.some(v => JSON.stringify(v) === JSON.stringify(value));
}

export function searchFilter(values: Array<string>, searchValue: string): Array<any> {
  if (searchValue) {
    return values.filter((value) => searchFilterCheck(value, searchValue));
  } else {
    return values;
  }
}

export function isDefined(value) {
  return value !== undefined && value !== null;
}

export function stopClickPropagationAtDocument() {
  const callback = (clickEvent: MouseEvent) => {
    clickEvent.stopPropagation();
    document.removeEventListener('click', callback);
  };
  document.addEventListener('click', callback);
}

export function momentToString(date: Moment | Date | string): string | null {
  if (moment(date)) {
    const format_moment_date_pattern = 'YYYY-MM-DD HH:mmZZ';
    return momentUtc(date).format(format_moment_date_pattern);
  } else {
    return null;
  }
}

export function getHours(date: Moment, min: number, max: number): Array<Moment> {
  const hour = date.startOf('day').add(min - 1, 'hours');
  const hours: Array<Moment> = Array(max - min).fill(null);
  hours.push(hour);
  return hours.map((item, index) => {
    return momentUtc(hour.add(1, 'hours'));
  });
}

export function momentToUrlParams(momentum: Moment): { d: any, m: any, year: any } {
  return {
    d: +momentum.format('DD'),
    m: +momentum.format('MM'),
    year: +momentum.format('YYYY')
  };
}

export function setMoment(date: Moment, day, month, year): Moment {
  return date.set({
    date: day,
    month: month - 1,
    year: year
  });
}

export function urlParamsToMoment(params): Moment {
  if (params.d && params.m && params.year) {
    return setMoment(momentUtc().startOf('day'), params.d, params.m, params.year);
  } else {
    return momentUtc().startOf('day');
  }
}

export function getMeetingEventsVisibilityRange(): MomentPeriod {
  return {
    from: momentUtc().subtract(6, 'months'),
    to: momentUtc().add(6, 'months')
  };
}
