interface IRatingOptions {
  rating: string;
}

export type RatingType = 's' | 'q' | 'e';

enum Ratings {
  Safe = 's',
  Questionalble = 'q',
  Explicit = 'e',
}

export class Rating {

  private readonly rating: RatingType;

  constructor(options: IRatingOptions) {
    this.rating = !['s', 'q', 'e'].includes(options.rating)
      ? 'e'
      : options.rating as RatingType;
  }

  isSafe() {
    return this.rating === Ratings.Safe;
  }

  isQuestionable() {
    return this.rating === Ratings.Questionalble;
  }

  isExplicit() {
    return this.rating === Ratings.Explicit;
  }
}
