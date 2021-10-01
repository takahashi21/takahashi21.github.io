<?php
$name = htmlspecialchars($_POST['name'],ENT_QUOTES);
$email = htmlspecialchars($_POST['email'],ENT_QUOTES);
$cat = $_POST['category'];
$message = htmlspecialchars($_POST['message'],ENT_QUOTES);
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone-no">

  <title>お問合せ確認画面｜豊島区南池袋の豊島歯科</title>

  <link rel="shortcut icon" href="../toshima-shika-favi.gif" type="image/x-icon">
  <link rel="apple-touch-icon" href="../toshima-shika-touch.gif">

  <!-- style -->
  <link rel="stylesheet" href="../css/style.css">

</head>

<body>

<header>

<div class="logo-wrapper">
<h1 class="logo">
  <a href="../">
  <p class="logo-left"><img src="../img/toshima-shika-logo.svg" alt="豊島医院のロゴ"></p>
  <p class="logo-right"><img src="../img/toshima-shika-font.svg" alt="豊島医院のロゴ"></p>
  </a>
  お問合せ確認画面｜豊島区南池袋の豊島歯科
</h1>

<div class="logo-wrp-inner">
  <a class="tel" href="tel:03-1234-5678">
  <img class="icon-svg" src="../img/phone-icon.svg" alt="携帯電話のアイコン">
  <span>03-0000-0000</span>
  </a>
  <p class="address">東京都豊島区南池袋1‐2‐3 矢島ビル２階</p>
</div>

<a class="contact-link" href="../contact/">お問合せはこちら<span></span></a>
</div><!-- logo-wrapper -->

<!-- hamburger -->
<button id="ham-btn"><span></span></button>

</header>

<nav id="g-nav">
<div class="logo">
  <a href="../">
  <p class="logo-left"><img src="../img/logo-white.gif" alt="豊島医院のロゴ"></p>
  <p class="logo-right"><img src="../img/toshima-shika-font.svg" alt="豊島医院のロゴ"></p>
  </a>
</div>
<ul>
  <li><a href="../">ホーム<span>HOME</span></a></li>
  <li><a href="../clinic/">当院について<span>CLINIC</span></a></li>
  <li><a href="../service/">診療内容<span>SERVICE</span></a></li>
  <li><a href="../doctor/">医師紹介<span>DOCTOR</span></a></li>
  <li class="current"><a href="index.html">お問合せ<span>CONTACT</span></a></li>
</ul>
</nav>

<section class="contact">
<h2 class="sec-h2">お問い合わせ確認画面</h2>
<p class="txt">
下記フォームにご記入のうえ、「確認画面へ」ボタンを押して入力内容をご確認いただき、<br>「送信する」ボタンを押して送信してください。
</p>

<form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOYWjKEB1lHpBt3ua9U1mYseNK47O9_27XTxIm_xKMGcoR9Q/formResponse" id="g-form" method="POST">
<dl>

<dt>お名前<span>必須</span></dt>
<dd>
<?php echo $name;?>
</dd>

<dt>メールアドレス<span>必須</span></dt>
<dd>
<?php echo $email;?>
</dd>

<dt>お問い合わせ項目</dt>
<dd>
<?php echo $cat;?>
</dd>

<dt>お問い合わせ内容<span>必須</span></dt>
<dd>
<?php echo $message;?>
</dd>

</dl>

<!-- Google Formに送信 -->
<input type="hidden" name="entry.1184686335" value="<?php echo $name; ?>">
<input type="hidden" name="entry.311624194" value="<?php echo $email; ?>">
<input type="hidden" name="entry.706648393" value="<?php echo $cat; ?>">
<input type="hidden" name="entry.1693628708" value="<?php echo $message; ?>">

<div class="submit-wrapper">
<input type="submit" value="送信する">
<input type="button" value="入力画面に戻る" onClick="history.back();">
</div>

</form>
</section>

<div id="btn-wrapper">
<a href="#" id="to-top">上に戻る</a>
<a href="#footer" id="to-btm">ページ最下部へ</a>
</div>

<footer id="footer">
<nav id="local-nav">
<ul>
  <li><a href="../">ホーム<span>HOME</span></a></li>
  <li><a href="../clinic/">当院について<span>CLINIC</span></a></li>
  <li><a href="../service/">診療内容<span>SERVICE</span></a></li>
  <li><a href="../doctor/">医師紹介<span>DOCTOR</span></a></li>
  <li><a href="index.html">お問合せ<span>CONTACT</span></a></li>
</ul>
</nav>
<p><small>&copy; <span id="this-year"></span> Toshima Dental Clinic</small></p>
</footer><!-- footer -->

<!-- script -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script src="../js/script.js"></script>

<script>

$(function(){

const gform = $('#g-form');

$(gform).submit(function (event) {
let formData = $(gform).serialize();

$.ajax({
  url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOYWjKEB1lHpBt3ua9U1mYseNK47O9_27XTxIm_xKMGcoR9Q/formResponse",
  data: formData,
  type: "POST",
  dataType: "xml",
  statusCode: {
    0: function(){
      window.location.href = "thanks.html";
      },
    200: function(){
      }
    }
  });

  event.preventDefault();

});

});

</script>

</body>
</html>