import { httpClient } from "utilities/axios";
import { Response } from "../types/Message.types.js";

export const message = {
    async msg(): Promise<Response> {
        return await httpClient.get('/');
    }
}