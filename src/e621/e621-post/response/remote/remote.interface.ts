import { Rating, RatingType } from '../rating/rating.interface';

interface IFileRemote {
  width: number;
  height: number;
  ext: string;
  size: number;
  md5: string;
  url: string;
}

interface IPreviewRemote {
  width: number;
  height: number;
  url: string;
}

interface ISampleRemote {
  has: boolean;
  height: number;
  width: number;
  url: string;
  alternates: {};
}

interface IScoreRemote {
  up: number;
  down: number;
  total: number;
}

type StringArrayInObject = { [key: string]: string[] }

interface IRelationshipsRemote {
  parent_id: number | null;
  has_children: boolean;
  has_active_children: boolean;
  children: number[];
}

interface IFlagsRemote {
  pending: boolean;
  flagged: boolean;
  note_locked: boolean;
  status_locked: boolean;
  rating_locked: boolean;
  comment_disabled: boolean;
  deleted: boolean;
}

export interface Remote {
  id: number;
  created_at: string;
  updated_at: string;
  file: IFileRemote;
  preview: IPreviewRemote;
  sample: ISampleRemote;
  score: IScoreRemote;
  tags: StringArrayInObject;
  locked_tags: string[];
  change_seq: number;
  flags: IFlagsRemote;
  rating: RatingType;
  fav_count: number;
  sources: string[];
  pools: number[];
  relationships: IRelationshipsRemote;
  approver_id: number;
  uploader_id: number;
  description: string;
  comment_count: number;
  is_favorited: boolean;
  has_notes: boolean;
  duration: number | null;
}
