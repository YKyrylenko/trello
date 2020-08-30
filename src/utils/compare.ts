import compareAsc from "date-fns/compareAsc";
import addDays from "date-fns/addDays";

export const compare = (term: any): string => {
  let className = "task";
  if (term) {
    let dt = new Date(term);
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    dt.setHours(0, 0, 0, 0);
    if (compareAsc(currentDate, dt) > 0) {
      className += " expiredTerm";
    } else if (compareAsc(currentDate, dt) === 0) {
      className += " equalTerm";
    } else if (compareAsc(addDays(currentDate, 1), dt) === 0) {
      className += " oneDayLeftTerm";
    }
  }
  return className;
};
