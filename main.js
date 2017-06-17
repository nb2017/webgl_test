//------------------------------------------------------------------------------------
// Window onloadメソッド
//------------------------------------------------------------------------------------
window.onload = function() {
  var size = 512;        //  画面サイズ
  var canvas = document.createElement('canvas');
  canvas.width = size;        //  画面縦サイズ
  canvas.height = size;        //  画面幅サイズ
  canvas.style.border = 'solid black 1px';

  document.body.appendChild(canvas);

// MMDコントロールクラス生成
  var mmd = new MMD(canvas, canvas.width, canvas.height);
// シェーダ初期化
  mmd.initShaders();
// パラメータ初期化
  mmd.initParameters();
  mmd.registerKeyListener(document);
  mmd.registerMouseListener(document);

// MMDモデル読み込み
  var miku = new MMD.Model('model', 'Miku_Hatsune_Ver2.pmd');
  // 他のキャラでも良い？
            //var miku = new MMD.Model('Lat', 'Normal.pmd');
            //var miku = new MMD.Model('mobko', 'mobko.pmd');
            //var miku = new MMD.Model('yufu', 'yufu.pmd');
            //var miku = new MMD.Model('defoko', 'defoko.pmd');
  miku.load(function() {
    mmd.addModel(miku);
    mmd.initBuffers();
    mmd.start();

    var dance = new MMD.Motion('motion/kishimen.vmd');
    dance.load(function() {
      mmd.addModelMotion(miku, dance, true);

      mmd.play()

      setInterval(function() {
        console.log('fps = ' + mmd.realFps);
      }, 1000);
    });
  });
};
