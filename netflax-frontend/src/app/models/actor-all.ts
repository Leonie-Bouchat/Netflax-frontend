import { Movie } from './movie';
export interface ActorAll {
    IdCast: string;
    FirstName: string;
    LastName: string;
    Movie?: Movie[];
}
