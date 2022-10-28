function newColumnFormInput(): HTMLDivElement {
    const containerDiv = document.createElement('div') as HTMLDivElement;
    const subContainerDiv = document.createElement('div') as HTMLDivElement;
    const label = document.createElement('label') as HTMLLabelElement;
    const input = document.createElement('input') as HTMLInputElement;
    const delButton = document.createElement('button') as HTMLButtonElement;

    containerDiv.classList.add('mb-3', 'border', 'border-secondary');
    subContainerDiv.classList.add('m-2');
    label.classList.add('form-label');
    input.classList.add('form-control');
    delButton.classList.add('btn', 'btn-danger', 'mt-2');

    label.innerHTML = "Column Name:";
    delButton.innerHTML = "Delete";

    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Column Name');

    delButton.setAttribute('type', 'button');


    containerDiv.appendChild(subContainerDiv);

    subContainerDiv.appendChild(label);
    subContainerDiv.appendChild(input);
    subContainerDiv.appendChild(delButton);

    delButton.addEventListener('click', (e: Event) => {
        delButton.parentElement.parentElement.remove();
    });

    return containerDiv;
};

function createNewColArea(mainColumnList: string[], returnFunc: () => any): HTMLFormElement {
    const mainForm = document.createElement('form') as HTMLFormElement;
    const mainFieldSet = document.createElement('fieldset') as HTMLFieldSetElement;
    const mainFieldSetLegend = document.createElement('legend') as HTMLLegendElement;
    const newBtnDiv = document.createElement('div') as HTMLDivElement;
    const newBtn = document.createElement('button') as HTMLButtonElement;
    const submitInputDiv = document.createElement('div') as HTMLDivElement;
    const submitInput = document.createElement('input') as HTMLInputElement;

    mainFieldSet.id = "columnGenForm";
    mainFieldSet.id = "newColFieldSet";
    newBtn.id = "newColBtn";
}