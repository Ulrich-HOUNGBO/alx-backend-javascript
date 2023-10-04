import { RowID, RowElement } from './interface';

declare module 'crud' {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
    const CRUD: {
        insertRow(row: RowElement): RowID;
        deleteRow(rowId: RowID): void;
        updateRow(rowId: RowID, row: RowElement): RowID;
    };
    export default CRUD;
}
