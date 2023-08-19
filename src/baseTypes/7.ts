/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekend {
  Sat = "Sat",
  Sun= "Sun",
}

function isWeekend(day: string): boolean {
  if ( Weekend.Sat === day || Weekend.Sun === day  ) {
    return true
  }
  
  return false
}
