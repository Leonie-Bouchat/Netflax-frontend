import { Actor } from './actor';
import { Type } from './type';

export interface Movie {
    IdMovie: number;
    Title: string;
    ReleaseDate?: Date;
    Summary?: string;
    Type?: Type[];
    Actor?: Actor[];

}
