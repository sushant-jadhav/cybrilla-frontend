
export const colPrimary = "#7ebc3d";
export const colSecondry = "#b243b7";

export const colGray = "#505050";
export const colLightGray = "#c6c6c6";
export const colWht = "#fff";
export const colBlack = "#000";


export const ftexBold = "Nunito-ExtraBold";
export const ftBold = "Nunito-Bold";
export const ftRegular = "Nunito-Regular";

export const ft20 = 20;
export const ft16 = 16;
export const ft14 = 14;
export const ft12 = 12;
export const ft22 = 22;

export const webApp = {
    pH20: { paddingHorizontal: 20 },
    column: {
        flexDirection: 'column', display: 'flex'
    },
    row: { flexDirection: 'row', display: 'flex' },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
    },
    logoWrap: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 10, },
    logoHdr: { width: '100%', flex: 1, flexDirection: 'row', alignItems: 'center' },
    headerTxlogo: { fontFamily: ftBold, fontSize: 20 },
    headerWrap: { backgroundColor: colPrimary },
    header: { backgroundColor: 'colPrimary', height: 100, justifyContent: 'center' },
    headerBack: { backgroundColor: colSecondry, height: 50, justifyContent: 'center', },
    headerBackBtn: { flexDirection: 'row', paddingLeft: 10, paddingVertical: 10, },
    headerTitle: { width: '100%', position: 'absolute', height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: -1 },
    headerBackIcn: { width: 25, height: 25 },
    headerTitleText: { fontSize: ft16, left: '0%', right: '0%', color: colWht },
    haedTitle: { fontSize: ft16, },
    container: { padding: 10, backgroundColor: colWht },
    locHdr: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottom: 'dooted', borderColor: colLightGray, paddingBottom: 10 },
    footerWrap: {
        width: '100%', bottom: 0, justifyContent: 'space-between', flexDirection: 'row', padding: 10, backgroundColor: colWht, borderTopWidth: 1, borderColor: colLightGray,
        position: 'fixed'
    },
    footerHdr: { justifyContent: 'center', alignItems: 'center', },
    footerIcn: { width: 50, height: 50 },
    footerIcnText: { fontSize: ft12, marginTop: 10, textTransform: 'uppercase', color: colGray },
    defImg: { width: 100, height: 100 },
    catWrap: { flexDirection: 'row', flex: 1, borderBottomWidth: 1, borderColor: colLightGray, marginBottom: 10 },
    catHdr: { padding: 10, alignItems: 'center' },
    catIcn: { width: 50, height: 50 },
    catIcnText: { fontSize: ft14 },
    prodWrap: { width: '100%', borderBottomWidth: 1, marginBottom: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: colLightGray, backgroundColor: colWht, alignItems: 'center' },
    prodTitle: { fontSize: ft14, color: colPrimary },
    prodDesc: { fontSize: ft12, marginVertical: 5, color: colGray, },
    prodPric: { fontSize: ft12, marginTop: 5, fontFamily: ftBold },
    prodQty: { fontSize: ft12, marginTop: 5, color: colLightGray },
    prodRate: { fontSize: ft12, color: colLightGray },
    prodMinOrd: { fontSize: ft12, color: colLightGray },
    prodColHdr: { flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', },
    pordPrcBtn: {
        width: 100, position: 'absolute', bottom: 2, borderWidth: 1, borderColor: colLightGray, backgroundColor: colWht,
        justifyContent: 'center', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 20, zIndex: 1
    },
    btn: { backgroundColor: colGray, color: colWht, },
    pordPrcTotl: { fontSize: ft14, textAlign: 'right' },
    pordPrcBtnSpin: { paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderColor: colLightGray, marginTop: 5 },
    prodQtAdd: { color: colBlack, fontSize: ft16 },
    btmCartWrap: { backgroundColor: colPrimary, position: 'fixed', bottom: 0, zIndex: 1, width: '100%', padding: 10, },
    btmCartText: { color: colWht },
    btnWrap: { backgroundColor: colPrimary, position: 'fixed', bottom: 0, zIndex: 1, width: '100%', padding: 10, alignItems: 'center' },
    btnText: { color: colWht, textTransform: 'uppercase', fontSize: ft12, fontFamily: ftBold },
    billContWrap: {
        // backgroundColor: colLightGray, padding: 10
    },
    billCont: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: colLightGray, marginVertical: 5, paddingBottom: 10 },
    billContHead: { marginBottom: 10, },
    billContText: {},
    billContTextGr: { fontSize: ft16 },
    tipHdr: { borderWidth: 1, borderColor: colLightGray, paddingHorizontal: 10, paddingVertical: 5, marginRight: 10 },
    addInput: { borderBottomWidth: 1, borderColor: '#ccc', paddingVertical: 10, marginBottom: 10, },
    brdBtn: { paddingHorizontal: 10, paddingVertical: 5, },
    brdBtnActive: { paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderColor: colLightGray },
    searchInput: { borderWidth: 1, borderColor: colLightGray, marginVertical: 20, padding: 10 },
    orddtlAdd: { backgroundColor: colLightGray, padding: 5, marginVertical: 10 },
    orddtlAddHdr: { marginVertical: 10 },
    orddtlAddTx: { color: colGray, fontSize: ft14 },
    label: { fontSize: ft12 },
    profileWrap: { width: '100%', borderBottomWidth: 1, marginVertical: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: colLightGray, backgroundColor: colWht, alignItems: 'center' },
    ordHiswrap: { flexDirection: 'column', marginBottom: 10, borderBottomWidth: 1, borderColor: colLightGray, paddingBottom: 10 },
    ordHisHdr: { width: '100%', marginVertical: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colWht, alignItems: 'center' },
    brdBtn2: { width: '49%', borderWidth: 1, borderColor: colLightGray, paddingVertical: 5, justifyContent: 'center', alignItems: 'center' },
    brdBtn2Text: { textAlign: 'center', textTransform: 'uppercase', color: colLightGray },
    offrCode: { paddingVertical: 5, color: colSecondry, fontSize: ft14, fontFamily: ftBold },
    offrCodeSub: {
        fontSize: ft12, fontFamily: ftRegular,
        color: colGray
    },
    offHdr: { borderBottomWidth: 1, borderColor: colLightGray, paddingBottom: 10, marginBottom: 10 },
    advrtHdr: { backgroundColor: colLightGray, paddingHorizontal: 10, paddingVertical: 3, fontSize: ft12 },
    explHdr: {},
    explAdHdr: { backgroundColor: '#fff3ee', paddingHorizontal: 10 },
    explWrap: { width: '100%', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', borderColor: colLightGray, backgroundColor: colWht, alignItems: 'center' },
    loginWrap: { width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: '40%' },
    loginTitle: { fontSize: ft20 },
    loginInput: { borderBottomWidth: 1, borderColor: colLightGray, paddingVertical: 5, width: '80%', marginTop: 40, marginBottom: 10, textAlign: 'center' },
    btnLog: { width: '80%', paddingVertical: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: colPrimary, },
    btnLogLink: { width: '80%', paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginVertical: 10 },
    prdDtlConHdr: { borderBottomWidth: 1, borderColor: colLightGray, paddingBottom: 10, marginBottom: 10, },

    shop: {
        shopProduct: { marginBottom: 75 },
        prodHeader: { fontSize: ft16, marginVertical: 5, color: colGray, },
    },
    search: {
        searchText: { fontSize: ft16, textAlign: 'center' },
    },
    cart: {
        loginWrap: { width: '100%', justifyContent: 'center', alignItems: 'center' },
        addressWrap: { width: '100%' },
        addressInput: { borderBottomWidth: 1, borderColor: colLightGray, paddingVertical: 5, width: '100%', marginTop: 20, marginBottom: 10, textAlign: 'left' },
        btnLog: { width: '100%', paddingVertical: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: colPrimary, },
    },
    location: {
        searchInput: { borderWidth: 1, borderColor: colLightGray, marginVertical: 0, padding: 10 },
    },
    mapLocation: {
        loginWrap: { width: '100%' },
        addressWrap: { width: '100%' },
        locationTitle: { fontSize: ft16 },
        locationDetails: { color: '#999', fontFamily: ftRegular, fontSize: ft12 },
        changeBtnText: { color: colWht, textTransform: 'uppercase', fontSize: ft12 },
        btnLog: { width: '100%', borderRadius: 5, marginTop: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: colPrimary, },
        changeBtn: { paddingHorizontal: 5, paddingVertical: 3, borderRadius: 3, justifyContent: 'center', alignItems: 'center', backgroundColor: colSecondry },
    },
    explore: {
        linkWrap: { textDecoration: 'none', display: 'flex', flexDirection: 'row' },
        linkStyle: { textDecoration: 'none', display: 'flex', flexDirection: 'column' },
        locationText: { fontSize: ft12, color: colGray },
        locationTextHead: { fontSize: ft14, fontFamily: ftBold, }
    },
    gpsBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 0,
        padding: 10,
        backgroundColor: colPrimary
    },
    gpsBtnTx: {
        fontSize: ft14,
        color: colWht,
        fontWeight: 'bold',
        fontFamily: ftBold
    },
    gpsBtnTx2: {
        fontSize: ft12,
        color: colWht
    },
    offerHdr: {
        offrBtn: {
            textAlign: 'center', width: '50%', paddingVertical: 10, marginBottom: 10,
            borderBottomWidth: 1, borderColor: colLightGray
        },
        offrBtnTx: {},
        offrBtnTxActive: {
            color: colSecondry
        }
    },
}

// export default {
//     webApp,
//     colGray,
// }
