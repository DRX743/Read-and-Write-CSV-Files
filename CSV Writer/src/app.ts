import { createNewColArea } from "./createColumns";

const centerScreen = document.getElementById('centerScreen') as HTMLDivElement;
const columnList = [] as string[];

window.onload = () => {
    centerScreen.append(createNewColArea(columnList, function() {}));
}