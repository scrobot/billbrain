import {Mongo} from "meteor/mongo";

export interface Dictionary {
    _id?: string;
    user: string;
    lexicons: Lexicon[];
    createdAt: Date;
}

export interface Lexicon {
    source: string;
    target: string;
    comment: string;
    audio_link?: string;
    image?: string;
}

export const DictionariesCollection = new Mongo.Collection<Dictionary>('dictionaries');