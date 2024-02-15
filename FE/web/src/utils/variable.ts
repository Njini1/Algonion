export const TierLevel: Record<number, string> = {
   0: 'Unrated',
    1: 'Bronze',
    2: 'Silver',
    3: 'Gold',
    4: 'Platinum',
    5: 'Diamond',
    6: 'Master',
  };
  
export const scoreRanges: Record<string, number[]> = {
    "Bronze": [0, 99],
    "Silver": [100, 799],
    "Gold": [800, 3999],
    "Platinum": [4000, 19999],
    "Diamond": [20000, 99999],
    "Master": [100000, Infinity],
  };

export const algoScoreLevel: Record<number, string> = {
    0: 'Unrated',
    1: 'Bronze',
    4: 'Silver',
    8: 'Gold',
    40: 'Platinum',
    200: 'Diamond',
    1000: 'Master',
  };

  export const variableProblemLevel: Record<string, Record<string, string>> = {
    Baekjoon: {
      0: "Unrated",
      1: "Bronze",
      2: "Bronze",
      3: "Bronze",
      4: "Bronze",
      5: "Bronze",
      6: "Silver",
      7: "Silver",
      8: "Silver",
      9: "Silver",
      10: "Silver",
      11: "Gold",
      12: "Gold",
      13: "Gold",
      14: "Gold",
      15: "Gold",
      16: "Platinum",
      17: "Platinum",
      18: "Platinum",
      19: "Platinum",
      20: "Platinum",
      21: "Diamond",
      22: "Diamond",
      23: "Diamond",
      24: "Diamond",
      25: "Diamond",
      26: "Master",
      27: "Master",
      28: "Master",
      29: "Master",
      30: "Master",
    },
    Swea: {
      D1: 'bronze',
      D2: 'silver',
      D3: 'gold',
      D4: 'gold',
      D5: 'platinum',
      D6: 'platinum',
      D7: 'diamond',
      'D8': 'master',
    },
    Programmers: {
      0: 'unrated',
      1: 'bronze',
      2: 'silver',
      3: 'gold',
      4: 'platinum',
      5: 'diamond',
      6: 'master',
    },
  };