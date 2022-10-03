export const hoursLabel = (): string[] => {
  const hours = []
  for (let i = 0; i <= 24; i++) {
    hours.push(`${i}:00 hrs`)
  }
  return hours
}
