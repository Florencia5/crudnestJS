"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsController = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const fs = require("fs");
let DogsController = exports.DogsController = class DogsController {
    constructor() {
        this.dogs = [];
        this.dataFilePath = (0, path_1.join)(__dirname, '../data/dogs.json');
        this.loadData();
    }
    saveData() {
        fs.writeFileSync(this.dataFilePath, JSON.stringify(this.dogs, null, 2));
    }
    loadData() {
        try {
            const data = fs.readFileSync(this.dataFilePath, 'utf-8');
            this.dogs = JSON.parse(data);
        }
        catch (error) {
            this.dogs = [];
        }
    }
    getDogs(res) {
        res.send(this.dogs);
    }
    createDog(dog) {
        this.dogs.push(dog);
        this.saveData();
        return 'Nuevo registro de perro creado';
    }
    updateDog(id, updatedDog) {
        const index = this.dogs.findIndex(dog => dog.id === id);
        if (index !== -1) {
            this.dogs[index] = updatedDog;
            this.saveData();
            return 'Registro de perro modificado';
        }
        else {
            return 'Registro de perro no encontrado';
        }
    }
    deleteDog(id) {
        const idNumber = parseInt(id, 10);
        const index = this.dogs.findIndex(dog => dog.id === idNumber);
        if (index !== -1) {
            this.dogs.splice(index, 1);
            this.saveData();
            return 'Registro de perro eliminado';
        }
        else {
            return 'Registro de perro no encontrado';
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "getDogs", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "createDog", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "updateDog", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "deleteDog", null);
exports.DogsController = DogsController = __decorate([
    (0, common_1.Controller)('dogs'),
    __metadata("design:paramtypes", [])
], DogsController);
//# sourceMappingURL=app.controller.js.map