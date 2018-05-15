import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
public lessons = [{
  id: 1,
  topic: 'CSS Optimization',
  date: '20/03/2018',
  lecturer: 'Yuriy Dzhavala',
  isEditable: false
},
{
  id: 2,
  topic: 'CSS frameworks',
  date: '14/03/2018',
  lecturer: 'Yuriy Dzhavala',
  isEditable: false
},
{
  id: 3,
  topic: 'OOP',
  date: '22/03/2018',
  lecturer: 'Mykhaylo Domanskyy',
  isEditable: false
},
{
  id: 4,
  topic: 'Inheritance',
  date: '27/03/2018',
  lecturer: 'Mykhaylo Domanskyy',
  isEditable: false
}];
  constructor() { }
}
export interface ILessons {
  id: number;
  topic: string;
  date: string;
  lecturer: string;
  isEditable: boolean;
}
