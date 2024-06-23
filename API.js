const BASE_URL = 'https://api.hesabfa.com/v1/';

async function apiRequest(method, data) {
    let url = BASE_URL + method;
    let postData = {
        apiKey: '#',
        loginToken: '#',
        ...data
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });
    const jsonData = await response.json();
    return jsonData;
}

//Warehouse

async function getWarehouseReceipts(data) {
    let method = 'warehouse/getReceipts';
    let result = await apiRequest(method, data);
    return (result);
}

async function getWarehouseReceipt(data) {
    let method = 'warehouse/get';
    let result = await apiRequest(method, data);
    return (result);
}

async function getWarehouseReceiptById(data) {
    let method = 'warehouse/getById';
    let result = await apiRequest(method, data);
    return (result);
}

async function warehouseSaveWarehouseReceipt(data) {
    let method = 'warehouse/save';
    let result = await apiRequest(method, data);
    return (result);
}

async function deleteWarehouseReceipt(data) {
    let method = 'warehouse/delete';
    let result = await apiRequest(method, data);
    return (result);
}

//Contacts

async function getContact(data) {
    let method = 'contact/get';
    let result = await apiRequest(method, data);
    return (result);
}

async function getContactById(data) {
    let method = 'contact/getById';
    let result = await apiRequest(method, data);
    return (result);
}

async function getContacts(data) {
    let method = 'contact/getcontacts';
    let result = await apiRequest(method, data);
    return (result);
}

async function saveContact(data) {
    let method = 'contact/save';
    let result = await apiRequest(method, data);
    return (result);
}

async function deleteContact(data) {
    let method = 'contact/delete';
    let result = await apiRequest(method, data);
    return (result);
}

async function getContactLink(data) {
    let method = 'contact/getContactLink';
    let result = await apiRequest(method, data);
    return (result);
}

//Items

async function getItem(data) {
    let method = 'item/get';
    let result = await apiRequest(method, data);
    return (result);
}

async function getItemByBarcode(data) {
    let method = 'item/getByBarcode';
    let result = await apiRequest(method, data);
    return (result);
}

async function getItemById(data) {
    let method = 'item/getById';
    let result = await apiRequest(method, data);
    return (result);
}

async function getItems(data) {
    let method = 'item/getitems';
    let result = await apiRequest(method, data);
    return (result);
}

async function saveItem(data) {
    let method = 'item/save';
    let result = await apiRequest(method, data);
    return (result);
}

async function deleteItem(data) {
    let method = 'item/delete';
    let result = await apiRequest(method, data);
    return (result);
}

async function getItemQuantity() {
    let method = 'item/GetQuantity';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function updateItemOpeningQuantity(data) {
    let method = 'item/UpdateOpeningQuantity';
    let result = await apiRequest(method, data);
    return (result);
}

// Invoices

async function getInvoice(data) {
    let method = 'invoice/get';
    let result = await apiRequest(method, data);
    return (result);
}

async function getInvoiceById(data) {
    let method = 'invoice/getById';
    let result = await apiRequest(method, data);
    return (result);
}

async function getInvoices(queryInfo, type) {
    let method = 'invoice/getinvoices';
    let data = {
        'queryInfo': queryInfo,
        'type': type
    }
    let result = await apiRequest(method, data);
    return (result);
}

async function saveInvoice(data) {
    let method = 'invoice/save';
    let result = await apiRequest(method, data);
    return (result);
}

async function deleteInvoice(data) {
    let method = 'invoice/delete';
    let result = await apiRequest(method, data);
    return (result);
}

async function savePayment(data) {
    let method = 'invoice/savepayment';
    let result = await apiRequest(method, data);
    return (result);
}

async function getOnlineInvoiceURL(data) {
    let method = 'invoice/getonlineinvoiceurl';
    let result = await apiRequest(method, data);
    return (result);
}

async function saveWarehouseReceipt(data) {
    let method = 'invoice/SaveWarehouseReceipt';
    let result = await apiRequest(method, data);
    return (result);
}

// ReceivePay Methods

async function getReceipt(data) {
    let method = 'receipt/get';
    let result = await apiRequest(method, data);
    return (result);
}

async function getReceiptByID(data) {
    let method = 'receipt/GetById';
    let result = await apiRequest(method, data);
    return (result);
}

async function getReceipts(data) {
    let method = 'receipt/getReceipts';
    let result = await apiRequest(method, data);
    return (result);
}

async function saveReceipt(data) {
    let method = 'receipt/save';
    let result = await apiRequest(method, data);
    return (result);
}

async function deleteReceipt(data) {
    let method = 'receipt/delete';
    let result = await apiRequest(method, data);
    return (result);
}

// Accounting

async function getDocument(data) {
    let method = 'document/get';
    let result = await apiRequest(method, data);
    return (result);
}

async function saveDocument(data) {
    let method = 'document/save';
    let result = await apiRequest(method, data);
    return (result);
}

async function getDocuments(data) {
    let method = 'document/getdocuments';
    let result = await apiRequest(method, data);
    return (result);
}

async function deleteDocument(data) {
    let method = 'document/delete';
    let result = await apiRequest(method, data);
    return (result);
}

// Settings

async function getChanges(data) {
    let method = 'setting/GetChanges';
    let result = await apiRequest(method, data);
    return (result);
}

async function getFiscalYears() {
    let method = 'setting/GetFiscalYears';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getBanks() {
    let method = 'setting/GetBanks';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getCashes() {
    let method = 'setting/GetCashes';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getPettyCashes() {
    let method = 'setting/GetPettyCashes';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getCurrency() {
    let method = 'setting/GetCurrency';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getWarehouses() {
    let method = 'setting/GetWarehouses';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getProductCategories() {
    let method = 'setting/GetProductCategories';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getServiceCategories() {
    let method = 'setting/GetServiceCategories';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getContactCategories() {
    let method = 'setting/GetContactCategories';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getFiscalYear() {
    let method = 'setting/GetFiscalYear';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getProjects() {
    let method = 'setting/GetProjects';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getSalesmen() {
    let method = 'setting/GetSalesmen';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getCurrencyTable() {
    let method = 'setting/GetCurrencyTable';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function setCurrencyTable(data) {
    let method = 'setting/SetCurrencyTable';
    let result = await apiRequest(method, data);
    return (result);
}

async function getAccounts() {
    let method = 'setting/GetAccounts';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

async function getBusinessInfo() {
    let method = 'setting/GetBusinessInfo';
    let data = '';
    let result = await apiRequest(method, data);
    return (result);
}

// Reports

async function balancesheet(data) {
    let method = 'report/balancesheet';
    let result = await apiRequest(method, data);
    return (result);
}

async function reportDebtorscreditors(data) {
    let method = 'report/debtorscreditors';
    let result = await apiRequest(method, data);
    return (result);
}

async function reportInventory(data) {
    let method = 'report/inventory';
    let result = await apiRequest(method, data);
    return (result);
}

async function profitAndLoss(data) {
    let method = 'report/profitandlossstatement';
    let result = await apiRequest(method, data);
    return (result);
}

async function trialBalance(data) {
    let method = 'report/trialbalance';
    let result = await apiRequest(method, data);
    return (result);
}

async function trialBalanceItems(data) {
    let method = 'report/trialbalanceitems';
    let result = await apiRequest(method, data);
    return (result);
}

async function getDiscountItem(data) {
    let method = 'discountitem/get';
    return await apiRequest(method, data);
}

async function getDiscountItemByID(data) {
    let method = 'discountitem/getById';
    return await apiRequest(method, data);
}

async function getDiscountItems(data) {
    let method = 'discountitem/getItems';
    return await apiRequest(method, data);
}

async function saveDiscountItem(data) {
    let method = 'discountitem/save';
    return await apiRequest(method, data);
}

async function deleteDiscountItem(data) {
    let method = 'discountitem/delete';
    return await apiRequest(method, data);
}

async function reportBank(data) {
    let method = 'report/bank';
    return await apiRequest(method, data);
}

async function reportCash(data) {
    let method = 'report/cash';
    return await apiRequest(method, data);
}

async function reportPettyCash(data) {
    let method = 'report/pettyCash';
    return await apiRequest(method, data);
}

async function reportJournal(data) {
    let method = 'report/journal';
    return await apiRequest(method, data);
}