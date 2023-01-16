import { DateTime } from './luxon.js';

const date = document.querySelector('#currentDate');

export default function updateClock() {
  const now = DateTime.now();
  date.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL);
}
