const csvForm = document.getElementById('csvForm') as HTMLFormElement;
const csvFile = document.getElementById('csvFile') as HTMLInputElement;
const displayArea = document.getElementById('displayArea') as HTMLDivElement;

let final_vals = [];

csvForm.addEventListener('submit', (e: Event) => {
    // prevent default submit behavior
    e.preventDefault();

    let csvReader = new FileReader();

    const input = csvFile.files[0];

    csvReader.onload = function(evt) {
        const text = evt.target.result;

        if(typeof text === 'string' || text instanceof String) {
            const values = text.split(/[\n]+/);

            values.forEach(val => {
                final_vals.push(val.split(','));
            });

            generate_table(<[string[]]>final_vals).then(result => {
                displayArea.innerHTML = result;

                const th_values = document.getElementsByTagName('th');
                const td_values = document.getElementsByTagName('td');

                const capitilize_table_column = (table_e: HTMLElement) => {
                    table_e.innerHTML = table_e.innerHTML[0].toUpperCase() + table_e.innerHTML.slice(1);
                };

                for(const th_val of th_values) {
                    capitilize_table_column(th_val);
                }
                for(const td_val of td_values) {
                    capitilize_table_column(td_val);
                }
            })
        }
    }

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