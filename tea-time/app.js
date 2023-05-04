'use strict'

{
  const btn =document.getElementById('btn');
  const result =document.getElementById('result');
  const results = ['ジャスミン茶',
  'コーヒー',
  '紅茶',
  'ハワイアン',
  'レモンバーベナ',
  'カモミール',
  '牛乳',
  '炭酸水',
  'マロウ',
  'ブレンドハーブ',
  'ミシマサイコ',
  '葛湯',
  'ダージリン',
  'ハイビスカス',
  'ホーリーバジル',
  'カレンデュラ',
  'ステビア',
  'スペアミント'];

  btn.addEventListener('click', () => {
    // result.textContent = 'otya!';
const n = Math.floor(Math.random()* results.length);

result.textContent = results[n];

 });
}

// やりたいこと。温冷の項目はcold、hot,bothで分類！＝＝で定義してfilter？使う。スロット形式でやりたい飲み物の追加はやはデータベースがないと一時保存で消えちゃうかなぁ。あ、でもメモアプリでリストの追加したら追加はできてたな。リロードしたら消えちゃったけど。


