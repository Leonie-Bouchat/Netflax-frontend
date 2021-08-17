import { Movie } from './movie';
export interface Type {
    IdGenre: number;
    Label: string;
    Movies?: Movie[];
}
