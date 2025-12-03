import { httpClient } from "utilities/axios";

export const message = {
    async msg() {
        return await httpClient.get('/');
    }
}