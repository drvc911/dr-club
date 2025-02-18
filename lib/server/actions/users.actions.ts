"use server";

import {sendTransactionalEmail} from "@/lib/server/actions/loops.actions";

export interface NewSignUp {
    email: string,
    fullName: string,
    fullPlayerName: string,
    phoneNumber: string,
    dob: string,
    team: string,
    preferredPosition: string,
    experience: string
}

export const signNewUser = async (data: NewSignUp) => {
    return Promise.all([
        sendTransactionalEmail('cm79mlduc022v11s25ipop8tg', 'drvc@disciplinerift.com', data),
        sendTransactionalEmail('cm79mw7bj04hfg9036ct610ft', data.email)
    ])
}