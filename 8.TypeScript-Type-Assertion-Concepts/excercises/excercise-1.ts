const element = document.getElementById("#someId") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();

element.setAttribute("datetime", thisYear);
element.textContent = thisYear;
