import { abbreviate } from '../src/abbreviate';
import { expandedCustomEvent, expandedCommerceEvent } from './fixtures';
import { customEventTypeMap } from '../src/maps';

describe('abbreviate', () => {
    it('should abbreviate an expanded customEvent', () => {
        expect(abbreviate(expandedCustomEvent)).toEqual({
            dt: 'e',
            et: 'Navigation',
            n: 'Event Name',
            el: 100,
            attrs: {
                'attr key2': 'attr value2',
                'attr key': 'attr value',
                $Category: 'the category',
                EventLength: '100',
            },
            flags: {
                'flag key': ['flag value'],
            },
            ct: 1579725074823,
            est: 1579725074823,
            sid: '4C5F066B-EF0B-48CC-BB97-9A1676145BC3',
        });
    });

    it('should abbreviate custom_event_types', () => {
        Object.keys(customEventTypeMap).forEach(element => {
            expect(
                abbreviate({
                    event_type: 'custom_event',
                    data: {
                        custom_event_type: element,
                    },
                })
            ).toEqual({
                dt: 'e',
                et: customEventTypeMap[element],
            });
        });
    });

    it('should abbreviate an expanded commerce event', () => {
        expect(abbreviate(expandedCommerceEvent)).toEqual({
            dt: 'cm',
            sn: 'a screen name',
            cu: 'BTC',
            attrs: {},
            pd: {
                an: 'checkout',
                cs: 99,
                co: 'a checkout option',
                pal: 'product list name',
                pls: 'product list source',
                ti: 'transactionId',
                ta: 'affiliation',
                tr: 100000,
                tt: 2345.3,
                ts: 999.9,
                tcc: 'coupon code',
                pl: [
                    {
                        nm: 'Android',
                        ca: 'CellPhones',
                        cc: 'my-coupon-code-2',
                        id: '98765',
                        ps: 2,
                        pr: 600,
                        qt: 4,
                        act: 1579726247390,
                        tpa: 2400,
                        br: 'Samsung',
                        va: 'SuperDuper',
                        attrs: {
                            'CommerceEvent custom attribtue key': 'customvalue',
                            'product custom attribtue key': 'customvalue',
                        },
                    },
                    {
                        nm: 'iOS',
                        id: '1111',
                        pr: 1000,
                        qt: 1,
                        act: 1579726247390,
                        tpa: 1000,
                    },
                ],
            },
            flags: {
                'flag key1': ['flag value1'],
            },
        });
    });
});
