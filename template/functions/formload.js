function loadaccounts_accaccountinfo(activeform,rid){
Ext.define('lmodelaccounts_accaccount', {
    extend: 'Ext.data.Model',
	fields:['accaccount_id','accaccount_name','accountname','syowner','syownerid','opening_balance','closing_balance','credit_limit','nature','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track','balance_type'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_accaccount&acn=rd',
		      update : 'bodysave.php?t=accounts_accaccount&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_accaccount').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_acclosingstockinfo(activeform,rid){
Ext.define('lmodelaccounts_acclosingstock', {
    extend: 'Ext.data.Model',
	fields:['acclosingstock_id','acclosingstock_name','accaccount_id','month_id','nature','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_acclosingstock&acn=rd',
		      update : 'bodysave.php?t=accounts_acclosingstock&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_acclosingstock').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_accountactivityinfo(activeform,rid){
Ext.define('lmodelaccounts_accountactivity', {
    extend: 'Ext.data.Model',
	fields:['accountactivity_id','accountactivity_name','accountscategory_id','accaccount_id','currency_id','amount','transaction_type','transaction_date','naration','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_accountactivity&acn=rd',
		      update : 'bodysave.php?t=accounts_accountactivity&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_accountactivity').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_accountactivitymasterinfo(activeform,rid){
Ext.define('lmodelaccounts_accountactivitymaster', {
    extend: 'Ext.data.Model',
	fields:['accountactivitymaster_id','accountactivitymaster_name','voucher_number','voucher_type','delivery_date','total_quantity','total_amount','grant_total','currency_id','rate','naration','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_accountactivitymaster&acn=rd',
		      update : 'bodysave.php?t=accounts_accountactivitymaster&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_accountactivitymaster').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_accountclosureinfo(activeform,rid){
Ext.define('lmodelaccounts_accountclosure', {
    extend: 'Ext.data.Model',
	fields:['accountclosure_id','accountclosure_name','account_id','athourized_by','closure_reason','closure_date','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_accountclosure&acn=rd',
		      update : 'bodysave.php?t=accounts_accountclosure&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_accountclosure').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_accountscategoryinfo(activeform,rid){
Ext.define('lmodelaccounts_accountscategory', {
    extend: 'Ext.data.Model',
	fields:['accountscategory_id','chartofaccounts_id','accountscategory_name','code_number','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_accountscategory&acn=rd',
		      update : 'bodysave.php?t=accounts_accountscategory&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_accountscategory').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_acsettinginfo(activeform,rid){
Ext.define('lmodelaccounts_acsetting', {
    extend: 'Ext.data.Model',
	fields:['acsetting_id','acsetting_name','acsetting_description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_acsetting&acn=rd',
		      update : 'bodysave.php?t=accounts_acsetting&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_acsetting').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_banktransinfo(activeform,rid){
Ext.define('lmodelaccounts_banktrans', {
    extend: 'Ext.data.Model',
	fields:['banktrans_id','accaccount_id','banktrans_name','voucher_number','check_number','check_date','bankaccount_id','accountscategory_id','currency_id','amount','transaction_type','naration','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_banktrans&acn=rd',
		      update : 'bodysave.php?t=accounts_banktrans&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_banktrans').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_cashtransinfo(activeform,rid){
Ext.define('lmodelaccounts_cashtrans', {
    extend: 'Ext.data.Model',
	fields:['cashtrans_id','accaccount_id','cashtrans_name','vouchernumber','accountscategory_id','currency_id','amount','transaction_type','naration','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track','voucher_number'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_cashtrans&acn=rd',
		      update : 'bodysave.php?t=accounts_cashtrans&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_cashtrans').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_chartofaccountsinfo(activeform,rid){
Ext.define('lmodelaccounts_chartofaccounts', {
    extend: 'Ext.data.Model',
	fields:['chartofaccounts_id','chartofaccounts_name','code_number','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_chartofaccounts&acn=rd',
		      update : 'bodysave.php?t=accounts_chartofaccounts&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_chartofaccounts').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_checkdepositinfo(activeform,rid){
Ext.define('lmodelaccounts_checkdeposit', {
    extend: 'Ext.data.Model',
	fields:['checkdeposit_id','checkdeposit_name','checkregister_id','date_banked','bankaccount_id','date_cleared','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_checkdeposit&acn=rd',
		      update : 'bodysave.php?t=accounts_checkdeposit&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_checkdeposit').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_checkissueinfo(activeform,rid){
Ext.define('lmodelaccounts_checkissue', {
    extend: 'Ext.data.Model',
	fields:['checkissue_id','checkissue_name','checkpayment_id','date_issued','issue_mode','issue_details','issued_by','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_checkissue&acn=rd',
		      update : 'bodysave.php?t=accounts_checkissue&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_checkissue').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_checkissuescheduleinfo(activeform,rid){
Ext.define('lmodelaccounts_checkissueschedule', {
    extend: 'Ext.data.Model',
	fields:['checkissueschedule_id','checkissueschedule_name','checkpayment_id','planned_issuedate','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_checkissueschedule&acn=rd',
		      update : 'bodysave.php?t=accounts_checkissueschedule&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_checkissueschedule').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_checkpaymentinfo(activeform,rid){
Ext.define('lmodelaccounts_checkpayment', {
    extend: 'Ext.data.Model',
	fields:['checkpayment_id','checkpayment_name','account_id','bankaccount_id','amount','check_date','narration','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_checkpayment&acn=rd',
		      update : 'bodysave.php?t=accounts_checkpayment&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_checkpayment').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_checkregisterinfo(activeform,rid){
Ext.define('lmodelaccounts_checkregister', {
    extend: 'Ext.data.Model',
	fields:['checkregister_id','checkregister_name','accaccount_id','bank','check_details','check_number','check_date','currency_id','amount','transaction_type','naration','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track','branch'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_checkregister&acn=rd',
		      update : 'bodysave.php?t=accounts_checkregister&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_checkregister').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_checkreplacementinfo(activeform,rid){
Ext.define('lmodelaccounts_checkreplacement', {
    extend: 'Ext.data.Model',
	fields:['checkreplacement_id','checkreplacement_name','checkregister_id','date_replaced','replacement_reason','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_checkreplacement&acn=rd',
		      update : 'bodysave.php?t=accounts_checkreplacement&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_checkreplacement').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_checkreplacementoutinfo(activeform,rid){
Ext.define('lmodelaccounts_checkreplacementout', {
    extend: 'Ext.data.Model',
	fields:['checkreplacementout_id','checkreplacementout_name','checkpayment_id','date_replaced','replacement_reason','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_checkreplacementout&acn=rd',
		      update : 'bodysave.php?t=accounts_checkreplacementout&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_checkreplacementout').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_companyaccountinfo(activeform,rid){
Ext.define('lmodelaccounts_companyaccount', {
    extend: 'Ext.data.Model',
	fields:['companyaccount_id','company_id','fine_year','book_from','book_to','business_type','annual_revenue','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_companyaccount&acn=rd',
		      update : 'bodysave.php?t=accounts_companyaccount&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_companyaccount').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_compcashdepositinfo(activeform,rid){
Ext.define('lmodelaccounts_compcashdeposit', {
    extend: 'Ext.data.Model',
	fields:['compcashdeposit_id','compcashdeposit_name','accaccount_id','bankaccount_id','amount','date_banked','transaction_type','naration','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_compcashdeposit&acn=rd',
		      update : 'bodysave.php?t=accounts_compcashdeposit&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_compcashdeposit').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_creditorinfo(activeform,rid){
Ext.define('lmodelaccounts_creditor', {
    extend: 'Ext.data.Model',
	fields:['creditor_id','creditor_name','syowner','syownerid','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_creditor&acn=rd',
		      update : 'bodysave.php?t=accounts_creditor&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_creditor').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_custcashdepositinfo(activeform,rid){
Ext.define('lmodelaccounts_custcashdeposit', {
    extend: 'Ext.data.Model',
	fields:['custcashdeposit_id','custcashdeposit_name','accaccount_id','amount','bankaccount_id','date_banked','transaction_type','naration','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_custcashdeposit&acn=rd',
		      update : 'bodysave.php?t=accounts_custcashdeposit&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_custcashdeposit').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_custcheckdepositinfo(activeform,rid){
Ext.define('lmodelaccounts_custcheckdeposit', {
    extend: 'Ext.data.Model',
	fields:['custcheckdeposit_id','custcheckdeposit_name','custcheckregister_id','date_banked','bankaccount_id','date_cleared','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_custcheckdeposit&acn=rd',
		      update : 'bodysave.php?t=accounts_custcheckdeposit&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_custcheckdeposit').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_custcheckregisterinfo(activeform,rid){
Ext.define('lmodelaccounts_custcheckregister', {
    extend: 'Ext.data.Model',
	fields:['custcheckregister_id','custcheckregister_name','accaccount_id','bankaccount_id','check_details','check_number','check_date','amount','transaction_type','naration','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_custcheckregister&acn=rd',
		      update : 'bodysave.php?t=accounts_custcheckregister&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_custcheckregister').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_invoiceinfo(activeform,rid){
Ext.define('lmodelaccounts_invoice', {
    extend: 'Ext.data.Model',
	fields:['invoice_id','syowner','syownerid','invoice_name','description','invoice_date','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track','accaccount_id'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_invoice&acn=rd',
		      update : 'bodysave.php?t=accounts_invoice&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_invoice').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_invoiceitemsinfo(activeform,rid){
Ext.define('lmodelaccounts_invoiceitems', {
    extend: 'Ext.data.Model',
	fields:['invoiceitems_id','invoice_id','item_id','transaction_date','Qty','description','rate','vat','tablename','credit','debit','enty_type','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_invoiceitems&acn=rd',
		      update : 'bodysave.php?t=accounts_invoiceitems&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_invoiceitems').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_iteminfo(activeform,rid){
Ext.define('lmodelaccounts_item', {
    extend: 'Ext.data.Model',
	fields:['item_id','item_name','item_code','nature','itemgroup_id','itemunit_id','sale_price','purchase_price','self_price','barcode_value','barcode_caption','barfont','startchar','stopchar','mrp_price','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_item&acn=rd',
		      update : 'bodysave.php?t=accounts_item&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_item').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_itemgroupinfo(activeform,rid){
Ext.define('lmodelaccounts_itemgroup', {
    extend: 'Ext.data.Model',
	fields:['itemgroup_id','itemgroup_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_itemgroup&acn=rd',
		      update : 'bodysave.php?t=accounts_itemgroup&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_itemgroup').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_itemunitinfo(activeform,rid){
Ext.define('lmodelaccounts_itemunit', {
    extend: 'Ext.data.Model',
	fields:['itemunit_id','itemunit_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_itemunit&acn=rd',
		      update : 'bodysave.php?t=accounts_itemunit&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_itemunit').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_receiptinfo(activeform,rid){
Ext.define('lmodelaccounts_receipt', {
    extend: 'Ext.data.Model',
	fields:['receipt_id','receipt_name','accaccount_id','receipt_date','trans_ref','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_receipt&acn=rd',
		      update : 'bodysave.php?t=accounts_receipt&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_receipt').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadaccounts_receiptitemsinfo(activeform,rid){
Ext.define('lmodelaccounts_receiptitems', {
    extend: 'Ext.data.Model',
	fields:['receiptitems_id','receipt_id','amount','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=accounts_receiptitems&acn=rd',
		      update : 'bodysave.php?t=accounts_receiptitems&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelaccounts_receiptitems').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_activitystatusinfo(activeform,rid){
Ext.define('lmodeladmin_activitystatus', {
    extend: 'Ext.data.Model',
	fields:['activitystatus_id','activitystatus_name','activitystatus_status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_activitystatus&acn=rd',
		      update : 'bodysave.php?t=admin_activitystatus&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_activitystatus').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_adminuserinfo(activeform,rid){
Ext.define('lmodeladmin_adminuser', {
    extend: 'Ext.data.Model',
	fields:['adminuser_id','person_id','username','password','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_adminuser&acn=rd',
		      update : 'bodysave.php?t=admin_adminuser&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_adminuser').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_aggrigateinfo(activeform,rid){
Ext.define('lmodeladmin_aggrigate', {
    extend: 'Ext.data.Model',
	fields:['aggrigate_id','aggrigate_name','aggrigate_description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_aggrigate&acn=rd',
		      update : 'bodysave.php?t=admin_aggrigate&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_aggrigate').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_alertinfo(activeform,rid){
Ext.define('lmodeladmin_alert', {
    extend: 'Ext.data.Model',
	fields:['alert_id','alert_name','is_active','alert_description','alert_date','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_alert&acn=rd',
		      update : 'bodysave.php?t=admin_alert&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_alert').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_autofillinfo(activeform,rid){
Ext.define('lmodeladmin_autofill', {
    extend: 'Ext.data.Model',
	fields:['autofill_id','autofill_name','primary_tablelist','is_visible','regex','editable','min_len','max_len','caption','fieldname','prefix','surfix','digit_number','fill_combination','inf','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_autofill&acn=rd',
		      update : 'bodysave.php?t=admin_autofill&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_autofill').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_benefitdescrinfo(activeform,rid){
Ext.define('lmodeladmin_benefitdescr', {
    extend: 'Ext.data.Model',
	fields:['benefitdescr_id','benefitdescr_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_benefitdescr&acn=rd',
		      update : 'bodysave.php?t=admin_benefitdescr&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_benefitdescr').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_cmpbenefitsinfo(activeform,rid){
Ext.define('lmodeladmin_cmpbenefits', {
    extend: 'Ext.data.Model',
	fields:['cmpbenefits_id','benefitdescr_id','company_id','dept_id','benefit_value','tax_status','pension_status','leave_status','benefit_reason','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_cmpbenefits&acn=rd',
		      update : 'bodysave.php?t=admin_cmpbenefits&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_cmpbenefits').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_companyinfo(activeform,rid){
Ext.define('lmodeladmin_company', {
    extend: 'Ext.data.Model',
	fields:['company_id','company_name','pin_number','vat_number','incorp_date','building','location_description','street','mobile','tel','fax','postal_address','postal_code','town','email_address2','email_address','website','comment','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_company&acn=rd',
		      update : 'bodysave.php?t=admin_company&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_company').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_companycontactinfo(activeform,rid){
Ext.define('lmodeladmin_companycontact', {
    extend: 'Ext.data.Model',
	fields:['companycontact_id','company_id','person_id','preferred','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_companycontact&acn=rd',
		      update : 'bodysave.php?t=admin_companycontact&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_companycontact').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_companydeptinfo(activeform,rid){
Ext.define('lmodeladmin_companydept', {
    extend: 'Ext.data.Model',
	fields:['companydept_id','company_id','dept_id','location_id','description','Status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_companydept&acn=rd',
		      update : 'bodysave.php?t=admin_companydept&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_companydept').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_companydeptrlnphpinfo(activeform,rid){
Ext.define('lmodeladmin_companydeptrlnphp', {
    extend: 'Ext.data.Model',
	fields:['companydeptrlnphp_id','parent','dept_id','description','Status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_companydeptrlnphp&acn=rd',
		      update : 'bodysave.php?t=admin_companydeptrlnphp&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_companydeptrlnphp').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_compstructtreeinfo(activeform,rid){
Ext.define('lmodeladmin_compstructtree', {
    extend: 'Ext.data.Model',
	fields:['compstructtree_id','company_id','dept_id','location_id','compstructtree_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_compstructtree&acn=rd',
		      update : 'bodysave.php?t=admin_compstructtree&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_compstructtree').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_contactinfo(activeform,rid){
Ext.define('lmodeladmin_contact', {
    extend: 'Ext.data.Model',
	fields:['contact_id','contact_name','postal_address','location_description','street','mobile','tel','fax','email_address2','postal_code','town','building','email_address','website','comment','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_contact&acn=rd',
		      update : 'bodysave.php?t=admin_contact&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_contact').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_contactdetailsinfo(activeform,rid){
Ext.define('lmodeladmin_contactdetails', {
    extend: 'Ext.data.Model',
	fields:['contactdetails_id','syowner','syownerid','email_address','mobile_number','postal_address','physical_address','fax','telephone','preferred','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_contactdetails&acn=rd',
		      update : 'bodysave.php?t=admin_contactdetails&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_contactdetails').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_controllerinfo(activeform,rid){
Ext.define('lmodeladmin_controller', {
    extend: 'Ext.data.Model',
	fields:['controller_id','tablename','groupfolder','displaygroup','displaysubgroup','infsubgroup','showgroup','infgroup','showgroupposition','defaultgrouptable','tablecaption','fieldname','gridwidth','fieldcaption','detailsvisiblepdf','pdfvisible','position','menuposition','colnwidth','dataformat','dispaytype','required','caption_position','control_position','infwidth','infhieght','infpos','infshow','displaysize','primarykeyidentifier','isautoincrement','accessrights','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_controller&acn=rd',
		      update : 'bodysave.php?t=admin_controller&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_controller').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_custominfo(activeform,rid){
Ext.define('lmodeladmin_custom', {
    extend: 'Ext.data.Model',
	fields:['custom_id','tablename','fieldname','stored_value','display_caption','displaytype','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_custom&acn=rd',
		      update : 'bodysave.php?t=admin_custom&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_custom').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_deptinfo(activeform,rid){
Ext.define('lmodeladmin_dept', {
    extend: 'Ext.data.Model',
	fields:['dept_id','dept_name','location_id','description','effective_dt','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_dept&acn=rd',
		      update : 'bodysave.php?t=admin_dept&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_dept').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_displaytypeinfo(activeform,rid){
Ext.define('lmodeladmin_displaytype', {
    extend: 'Ext.data.Model',
	fields:['displaytype_id','displaytype_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_displaytype&acn=rd',
		      update : 'bodysave.php?t=admin_displaytype&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_displaytype').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_docsinfo(activeform,rid){
Ext.define('lmodeladmin_docs', {
    extend: 'Ext.data.Model',
	fields:['docs_id','docs_name','doc_owner','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_docs&acn=rd',
		      update : 'bodysave.php?t=admin_docs&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_docs').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_generaviewinfo(activeform,rid){
Ext.define('lmodeladmin_generaview', {
    extend: 'Ext.data.Model',
	fields:['generaview_id','sview_id','role_id','tblgroup_id','menu_caption','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_generaview&acn=rd',
		      update : 'bodysave.php?t=admin_generaview&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_generaview').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_groupcategoryinfo(activeform,rid){
Ext.define('lmodeladmin_groupcategory', {
    extend: 'Ext.data.Model',
	fields:['groupcategory_id','groupcategory_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_groupcategory&acn=rd',
		      update : 'bodysave.php?t=admin_groupcategory&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_groupcategory').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_minmaxinfo(activeform,rid){
Ext.define('lmodeladmin_minmax', {
    extend: 'Ext.data.Model',
	fields:['minmax_id','tablename','fieldname','minvalue','maxvalue','currentvalue','notificationCreteria','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_minmax&acn=rd',
		      update : 'bodysave.php?t=admin_minmax&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_minmax').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_monthinfo(activeform,rid){
Ext.define('lmodeladmin_month', {
    extend: 'Ext.data.Model',
	fields:['month_id','month_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_month&acn=rd',
		      update : 'bodysave.php?t=admin_month&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_month').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_pcategoryattributeinfo(activeform,rid){
Ext.define('lmodeladmin_pcategoryattribute', {
    extend: 'Ext.data.Model',
	fields:['pcategoryattribute_id','pcategoryattribute_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_pcategoryattribute&acn=rd',
		      update : 'bodysave.php?t=admin_pcategoryattribute&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_pcategoryattribute').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_personinfo(activeform,rid){
Ext.define('lmodeladmin_person', {
    extend: 'Ext.data.Model',
	fields:['person_id','person_name','first_name','middle_name','last_name','idorpassport_number','dob','pin','gender','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_person&acn=rd',
		      update : 'bodysave.php?t=admin_person&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_person').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_personattributeinfo(activeform,rid){
Ext.define('lmodeladmin_personattribute', {
    extend: 'Ext.data.Model',
	fields:['persontypeattribute_id','pcategoryattribute_id','attribute_value','person_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_personattribute&acn=rd',
		      update : 'bodysave.php?t=admin_personattribute&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_personattribute').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_personcategoryattributeinfo(activeform,rid){
Ext.define('lmodeladmin_personcategoryattribute', {
    extend: 'Ext.data.Model',
	fields:['personcategoryattribute_id','pcategoryattribute_id','personttypecategory_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_personcategoryattribute&acn=rd',
		      update : 'bodysave.php?t=admin_personcategoryattribute&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_personcategoryattribute').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_persondeptinfo(activeform,rid){
Ext.define('lmodeladmin_persondept', {
    extend: 'Ext.data.Model',
	fields:['persondept_id','dept_id','person_id','start_dt','end_dt','is_active','comments','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_persondept&acn=rd',
		      update : 'bodysave.php?t=admin_persondept&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_persondept').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_persongroupinfo(activeform,rid){
Ext.define('lmodeladmin_persongroup', {
    extend: 'Ext.data.Model',
	fields:['persongroup_id','persongroup_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_persongroup&acn=rd',
		      update : 'bodysave.php?t=admin_persongroup&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_persongroup').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_persongroupcategoryinfo(activeform,rid){
Ext.define('lmodeladmin_persongroupcategory', {
    extend: 'Ext.data.Model',
	fields:['persongroupcategory_id','persongroupcategory_name','groupcategory_id','persongroup_id','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_persongroupcategory&acn=rd',
		      update : 'bodysave.php?t=admin_persongroupcategory&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_persongroupcategory').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_personpersontypeinfo(activeform,rid){
Ext.define('lmodeladmin_personpersontype', {
    extend: 'Ext.data.Model',
	fields:['personpersontype_id','personpersontype_name','personttypecategory_id','person_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_personpersontype&acn=rd',
		      update : 'bodysave.php?t=admin_personpersontype&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_personpersontype').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_personttypecategoryinfo(activeform,rid){
Ext.define('lmodeladmin_personttypecategory', {
    extend: 'Ext.data.Model',
	fields:['personttypecategory_id','personttypecategory_name','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_personttypecategory&acn=rd',
		      update : 'bodysave.php?t=admin_personttypecategory&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_personttypecategory').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_photoinfo(activeform,rid){
Ext.define('lmodeladmin_photo', {
    extend: 'Ext.data.Model',
	fields:['photo_id','photo_name','source_tablelist','source_ref','prefered','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_photo&acn=rd',
		      update : 'bodysave.php?t=admin_photo&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_photo').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_plevelinfo(activeform,rid){
Ext.define('lmodeladmin_plevel', {
    extend: 'Ext.data.Model',
	fields:['plevel_id','paygradedecr_id','plevel_name','paygrade_salary','per_day_pay','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_plevel&acn=rd',
		      update : 'bodysave.php?t=admin_plevel&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_plevel').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_privilegeinfo(activeform,rid){
Ext.define('lmodeladmin_privilege', {
    extend: 'Ext.data.Model',
	fields:['privilege_id','privilege_name','statestetus_id','section','refid','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_privilege&acn=rd',
		      update : 'bodysave.php?t=admin_privilege&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_privilege').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_rangetypeinfo(activeform,rid){
Ext.define('lmodeladmin_rangetype', {
    extend: 'Ext.data.Model',
	fields:['rangetype_id','rangetype_name','type_description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_rangetype&acn=rd',
		      update : 'bodysave.php?t=admin_rangetype&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_rangetype').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_roleinfo(activeform,rid){
Ext.define('lmodeladmin_role', {
    extend: 'Ext.data.Model',
	fields:['role_id','role_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_role&acn=rd',
		      update : 'bodysave.php?t=admin_role&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_role').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_rolenotificationinfo(activeform,rid){
Ext.define('lmodeladmin_rolenotification', {
    extend: 'Ext.data.Model',
	fields:['rolenotification_id','role_id','rolenotificationevent_id','table_id','notificationtype','notification_order','awaits_activity','success','failure','undetermined','comments','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_rolenotification&acn=rd',
		      update : 'bodysave.php?t=admin_rolenotification&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_rolenotification').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_rolenotificationeventinfo(activeform,rid){
Ext.define('lmodeladmin_rolenotificationevent', {
    extend: 'Ext.data.Model',
	fields:['rolenotificationevent_id','rolenotificationevent_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_rolenotificationevent&acn=rd',
		      update : 'bodysave.php?t=admin_rolenotificationevent&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_rolenotificationevent').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_rolenotificationhistinfo(activeform,rid){
Ext.define('lmodeladmin_rolenotificationhist', {
    extend: 'Ext.data.Model',
	fields:['rolenotificationhist_id','rolenotificationhist_name','rolenotificationevent_id','notification_details','actioned_by','action','primary_tablelist','table_id','recordid','status','comment','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_rolenotificationhist&acn=rd',
		      update : 'bodysave.php?t=admin_rolenotificationhist&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_rolenotificationhist').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_rolepersoninfo(activeform,rid){
Ext.define('lmodeladmin_roleperson', {
    extend: 'Ext.data.Model',
	fields:['roleperson_id','person_id','role_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_roleperson&acn=rd',
		      update : 'bodysave.php?t=admin_roleperson&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_roleperson').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_roleprivilegeinfo(activeform,rid){
Ext.define('lmodeladmin_roleprivilege', {
    extend: 'Ext.data.Model',
	fields:['roleprivilege_id','role_id','privilegeid','activity','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_roleprivilege&acn=rd',
		      update : 'bodysave.php?t=admin_roleprivilege&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_roleprivilege').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_roleroleinfo(activeform,rid){
Ext.define('lmodeladmin_rolerole', {
    extend: 'Ext.data.Model',
	fields:['rolerole_id','role_id','parent_role','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_rolerole&acn=rd',
		      update : 'bodysave.php?t=admin_rolerole&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_rolerole').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_schartinfo(activeform,rid){
Ext.define('lmodeladmin_schart', {
    extend: 'Ext.data.Model',
	fields:['schart_id','charttype_id','schart_name','chart_position','tablelist','fieldlist_xaxis','xaxiscaption','fieldlist_yaxis','aggrigate_id','rangetype_id','range_begin','yaxiscaption','range_end','viewmode_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_schart&acn=rd',
		      update : 'bodysave.php?t=admin_schart&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_schart').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_statementinfo(activeform,rid){
Ext.define('lmodeladmin_statement', {
    extend: 'Ext.data.Model',
	fields:['statement_id','tablename','statement_caption','statement_link','show_identifier','first_only','pdfvisible','position','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_statement&acn=rd',
		      update : 'bodysave.php?t=admin_statement&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_statement').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_statestatusinfo(activeform,rid){
Ext.define('lmodeladmin_statestatus', {
    extend: 'Ext.data.Model',
	fields:['statestatus_id','statestatus_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_statestatus&acn=rd',
		      update : 'bodysave.php?t=admin_statestatus&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_statestatus').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_statestatustblinfo(activeform,rid){
Ext.define('lmodeladmin_statestatustbl', {
    extend: 'Ext.data.Model',
	fields:['statestatustbl_id','statestatus_id','table_list','field_list','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_statestatustbl&acn=rd',
		      update : 'bodysave.php?t=admin_statestatustbl&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_statestatustbl').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_statusinfo(activeform,rid){
Ext.define('lmodeladmin_status', {
    extend: 'Ext.data.Model',
	fields:['statustypestatus_id','statustype_id','status_name','caption','position','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_status&acn=rd',
		      update : 'bodysave.php?t=admin_status&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_status').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_systemvariableinfo(activeform,rid){
Ext.define('lmodeladmin_systemvariable', {
    extend: 'Ext.data.Model',
	fields:['systemvariable_id','systemvariable_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_systemvariable&acn=rd',
		      update : 'bodysave.php?t=admin_systemvariable&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_systemvariable').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_tableinfo(activeform,rid){
Ext.define('lmodeladmin_table', {
    extend: 'Ext.data.Model',
	fields:['table_id','table_name','table_caption','statement_caption','flexcolumn','gridwidth','gridhieght','formheight','orderpos','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_table&acn=rd',
		      update : 'bodysave.php?t=admin_table&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_table').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_timeperiodtypeinfo(activeform,rid){
Ext.define('lmodeladmin_timeperiodtype', {
    extend: 'Ext.data.Model',
	fields:['timeperiodtype_id','timeperiodtype_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_timeperiodtype&acn=rd',
		      update : 'bodysave.php?t=admin_timeperiodtype&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_timeperiodtype').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_userinfo(activeform,rid){
Ext.define('lmodeladmin_user', {
    extend: 'Ext.data.Model',
	fields:['id','employee_id','userid','user_password','UserName','user_priviledge','security_question','security_q_answer','usergroup_id','user_active_status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_user&acn=rd',
		      update : 'bodysave.php?t=admin_user&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_user').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_usergrouproleinfo(activeform,rid){
Ext.define('lmodeladmin_usergrouprole', {
    extend: 'Ext.data.Model',
	fields:['usergrouprole_id','usergroup_id','tablename','previge','start_date','end_date','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_usergrouprole&acn=rd',
		      update : 'bodysave.php?t=admin_usergrouprole&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_usergrouprole').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_versioninfo(activeform,rid){
Ext.define('lmodeladmin_version', {
    extend: 'Ext.data.Model',
	fields:['version_id','version_name','entered_date','modified_date','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_version&acn=rd',
		      update : 'bodysave.php?t=admin_version&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_version').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_viewiconinfo(activeform,rid){
Ext.define('lmodeladmin_viewicon', {
    extend: 'Ext.data.Model',
	fields:['viewicon_id','viewicon_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_viewicon&acn=rd',
		      update : 'bodysave.php?t=admin_viewicon&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_viewicon').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_viewmodeinfo(activeform,rid){
Ext.define('lmodeladmin_viewmode', {
    extend: 'Ext.data.Model',
	fields:['viewmode_id','viewmode_name','viewmode_status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_viewmode&acn=rd',
		      update : 'bodysave.php?t=admin_viewmode&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_viewmode').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadadmin_workticketinfo(activeform,rid){
Ext.define('lmodeladmin_workticket', {
    extend: 'Ext.data.Model',
	fields:['workticket_id','workticket_name','rolenotificationhist_id','person_id','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=admin_workticket&acn=rd',
		      update : 'bodysave.php?t=admin_workticket&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeladmin_workticket').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadasset_assetiteminfo(activeform,rid){
Ext.define('lmodelasset_assetitem', {
    extend: 'Ext.data.Model',
	fields:['assetitem_id','assetitem_name','item_id','itemmaincategory_id','itemcategory_id','location','syowner','syownerid','serial_number','barcode','purchase_date','depreciation_startdate','po_reference','timeperiodtype_id','waranty_period','original_cost','depreciationmethod_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=asset_assetitem&acn=rd',
		      update : 'bodysave.php?t=asset_assetitem&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelasset_assetitem').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadasset_straightlinedepreciationinfo(activeform,rid){
Ext.define('lmodelasset_straightlinedepreciation', {
    extend: 'Ext.data.Model',
	fields:['straightlinedepreciation_id','asset_id','usefu_llife','residual_value','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=asset_straightlinedepreciation&acn=rd',
		      update : 'bodysave.php?t=asset_straightlinedepreciation&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelasset_straightlinedepreciation').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadasset_writtendowndepreciationinfo(activeform,rid){
Ext.define('lmodelasset_writtendowndepreciation', {
    extend: 'Ext.data.Model',
	fields:['writtendowndepreciation_id','asset_id','depreciate_value','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=asset_writtendowndepreciation&acn=rd',
		      update : 'bodysave.php?t=asset_writtendowndepreciation&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelasset_writtendowndepreciation').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadbank_bankaccountinfo(activeform,rid){
Ext.define('lmodelbank_bankaccount', {
    extend: 'Ext.data.Model',
	fields:['bankaccount_id','syowner','syownerid','bankaccount_name','branch','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track','bank','currency_id'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=bank_bankaccount&acn=rd',
		      update : 'bodysave.php?t=bank_bankaccount&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelbank_bankaccount').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadbank_bankstatementinfo(activeform,rid){
Ext.define('lmodelbank_bankstatement', {
    extend: 'Ext.data.Model',
	fields:['bankstatement_id','bankaccount_id','bankstatement_name','from_date','to_date','amount','status','attachment','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=bank_bankstatement&acn=rd',
		      update : 'bodysave.php?t=bank_bankstatement&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelbank_bankstatement').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadbank_bankstmntitemsinfo(activeform,rid){
Ext.define('lmodelbank_bankstmntitems', {
    extend: 'Ext.data.Model',
	fields:['bankstmntitems_id','bankstatement_id','transaction_date','transaction_type','amount','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=bank_bankstmntitems&acn=rd',
		      update : 'bodysave.php?t=bank_bankstmntitems&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelbank_bankstmntitems').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadbank_chequeissueinfo(activeform,rid){
Ext.define('lmodelbank_chequeissue', {
    extend: 'Ext.data.Model',
	fields:['chequeissue_id','syowner','syownerid','chequedetails','chequeissue_name','cheque_number','cheque_date','amount','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=bank_chequeissue&acn=rd',
		      update : 'bodysave.php?t=bank_chequeissue&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelbank_chequeissue').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadcom_batchemailinfo(activeform,rid){
Ext.define('lmodelcom_batchemail', {
    extend: 'Ext.data.Model',
	fields:['batchemail_id','batchemail_name','persongroup_id','subject','body','transaction_date','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=com_batchemail&acn=rd',
		      update : 'bodysave.php?t=com_batchemail&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelcom_batchemail').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadcom_emailsettingsinfo(activeform,rid){
Ext.define('lmodelcom_emailsettings', {
    extend: 'Ext.data.Model',
	fields:['emailsettings_id','email_address','password','port','host','send_from','SMT_secure','SMPT_authentication','preferred','comment','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=com_emailsettings&acn=rd',
		      update : 'bodysave.php?t=com_emailsettings&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelcom_emailsettings').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadcom_sendemailinfo(activeform,rid){
Ext.define('lmodelcom_sendemail', {
    extend: 'Ext.data.Model',
	fields:['sendemail_id','syowner','syownerid','email_subject','email_body','attachments','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=com_sendemail&acn=rd',
		      update : 'bodysave.php?t=com_sendemail&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelcom_sendemail').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_aggrigateinfo(activeform,rid){
Ext.define('lmodeldesigner_aggrigate', {
    extend: 'Ext.data.Model',
	fields:['aggrigate_id','aggrigate_name','aggrigate_description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_aggrigate&acn=rd',
		      update : 'bodysave.php?t=designer_aggrigate&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_aggrigate').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_aggrigatetypeinfo(activeform,rid){
Ext.define('lmodeldesigner_aggrigatetype', {
    extend: 'Ext.data.Model',
	fields:['aggrigatetype_id','aggrigatetype_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_aggrigatetype&acn=rd',
		      update : 'bodysave.php?t=designer_aggrigatetype&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_aggrigatetype').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_categorizeotherinfo(activeform,rid){
Ext.define('lmodeldesigner_categorizeother', {
    extend: 'Ext.data.Model',
	fields:['categorizeother_id','categorizeother_name','othercategory_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_categorizeother&acn=rd',
		      update : 'bodysave.php?t=designer_categorizeother&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_categorizeother').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_charttypeinfo(activeform,rid){
Ext.define('lmodeldesigner_charttype', {
    extend: 'Ext.data.Model',
	fields:['charttype_id','charttype_name','charttype_description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_charttype&acn=rd',
		      update : 'bodysave.php?t=designer_charttype&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_charttype').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_combocustomizationinfo(activeform,rid){
Ext.define('lmodeldesigner_combocustomization', {
    extend: 'Ext.data.Model',
	fields:['combocustomization_id','combo_tablelist','fieldvalue','othervalues','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_combocustomization&acn=rd',
		      update : 'bodysave.php?t=designer_combocustomization&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_combocustomization').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_crdbdeterminantinfo(activeform,rid){
Ext.define('lmodeldesigner_crdbdeterminant', {
    extend: 'Ext.data.Model',
	fields:['crdbdeterminant_id','credit_tablelist','debit_tablelist','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_crdbdeterminant&acn=rd',
		      update : 'bodysave.php?t=designer_crdbdeterminant&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_crdbdeterminant').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_custfuncinfo(activeform,rid){
Ext.define('lmodeldesigner_custfunc', {
    extend: 'Ext.data.Model',
	fields:['custfunc_id','custfunc_name','func_tablelist','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_custfunc&acn=rd',
		      update : 'bodysave.php?t=designer_custfunc&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_custfunc').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_datatypeinfo(activeform,rid){
Ext.define('lmodeldesigner_datatype', {
    extend: 'Ext.data.Model',
	fields:['datatype_id','datatype_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_datatype&acn=rd',
		      update : 'bodysave.php?t=designer_datatype&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_datatype').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_fasttbldesigninfo(activeform,rid){
Ext.define('lmodeldesigner_fasttbldesign', {
    extend: 'Ext.data.Model',
	fields:['fasttbldesign_id','sview_id','primary_tablelist','secondary_tablelist','tabcaption','tab_index','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_fasttbldesign&acn=rd',
		      update : 'bodysave.php?t=designer_fasttbldesign&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_fasttbldesign').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_fieldcustomizationinfo(activeform,rid){
Ext.define('lmodeldesigner_fieldcustomization', {
    extend: 'Ext.data.Model',
	fields:['fieldcustomization_id','field_tablelist','current_fieldname','displaytype_id','caption','is_visible','num_cols','options','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_fieldcustomization&acn=rd',
		      update : 'bodysave.php?t=designer_fieldcustomization&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_fieldcustomization').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_flexcolumninfo(activeform,rid){
Ext.define('lmodeldesigner_flexcolumn', {
    extend: 'Ext.data.Model',
	fields:['flexcolum_id','primary_tablelist','options_tablelist','orderby','default_section','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_flexcolumn&acn=rd',
		      update : 'bodysave.php?t=designer_flexcolumn&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_flexcolumn').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_genderinfo(activeform,rid){
Ext.define('lmodeldesigner_gender', {
    extend: 'Ext.data.Model',
	fields:['gender_id','gender_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_gender&acn=rd',
		      update : 'bodysave.php?t=designer_gender&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_gender').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_grouptblsinfo(activeform,rid){
Ext.define('lmodeldesigner_grouptbls', {
    extend: 'Ext.data.Model',
	fields:['grouptbls_id','tblgroup_id','tblgroup_tablelist','orderpos','table_caption','menu','statement','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_grouptbls&acn=rd',
		      update : 'bodysave.php?t=designer_grouptbls&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_grouptbls').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_othercategoryinfo(activeform,rid){
Ext.define('lmodeldesigner_othercategory', {
    extend: 'Ext.data.Model',
	fields:['othercategory_id','othercategory_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_othercategory&acn=rd',
		      update : 'bodysave.php?t=designer_othercategory&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_othercategory').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_othermenuinfo(activeform,rid){
Ext.define('lmodeldesigner_othermenu', {
    extend: 'Ext.data.Model',
	fields:['othermenu_id','othercategory_id','role_id','tblgroup_id','menu_caption','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_othermenu&acn=rd',
		      update : 'bodysave.php?t=designer_othermenu&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_othermenu').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_preaggrigateinfo(activeform,rid){
Ext.define('lmodeldesigner_preaggrigate', {
    extend: 'Ext.data.Model',
	fields:['preaggrigate_id','preaggrigate_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_preaggrigate&acn=rd',
		      update : 'bodysave.php?t=designer_preaggrigate&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_preaggrigate').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_queryfieldinfo(activeform,rid){
Ext.define('lmodeldesigner_queryfield', {
    extend: 'Ext.data.Model',
	fields:['queryfield_id','reportview_id','report_caption','section_caption','column_width','query','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_queryfield&acn=rd',
		      update : 'bodysave.php?t=designer_queryfield&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_queryfield').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_relationshipinfo(activeform,rid){
Ext.define('lmodeldesigner_relationship', {
    extend: 'Ext.data.Model',
	fields:['relationship_id','relationship_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_relationship&acn=rd',
		      update : 'bodysave.php?t=designer_relationship&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_relationship').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_relationshipstatusinfo(activeform,rid){
Ext.define('lmodeldesigner_relationshipstatus', {
    extend: 'Ext.data.Model',
	fields:['relationshipstatus_id','relationshipstatus_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_relationshipstatus&acn=rd',
		      update : 'bodysave.php?t=designer_relationshipstatus&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_relationshipstatus').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_resultdisplayinfo(activeform,rid){
Ext.define('lmodeldesigner_resultdisplay', {
    extend: 'Ext.data.Model',
	fields:['resultdisplay_id','resultdisplay_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_resultdisplay&acn=rd',
		      update : 'bodysave.php?t=designer_resultdisplay&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_resultdisplay').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_sectparentinfo(activeform,rid){
Ext.define('lmodeldesigner_sectparent', {
    extend: 'Ext.data.Model',
	fields:['sectparent_id','sectparent_tablelist','child_tablelist','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_sectparent&acn=rd',
		      update : 'bodysave.php?t=designer_sectparent&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_sectparent').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_sforminfo(activeform,rid){
Ext.define('lmodeldesigner_sform', {
    extend: 'Ext.data.Model',
	fields:['sform_id','sform_name','active','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_sform&acn=rd',
		      update : 'bodysave.php?t=designer_sform&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_sform').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_sviewinfo(activeform,rid){
Ext.define('lmodeldesigner_sview', {
    extend: 'Ext.data.Model',
	fields:['sview_id','sview_name','context_menu','main_caption','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_sview&acn=rd',
		      update : 'bodysave.php?t=designer_sview&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_sview').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_sysactioninfo(activeform,rid){
Ext.define('lmodeldesigner_sysaction', {
    extend: 'Ext.data.Model',
	fields:['sysaction_id','sysaction_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_sysaction&acn=rd',
		      update : 'bodysave.php?t=designer_sysaction&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_sysaction').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_sysmodulesinfo(activeform,rid){
Ext.define('lmodeldesigner_sysmodules', {
    extend: 'Ext.data.Model',
	fields:['sysmodules_id','sysmodules_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_sysmodules&acn=rd',
		      update : 'bodysave.php?t=designer_sysmodules&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_sysmodules').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_systemclassinfo(activeform,rid){
Ext.define('lmodeldesigner_systemclass', {
    extend: 'Ext.data.Model',
	fields:['systemclass_id','systemclass_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_systemclass&acn=rd',
		      update : 'bodysave.php?t=designer_systemclass&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_systemclass').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_sytableinfo(activeform,rid){
Ext.define('lmodeldesigner_sytable', {
    extend: 'Ext.data.Model',
	fields:['sytable_id','sytable_tablelist','invisible','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_sytable&acn=rd',
		      update : 'bodysave.php?t=designer_sytable&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_sytable').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_tableactioninfo(activeform,rid){
Ext.define('lmodeldesigner_tableaction', {
    extend: 'Ext.data.Model',
	fields:['tableaction_id','primary_tablelist','sysaction_id','resultdisplay_id','activity_stage','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_tableaction&acn=rd',
		      update : 'bodysave.php?t=designer_tableaction&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_tableaction').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_tabmngrinfo(activeform,rid){
Ext.define('lmodeldesigner_tabmngr', {
    extend: 'Ext.data.Model',
	fields:['tabmngr_id','sform_id','sview_id','displaycolumns','collapsible','hideLabel','collapsed','is_primary','tablelist_secondary','secondary_position','display_caption','viewmode_id','viewicon_id','fieldlist_visible','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_tabmngr&acn=rd',
		      update : 'bodysave.php?t=designer_tabmngr&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_tabmngr').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_tbgrplsubgrpinfo(activeform,rid){
Ext.define('lmodeldesigner_tbgrplsubgrp', {
    extend: 'Ext.data.Model',
	fields:['tbgrplsubgrp_id','tblsubgrp_id','tblgroup_id','position','caption','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_tbgrplsubgrp&acn=rd',
		      update : 'bodysave.php?t=designer_tbgrplsubgrp&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_tbgrplsubgrp').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_tblgroupinfo(activeform,rid){
Ext.define('lmodeldesigner_tblgroup', {
    extend: 'Ext.data.Model',
	fields:['tblgroup_id','tblgroup_name','caption','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_tblgroup&acn=rd',
		      update : 'bodysave.php?t=designer_tblgroup&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_tblgroup').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_tblrelationinfo(activeform,rid){
Ext.define('lmodeldesigner_tblrelation', {
    extend: 'Ext.data.Model',
	fields:['tblrelation_id','person_id','personrelated_to','relationship_id','relationshipstatus_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_tblrelation&acn=rd',
		      update : 'bodysave.php?t=designer_tblrelation&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_tblrelation').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_tblsubgrpinfo(activeform,rid){
Ext.define('lmodeldesigner_tblsubgrp', {
    extend: 'Ext.data.Model',
	fields:['tblsubgrp_id','tblsubgrp_name','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_tblsubgrp&acn=rd',
		      update : 'bodysave.php?t=designer_tblsubgrp&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_tblsubgrp').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_tblsummaryinfo(activeform,rid){
Ext.define('lmodeldesigner_tblsummary', {
    extend: 'Ext.data.Model',
	fields:['tblsummary_id','aggrigate_tablelist','aggrigate_field','aggrigate_caption','aggrigatetype_id','preaggrigate_id','is_visible','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_tblsummary&acn=rd',
		      update : 'bodysave.php?t=designer_tblsummary&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_tblsummary').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_viewiconinfo(activeform,rid){
Ext.define('lmodeldesigner_viewicon', {
    extend: 'Ext.data.Model',
	fields:['viewicon_id','viewicon_name','viewicon_image','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_viewicon&acn=rd',
		      update : 'bodysave.php?t=designer_viewicon&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_viewicon').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_viewmodeinfo(activeform,rid){
Ext.define('lmodeldesigner_viewmode', {
    extend: 'Ext.data.Model',
	fields:['viewmode_id','viewmode_name','viewmode_status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_viewmode&acn=rd',
		      update : 'bodysave.php?t=designer_viewmode&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_viewmode').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loaddesigner_viewphotoinfo(activeform,rid){
Ext.define('lmodeldesigner_viewphoto', {
    extend: 'Ext.data.Model',
	fields:['viewphoto_id','sview_id','show_photo','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=designer_viewphoto&acn=rd',
		      update : 'bodysave.php?t=designer_viewphoto&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeldesigner_viewphoto').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_housinglandlordinfo(activeform,rid){
Ext.define('lmodelhousing_housinglandlord', {
    extend: 'Ext.data.Model',
	fields:['housinglandlord_id','housinglandlord_name','person_id','contract_day','month_id','contract_year','term_period','term_months','commission','commission_alternative','excess_amount','payment_day','property','contract_dated','rentperiod_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_housinglandlord&acn=rd',
		      update : 'bodysave.php?t=housing_housinglandlord&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_housinglandlord').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_housinglandlordgrpinfo(activeform,rid){
Ext.define('lmodelhousing_housinglandlordgrp', {
    extend: 'Ext.data.Model',
	fields:['housinglandlordgrp_id','housinglandlordgrp_name','persongroup_id','contract_day','month_id','contract_year','term_period','term_months','commission','commission_alternative','excess_amount','payment_day','property','contract_dated','rentperiod_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_housinglandlordgrp&acn=rd',
		      update : 'bodysave.php?t=housing_housinglandlordgrp&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_housinglandlordgrp').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_housingtenantinfo(activeform,rid){
Ext.define('lmodelhousing_housingtenant', {
    extend: 'Ext.data.Model',
	fields:['housingtenant_id','housingtenant_name','person_id','housinglandlord_id','contract_day','month_id','contract_year','property_description','rent','electricity_water','rentperiod_id','deposit_description','tenancy_period','period_starts','period_startdate','period_months','contract_dated','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track','deposit'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_housingtenant&acn=rd',
		      update : 'bodysave.php?t=housing_housingtenant&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_housingtenant').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_landlordadvanceinfo(activeform,rid){
Ext.define('lmodelhousing_landlordadvance', {
    extend: 'Ext.data.Model',
	fields:['landlordadvance_id','housinglandlord_id','vourcher_number','amount','date_advanced','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_landlordadvance&acn=rd',
		      update : 'bodysave.php?t=housing_landlordadvance&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_landlordadvance').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_nextofkininfo(activeform,rid){
Ext.define('lmodelhousing_nextofkin', {
    extend: 'Ext.data.Model',
	fields:['nextofkin_id','employee_id','landlord_id','nextofkin_name','phoneNumber','dob','gender','transdate','relation','addinfo','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_nextofkin&acn=rd',
		      update : 'bodysave.php?t=housing_nextofkin&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_nextofkin').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_propertyinfo(activeform,rid){
Ext.define('lmodelhousing_property', {
    extend: 'Ext.data.Model',
	fields:['property_id','property_name','Description','Location','Initial_Value','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_property&acn=rd',
		      update : 'bodysave.php?t=housing_property&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_property').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_propertyexpensesinfo(activeform,rid){
Ext.define('lmodelhousing_propertyexpenses', {
    extend: 'Ext.data.Model',
	fields:['propertyexpenses_id','housingtenant_id','expense_description','amount','expense_date','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_propertyexpenses&acn=rd',
		      update : 'bodysave.php?t=housing_propertyexpenses&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_propertyexpenses').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_propertypersoninfo(activeform,rid){
Ext.define('lmodelhousing_propertyperson', {
    extend: 'Ext.data.Model',
	fields:['propertyperson_id','propertyunitcategorytype_id','person_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_propertyperson&acn=rd',
		      update : 'bodysave.php?t=housing_propertyperson&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_propertyperson').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_propertyunitinfo(activeform,rid){
Ext.define('lmodelhousing_propertyunit', {
    extend: 'Ext.data.Model',
	fields:['propertyunit_id','propertyunit_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','uuid','date_voided','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_propertyunit&acn=rd',
		      update : 'bodysave.php?t=housing_propertyunit&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_propertyunit').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_propertyunitcategorytypeinfo(activeform,rid){
Ext.define('lmodelhousing_propertyunitcategorytype', {
    extend: 'Ext.data.Model',
	fields:['propertyunitcategorytype_id','property_id','propertyunitcategorytype_name','timeperiodtype_id','interval','rent','deposit','brooms','water','electricity','toilet','bathroom','kitchen','security','description','vacant','created_by','date_created','changed_by','date_changed','voided','voided_by','uuid','date_voided','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_propertyunitcategorytype&acn=rd',
		      update : 'bodysave.php?t=housing_propertyunitcategorytype&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_propertyunitcategorytype').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_propertyunitcategorytypehistinfo(activeform,rid){
Ext.define('lmodelhousing_propertyunitcategorytypehist', {
    extend: 'Ext.data.Model',
	fields:['propertyunitcategorytypehist_id','property_id','propertyunitcategorytype_id','timeperiodtype_id','interval','rent','deposit','brooms','water','electricity','toilet','bathroom','kitchen','security','description','vacant','created_by','date_created','changed_by','date_changed','voided','voided_by','uuid','date_voided','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_propertyunitcategorytypehist&acn=rd',
		      update : 'bodysave.php?t=housing_propertyunitcategorytypehist&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_propertyunitcategorytypehist').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_rentperiodinfo(activeform,rid){
Ext.define('lmodelhousing_rentperiod', {
    extend: 'Ext.data.Model',
	fields:['rentperiod_id','rentperiod_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_rentperiod&acn=rd',
		      update : 'bodysave.php?t=housing_rentperiod&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_rentperiod').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadhousing_tenancytermnoticeinfo(activeform,rid){
Ext.define('lmodelhousing_tenancytermnotice', {
    extend: 'Ext.data.Model',
	fields:['tenancytermnotice_id','housinglandlord_id','housingtenant_id','termination_reason','termination_date','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=housing_tenancytermnotice&acn=rd',
		      update : 'bodysave.php?t=housing_tenancytermnotice&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelhousing_tenancytermnotice').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_banktransactioninfo(activeform,rid){
Ext.define('lmodeljournals_banktransaction', {
    extend: 'Ext.data.Model',
	fields:['banktransaction_id','syowner','syowner_id','bankaccount_id','amount','transaction_date','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_banktransaction&acn=rd',
		      update : 'bodysave.php?t=journals_banktransaction&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_banktransaction').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_cashbookinfo(activeform,rid){
Ext.define('lmodeljournals_cashbook', {
    extend: 'Ext.data.Model',
	fields:['cashbook_id','syowner','syownerid','credit','debit','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_cashbook&acn=rd',
		      update : 'bodysave.php?t=journals_cashbook&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_cashbook').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_creditnoteinfo(activeform,rid){
Ext.define('lmodeljournals_creditnote', {
    extend: 'Ext.data.Model',
	fields:['creditnote_id','creditnote_name','syowner','syownerid','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_creditnote&acn=rd',
		      update : 'bodysave.php?t=journals_creditnote&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_creditnote').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_debitnoteinfo(activeform,rid){
Ext.define('lmodeljournals_debitnote', {
    extend: 'Ext.data.Model',
	fields:['debitnote_id','debitnote_name','syowner','syownerid','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_debitnote&acn=rd',
		      update : 'bodysave.php?t=journals_debitnote&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_debitnote').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_debitnoteitemsinfo(activeform,rid){
Ext.define('lmodeljournals_debitnoteitems', {
    extend: 'Ext.data.Model',
	fields:['debitnoteitems_id','debitnoteitems_name','item_id','receipt_id','remarks','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_debitnoteitems&acn=rd',
		      update : 'bodysave.php?t=journals_debitnoteitems&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_debitnoteitems').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_paymentvoucherinfo(activeform,rid){
Ext.define('lmodeljournals_paymentvoucher', {
    extend: 'Ext.data.Model',
	fields:['paymentvoucher_id','paymentvoucher_name','paymentmode_id','invoice_id','cheque_number','amount','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_paymentvoucher&acn=rd',
		      update : 'bodysave.php?t=journals_paymentvoucher&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_paymentvoucher').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_purchasereturninfo(activeform,rid){
Ext.define('lmodeljournals_purchasereturn', {
    extend: 'Ext.data.Model',
	fields:['purchasereturn_id','purchasereturn_name','debitnote_id','amount','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_purchasereturn&acn=rd',
		      update : 'bodysave.php?t=journals_purchasereturn&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_purchasereturn').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_purchasesjournalinfo(activeform,rid){
Ext.define('lmodeljournals_purchasesjournal', {
    extend: 'Ext.data.Model',
	fields:['purchasesjournal_id','invoice_number','syowner','syownerid','amount','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_purchasesjournal&acn=rd',
		      update : 'bodysave.php?t=journals_purchasesjournal&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_purchasesjournal').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_receiptinfo(activeform,rid){
Ext.define('lmodeljournals_receipt', {
    extend: 'Ext.data.Model',
	fields:['receipt_id','receipt_name','account_id','description','amount','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_receipt&acn=rd',
		      update : 'bodysave.php?t=journals_receipt&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_receipt').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_salesjournalinfo(activeform,rid){
Ext.define('lmodeljournals_salesjournal', {
    extend: 'Ext.data.Model',
	fields:['salesjournal_id','syowner','syownerid','invoice_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_salesjournal&acn=rd',
		      update : 'bodysave.php?t=journals_salesjournal&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_salesjournal').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_salesreturninfo(activeform,rid){
Ext.define('lmodeljournals_salesreturn', {
    extend: 'Ext.data.Model',
	fields:['salesreturn_id','salesreturn_name','syowner','syownerid','creditnote_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_salesreturn&acn=rd',
		      update : 'bodysave.php?t=journals_salesreturn&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_salesreturn').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_salesvoucherinfo(activeform,rid){
Ext.define('lmodeljournals_salesvoucher', {
    extend: 'Ext.data.Model',
	fields:['salesvoucher_id','salesvoucher_name','item_id','account_id','invoice_id','receipt_id','amount','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_salesvoucher&acn=rd',
		      update : 'bodysave.php?t=journals_salesvoucher&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_salesvoucher').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadjournals_salesvoucheritemsinfo(activeform,rid){
Ext.define('lmodeljournals_salesvoucheritems', {
    extend: 'Ext.data.Model',
	fields:['salesvoucheritems_id','salesvoucher_id','receipt_id','amount','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=journals_salesvoucheritems&acn=rd',
		      update : 'bodysave.php?t=journals_salesvoucheritems&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodeljournals_salesvoucheritems').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadpayment_bankinfo(activeform,rid){
Ext.define('lmodelpayment_bank', {
    extend: 'Ext.data.Model',
	fields:['bank_id','bank_name','code','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=payment_bank&acn=rd',
		      update : 'bodysave.php?t=payment_bank&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelpayment_bank').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadpayment_costcenterinfo(activeform,rid){
Ext.define('lmodelpayment_costcenter', {
    extend: 'Ext.data.Model',
	fields:['costcenter_id','costcenter_name','cost_center_value','use_cost_center_value','employee_id','comments','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=payment_costcenter&acn=rd',
		      update : 'bodysave.php?t=payment_costcenter&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelpayment_costcenter').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadpayment_costcenterallocationinfo(activeform,rid){
Ext.define('lmodelpayment_costcenterallocation', {
    extend: 'Ext.data.Model',
	fields:['costcenterallocation_id','costcenter_id','amount','date_allocated','comment','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=payment_costcenterallocation&acn=rd',
		      update : 'bodysave.php?t=payment_costcenterallocation&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelpayment_costcenterallocation').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadpayment_currencyinfo(activeform,rid){
Ext.define('lmodelpayment_currency', {
    extend: 'Ext.data.Model',
	fields:['currency_id','currency_code','currency_name','exchange_rate','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=payment_currency&acn=rd',
		      update : 'bodysave.php?t=payment_currency&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelpayment_currency').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_autoresponseinfo(activeform,rid){
Ext.define('lmodelsms_autoresponse', {
    extend: 'Ext.data.Model',
	fields:['autoresponse_id','message_from','request_type','message_message','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_autoresponse&acn=rd',
		      update : 'bodysave.php?t=sms_autoresponse&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_autoresponse').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_emailhandleinfo(activeform,rid){
Ext.define('lmodelsms_emailhandle', {
    extend: 'Ext.data.Model',
	fields:['emailhandle_id','connection_number','amount','email_address','pay_before','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_emailhandle&acn=rd',
		      update : 'bodysave.php?t=sms_emailhandle&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_emailhandle').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_emailscheduleinfo(activeform,rid){
Ext.define('lmodelsms_emailschedule', {
    extend: 'Ext.data.Model',
	fields:['emailschedule_id','emailschedule_name','schedule_description','bill_date','due_after','file_brouwse','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_emailschedule&acn=rd',
		      update : 'bodysave.php?t=sms_emailschedule&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_emailschedule').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_indsmsinfo(activeform,rid){
Ext.define('lmodelsms_indsms', {
    extend: 'Ext.data.Model',
	fields:['indsms_id','reciepient','message','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_indsms&acn=rd',
		      update : 'bodysave.php?t=sms_indsms&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_indsms').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_invalidemailaddressinfo(activeform,rid){
Ext.define('lmodelsms_invalidemailaddress', {
    extend: 'Ext.data.Model',
	fields:['invalidemailaddress_id','connection_number','amount','email_address','pay_before','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_invalidemailaddress&acn=rd',
		      update : 'bodysave.php?t=sms_invalidemailaddress&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_invalidemailaddress').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_messagereceivedinfo(activeform,rid){
Ext.define('lmodelsms_messagereceived', {
    extend: 'Ext.data.Model',
	fields:['messagereceived_id','message_from','message_message','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track','messagereived_id'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_messagereceived&acn=rd',
		      update : 'bodysave.php?t=sms_messagereceived&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_messagereceived').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_messagesendinfo(activeform,rid){
Ext.define('lmodelsms_messagesend', {
    extend: 'Ext.data.Model',
	fields:['messagesend_id','messagesend_name','reciepient','message','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_messagesend&acn=rd',
		      update : 'bodysave.php?t=sms_messagesend&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_messagesend').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_processedemailinfo(activeform,rid){
Ext.define('lmodelsms_processedemail', {
    extend: 'Ext.data.Model',
	fields:['processedemail_id','email_address','connection_number','message','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_processedemail&acn=rd',
		      update : 'bodysave.php?t=sms_processedemail&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_processedemail').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_processedsmsinfo(activeform,rid){
Ext.define('lmodelsms_processedsms', {
    extend: 'Ext.data.Model',
	fields:['processedSMS_id','phone_number','connection_number','message','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_processedsms&acn=rd',
		      update : 'bodysave.php?t=sms_processedsms&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_processedsms').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_receivedrqtsinfo(activeform,rid){
Ext.define('lmodelsms_receivedrqts', {
    extend: 'Ext.data.Model',
	fields:['receivedrqts_id','message_from','request_type','message_message','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_receivedrqts&acn=rd',
		      update : 'bodysave.php?t=sms_receivedrqts&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_receivedrqts').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_scheduleinfo(activeform,rid){
Ext.define('lmodelsms_schedule', {
    extend: 'Ext.data.Model',
	fields:['schedule_id','schedule_name','schedule_description','bill_date','due_after','file_brouwse','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_schedule&acn=rd',
		      update : 'bodysave.php?t=sms_schedule&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_schedule').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_sendsmstogrpinfo(activeform,rid){
Ext.define('lmodelsms_sendsmstogrp', {
    extend: 'Ext.data.Model',
	fields:['sendsmstogrp_id','smsgroup_id','sms_message','comment','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_sendsmstogrp&acn=rd',
		      update : 'bodysave.php?t=sms_sendsmstogrp&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_sendsmstogrp').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_smscaptionsinfo(activeform,rid){
Ext.define('lmodelsms_smscaptions', {
    extend: 'Ext.data.Model',
	fields:['smscaptions_id','sms_tablelist','caption','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_smscaptions&acn=rd',
		      update : 'bodysave.php?t=sms_smscaptions&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_smscaptions').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_smsgroupinfo(activeform,rid){
Ext.define('lmodelsms_smsgroup', {
    extend: 'Ext.data.Model',
	fields:['smsgroup_id','smsgroup_name','description','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_smsgroup&acn=rd',
		      update : 'bodysave.php?t=sms_smsgroup&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_smsgroup').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_smsgroupmemberinfo(activeform,rid){
Ext.define('lmodelsms_smsgroupmember', {
    extend: 'Ext.data.Model',
	fields:['smsgroupmember_id','smsgroup_id','syowner','syownerid','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_smsgroupmember&acn=rd',
		      update : 'bodysave.php?t=sms_smsgroupmember&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_smsgroupmember').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_billhandleinfo(activeform,rid){
Ext.define('lmodelsms_billhandle', {
    extend: 'Ext.data.Model',
	fields:['smshandle_id','connection_number','amount','phone_number','pay_before','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_billhandle&acn=rd',
		      update : 'bodysave.php?t=sms_billhandle&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_billhandle').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_smsinvalidinfo(activeform,rid){
Ext.define('lmodelsms_smsinvalid', {
    extend: 'Ext.data.Model',
	fields:['smshandle_id','connection_number','amount','phone_number','pay_before','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track','smsinvalid_id'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_smsinvalid&acn=rd',
		      update : 'bodysave.php?t=sms_smsinvalid&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_smsinvalid').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_smsmsgcustinfo(activeform,rid){
Ext.define('lmodelsms_smsmsgcust', {
    extend: 'Ext.data.Model',
	fields:['smsmsgcust_id','message','status','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_smsmsgcust&acn=rd',
		      update : 'bodysave.php?t=sms_smsmsgcust&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_smsmsgcust').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_systemlockinfo(activeform,rid){
Ext.define('lmodelsms_systemlock', {
    extend: 'Ext.data.Model',
	fields:['systemlock_id','status_id','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_systemlock&acn=rd',
		      update : 'bodysave.php?t=sms_systemlock&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_systemlock').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}function loadsms_systemmodeinfo(activeform,rid){
Ext.define('lmodelsms_systemmode', {
    extend: 'Ext.data.Model',
	fields:['systemmode_id','current_mode','created_by','date_created','changed_by','date_changed','voided','voided_by','date_voided','uuid','sys_track'],
	proxy: {
        type: 'ajax',
		api:{
		      read : 'buidgrid.php?t=sms_systemmode&acn=rd',
		      update : 'bodysave.php?t=sms_systemmode&q=rid&act=Update'
		},
        
        reader: {
            type: 'json'
        }
    }
});

//Load data
Ext.ModelMgr.getModel('lmodelsms_systemmode').load(rid, { 
    success: function(user) {
        activeform.loadRecord(user);

    }
});




}