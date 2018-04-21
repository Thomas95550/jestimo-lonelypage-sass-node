Jestimo - LonelyPage
======================
Il est obliger d'avoir node d'installer sur sont ordinateur, les liens seront dans les prérequis

Installation du projet via git suivez jusqu'au bout, si téléchargé sous zip il vous faudra vous rendre directement à l'installation des packages / dépendences voir **prérequis***.

Prérequis important
-----------

**Prérequis**
- ([NodeJS/NPM](https://nodejs.org/en/)) Obligatoire.
- ([GIT](https://git-scm.com/downloads)) Optionnel.
- Serveur local pour [Windows](http://www.wampserver.com/).
- Serveur local pour [MAC/OSX](https://www.mamp.info/en/downloads/).
- Ou à l'aide de PHP lancez un serveur local via le terminal ou ([cmder](http://cmder.net/)) utilisez cet commande: 
- - ````php -S localhost:8000/````.
- - votre port sera alors 8000 et votre serveur sera à l'adresse de ````http://localhost:8000/````.
- ([cmder](http://cmder.net/)) Emulateur de console/terminal optionnel.

Telecharger via GIT et installation via node
--------------------
**Clonage du projet**.

- L'installation via git nécessite [GIT](https://git-scm.com/downloads) 
 
**1. Etape clonez le projet**
 
Cloner le directement à la racine de votre `serveur local` 

**Wamp Windows** / **Mamp MacOsx**

- **www** est le dossier racine du serveur local **wamp**

- **htdoc** est le dossier racine du serveur local **mamp**
```bash
$:\www> git clone git@github.com:Thomas95550/jestimo-lonelypage-sass-node.git       <- windows
$:\htdocs> git clone git@github.com:Thomas95550/jestimo-lonelypage-sass-node.git    <- macOsx
```

**2. Installez les packages/dépendances** 

Entrer dans le dossier du projet,
 
```bash
$:\www> cd jestimo-lonelypage-sass-node         <- windows
$:\htdocs> cd jestimo-lonelypage-sass-node      <- macOsx
```
 
 puis executez via `node` la commande suivante:

```bash
$:\www\jestimo-lonelypage-sass-node> npm install         <- windows
$:\htdocs\jestimo-lonelypage-sass-node> npm install      <- macOsx
```

Les dependances sont installées.
Il suffit d'accéder a l'url de la page.

**3. Ouverture de la page**

Assurez-vous que votre serveur sois bien allumer et acceder à votre serveur: 
- [wampUrl](http://localhost/jestimo-lonelypage-sass-node)
- [mampUrl](http://localhost:8888/jestimo-lonelypage-sass-node)
- [PhpServerUrl](http://localhost:8000/)

Ou réferer vous à ci-dessous:
```bash
http://localhost/jestimo-lonelypage-sass-node        <-- serveur wamp
http://localhost:PORT/jestimo-lonelypage-sass-node   <-- PORT=8888 (mamp basic port) 
http://localhost:8000/ 
-> $:htdocs\jestimo-lonelypage-sass-node> Php -S localhost:8000 // le serveur est à la racine du projet
```

Télecharger et installer via node
---------------------------------

**1 .Téléchargez le projet**

En cliquant  [ici](https://github.com/Thomas95550/jestimo-lonelypage-sass-node/archive/master.zip)


Il vous faudra alors le dézipper sur le bon serveur,
**Wamp Windows** / **Mamp MacOsx** 

- **www** est le dossier racine du serveur local **wamp**

- **htdoc** est le dossier racine du serveur local **mamp**


```bash
$:\www\jestimo-lonelypage-sass-node>                    <- windows
$:\htdocs\jestimo-lonelypage-sass-node>                 <- macOsx
```
**Php -S méthode**

 - dézipper le projet, puis lancez le serveur
```bash
$:\jestimo-lonelypage-sass-node> Php -S localhost:8000  <- Serveur local
```

**2. Installez les packages/dépendances** 

Entrer dans le dossier du projet puis executez via `node` la commande suivante:

```bash
$:\www\jestimo-lonelypage-sass-node> npm install         <- windows
$:\htdocs\jestimo-lonelypage-sass-node> npm install      <- macOsx
$:\jestimo-lonelypage-sass-node> npm install     <- Serveur local, nécessite 2 terminal
```

Les dependances sont installées.
Il suffit d'accéder a l'url de la page.


**3. Ouverture de la page**

Assurez-vous que votre serveur sois bien allumer et acceder à votre serveur: 
- [wampUrl](http://localhost/jestimo-lonelypage-sass-node)
- [mampUrl](http://localhost:8888/jestimo-lonelypage-sass-node)
- [PhpServerUrl](http://localhost:8000/)

Ou réferer vous à ci-dessous:
```bash
http://localhost/jestimo-lonelypage-sass-node        <-- serveur wamp
http://localhost:PORT/jestimo-lonelypage-sass-node   <-- PORT=8888 (mamp basic port) PORT=8000 (php -S localhost:8000) 
http://localhost:8000/ 
serveur a la racine du projet -> $:htdocs\dossier\jestimo-lonelypage-sass-node>
```