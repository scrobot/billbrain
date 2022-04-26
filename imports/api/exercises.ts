import {Mongo} from "meteor/mongo";

export interface Exercise {
    _id?: string;
    title: string;
    type: Type;
    createdAt: Date;
}

enum Type {
    TRANSLATE, CHOOSE_IMAGE, LISTENING, WRITING
}

export const ExercisesCollection = new Mongo.Collection<Exercise>('exercises');
