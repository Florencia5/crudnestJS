import { Response } from 'express';
export declare class DogsController {
    private dogs;
    private dataFilePath;
    constructor();
    private saveData;
    private loadData;
    getDogs(res: Response): void;
    createDog(dog: any): string;
    updateDog(id: any, updatedDog: any): "Registro de perro modificado" | "Registro de perro no encontrado";
    deleteDog(id: string): "Registro de perro no encontrado" | "Registro de perro eliminado";
}
