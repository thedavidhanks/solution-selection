import  { storageData } from './data.js';

// Generates a table to compare attributes of two or more solutions.
//      newRowData - Array of objects
const createCompareTable = (newRowData) => {
    const compareHeaderRow = $('#comparison-container thead tr');
    const compareDescRow = $('tbody #compare-desc');
    const compareExampleRow = $('tbody #compare-example');
    const compareCostRow = $('tbody #compare-cost');
    const compareCapacityRow = $('tbody #compare-capacity');
    const compareAccessRow = $('tbody #compare-access');
    const compareDataRow = $('tbody #compare-data');
    const compareDurabilityRow = $('tbody #compare-dura');
    
    //reset table
    compareHeaderRow.empty();
    compareDescRow.empty();
    compareExampleRow.empty();
    compareCostRow.empty();
    compareCapacityRow.empty();
    compareAccessRow.empty();
    compareDataRow.empty();
    compareDurabilityRow.empty();
    $("<th>Service</th>").appendTo(compareHeaderRow);
    $("<th>Description</th>").appendTo(compareDescRow);
    $("<th>Example</th>").appendTo(compareExampleRow);
    $("<th>Cost</th>").appendTo(compareCostRow);
    $("<th>Capacity</th>").appendTo(compareCapacityRow);
    $("<th>Access and Collaboration</th>").appendTo(compareAccessRow);
    $("<th>Data Allowed</th>").appendTo(compareDataRow);
    $("<th>Durability</th>").appendTo(compareDurabilityRow);

    //add new data
    newRowData.forEach(row =>{
        let newHead = $("<th></th>").appendTo(compareHeaderRow);
        newHead.html(row['Service']);

        $("<td></td>").appendTo(compareDescRow).html(row['Description']);
        $("<td></td>").appendTo(compareExampleRow).html(row['Example Use']);
        $("<td></td>").appendTo(compareCostRow).html(row['Cost']);
        $("<td></td>").appendTo(compareCapacityRow).html(row['Capacity']);
        $("<td></td>").appendTo(compareAccessRow).html(row['Access and Collaboration']);
        $("<td></td>").appendTo(compareDataRow).html(row['Data Allowed']);
        $("<td></td>").appendTo(compareDurabilityRow).html(row['Durability']);
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
                            },
                            {
                                label: 'Sharing/publication',
                                value: (rowData, rowIndex) => rowData['Sharing/publication'] === true
                            }
                        ],
                        combiner: 'and',
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
                            },
                            {
                                label: 'P3 - Export-controlled data',
                                value: (rowData, rowIndex) =>  rowData['P3 - Export-controlled data'] === true
                            },
                            {
                                label: 'P4 - Clinical (health) data',
                                value: (rowData, rowIndex) =>  rowData['P4'] === true
                            },
                            {
                                label: 'Other P3/P4 (restricted data)',
                                value: (rowData, rowIndex) =>  rowData['Other'] === true
                            }
                        ],
                        combiner: 'and'
                    }   
                ],
                controls: false,
                
            },
            dom: '<"container"<"row"<"col-12 col-md-3"P><"col-12 col-md-9"rtp>>>',
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
    // $("div.dtsp-verticalPanes").append(table.searchPanes.container());                
    
    //Switch between table and cards
    $("#card-toggler").click(()=>{
        if($("#myTable").hasClass('cards')) $("#myTable").removeClass('cards');
        else $("#myTable").addClass('cards');
    })
} );