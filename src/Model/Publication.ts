import { Member } from "./Member";

export interface Publication{
    id: number;
    type:string;
    title:string;
    lien:string;
    date:Date;
    sourcepdf:string;
    member:Member;
}