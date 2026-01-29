// 短縮形（同じ意味）
fetch('header.html')           // ①ファイル取得
  .then(r=>r.text())           // ②HTMLテキスト化
  .then(html=>document.getElementById('header').innerHTML=html)  // ③画面挿入