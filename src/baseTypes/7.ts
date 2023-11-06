/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekend{ 
SUNDAY="sunday", 
MONDAY="monday", 
TUESDAY="tuesday",
WEDNESDAY="wednesday",
THURSDAY="thursday",
FRIDAY="friday",
SATURDAY="saturday",

}
const isWeekend=(day:Weekend):boolean=> day===Weekend.SATURDAY ||day===Weekend.SUNDAY ? true : false;

