import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';
import {useTracker} from "meteor/react-meteor-data";
import { Meteor } from 'meteor/meteor';
import {LoginForm} from "/imports/ui/LoginForm";

export const App = () => {
    const user = useTracker(() => Meteor.user());

    return (
        <div className="main">
            <h1>Welcome to Bill Brain!</h1>
            {user ?
                <div>
                    <Hello />
                    <Info />
                </div>
                : <LoginForm />
            }
        </div>)
};
