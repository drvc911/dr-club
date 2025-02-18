"use server";

import {loops} from "@/lib/server/loops";

export const createContact = async (email: string, properties: Record<string, any> = {}) => {
    return await loops.createContact(email);
}

export const sendTransactionalEmail = async (transactionId: string, to: string, props: Record<string, any> = {}) => {
    return await loops.sendTransactionalEmail({
        transactionalId: transactionId,
        email: to,
        dataVariables: props
    });
}