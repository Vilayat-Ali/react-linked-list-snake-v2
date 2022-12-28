// util function to convert number to copact notation
export const ScoreFormatter = (score: number): string => {
  const formatter: Intl.NumberFormat = Intl.NumberFormat("en", {
    notation: "compact",
  });
  return formatter.format(score);
};
