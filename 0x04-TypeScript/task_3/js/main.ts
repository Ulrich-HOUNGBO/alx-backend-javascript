/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
// @ts-ignore
import * as CRUD from 'crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
    ...row,
    age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
