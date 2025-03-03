import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

export const getDate = (date: string | Date | undefined): string | null => {
  if (date) {
    const time = dayjs(date instanceof Date ? date : date.trim());
    if (time.isValid()) {
      const currentTime = dayjs(date).utc().local().format('YYYY-MM-DD');
      return currentTime;
    }
  }
  return null;
};

export const getFromNow = (date: string | Date): string | null => {
  if (date) return dayjs(date).utc().local().fromNow();
  return null;
};
