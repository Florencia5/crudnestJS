import { Controller, Get, Res, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import * as fs from 'fs';

@Controller('dogs')
export class DogsController {
  private dogs = []; 
  private dataFilePath = join(__dirname, '../data/dogs.json'); 

  constructor() {
    this.loadData();
  }

  private saveData() {
    fs.writeFileSync(this.dataFilePath, JSON.stringify(this.dogs, null, 2));
  }

  private loadData() {
    try {
      const data = fs.readFileSync(this.dataFilePath, 'utf-8');
      this.dogs = JSON.parse(data);
    } catch (error) {
      this.dogs = [];
    }
  }

  @Get()
  getDogs(@Res() res: Response) {
    res.send(this.dogs);
  }

  @Post()
  createDog(@Body() dog) {
    this.dogs.push(dog);
    this.saveData(); 
    return 'Nuevo registro de perro creado';
  }

  @Put(':id')
  updateDog(@Param('id') id, @Body() updatedDog) {
    const index = this.dogs.findIndex(dog => dog.id === id);
    if (index !== -1) {
      this.dogs[index] = updatedDog;
      this.saveData(); 
      return 'Registro de perro modificado';
    } else {
      return 'Registro de perro no encontrado';
    }
  }

  @Delete(':id')
  deleteDog(@Param('id') id: string) {
    const idNumber = parseInt(id, 10); 
    const index = this.dogs.findIndex(dog => dog.id === idNumber);
    if (index !== -1) {
      this.dogs.splice(index, 1);
      this.saveData();
      return 'Registro de perro eliminado';
    } else {
      return 'Registro de perro no encontrado';
    }
  }  
}
