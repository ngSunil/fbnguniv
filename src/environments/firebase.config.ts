import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyATNsOiksAFNpb16uVl0rph04kftHh792c",
    authDomain: "brilliant-heat-7043.firebaseapp.com",
    databaseURL: "https://brilliant-heat-7043.firebaseio.com",
    storageBucket: "brilliant-heat-7043.appspot.com",
    messagingSenderId: "115520029876"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};