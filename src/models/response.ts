import {Character} from "./character";

export interface Response {
    count: number,
    next: string,
    previous: null | string,
    results: Array<Character>
}
