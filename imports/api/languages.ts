import {Mongo} from "meteor/mongo";

export interface Languages {
    _id?: string;
    title: string;
    flag: string;
}

export const LanguagesCollection = new Mongo.Collection<Languages>('languages');