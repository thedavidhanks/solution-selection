import  { storageData } from './data.js';

// Generates a table to compare attributes of two or more solutions.
//      newRowData - Array of objects
const createCompareTable = (newRowData) => {
    const compareHeaderRow = $('#comparison-container thead tr');
    const compareDescRow = $('tbody #compare-desc');
    const compareCapacityRow = $('tbody #compare-capacity');
    
    //reset table
    compareHeaderRow.empty();
    compareDescRow.empty();
    compareCapacityRow.empty();
    $("<th>Service</th>").appendTo(compareHeaderRow);
    $("<th>Description</th>").appendTo(compareDescRow);
    $("<th>Capacity</th>").appendTo(compareCapacityRow);

    //add new data
    newRowData.forEach(row =>{
        //console.log('row data',row);
        let newHead = $("<th></th>").appendTo(compareHeaderRow);
        newHead.html(row['Service']);
        $("<td></td>").appendTo(compareDescRow).html(row['Description']);
        $("<td></td>").appendTo(compareCapacityRow).html(row['Capacity']);
    })
}

$(document).ready( function () {
    let table = $('#myTable').DataTable(
        {
            data: storageData,
            paging: false,
            select: { style: true},
            columns:[
                {data: 'Service'},
                {data: 'Description'},
                {data: 'backups'},
                {data: 'Working Data'},
                {data: 'P1'},
                {data: 'P2'},
                {data: 'P3'},
            ],
            columnDefs:[
                {
                    target: 1,
                    visible: false
                },
                {
                    //backups, Working Data, P1, P2,P3
                    targets: [2,3,4,5,6], 
                    visible: false, 
                    searchable: false, 
                    searchPanes: { show: false}
                },
                /*{ configure just one column
                    //Working Data
                    target: 3, 
                    visible: false, 
                    searchable: false, 
                    searchPanes: { show: false}
                },*/
            ],
            searchPanes: {
                cascadePanes: true,
                //orderable: false,
                layout: 'columns-1',
                panes: [
                    {
                        header: 'Which storage need would you like to explore?',
                        options: [
                            {
                                label: 'Backups',
                                value: (rowData, rowIndex) =>  rowData['backups'] === true
                            },
                            {
                                label: 'Working Data',
                                value: (rowData, rowIndex) =>  rowData['Working Data'] === true
                            }
                        ],
                        combiner: 'and'
                    },
                    {
                        header: 'What is the UC protection level classification of your data?',
                        options: [
                            {
                                label: 'P1 - Public',
                                value: (rowData, rowIndex) =>  rowData['P1'] === true
                            },
                            {
                                label: 'P2 - Internal',
                                value: (rowData, rowIndex) =>  rowData['P2'] === true
                            },
                            {
                                label: 'P3 - Human subject data',
                                value: (rowData, rowIndex) =>  rowData['P3'] === true
                            }
                        ],
                        combiner: 'and'
                    }   
                ],
                controls: false,
                
            },
            dom: '<"dtsp-dataTable"frtip>', // vertically stacked on left '<"dtsp-dataTable"frtip>'
            pageLength: 20
        }
    )
    .on('select', function (e, dt, type, indexes) {
        let newRowData = table.rows({selected: true}).data().toArray()

        $('#raw-data').html(JSON.stringify(newRowData))
        .addClass("alert alert-secondary")
        $('#raw-data-container').removeClass('hidden');
        $('#selected-name').html(newRowData[0].Service);
        $('#selected-description').html(newRowData[0].Description);

        //Setup comparison table
        if(newRowData.length == 1){
            $('#selected-container').removeClass('hidden');
            $('#comparison-container').addClass('hidden');
        }
        else if(newRowData.length > 1){
            $('#selected-container').addClass('hidden');
            $('#comparison-container').removeClass('hidden');
            createCompareTable(newRowData);
        }else{
            $('#selected-container').addClass('hidden');
            $('#comparison-container').addClass('hidden');
        }
    })
    .on('deselect', function () {
        //TODO regenerate comparison table with selected rows
        let newRowData = table.rows({selected: true}).data().toArray()
        if(newRowData.length == 1){
            $('#selected-container').removeClass('hidden');
            $('#comparison-container').addClass('hidden');
        }
        else if(newRowData.length > 1){
            $('#selected-container').addClass('hidden');
            $('#comparison-container').removeClass('hidden');
            createCompareTable(newRowData);
        }else{ //none selected
            $('#selected-container').addClass('hidden');
            $('#comparison-container').addClass('hidden');
            $('#raw-data-container').addClass('hidden');
            $('#raw-data').html('')
            .removeClass("alert alert-secondary")
            $('#selected-name').html('');
            $('#selected-description').html('');
        }
        
    })
    
    table.searchPanes()
    $("div.dtsp-verticalPanes").append(table.searchPanes.container());                
    
    //Switch between table and cards
    $("#card-toggler").click(()=>{
        if($("#myTable").hasClass('cards')) $("#myTable").removeClass('cards');
        else $("#myTable").addClass('cards');
    })
} );