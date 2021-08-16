import { Actor } from './actor';
import { Type } from './type';

export interface MovieAll {
    IdMovie: number;
    Title: string;
    Summary?: string;
    Trailer?: string;
    Picture?: string;
    ReleaseDate?: Date;
    Type?: Type[];
    Actor?: Actor[];
}
