function initializeReceiptPage(data) {
    $('#gridContainer').dxDataGrid({
        dataSource: [data],
        keyExpr: 'Id',
        rtlEnabled: true,
        responsive: true,
        columnHidingEnabled: true,
        filterRow: {
            visible: true
        },
        paging: {
            pageSize: 10,
        },
        focusedRowEnabled: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        showBorders: true,
        headerFilter: {
            visible: true,
        },
        groupPanel: {
            visible: true,
        },
        columns: [
            {
                dataField: "Id",
                caption: "ID",
            },
            {
                dataField: "Date",
                caption: "تاریخ حواله",
            },
            {
                dataField: "Delivery",
                caption: "تحویل",
            },
            {
                dataField: "InvoiceNumber",
                caption: "شماره فاکتور",
            },
            {
                dataField: "Project",
                caption: "پروژه",
            },
            {
                dataField: "Receiving",
                caption: "دریافت شده (رسید ورود به انبار یا حواله خروج از انبار)",
            },
            {
                dataField: "Notes",
                caption: "یادداشت و توضیحات",
            },
            {
                dataField: "DestinationWarehouseCode",
                caption: "کد حواله انتقال",
            },
            {
                dataField: "InvoiceType",
                caption: "نوع فاکتور",
            },
            {
                dataField: "Items",
                caption: "آیتم های موجود",
                cellTemplate: function (container, options) {
                    var content = options.data.Items.map(item => `<div> کد کالا: ${item.ItemCode} ارجاع: ${item.Reference} توضیحات: ${item.Notes}  موجودی: ${item.Quantity}</div>`).join("<br>");
                    $('<div>').html(content).css("white-space", "pre-wrap").appendTo(container);
                }
            },
        ],
    });
}

function initializeReceiptsListPage(data) {
    $('#gridContainer').dxDataGrid({
        dataSource: data,
        keyExpr: 'Number',
        rtlEnabled: true,
        responsive: true,
        columnHidingEnabled: true,
        filterRow: {
            visible: true
        },
        paging: {
            pageSize: 10,
        },
        focusedRowEnabled: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        showBorders: true,
        headerFilter: {
            visible: true,
        },
        groupPanel: {
            visible: true,
        },
    });
}

function initializeReceiptsByIDListPage(data) {
    $('#gridContainer').dxDataGrid({
        dataSource: data,
        keyExpr: 'Number',
        rtlEnabled: true,
        responsive: true,
        columnHidingEnabled: true,
        filterRow: {
            visible: true
        },
        paging: {
            pageSize: 10,
        },
        focusedRowEnabled: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        showBorders: true,
        headerFilter: {
            visible: true,
        },
        groupPanel: {
            visible: true,
        },
        columns: [
            {
                dataField: "Id",
                caption: "ID",
            },
            {
                dataField: "Date",
                caption: "تاریخ حواله",
            },
            {
                dataField: "Delivery",
                caption: "تحویل",
            },
            {
                dataField: "InvoiceNumber",
                caption: "شماره فاکتور",
            },
            {
                dataField: "Project",
                caption: "پروژه",
            },
            {
                dataField: "Receiving",
                caption: "دریافت شده (رسید ورود به انبار یا حواله خروج از انبار)",
            },
            {
                dataField: "Notes",
                caption: "یادداشت و توضیحات",
            },
            {
                dataField: "DestinationWarehouseCode",
                caption: "کد حواله انتقال",
            },
            {
                dataField: "InvoiceType",
                caption: "نوع فاکتور",
            },
            {
                dataField: "Items",
                caption: "آیتم های موجود",
                cellTemplate: function (container, options) {
                    var content = options.data.Items.map(item => `<div> کد کالا: ${item.ItemCode} ارجاع: ${item.Reference} توضیحات: ${item.Notes}  موجودی: ${item.Quantity}</div>`).join("<br>");
                    $('<div>').html(content).css("white-space", "pre-wrap").appendTo(container);
                }
            },
        ],
    });
}

function initializeDiscountItemPage(data) {
    $('#gridContainer').dxDataGrid({
        dataSource: data,
        keyExpr: 'Id',
        rtlEnabled: true,
        responsive: true,
        columnHidingEnabled: true,
        filterRow: {
            visible: true
        },
        paging: {
            pageSize: 10,
        },
        focusedRowEnabled: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        showBorders: true,
        headerFilter: {
            visible: true,
        },
        groupPanel: {
            visible: true,
        },
    });
}

function initializeBankTransferPage(data, key = 'Id') {
    if(key === 'Number') data = [data]
    $('#gridContainer').dxDataGrid({
        dataSource: data,
        keyExpr: key,
        rtlEnabled: true,
        responsive: true,
        columnHidingEnabled: true,
        filterRow: {
            visible: true
        },
        paging: {
            pageSize: 10,
        },
        focusedRowEnabled: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        showBorders: true,
        headerFilter: {
            visible: true,
        },
        groupPanel: {
            visible: true,
        },
    });
}

function initializeGetQuantityPage(data) {
    $('#gridContainer').dxDataGrid({
        dataSource: data,
        keyExpr: 'Code',
        rtlEnabled: true,
        responsive: true,
        columnHidingEnabled: true,
        filterRow: {
            visible: true
        },
        paging: {
            pageSize: 10,
        },
        focusedRowEnabled: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        showBorders: true,
        headerFilter: {
            visible: true,
        },
        groupPanel: {
            visible: true,
        },
    });
}

function initializeReportItemPage(data) {
    $('#gridContainer').dxDataGrid({
        dataSource: data,
        keyExpr: 'DocumentNumber',
        rtlEnabled: true,
        responsive: true,
        columnHidingEnabled: true,
        filterRow: {
            visible: true
        },
        paging: {
            pageSize: 10,
        },
        focusedRowEnabled: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        showBorders: true,
        headerFilter: {
            visible: true,
        },
        groupPanel: {
            visible: true,
        },
    });
}