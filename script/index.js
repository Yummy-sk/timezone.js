import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import calendar from 'dayjs/plugin/calendar.js';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(calendar);

const defaultFormat = 'YYYY-MM-DD HH:mm';

/**
 * getCurrentTime
 *
 * The time of the current time zone
 *
 * @param { string } format
 * @returns { string }
 */
export const getCurrentTime = (format = defaultFormat) => dayjs().format(format);

/**
 * getTimeOfTimeZone
 *
 * Returns the time of the time zone.
 *
 * @param { string } timezone
 * @param { string } format
 * @returns { string }
 */
export const getTimeOfTimeZone = (timezone, format = defaultFormat) => {
  const currentTime = new Date();

  return dayjs(currentTime).tz(timezone).format(format);
};

/**
 * getTimeOfTimeZoneByDate
 *
 * Returns the time of the time zone by date.
 *
 * @param {string} timezone
 * @param {string} date
 * @param {string} format
 * @returns
 */

export const getTimeOfTimeZoneByDate = (timezone, date, format = defaultFormat) => {
  const currentTime = new Date(date);

  return dayjs(currentTime).tz(timezone).format(format);
};

/**
 * getTimeDifference
 *
 * Returns the time difference with the current time zone.
 *
 * @param { string } timzone
 * @param { string } format
 * @returns { string }
 */
export const getTimeDifference = (timzone, format = defaultFormat) => {
  const currentTime = dayjs().format(format);
  const timezoneTime = dayjs(currentTime).tz(timzone).format(format);

  return dayjs(timezoneTime).diff(currentTime, 'hour');
};

/**
 * getCustomTimeDifference
 *
 * Returns the user custom time difference.
 *
 * @param { string } standardTimezone
 * @param { string } targetTimezone
 * @param { string } format
 * @returns { string }
 */

export const getCustomTimeDifference = (standardTimezone, targetTimezone, format = defaultFormat) => {
  const currentTime = dayjs().format(format);
  const standardTimezoneTime = dayjs(currentTime).tz(standardTimezone).format(format);
  const targetTimezoneTime = dayjs(currentTime).tz(targetTimezone).format(format);

  return dayjs(targetTimezoneTime).diff(standardTimezoneTime, 'hour');
};

/**
 * getDate
 *
 * Returns whether the time zone is today, tomorrow, or yesterday based on the current time.
 *
 * @param { string } timezone
 * @param { string } format
 * @returns { string }
 */

export const getDate = (timezone, format = defaultFormat) => {
  const currentTime = dayjs().format(format);
  const timezoneTime = dayjs(currentTime).tz(timezone).format(format);

  return dayjs(timezoneTime).calendar();
};

/**
 * getCurrentTimeZone
 *
 * @returns { string }
 */

export const getCurrentTimeZone = () => {
  return dayjs.tz.guess();
};
