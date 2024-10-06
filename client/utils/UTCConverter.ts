export default function convertUTCToIST(utcTime: string): string {
  // Parse the UTC time string
  const utcDate: Date = new Date(utcTime + " UTC");

  // Convert to IST by adding 5 hours and 30 minutes
  const istOffset: number = 5 * 60 + 30; // IST is UTC + 5:30
  const istDate: Date = new Date(utcDate.getTime() + istOffset * 60 * 1000);

  // Array to get day and month names
  const days: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the components of the date
  const dayName: string = days[istDate.getDay()];
  const monthName: string = months[istDate.getMonth()];
  const day: number = istDate.getDate();
  const year: number = istDate.getFullYear();

  // Get hours and minutes
  let hours: number = istDate.getHours();
  const minutes: number = istDate.getMinutes();

  // Format hours for AM/PM
  const ampm: string = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedMinutes: string = minutes < 10 ? '0' + minutes : minutes.toString();

  // Return the formatted date in "Day, Month Date, Year" format
  return `${dayName}, ${monthName} ${day}, ${year}, ${hours}:${formattedMinutes} ${ampm}`;
}
