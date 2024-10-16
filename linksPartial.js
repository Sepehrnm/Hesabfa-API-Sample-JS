var partialHtml = `
    <link rel="stylesheet" href="../style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    <link rel="icon" href="../Assets/hesabfaIcon.png">
    <link href="../Assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="../Assets/bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="../Assets/bootstrap/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
    
    <nav>
    <ul>
        <li>
            <img style="width: 40px;height: 40px" src="../Assets/hesabfaIcon.png" alt="hesabfaIcon">
            <img style="width: 70px;height: 60px" src="../Assets/hesabfa-logo.png" alt="logo">
        </li>

        <li class="home-list">
            <a href="../index.html">خانه</a>
        </li>

        <li class="home-list">
            <a href="../errors.html">جدول کدهای خطا</a>
        </li>

        <li class="dropdown">
            <button class="dropbtn">متد های کالاها و خدمات</button>
            <div class="dropdown-content">
                <a href="../Items/getItem.html">دریافت</a>
                <a href="../Items/saveItem.html">ذخیره</a>
                <a href="../Items/getItemByBarCode.html">دریافت از طریق بارکد</a>
                <a href="../Items/getItemById.html">دریافت از طریق Id</a>
                <a href="../Items/getItems.html">دریافت لیست</a>
                <a href="../Items/deleteItem.html">حذف</a>
                <a href="../Items/getItemQuantity.html">لیست موجودی کالاها</a>
                <a href="../Items/getItemQuantity2.html">لیست موجودی کالاها 2</a>
                <a href="../Items/updateItemOpeningQuantity.html">به روز رسانی موجودی اول دوره کالاها</a>
            </div>
        </li>

        <li class="dropdown">
            <button class="dropbtn">متد های فاکتور</button>
            <div class="dropdown-content">
                <a href="../Invoices/saveInvoice.html">ذخیره فاکتور</a>
                <a href="../Invoices/deleteInvoice.html">حذف فاکتور</a>
                <a href="../Invoices/getInvoices.html">دریافت لیست</a>
                <a href="../Invoices/getInvoice.html">دریافت فاکتور</a>
                <a href="../Invoices/savePayment.html"> ثبت دریافت و پرداخت فاکتور</a>
                <a href="../Invoices/getInvoiceById.html">دریافت از طریق Id</a>
                <a href="../Invoices/getOnlineInvoiceURL.html">دریافت URL فاکتور آنلاین</a>
                <a href="../Invoices/saveWarehouseReceipt.html">ذخیره حواله انبار</a>
            </div>
        </li>

        <li class="dropdown">
            <button class="dropbtn">متد های اشخاص</button>
            <div class="dropdown-content">
                <a href="../Contacts/getContact.html">دریافت</a>
                <a href="../Contacts/getContacts.html">دریافت لیست</a>
                <a href="../Contacts/getContactById.html">دریافت از طریق Id</a>
                <a href="../Contacts/saveContact.html">ذخیره</a>
                <a href="../Contacts/deleteContact.html">حذف</a>
                <a href="../Contacts/getContactLink.html">لینک کارت حساب</a>
            </div>
        </li>

        <li class="dropdown">
            <button class="dropbtn">متد های دریافت و پرداخت</button>
            <div class="dropdown-content">
                <a href="../Receive%20Pay/getReceipts.html">نمایش لیست رسیدهای دریافت یا پرداخت</a>
                <a href="../Receive%20Pay/getReceipt.html">دریافت رسید دریافت یا پرداخت</a>
                <a href="../Receive%20Pay/getByID.html">دریافت رسید دریافت و پرداخت از طریق Id</a>
                <a href="../Receive%20Pay/saveReceipt.html">ذخیره رسید</a>
                <a href="../Receive%20Pay/saveReceipt2.html">ذخیره رسید 2</a>
                <a href="../Receive%20Pay/deleteReceipt.html">حذف رسید</a>
            </div>
        </li>

        <li class="dropdown">
            <button class="dropbtn">متد های رسید و حواله انبار</button>
            <div class="dropdown-content">
                <a href="../Warehouse/getWarehouseReceipt.html">دریافت</a>
                <a href="../Warehouse/getWarehouseReceiptById.html">دریافت از طریق ID</a>
                <a href="../Warehouse/getWarehouseReceipts.html">دریافت لیست</a>
                <a href="../Warehouse/saveWarehouseReceipt.html">ذخیره</a>
                <a href="../Warehouse/deleteWarehouseReceipt.html">حذف</a>
            </div>
        </li>

        <li class="dropdown">
            <button class="dropbtn">متد های ثبت سند حسابداری</button>
            <div class="dropdown-content">
                <a href="../Accounting/getDocument.html">دریافت</a>
                <a href="../Accounting/saveDocument.html">ذخیره</a>
                <a href="../Accounting/getDocuments.html">دریافت لیست</a>
                <a href="../Accounting/deleteDocument.html">حذف سند</a>
            </div>
        </li>

        <li class="dropdown">
            <button class="dropbtn">متدهای اقلام تخفیف دار</button>
            <div class="dropdown-content">
                <a href="../DiscountItem/get.html">دریافت</a>
                <a href="../DiscountItem/getByID.html">دریافت از طریق ID</a>
                <a href="../DiscountItem/getList.html">دریافت لیست</a>
                <a href="../DiscountItem/save.html">ذخیره</a>
                <a href="../DiscountItem/delete.html">حذف</a>
            </div>
        </li>

        <li class="dropdown">
            <button class="dropbtn">متد های انتقال بین بانکی</button>
            <div class="dropdown-content">
                <a href="../BankTransfer/get.html">دریافت</a>
                <a href="../BankTransfer/getList.html">دریافت لیست</a>
                <a href="../BankTransfer/save.html">ذخیره</a>
                <a href="../BankTransfer/delete.html">حذف</a>
            </div>
        </li>

        <li class="dropdown">
            <button class="dropbtn">سایر متدها</button>
            <div class="dropdown-content">
                <a href="../Settings/getChanges.html">دریافت آخرین تغییرات</a>
                <a href="../Settings/getFiscalYears.html">دریافت لیست سال مالی</a>
                <a href="../Settings/getBanks.html">دریافت لیست بانک ها</a>
                <a href="../Settings/getCashes.html">دریافت لیست صندوق ها</a>
                <a href="../Settings/getPettyCashes.html">دریافت لیست تنخواه گردان ها</a>
                <a href="../Settings/getCurrency.html">دریافت واحد پول</a>
                <a href="../Settings/getWarehouses.html">دریافت لیست انبار ها</a>
                <a href="../Settings/getProductCategories.html">دریافت لیست دسته بندی کالا ها</a>
                <a href="../Settings/getServiceCategories.html">دریافت لیست دسته بندی خدمات</a>
                <a href="../Settings/getContactCategories.html">دریافت لیست دسته بندی اشخاص</a>
                <a href="../Settings/getFiscalYear.html">دریافت اطلاعات سال مالی جاری</a>
                <a href="../Settings/getProjects.html">دریافت لیست پروژه ها</a>
                <a href="../Settings/getSalesmen.html">دریافت لیست فروشنده ها</a>
                <a href="../Settings/getCurrencyTable.html">دریافت جدول نرخ برابری ارزها</a>
                <a href="../Settings/setCurrencyTable.html">تنظیم جدول نرخ برابری ارزها</a>
                <a href="../Settings/getAccounts.html">دریافت جدول حساب ها</a>
                <a href="../Settings/getDefaultPriceList.html">دریافت لیست قیمت پیش فرض </a>
                <a href="../Settings/getBusinessInfo.html">دریافت اطلاعات کسب و کار</a>
            </div>
        </li>

        <li class="dropdown">
            <button class="dropbtn">متد های دریافت گزارش</button>
            <div class="dropdown-content">
                <a href="../Reports/balancesheet.html">گزارش ترازنامه</a>
                <a href="../Reports/debtorscreditors.html">گزارش بدهکاران و بستانکاران</a>
                <a href="../Reports/profitAndLossStatement.html"> گزارش صورت سود و زیان</a>
                <a href="../Reports/reportInventory.html">گزارش موجودی کالا</a>
                <a href="../Reports/trialBalance.html">گزارش تراز آزمایشی</a>
                <a href="../Reports/trialBalanceItems.html">گزارش آیتم های تفضیلی تراز آزمایشی</a>
                <a href="../Reports/reportBank.html">گزارش گردش حساب بانک</a>
                <a href="../Reports/reportCash.html">گزارش گردش حساب صندوق</a>
                <a href="../Reports/reportPettyCash.html">گزارش گردش حساب گردان</a>
                <a href="../Reports/reportJournal.html">گزارش روزنامه</a>
            </div>
        </li>
        
        <li class="dropdown">
            <button class="dropbtn">متد های سیستم استعلام</button>
            <div class="dropdown-content">
                <a href="../Inquiries/credit.html">دریافت تعداد توکن باقیمانده</a>
                <a href="../Inquiries/nationalIdentity.html">استعلام کد ملی</a>
                <a href="../Inquiries/checkMobileAndNationalCode.html">تطابق کد ملی و شماره موبایل</a>
                <a href="../Inquiries/checkCardAndNationalCode.html">تطابق شماره کارت و کد ملی</a>
                <a href="../Inquiries/checkIbanAndNationalCode.html">تطابق کدملی و شماره شبا</a>
                <a href="../Inquiries/iban.html">استعلام شماره شبا</a>
                <a href="../Inquiries/card.html">استعلام شماره کارت</a>
                <a href="../Inquiries/cardToIban.html">تبدیل شماره کارت به شبا</a>
                <a href="../Inquiries/accountToIBAN.html">تبدیل شماره حساب به شماره شبا</a>
                <a href="../Inquiries/postalCode.html">استعلام کد پستی</a>
            </div>
        </li>
    </ul>
</nav>
`;
document.getElementById("includedContent").innerHTML = partialHtml;

$(document).ready(() => {
    function init() {
        $('button.dropbtn').on('click', function (e) {
            $(".dropdown-content").slideUp();
            $(this).next('.dropdown-content').stop().slideToggle();

            $('button.dropbtn').removeClass('selected');
            $(this).addClass('selected');
        });
    }

    init();

    var path = window.location.href.substring(window.location.href.lastIndexOf('API') + 4);
    $('a[href="../' + path + '"]').parent().slideDown();
    $('a[href="../' + path + '"]').addClass('selected');
});
