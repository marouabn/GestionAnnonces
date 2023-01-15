import { Annonce } from './annonce';

export interface Scategorie {
    id: string;
    libelle: string;
    description: string;
    categorie: any;
    annonces: Annonce[];
}
