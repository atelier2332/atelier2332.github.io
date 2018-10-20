<!DOCTYPE html>
<html>
  <head>
    <!-- HEAD -->
    <?php include('partials/head.php'); ?>
  </head>
  <body>

    <!-- NAV -->
    <?php include('partials/nav.php'); ?>

    <!-- SPACER -->
    <section class="hero">
      <div class="hero-body"></div>
    </section>

    <section class="projects section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">Études de cas</h1>
            <form class="projects-form">
              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option>Tous les articles</option>
                      <option>Carnet de veille</option>
                      <option>Dossier de conception</option>
                      <option>Atelier d'innovation ouverte</option>
                      <option>Récit immersif</option>
                      <option>Beta Produit</option>
                      <option>Prototype</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="column">
            <p>
              Rēzom rédige pour ses clients des Carnets de Veille, véritables sources d’inspirations destinées à nourrir l’innovation. Notre capacité d’observation ne repose pas sur quelques experts, mais sur une communauté large et diversifiée. C’est cette multitudes de points de vues qui rend nos campagnes de veille collaborative si riches.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects section">
      <div class="container">

        <!-- chaque paire de column doivent être emballées dans une div columns -->

        <div class="columns">
          <article class="column">
            <div class="frame" style="background-image: url('https://home.cern/sites/home.web.cern.ch/files/image/experiment/2013/10/ace.png');">
              <div class="overlay">
                <div class="inner">
                  <a href="etude-de-cas.php" class="link">Voir</a>
                  <hr class="line">
                </div>
              </div>
            </div>
            <h2 class="title"><a href="etude-de-cas.php">De l'antimatière dans les chaumières</a></h2>
            <h3 class="sub">Comment apprivoiser l'antimatière pour en faire un petit compagnon domestique</h3>
          </article>
          <article class="column">
            <div class="frame" style="background-image: url('https://www.eujuicers.fr/admin/upload/images-cache/18987/1000.jpg');">
              <div class="overlay">
                <div class="inner">
                  <a href="etude-de-cas.php" class="link">Voir</a>
                  <hr class="line">
                </div>
              </div>
            </div>
            <h2 class="title"><a href="etude-de-cas.php">ZumZarp : l'extracteur de jus de quasar</a></h2>
            <h3 class="sub">Faites donc juter cette source de rayonnement quasi-stellaire</h3>
          </article>
        </div>

        <!-- chaque paire de column doivent être emballées dans une div columns -->

        <div class="columns">
          <article class="column">
            <div class="frame" style="background-image: url('assets/img/raspi.jpg');">
              <div class="overlay">
                <div class="inner">
                  <a href="etude-de-cas.php" class="link">Voir</a>
                  <hr class="line">
                </div>
              </div>
            </div>
            <h2 class="title"><a href="etude-de-cas.php">Cessez de passer votre vie à ne pas miner de Bitcoins</a></h2>
            <h3 class="sub">Pas de grisou, que des gros sous. Et gros bisous</h3>
          </article>
          <article class="column">
            <div class="frame" style="background-image: url('http://data-cache.abuledu.org/full/antilope-cervicapre-516d6243.jpg');">
              <div class="overlay">
                <div class="inner">
                  <a href="etude-de-cas.php" class="link">Voir</a>
                  <hr class="line">
                </div>
              </div>
            </div>
            <h2 class="title"><a href="etude-de-cas.php">Escalope d'antilope. Peut-on tout avaler ?</a></h2>
            <h3 class="sub">... même bien assaisoné</h3>
          </article>
        </div>

      </div>
    </section>

    <section class="section is-yellow">
      <div class="container">
        <a href="#" id="btn-scroll-top"><img src="assets/img/up.svg" alt="Bouton scroll haut"></a>
      </div>
    </section>

    <!-- FOOTER -->
    <?php include('partials/footer.php'); ?>
  </body>
</html>
