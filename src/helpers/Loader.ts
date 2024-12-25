/**
 * Represents a utility class for managing loaders.
 * @class Loader
 *
 * @exports default - Default export of the Loader class.
 */

/**
 * Interface representing the loader instance.
 * @interface ILoader
 */
export interface ILoader {
  showLoader(): void;
  hideLoader(): void;
}

export default class Loader {
  /**
   * Private static property to store the loader instance.
   * @static
   * @type {ILoader}
   */
  private static _loader: ILoader;

  /**
   * Sets the loader instance.
   * @static
   * @param {ILoader} loader - Loader instance to set.
   */
  static setLoader(loader: ILoader): void {
    Loader._loader = loader;
  }

  /**
   * Gets the loader instance.
   * @static
   * @returns {ILoader} - Loader instance.
   */
  static getLoader(): ILoader {
    return Loader._loader;
  }

  /**
   * Shows the loader.
   * @static
   */
  static showLoader(): void {
    Loader._loader.showLoader();
  }

  /**
   * Hides the loader.
   * @static
   */
  static hideLoader(): void {
    Loader._loader.hideLoader();
  }
}
