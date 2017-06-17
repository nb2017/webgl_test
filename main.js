window.onload = function() {
  var size = 384; // 512→384
  var canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  canvas.style.border = 'solid black 1px';

  document.body.appendChild(canvas);

  var mmd = new MMD(canvas, canvas.width, canvas.height);
  mmd.initShaders();
  mmd.initParameters();
  mmd.registerKeyListener(document);
  mmd.registerMouseListener(document);

  var miku = new MMD.Model('model', 'Miku_Hatsune_Ver2.pmd');
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
