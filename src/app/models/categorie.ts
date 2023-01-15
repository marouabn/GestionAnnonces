import { Annonce } from './annonce';
import { Scategorie } from './scategorie';

export interface Categorie {
    id: string;
    nom: string;
    avatar: string;
    datecreationCat: string;
    dateupdateCat: string;
    description: string;
    annonces: Annonce[];
    scategoris: Scategorie[];

}
