import {Mongo} from "meteor/mongo";

export interface UserLanguage {
    _id?: string;
    user: string;
    source_language: string;
    target_language: string;
    current_active: boolean;
}

export const UserLanguagesCollection = new Mongo.Collection<UserLanguage>('user_languages');