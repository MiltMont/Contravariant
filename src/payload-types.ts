/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    articles: Article;
    categories: Category;
    users: User;
  };
  globals: {};
}
export interface Article {
  id: string;
  title?: string;
  author?: string | User;
  publishedDate?: string;
  category?: string | Category;
  layout?: (
    | {
        content?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        environmentType: 'theorem' | 'proposition' | 'corollary' | 'lemma' | 'example' | 'exercise';
        label?: string;
        content?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mathEnvironment';
      }
  )[];
  status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
export interface User {
  id: string;
  name?: string;
  roles: ('admin' | 'editor')[];
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Category {
  id: string;
  name?: string;
}
