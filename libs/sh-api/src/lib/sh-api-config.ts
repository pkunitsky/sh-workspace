import { IShApiConfig } from './i-sh-api-config';

export class ShApiConfig implements IShApiConfig {
  constructor(public apiBase: string) {
  }
}
