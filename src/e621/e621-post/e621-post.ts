import { File } from './response/file/file';
import { Preview } from './response/preview/preview';
import { Sample } from './response/sample/sample';
import { Score } from './response/score/score';
import { Remote } from './response/remote/remote.interface';
import { Flags } from './response/flags/flags';
import { Rating } from './response/rating/rating.interface';
import { Source } from './response/source/source';
import { Relationships } from './response/relationships/relationships';


export class E621Post {
  public readonly id: number;
  public readonly createdAt: string;
  public readonly updatedAt: string;
  public readonly file: File;
  public readonly preview: Preview;
  public readonly sample: Sample;
  public readonly score: Score;
  public readonly tags: string[];
  public readonly artists: string[];
  public readonly lockedTags: string[];
  public readonly changeSequence: number;
  public readonly flags: Flags;
  public readonly rating: Rating;
  public readonly favoriteCount: number;
  public readonly sources: Source;
  public readonly pools: number[];
  public readonly relationships: Relationships;
  public readonly approverId: number;
  public readonly uploaderId: number;
  public readonly description: string;
  public readonly commentCount: number;
  public readonly isFavorited: boolean;
  public readonly hasNotes: boolean;
  public readonly duration: number | null;


  constructor(params: Remote) {
    this.id = params.id;
    this.createdAt = params.created_at;
    this.updatedAt = params.updated_at;
    this.file = new File(params.file);
    this.preview = new Preview(params.preview);
    this.sample = new Sample(params.sample);
    this.score = new Score(params.score);
    this.artists = [...params.tags['artist']];
    delete params.tags['artist'];
    this.tags = Object.keys(params.tags).flatMap(tag => params.tags[tag]);
    this.lockedTags = params.locked_tags;
    this.changeSequence = params.change_seq;
    this.flags = new Flags(params.flags);
    this.rating = new Rating(params);
    this.favoriteCount = params.fav_count;
    this.sources = new Source(params);
    this.pools = params.pools;
    this.relationships = new Relationships(params.relationships);
    this.approverId = params.approver_id;
    this.uploaderId = params.uploader_id;
    this.description = params.description;
    this.commentCount = params.comment_count;
    this.isFavorited = params.is_favorited;
    this.hasNotes = params.has_notes;
    this.duration = params.duration;
  }
}
