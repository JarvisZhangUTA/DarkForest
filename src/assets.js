/*
 * `assets` module
 * ===============
 *
 * Declares static asset packs to be loaded using the `Phaser.Loader#pack`
 * method. Use this module to declare game assets.
 */

//  -- Splash screen assets used by the Preloader.
export const preloaderAssets = [];

//  -- General assets used throughout the game.
export const gameAssets = [{
  key: 'phaser',
  type: 'image'
},{
  key: 'rocket',
  type: 'image'
},{
  key: 'planet',
  type: 'image'
},{
  key: 'satellite',
  type: 'image'
}];
