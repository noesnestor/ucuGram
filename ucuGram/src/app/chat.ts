import { Message } from "./message";

export interface Chat{
    _id : string;
    messages : Message[];
}