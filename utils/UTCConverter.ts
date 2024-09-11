export default function convertUTCToIST(utcTime: string): string {
  // Parse the UTC time string
  const utcDate: Date = new Date(utcTime + " UTC");

  // Convert to IST by adding 5 hours and 30 minutes
  const istOffset: number = 5 * 60 + 30; // IST is UTC + 5:30
  const istDate: Date = new Date(utcDate.getTime() + istOffset * 60 * 1000);

  // Array to get day and month names
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the components of the date
  const dayName: string = days[istDate.getDay()];
  const monthName: string = months[istDate.getMonth()];
  const day: number = istDate.getDate();
  const year: number = istDate.getFullYear();

  // Return the formatted date in "Day, Month Date, Year" format
  return `${dayName}, ${monthName} ${day}, ${year}`;
}
