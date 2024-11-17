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

let elements = document.getElementsByName('slctbtn');
elements[2].checked = true;

switch (element) 
case value=1
results2[n][0]=1
break;
case 2
results2[n][0]=2
break;
case 3
results2[n][0]=2
break;
// 1はhot。2はCold。3はboth

const results2 = [{ hotOrCold:3, name:'ジャスミン茶'},
{ hotOrCold:3, name:'コーヒー'},
{ hotOrCold:3, name:'紅茶'},
{ hotOrCold:3, name: 'ハワイアン'},
{ hotOrCold:3, name: 'レモンバーベナ'},
{ hotOrCold:3, name: 'カモミール'},
{ hotOrCold:3, name: '牛乳'},
{ hotOrCold:2, name:  '炭酸水'},
{ hotOrCold:3, name:  'マロウ'},
{ hotOrCold:3, name:  'ブレンドハーブ'},
{ hotOrCold:3, name: 'ミシマサイコ'},
{ hotOrCold:1, name: '葛湯'},
  { hotOrCold:3, name:  'ダージリン'},
  { hotOrCold:3, name: 'ハイビスカス'},
  { hotOrCold:3, name: 'ホーリーバジル'},
  { hotOrCold:3, name: 'カレンデュラ'},
  { hotOrCold:3, name:  'ステビア'},
  { hotOrCold:3, name:  'スペアミント'}];

  btn.addEventListener('click', () => {
    // result.textContent = 'otya!';
const n = Math.floor(Math.random()* resultsn.length);

result.textContent = results2[n][1];