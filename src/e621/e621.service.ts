import { Injectable } from '@nestjs/common';
import { ApisauceInstance, create } from 'apisauce';
import { GetWithTagsDto } from './get-with-tags.dto/get-with-tags.dto';
import { Response } from './e621-post/response/response.interface';
import { E621Post } from './e621-post/e621-post';
import { Remote } from './e621-post/response/remote/remote.interface';


interface Ie621ServiceInitParams {
  baseURL?: string;
  headers?: {
    Cookie: string;
    'User-Agent': string;
  };
  maxTagsPerSearch?: number;
}

@Injectable()
export class E621Service {
  private api: ApisauceInstance;
  private readonly maxTagsPerSearch: number;

  constructor() {
    this.api = create({
      baseURL: 'https://e621.net/posts.json',
      headers: {
        Cookie: 'gw=seen',
        'User-Agent': 'PostSelectorZielAnimae/v0.3',
      },
    });
    this.maxTagsPerSearch = 40;
  }

  removeSource() {
  }

  /**
   * Generates a tag url for the e621 API.
   *
   * @example
   * {lookup: ['male', 'gay'], forbidden: ['straight', 'female']}
   *
   * => '?tags=male+gay+-straight+-female'
   *
   * @param {string[]} lookup
   * @param {string[]} forbidden
   * @returns {string}
   */
  generateTagUrl({ lookup, forbidden, amount }: GetWithTagsDto) {
    const tagAmount = lookup.length + forbidden.length;
    const tagParam = `?tags=`;
    if (tagAmount === 0) {
      return '';
    }

    // This operation is a bit costly, but don't modify the original array
    const allTags = lookup.length > this.maxTagsPerSearch
      ? [...lookup.slice(0, this.maxTagsPerSearch)]
      : [...lookup];


    if (allTags.length < 40) {
      const toAdd = this.maxTagsPerSearch - allTags.length;
      const allowedTagsString = allTags.map(encodeURIComponent).join('+');
      const forbiddenSubArray = forbidden.slice(0, toAdd).map((tag: string) => encodeURIComponent(`-${tag}`)).join('+');
      if (allowedTagsString) {
        return `${tagParam}${allowedTagsString}+${forbiddenSubArray}`; // More efficient operation
      }
      return `${tagParam}${forbiddenSubArray}`;
    }

    allTags.length = this.maxTagsPerSearch;
    return allTags.map(encodeURIComponent).join('+');
  }


  async fetche621Posts(getWithTagsDto: GetWithTagsDto) {
    const { amount } = getWithTagsDto;
    const tagURL = this.generateTagUrl(getWithTagsDto) + `&limit=${amount}`;
    const { data } = await this.api.get(tagURL) as any;
    const { posts } = data as { posts: Remote[] };
    const postModels = posts.map((post: Remote) => new E621Post(post));
    const staticURLs = postModels.map((postModel: E621Post) => postModel.file.url).filter((url: string) => url);
    const successful = staticURLs.length;
    const errors = amount - staticURLs.length;
    return { successful, errors, staticURLs };
  }
}

