document.addEventListener('DOMContentLoaded', () => {
  const rocket = document.querySelector('.rocket');
  const topPage = document.getElementById('top-page');
  const shootingStar = document.querySelector('.shooting-star');
  const topContainer = document.getElementById('top');

 

  // ロケットのアニメーション終了後の処理
  rocket.addEventListener('animationend', () => {
    console.log('ロケットのアニメーションが終了');
    topContainer.style.display = 'none'; // 背景を非表示
    topPage.style.display = 'block'; // トップページを表示
    topPage.style.opacity = 1; // フェードイン
   
  });

  // 流れ星のアニメーションを開始
  shootingStar.style.animationPlayState = 'running';
 
});
