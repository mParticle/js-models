// tslint:disable: no-any

import {
    eventTypeMap,
    expandMap,
    productMap,
    productActionMap,
    matchMapReverse,
} from './maps';

export const expand = (obj: { [key: string]: any }) => {
    let eventType;
    const data: { [key: string]: any } = {};

    if (obj.hasOwnProperty('dt')) {
        const key = obj['dt'];
        if (key in eventTypeMap) {
            eventType = eventTypeMap[key];
        }
    }

    for (const el in obj) {
        if (el === 'pd') {
            const productAction = expandProductAction(obj['pd']);
            data['product_action'] = productAction;
        } else if (el === 'pm') {
            const promotionAction = expandPromotionAction(obj['pm']);
            data['promotion_action'] = promotionAction;
        } else if (el === 'pi') {
            data['product_impressions'] = obj['pi']?.map((impression: any) => ({
                product_impression_list: impression['pil'],
                products: impression.pl.map((product: any) =>
                    expandProduct(product)
                ),
            }));
        } else {
            if (el in expandMap) {
                const key = expandMap[el];
                data[key] = obj[el];
            }
        }
    }

    return {
        event_type: eventType,
        data,
    };
};

function expandProductAction(miniProductAction: { [key: string]: any }) {
    const productAction: { [key: string]: any } = {};
    let products = {};
    for (const el in miniProductAction) {
        if (el === 'pl') {
            products = miniProductAction?.pl.map((p: { [key: string]: any }) =>
                expandProduct(p)
            );
        } else {
            const key = matchMapReverse(el, productActionMap);
            if (key) {
                productAction[key] = miniProductAction[el];
            }
        }
    }
    return {
        ...productAction,
        products,
    };
}

function expandPromotionAction(miniPromotionAction: { [key: string]: any }) {
    const promotionAction: { [key: string]: any } = {};
    let promotions = {};
    for (const el in miniPromotionAction) {
        if (el === 'pl') {
            promotions = miniPromotionAction?.pl.map(
                (p: { [key: string]: any }) => expandProduct(p)
            );
        } else {
            const key = matchMapReverse(el, productActionMap);
            if (key) {
                promotionAction[key] = miniPromotionAction[el];
            }
        }
    }
    return {
        ...promotionAction,
        promotions,
    };
}

function expandProduct(miniProduct: { [key: string]: any }) {
    const product: { [key: string]: any } = {};
    for (const el in miniProduct) {
        if (miniProduct.hasOwnProperty(el)) {
            const key = matchMapReverse(el, productMap);

            if (key) {
                product[key] = miniProduct[el];
            }
        }
    }
    return product;
}
