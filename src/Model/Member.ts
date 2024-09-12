export interface Member{
id:string;
cin:number;
name:string;
type :"Teacher" |" Student";
cv:string;
created_date:string;
email:string;
password:string;
}
interface Teacher{
    grade:string;
    etablissement:string;
}
interface Student{
    dateinscription:Date;
    diplome:string;
}