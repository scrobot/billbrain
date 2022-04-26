import {Mongo} from "meteor/mongo";
import {Exercise} from "/imports/api/exercises";

export interface TaskSet {
    _id?: string;
    user: string;
    dictionary_id: string;
    questions: Question[];
    total: number;
    current: number;
}

export interface Question {
    exercise: Exercise;
    expected_answer: string;
    user_answer?: string;
}

export const TaskSetsCollection = new Mongo.Collection<TaskSet>('task_sets');