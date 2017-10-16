/*
 * Preloader state
 * ===============
 *
 * Takes care of loading the main game assets, including graphics and sound
 * effects, while displaying a busy splash screen.
 */

import {gameAssets} from '../assets';

export default class Preloader extends Phaser.State {

  preload() {
    this.showSplashScreen();
    this.load.pack('gameAssets', null, {gameAssets});
  }

  create() {
    this.state.start('Game');
  }

  // --------------------------------------------------------------------------

  showSplashScreen() {
  }

}
