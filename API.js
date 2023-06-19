const BASE_URL = 'https://api.hesabfa.com/v1/';

async function apiRequest(method, data) {
    let url = BASE_URL + method;
    let postData = {
        apiKey: 'QZAIlbJQnCGENqB1lV0Ygx4rTIfln1yg',
        loginToken: 'af014d3ed841a5d23bfd378670e2fc7e2e15d42b606f62e6a719be090b501343f45531c55f640319dd131dd9649c3709',
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

//Contacts Methods

async function getContact(data) {
    let method = 'contact/get';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getContactById(data) {
    let method = 'contact/getById';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getContacts(data) {
    let method = 'contact/getcontacts';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function saveContact(data) {
    let method = 'contact/save';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function deleteContact(data) {
    let method = 'contact/delete';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getContactLink(data) {
    let method = 'contact/getContactLink';
    let result = await apiRequest(method, data);
    return (result.Result);
}

//Items Methods

async function getItem(data) {
    let method = 'item/get';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getItemByBarcode(data) {
    let method = 'item/getByBarcode';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getItemById(data) {
    let method = 'item/getById';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getItems(data) {
    let method = 'item/getitems';
    let result = await apiRequest(method, data);
    return (result.Result.List);
}

async function saveItem(data) {
    let method = 'item/save';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function deleteItem(data) {
    let method = 'item/delete';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getItemQuantity() {
    let method = 'item/GetQuantity';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function UpdateItemOpeningQuantity(data) {
    let method = 'item/UpdateOpeningQuantity';
    let result = await apiRequest(method, data);
    return (result.Result);
}

// Invoices Methods

async function getInvoice(data) {
    let method = 'invoice/get';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getInvoiceById(data) {
    let method = 'invoice/getById';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getInvoices(queryInfo, type) {
    let method = 'invoice/getinvoices';
    let data = {
        'queryInfo': queryInfo,
        'type': type
    }
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function saveInvoice(data) {
    let method = 'invoice/save';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function deleteInvoice(data) {
    let method = 'invoice/delete';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function savePayment(data) {
    let method = 'invoice/savepayment';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getOnlineInvoiceURL(data) {
    let method = 'invoice/getonlineinvoiceurl';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function SaveWarehouseReceipt(data) {
    let method = 'invoice/SaveWarehouseReceipt';
    let result = await apiRequest(method, data);
    return (result.Result);
}

// ReceivePay Methods

async function getReceipt(data) {
    let method = 'receipt/get';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getReceipts(data) {
    let method = 'receipt/getReceipts';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function saveReceipt(data) {
    let method = 'receipt/save';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function deleteReceipt(data) {
    let method = 'receipt/delete';
    let result = await apiRequest(method, data);
    return (result.Result);
}

// Accounting Methods

async function getDocument(data) {
    let method = 'document/get';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function saveDocument(data) {
    let method = 'document/save';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getDocuments(data) {
    let method = 'document/getdocuments';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function deleteDocument(data) {
    let method = 'document/delete';
    let result = await apiRequest(method, data);
    return (result.Result);
}

// Other Methods

async function getChanges(data) {
    let method = 'setting/GetChanges';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getFiscalYears() {
    let method = 'setting/GetFiscalYears';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getBanks() {
    let method = 'setting/GetBanks';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getCashes() {
    let method = 'setting/GetCashes';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getPettyCashes() {
    let method = 'setting/GetPettyCashes';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getCurrency() {
    let method = 'setting/GetCurrency';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getWarehouses() {
    let method = 'setting/GetWarehouses';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getProductCategories() {
    let method = 'setting/GetProductCategories';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getServiceCategories(data) {
    let method = 'setting/GetServiceCategories';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getContactCategories(data) {
    let method = 'setting/GetContactCategories';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getFiscalYear() {
    let method = 'setting/GetFiscalYear';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getProjects() {
    let method = 'setting/GetProjects';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getSalesmen() {
    let method = 'setting/GetSalesmen';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getCurrencyTable() {
    let method = 'setting/GetCurrencyTable';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function setCurrencyTable(data) {
    let method = 'setting/SetCurrencyTable';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getAccounts() {
    let method = 'setting/GetAccounts';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function getBusinessInfo() {
    let method = 'setting/GetBusinessInfo';
    let data = '';
    let result = await apiRequest(method, data);
    return (result.Result);
}

// Reports Methods

async function balancesheet(data) {
    let method = 'report/balancesheet';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function reportDebtorscreditors(data) {
    let method = 'report/debtorscreditors';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function reportInventory(data) {
    let method = 'report/inventory';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function profitAndLoss(data) {
    let method = 'report/profitandlossstatement';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function trialBalance(data) {
    let method = 'report/trialbalance';
    let result = await apiRequest(method, data);
    return (result.Result);
}

async function trialBalanceItems(data) {
    let method = 'report/trialbalanceitems';
    let result = await apiRequest(method, data);
    return (result.Result);
}