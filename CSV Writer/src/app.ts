import { createNewColArea } from "./createColumns";
import { createTable } from './createCsv';

const centerScreen = document.getElementById('centerScreen') as HTMLDivElement;
const columnList = [] as string[];
const changeState = (): void => {
    centerScreen.innerHTML = '';
    centerScreen.append(createTable(columnList));
}

window.onload = () => {
    centerScreen.append(createNewColArea(columnList, changeState));
}