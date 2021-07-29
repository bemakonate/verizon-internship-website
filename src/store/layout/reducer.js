import { updatedObj } from '../../constants/helpers';
import * as actionTypes from './actionTypes';

const initialState = {
    isProductModalOpen: false,
    productModalData: {
        props: null,
    },
    businessData: null,
    flashMessage: {
        open: false,
        content: null,
        isTemporary: false,
        visibilityTime: null,
        type: null,
    }
}

const openProductModal = (state, action) => updatedObj(state, {
    isProductModalOpen: true
})

const closeProductModal = (state, action) => updatedObj(state, {
    isProductModalOpen: false,
    productModalItem: null,
})


const setProductModalData = (state, action) => updatedObj(state, {
    productModalData: updatedObj(state.productModalData, { props: action.payload.props })
})

const addConfirmOrderPageData = (state, action) => updatedObj(state, {
    confirmOrderPageData: action.payload.data,
})

const openFlashMessage = (state, action) => updatedObj(state, {
    flashMessage: updatedObj(state.flashMessage, { ...action.payload.data, open: true }),
})

const closeFlashMessage = (state, action) => updatedObj(state, {
    flashMessage: {
        open: false,
        isTemporary: false,
        content: null,
        visibilityTime: null,
        type: null,
    }
})

const setBusinessData = (state, action) => updatedObj(state, {
    businessData: action.payload.data

})
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_PRODUCT_MODAL: return openProductModal(state, action);
        case actionTypes.CLOSE_PRODUCT_MODAL: return closeProductModal(state, action);
        case actionTypes.SET_PRODUCT_MODAL_DATA: return setProductModalData(state, action);
        case actionTypes.ADD_CONFIRM_ORDER_DATA: return addConfirmOrderPageData(state, action);
        case actionTypes.OPEN_FLASH_MESSAGE: return openFlashMessage(state, action);
        case actionTypes.CLOSE_FLASH_MESSAGE: return closeFlashMessage(state, action);
        case actionTypes.SET_BUSSINESS_DATA: return setBusinessData(state, action);
        default:

            return state
    }
}
export default reducer;