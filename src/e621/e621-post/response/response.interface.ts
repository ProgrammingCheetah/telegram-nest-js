import { File } from './file/file';
import { Preview } from './preview/preview';
import { Sample } from './sample/sample';
import { Score } from './score/score';
import { Flags } from './flags/flags';
import { Relationships } from './relationships/relationships';
import { Rating } from './rating/rating.interface';

export interface Response {
  id: number;
  created_at: string;
  updated_at: string;
  file: File;
  preview: Preview;
  sample: Sample;
  score: Score;
  tags: { [key: string]: string[] };
  locked_tags: [];
  change_seq: number;
  flags: Flags;
  rating: Rating;
  fav_count: number;
  sources: string[];
  pools: string[];
  relationships: Relationships;
  approver_id: number;
  uploader_id: number;
  description: string;
  comment_count: number;
  is_favorited: boolean;
  has_notes: number;
  duration: number;
}
