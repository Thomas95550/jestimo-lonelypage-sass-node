Jestimo - Prérequis - Installation
======================

Test W3C Html Service
----------------
- Html validator [lien](https://validator.w3.org/#validate_by_input)
- Copie du fichier index.html dans le champs du site.

Test W3C CSS Validation Service
-----------------
- CSS validator [lien](https://jigsaw.w3.org/css-validator/#validate_by_input)
- Copie du fichier assets/css/main.css dans le champs du site.

**Prérequis**
- ([NodeJS/NPM](https://nodejs.org/en/)) Obligatoire.
- ([GIT](https://git-scm.com/downloads)) Optionnel.
- Serveur local pour [Windows](http://www.wampserver.com/).
- Serveur local pour [MAC/OSX](https://www.mamp.info/en/downloads/).
- Ou à l'aide de PHP lancez un serveur local via un terminal.
- ([cmder](http://cmder.net/)) Emulateur de terminal optionnel.

**Technologie utiliser**
- Préprocesseur : **scss** 
- **node** pour générer automatiquement mon css à partir de mon fichier scss
- **Bootstrap**


Telecharger via GIT et installation via node
--------------------
**Clonage du projet**.

 L'installation via git nécessite [GIT](https://git-scm.com/downloads) 
 
**1. étape clonez le projet : respectif**
- Clonez le directement à la racine de votre `serveur local` réspectif.

**Wamp Windows** / **Mamp MacOsx**
- **www** est le dossier racine du serveur local **wamp**
- **htdocs** est le dossier racine du serveur local **mamp**

```bash
$:\www> git clone git@github.com:Thomas95550/jestimo-lonelypage-sass-node.git       <- windows
$:\htdocs> git clone git@github.com:Thomas95550/jestimo-lonelypage-sass-node.git    <- macOsx
```

**Serveur php manuel**

- ```$:\dossier> git clone git@github.com:Thomas95550/jestimo-lonelypage-sass-node.git```
- Dézipper le projet.
- Entrez dedans puis lancez le serveur.
- ```$:\dossier> cd jestimo-lonelypage-sass-node```
- ```$:\jestimo-lonelypage-sass-node> Php -S localhost:8000```
- Ouvrez un nouveau terminal pour la suite.

**2. Installez les packages/dépendances** 

- Entrez dans le dossier du projet,
 
```bash 
$:\www> cd jestimo-lonelypage-sass-node         <- windows
$:\htdocs> cd jestimo-lonelypage-sass-node      <- macOsx 
```
 
 puis executez via `node` la commande suivante:

```bash
$:\www\jestimo-lonelypage-sass-node> npm install         <- windows
$:\htdocs\jestimo-lonelypage-sass-node> npm install      <- macOsx
$:\jestimo-lonelypage-sass-node>npm install      <- Nouveau terminal - Serveur local Php
```

Les dependances sont installées.
Il suffit d'accéder a l'url de la page.

**3. Ouverture de la page**

Assurez-vous que votre serveur soit bien allumé puis accéder à l'url votre serveur:
- [wampUrl](http://localhost/jestimo-lonelypage-sass-node)
- [mampUrl](http://localhost:8888/jestimo-lonelypage-sass-node)
- [PhpServerUrl](http://localhost:8000/)

Ou réferer vous à ci-dessous:
```bash
http://localhost/jestimo-lonelypage-sass-node        <-- serveur wamp
http://localhost:PORT/jestimo-lonelypage-sass-node   <-- PORT=8888 (mamp basic port) 
http://localhost:8000/                               <-- Serveur local   
-> $:htdocs\jestimo-lonelypage-sass-node> php -S localhost:8000/            
```

Télecharger et installer via node
---------------------------------

**1 .Téléchargez le projet**

En cliquant  [ici](https://github.com/Thomas95550/jestimo-lonelypage-sass-node/archive/master.zip)

Il vous faudra alors le dézipper à la racine de votre `serveur local` réspectif.

**Wamp Windows** / **Mamp MacOsx** 
- **www** est le dossier racine du serveur local **wamp**
- **htdocs** est le dossier racine du serveur local **mamp**

```bash
$:\www\jestimo-lonelypage-sass-node>                    <- windows
$:\htdocs\jestimo-lonelypage-sass-node>                 <- macOsx
```

**Serveur php manuel**

- Dézipper le projet.
- Entrez dedans puis lancez le serveur.
- ```$:\jestimo-lonelypage-sass-node> Php -S localhost:8000```
- Ouvrez un nouveau terminal pour la suite.
**2. Installez les packages/dépendances** 

Entrez dans le dossier du projet puis executez via `node` la commande suivante:

```bash
$:\www\jestimo-lonelypage-sass-node> npm install         <- windows
$:\htdocs\jestimo-lonelypage-sass-node> npm install      <- macOsx
$:\jestimo-lonelypage-sass-node> npm install     <- Nouveau terminal - Serveur local Php
```

Les dependances sont installées.
Il suffit d'accéder a l'url de la page.


**3. Ouverture de la page**

Assurez-vous que votre serveur soit bien allumé puis accéder à l'url votre serveur:
- [wampUrl](http://localhost/jestimo-lonelypage-sass-node)
- [mampUrl](http://localhost:8888/jestimo-lonelypage-sass-node)
- [PhpServerUrl](http://localhost:8000/)

Ou réferer vous à ci-dessous:
```bash
http://localhost/jestimo-lonelypage-sass-node        <-- serveur wamp
http://localhost:PORT/jestimo-lonelypage-sass-node   <-- PORT=8888 (mamp basic port) 
http://localhost:8000/                               <-- Serveur local   
-> $:htdocs\jestimo-lonelypage-sass-node> php -S localhost:8000/
```