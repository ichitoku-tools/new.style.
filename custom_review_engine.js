
const reviewData = {
  course: [
    "もみほぐしコース",
    "足つぼコース",
    "ヘッドスパコース",
    "オイルマッサージコース"
  ],
  issue: {
    "もみほぐしコース": ["肩こり", "首のこり", "腰痛", "背中の張り", "全身の疲れ"],
    "足つぼコース": ["足のむくみ", "足の疲れ", "冷え性", "立ち仕事の疲れ"],
    "ヘッドスパコース": ["頭痛", "首のこり", "眼精疲労", "睡眠の質の低下", "リラックス不足"],
    "オイルマッサージコース": ["全身の疲れ", "むくみ", "血行不良", "リンパの詰まり感", "冷え性"]
  },
  effect: {
    "もみほぐしコース": ["肩が軽くなった", "腰が楽になった", "全身がポカポカ温まった", "背中の張りがほぐれた", "呼吸が深くなった"],
    "足つぼコース": ["足がスッキリした", "むくみが取れた感じがした", "冷えが改善した", "足が軽くなった"],
    "ヘッドスパコース": ["頭がスッキリした", "目がパッチリした", "首まわりが軽くなった", "リラックスできた", "睡眠の質が上がった気がする"],
    "オイルマッサージコース": ["全身がリフレッシュできた", "体がスッと軽くなった", "血行が促進された感じがした", "むくみが取れてスッキリした"]
  },
  situation: [
    "仕事帰りに立ち寄りました",
    "デスクワーク疲れで行きました",
    "運動後のケアで訪れました",
    "旅行帰りに癒されにきました",
    "頑張った自分へのご褒美に来ました"
  ],
  ending: [
    "またお願いしたいです！",
    "大満足でした！",
    "また行きたいな！",
    "癒されました、ありがとうございました！",
    "次回も楽しみにしています！"
  ]
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateReview(options = {}) {
  const course = options.course || pickRandom(reviewData.course);
  const issue = options.issue || pickRandom(reviewData.issue[course]);
  const effect = options.effect || pickRandom(reviewData.effect[course]);
  const situation = options.situation || pickRandom(reviewData.situation);
  const ending = options.ending || pickRandom(reviewData.ending);
  const style = options.style || "丁寧";

  let effectPart = effect.endsWith("た") || effect.includes("された") ? effect + "のも実感できました。" : effect + "も実感できました。";

  let sentence = "";

  if (style === "丁寧") {
    sentence = `${situation}。${course}を受けて、${issue}が楽になりました。${effectPart}${ending}`;
  } else if (style === "カジュアル") {
    sentence = `${situation}！${course}やって、${issue}がマジで楽になった！${effect}も感じた！${ending}`;
  } else if (style === "フレンドリー") {
    sentence = `${situation}〜！${course}で${issue}がすっごいラクになったよ〜！${effect}ものもバッチリ☆${ending}`;
  } else {
    sentence = `${situation}。${course}を受けて、${issue}が楽になりました。${effectPart}${ending}`;
  }

  return sentence;
}

// 使用例
// console.log(generateReview());
// console.log(generateReview({ course: "ヘッドスパコース", style: "カジュアル" }));
