interface IRelationshipsOptions {
  parent_id: number | null;
  has_children: boolean;
  has_active_children: boolean;
  children: number[];
}

export class Relationships {
  private readonly _parentId;
  private readonly _hasChildren;
  private readonly _hasActiveChildren;
  private readonly _children;

  constructor(options: IRelationshipsOptions) {
    this._parentId = options.parent_id;
    this._hasChildren = options.has_children;
    this._hasActiveChildren = options.has_active_children;
    this._children = options.children;
  }

  get parentId() {
    return this._parentId;
  }

  get hasChildren() {
    return this._hasChildren;
  }

  get hasActiveChildren() {
    return this._hasActiveChildren;
  }

  get children() {
    return this._children;
  }
}
