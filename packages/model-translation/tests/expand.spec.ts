import { expand } from '../src/expand';
import {
    minifiedCustomEvent,
    minifiedCommerceEvent,
    minifiedASTEvent,
    minifiedFirstRunEvent,
    minifiedSessionStartEvent,
    minifiedProductImpression,
    minifiedPromotionAction,
} from './fixtures';

describe('expand', () => {
    it('should expand a minified customEvent', () => {
        expect(expand(minifiedCustomEvent)).toEqual({
            event_type: 'custom_event',
            data: {
                event_name: 'Event Name',
                custom_event_type: 'Navigation',
                event_duration: 100,
                custom_attributes: {
                    'attr key2': 'attr value2',
                    'attr key': 'attr value',
                    $Category: 'the category',
                    EventLength: '100',
                },
                custom_flags: {
                    'flag key': ['flag value'],
                },
                session_id: '4C5F066B-EF0B-48CC-BB97-9A1676145BC3',
                event_start_unixtime_ms: 1579725074823,
                timestamp_unixtime_ms: 1579725074823,
                session_start_unixtime_ms: 1579725074804,
            },
        });
    });

    it('should expand a minified commerce event', () => {
        expect(expand(minifiedCommerceEvent)).toEqual({
            event_type: 'commerce_event',
            data: {
                screen_name: 'a screen name',
                custom_attributes: {},
                currency_code: 'BTC',
                product_action: {
                    action: 'checkout',
                    checkout_step: 99,
                    checkout_option: 'a checkout option',
                    product_action_list: 'product list name',
                    product_list_source: 'product list source',
                    transaction_id: 'transactionId',
                    affiliation: 'affiliation',
                    total_amount: 100000,
                    tax_amount: 2345.3,
                    shipping_amount: 999.9,
                    coupon_code: 'coupon code',
                    products: [
                        {
                            name: 'Android',
                            category: 'CellPhones',
                            coupon_code: 'my-coupon-code-2',
                            sku: '98765',
                            position: 2,
                            price: 600,
                            quantity: 4,
                            time_added: 1579726247390,
                            total_amount: 2400,
                            brand: 'Samsung',
                            variant: 'SuperDuper',
                            attributes: {
                                'CommerceEvent custom attribtue key':
                                    'customvalue',
                                'product custom attribtue key': 'customvalue',
                            },
                        },
                        {
                            name: 'iOS',
                            sku: '1111',
                            price: 1000,
                            quantity: 1,
                            time_added: 1579726247390,
                            total_amount: 1000,
                        },
                    ],
                },
                custom_flags: {
                    'flag key1': ['flag value1'],
                },
            },
        });
    });

    it('should expand a minified AST event', () => {
        expect(expand(minifiedASTEvent)).toEqual({
            event_type: 'application_state_transition',
            data: {
                timestamp_unixtime_ms: 1579725074814,
                session_id: '4C5F066B-EF0B-48CC-BB97-9A1676145BC3',
                session_start_unixtime_ms: 1579725074804,
                application_transition_type: 'app_init',
                is_first_run: true,
                is_upgrade: false,
            },
        });
    });

    it('should expand a minified Session Start Event', () => {
        expect(expand(minifiedSessionStartEvent)).toEqual({
            event_type: 'session_start',
            data: {
                timestamp_unixtime_ms: 1579725074804,
            },
        });
    });

    it('should expand a minified First Run Event', () => {
        expect(expand(minifiedFirstRunEvent)).toEqual({
            event_type: 'first_run',
            data: {
                timestamp_unixtime_ms: 1579725074804,
                session_id: '4C5F066B-EF0B-48CC-BB97-9A1676145BC3',
                session_start_unixtime_ms: 1579725074804,
            },
        });
    });

    it('should expand a Product Impression Event', () => {
        expect(expand(minifiedProductImpression)).toEqual({
            event_type: 'commerce_event',
            data: {
                product_impressions: [
                    {
                        product_impression_list: 'my impression',
                        products: [
                            {
                                name: 'product1',
                                category: 'category',
                                coupon_code: 'coupon code',
                                sku: '1234',
                                position: 3,
                                price: 1.2,
                                quantity: 12,
                                time_added: 1579883605450,
                                total_amount: 14.399999999999999,
                                brand: 'Brannnnd',
                                variant: 'the variant',
                            },
                            {
                                name: 'product2',
                                sku: '12345',
                                price: 2,
                                quantity: 1,
                                time_added: 1579883605451,
                                total_amount: 2,
                            },
                            {
                                name: 'product3',
                                sku: '12346',
                                price: 3,
                                quantity: 1,
                                time_added: 1579883605451,
                                total_amount: 3,
                            },
                        ],
                    },
                ],
            },
        });
    });
    it('should expand a Promotion Event', () => {
        expect(expand(minifiedPromotionAction)).toEqual({
            event_type: 'commerce_event',
            data: {
                promotion_action: {
                    action: 'click',
                    promotions: [
                        {
                            sku: 'the Id',
                            name: 'the name',
                            creative: 'creative',
                            position: 'Position #1',
                        },
                        {
                            sku: 'the Id2',
                            name: 'the name2',
                            creative: 'creative2',
                            position: 'Position #2',
                        },
                    ],
                },
            },
        });
    });
});
