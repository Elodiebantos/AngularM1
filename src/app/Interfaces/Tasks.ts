export interface Task {
    _id? : string;
    id: number;
    nom: string;
    DateDeRendu: Date;
    rendu?:boolean;
    reminder?:boolean;
}