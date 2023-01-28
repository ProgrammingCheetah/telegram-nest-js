interface IFlagsOptions {
  pending: boolean;
  flagged: boolean;
  note_locked: boolean;
  status_locked: boolean;
  rating_locked: boolean;
  comment_disabled: boolean;
  deleted: boolean;
}

export class Flags {
  private readonly pending: boolean;
  private readonly flagged: boolean;
  private readonly note_locked: boolean;
  private readonly status_locked: boolean;
  private readonly rating_locked: boolean;
  private readonly comment_disabled: boolean;
  private readonly deleted: boolean;

  constructor(options: IFlagsOptions) {
    this.pending = options.pending;
    this.flagged = options.flagged;
    this.note_locked = options.note_locked;
    this.status_locked = options.status_locked;
    this.rating_locked = options.rating_locked;
    this.comment_disabled = options.comment_disabled;
    this.deleted = options.deleted;
  }

  isPending() {
    return this.pending;
  }

  isFlagged() {
    return this.flagged;
  }

  isNoteLocked() {
    return this.note_locked;
  }

  isStatusLocked() {
    return this.status_locked;
  }

  isRatingLocked() {
    return this.rating_locked;
  }

  isCommentDisabled() {
    return this.comment_disabled;
  }

  isDeleted() {
    return this.deleted;
  }


}
