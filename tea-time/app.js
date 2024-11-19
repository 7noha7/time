'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const elements = document.getElementsByName('slctbtn');

  const results2 = [
    { id:  1, type :2, name:'ジャスミン茶'},
  { id:  2, type :1, name:'コーヒー'},
  { id:  3, type :3, name:'紅茶'},
  { id:  4, type :2, name: 'ハワイアン'},
  { id:  5, type :2, name: 'レモンバーベナ'},
  { id:  6, type :1, name: 'カモミール'},
  { id:  7, type :1, name: '牛乳'},
  { id:  8, type :2, name:  '炭酸水'},
  { id:  9, type :3, name:  'マロウ'},
  { id:  10, type :3, name:  'ブレンドハーブ'},
  { id:  11, type :3, name: 'ミシマサイコ'},
  { id:  12, type :1, name: '葛湯'},
    { id:  13, type :3, name:  'ダージリン'},
    { id:  14, type :1, name: 'ハイビスカス'},
    { id:  15, type :3, name: 'ホーリーバジル'},
    { id:  16, type :3, name: 'カレンデュラ'},
    { id:  17, type :3, name:  'ステビア'},
    { id:  18, type :2, name:  'スペアミント'}
  ];

  btn.addEventListener('click', () => {
    let selectedValue = 3;

    elements.forEach((element) => {
      if (element.checked){
        selectedValue = parseInt(element.value);
      }
    });

const filteredResults = results2.filter(
  drink =>drink.type === selectedValue || selectedValue === 3); 
  
  if (filteredResults.length > 0) {
const n = Math.floor(Math.random()* filteredResults.length);

result.textContent = filteredResults[n].name;

 }else {
  result.textContent = '該当する飲み物がありません';
}
});
});

// やりたいこと。温冷の項目はcold、hot,bothで分類！＝＝で定義してfilter？使う。スロット形式でやりたい飲み物の追加はやはデータベースがないと一時保存で消えちゃうかなぁ。あ、でもメモアプリでリストの追加したら追加はできてたな。リロードしたら消えちゃったけど。

// let elements = document.getElementsByName('slctbtn');
// elements[2].checked = true;

// switch (value) {
// case 1:
// results2[n][0]=1
// break;
// case 2:
// results2[n][0]=2
// break;
// case 3:
// results2[n][0]=2
// break;
// // 1はhot。2はCold。3はboth
// }



//   btn.addEventListener('click', () => {
//     // result.textContent = 'otya!';
// const n = Math.floor(Math.random()* results2.length);

// result.textContent = results2[n][1];