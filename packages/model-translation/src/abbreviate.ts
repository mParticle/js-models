// tslint:disable: no-any
import {
    expandMap,
    eventTypeMap,
    matchMapReverse,
    matchMap,
    productMap,
    productActionMap,
} from './maps';

export const abbreviate = (obj: { [key: string]: any }) => {
    const event: { [key: string]: any } = {};
    const { data } = obj;

    if (obj?.event_type) {
        event.dt = matchMapReverse(obj.event_type, eventTypeMap) || '';
    }

    for (const el in data) {
        if (data.hasOwnProperty(el)) {
            if (el === 'product_action') {
                event.pd = abbreviateProductAction(data[el]);
            } else {
                const key = matchMapReverse(el, expandMap);
                if (key) {
                    event[key] = data[el];
                }
            }
        }
    }
    return event;
};

function abbreviateProductAction(expandedProductAction: {
    [key: string]: any;
}) {
    const pd: { [key: string]: any } = {};
    let pl = {};

    for (const el in expandedProductAction) {
        if (expandedProductAction.hasOwnProperty(el)) {
            if (el === 'products') {
                pl = expandedProductAction.products.map(
                    (p: { [key: string]: any }) => abbreviateProduct(p)
                );
            } else {
                const key = matchMap(el, productActionMap);
                if (key && typeof key !== 'object') {
                    pd[key] = expandedProductAction[el];
                }
            }
        }
    }
    return {
        ...pd,
        pl,
    };
}

function abbreviateProduct(expandedProduct: { [key: string]: any }) {
    const product: { [key: string]: any } = {};

    for (const el in expandedProduct) {
        if (expandedProduct.hasOwnProperty(el)) {
            const key = matchMap(el, productMap);

            if (key) {
                product[key] = expandedProduct[el];
            }
        }
    }

    return product;
}
