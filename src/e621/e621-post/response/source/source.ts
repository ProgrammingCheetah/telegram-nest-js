interface ISourceOptions {
  sources: string[];
}

export class Source {
  private readonly _sources: string[];

  private readonly sourceRegex: RegExp[] = [
    /https:\/\/www\.twitter\.com/,
    /https:\/\/www\.furaffinity\.com/,
    /https:\/\/www\.tumblr\.com/,
    /https:\/\/www\.deviantart\.com/,
    /https:\/\/www\.pixiv\.net/,
  ];

  /**
   * Filters and reorders an array of sources, allowing only the ones already in a sources array
   * @param {string[]} fromSources The sources array where the source will be looked in
   * @param usingSourceArray The source array.
   * @returns {string[]}
   */
  static extractSources(fromSources: string[] = [], usingSourceArray: RegExp[]) {
    if (!fromSources.length || !usingSourceArray.length) return [];
    const sources: string[] = [];
    // This works well (speedwise) because either array isn't expected to grow too much :)
    usingSourceArray.forEach((sourceRegex: RegExp) => {
      const found = fromSources.find((incomingSource: string) => sourceRegex.exec(incomingSource));
      if (found) sources.push(found);
    });
    return sources;
  }

  /**
   * Extracts a single source from a source string array. Recursive to decrease load time.
   * @param {string[]} fromSources
   * @param {RegExp[]} usingSourceArray
   * @returns {any[] | RegExp}
   */
  extractSingleSource(fromSources: string[] = [], usingSourceArray: RegExp[]): string {
    if (!fromSources.length || !usingSourceArray.length) return null;
    return fromSources.find((source: string) => usingSourceArray[0].exec(source)) || this.extractSingleSource(fromSources, usingSourceArray.slice(1));
  }

  constructor(options: ISourceOptions) {
    this._sources = [...Source.extractSources(options.sources, this.sourceRegex)];
  }

  get sources() {
    return [...this._sources];
  }
}
