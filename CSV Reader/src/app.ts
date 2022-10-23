const csvForm = document.getElementById('csvForm') as HTMLFormElement;
const csvFile = document.getElementById('csvFile') as HTMLInputElement;
const displayArea = document.getElementById('displayArea') as HTMLDivElement;

let final_vals = [];

csvForm.addEventListener('submit', (e: Event) => {
    // prevent default submit behavior
    e.preventDefault();

    let csvReader = new FileReader();

    const input = csvFile.files[0];

    csvReader.readAsText(input);
});

const generate_table = async (arrayTable: [string[]]): Promise<string> => {
    return `
        <table class="table table-striped">
            <thead>
                ${arrayTable[0].map(val => {
                    return `
                        <th scope="col">${val}</th>
                    `
                }).join('') }
            </thead>
            <tbody>
                ${arrayTable.map((val, index) => {
                    if(index === 0) return;
                    return `
                        <tr>
                            ${val.map(sub_val => {
                                return `
                                    <td>${sub_val}</td>
                                `
                            }).join('')}
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
    `;
}