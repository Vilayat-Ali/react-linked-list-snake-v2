// lib
import moment from "moment";

type scoresType = {
  name: string;
  score: number;
  date: string;
};

type scoreSheetType = {
  scores: scoresType[];
};

export const manageHighScore = (name: string, score: number) => {
  const currentDate: string = moment().format("DD-MM-YYYY");
  let scoreSheetStorage: string | null = localStorage.getItem("highscore");
  if (scoreSheetStorage) {
    let scoreSheet: scoreSheetType = JSON.parse(scoreSheetStorage);
    localStorage.clear();
    let newScores: scoresType[] = scoreSheet?.scores.reverse();
    localStorage.setItem(
      "highscore",
      JSON.stringify({
        scores: [
          {
            name,
            score,
            date: currentDate,
          },
          ...newScores,
        ],
      })
    );
  } else {
    localStorage.setItem(
      "highscore",
      JSON.stringify({
        scores: [
          {
            name,
            score,
            date: currentDate,
          },
        ],
      })
    );
  }
};
