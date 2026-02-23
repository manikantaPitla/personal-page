/**
 * Formats a duration string like "Apr 2025 - Current" or "Feb 2023 - Oct 2023"
 * and appends the total duration in months/years.
 *
 * @param durationStr - The duration string to parse
 * @returns The formatted duration string with total time
 */
export const formatDurationWithTotal = (durationStr: string): string => {
  if (!durationStr || !durationStr.includes(" - ")) return durationStr;

  const parts = durationStr.split(" - ");
  if (parts.length !== 2) return durationStr;

  const startStr = parts[0].trim();
  const endStr = parts[1].trim();

  const startDate = parseDate(startStr);
  const endDate = endStr.toLowerCase() === "current" ? new Date() : parseDate(endStr);

  if (!startDate || !endDate) return durationStr;

  const diffInMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1; // Include both start and end months

  if (diffInMonths <= 0) return durationStr;

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  let durationText = "";
  if (years > 0) {
    durationText += `${years} Year${years > 1 ? "s" : ""}`;
    if (months > 0) durationText += ` ${months} Month${months > 1 ? "s" : ""}`;
  } else {
    durationText += `${months} Month${months > 1 ? "s" : ""}`;
  }

  return `${durationStr} (${durationText})`;
};

/**
 * Parses a date string in "MMM YYYY" format (e.g., "Apr 2025")
 */
const parseDate = (dateStr: string): Date | null => {
  const [monthStr, yearStr] = dateStr.split(" ");
  if (!monthStr || !yearStr) return null;

  const year = parseInt(yearStr, 10);
  const monthIndex = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].indexOf(
    monthStr.toLowerCase().slice(0, 3)
  );

  if (isNaN(year) || monthIndex === -1) return null;

  return new Date(year, monthIndex);
};
