export interface Task {
    _id? : string;
    id: number;
    auteur: string,
    matiere: string,
    nom: string;
    dateDeRendu: Date;
    rendu?:boolean;
    reminder?:boolean;
    note?: number,
    remarque?: string,
    photoProf?: string
}