/* tslint:disable:max-line-length */

import {
    BaseEvent,
    ApplicationInformation,
    ApplicationInformationOs,
    ApplicationInformationOsEnum,
    ApplicationStateTransitionEventEventType,
    ApplicationStateTransitionEventData,
    ApplicationStateTransitionEventDataApplicationTransitionType,
    AttributionInfo,
    Batch,
    BatchEnvironment,
    BatchEnvironmentEnum,
    BatchUserIdentities,
    BreadcrumbEvent,
    BreadcrumbEventEventType,
    CommerceEvent,
    ConsentState,
    CrashReportEvent,
    CommerceEventEventType,
    CommerceEventDataCustomEventType,
    DeviceCurrentStateDeviceOrientation,
    DeviceCurrentStateStatusBarOrientation,
    DeviceInformationPlatform,
    CustomEvent,
    NetworkPerformanceEvent,
    OptOutEvent,
    ProductActionAction,
    ProfileEvent,
    ProfileEventDataProfileEventType,
    PromotionActionAction,
    PushMessageEvent,
    PushMessageEventDataPushMessageType,
    PushMessageEventDataApplicationState,
    PushMessageEventDataPushMessageBehavior,
    PushRegistrationEvent,
    ScreenViewEvent,
    SessionEndEvent,
    SessionStartEvent,
    SourceInformationChannel,
    UserAttributeChangeEvent,
    UserIdentityChangeEvent,
    ApplicationStateTransitionEventEventTypeEnum,
    ApplicationStateTransitionEventDataApplicationTransitionTypeEnum,
    SourceInformationChannelEnum,
    EventTypeEnum,
    BreadcrumbEventEventTypeEnum,
    CommerceEventEventTypeEnum,
    ProductActionActionEnum,
    PromotionActionActionEnum,
    CommerceEventDataCustomEventTypeEnum,
    CrashReportEventEventTypeEnum,
    CustomEventEventTypeEnum,
    CustomEventDataCustomEventTypeEnum,
    DeviceCurrentStateDeviceOrientationEnum,
    DeviceCurrentStateStatusBarOrientationEnum,
    DeviceInformationPlatformEnum,
    NetworkPerformanceEventEventTypeEnum,
    OptOutEventEnum,
    ProfileEventEventTypeEnum,
    ProfileEventDataProfileEventTypeEnum,
    PushMessageEventEventTypeEnum,
    PushMessageEventDataPushMessageTypeEnum,
    PushMessageEventDataApplicationStateEnum,
    PushMessageEventDataPushMessageBehaviorEnum,
    UserAttributeChangeEventEventTypeEnum,
    UserIdentityChangeEventEventTypeEnum,
    IdentityTypeEnum,
    SessionStartEventEventTypeEnum,
    SessionEndEventEventTypeEnum,
    PushRegistrationEventEventTypeEnum,
} from '../src/index';

describe('Event Server Models', () => {
    it('should declare all interfaces', () => {
        const appInfo: ApplicationInformation = {
            package: 'test_package',
            application_name: 'test',
            application_version: '1.2.3,',
            application_build_number: '112233',
            install_referrer: 'test_install_referrer',
            os: ApplicationInformationOsEnum.mobileWeb,
            apple_search_ads_attributes: {
                baz: {
                    nested: 'true',
                },
            },
            is_using_sideloaded_kits: false,
        };

        expect(appInfo).toBeDefined();

        const xbox: ApplicationInformationOs =
            ApplicationInformationOsEnum.xbox;
        const unknown: ApplicationInformationOs =
            ApplicationInformationOsEnum.unknown;
        const IOS: ApplicationInformationOs = ApplicationInformationOsEnum.iOS;
        const android: ApplicationInformationOs =
            ApplicationInformationOsEnum.android;
        const windowsPhone: ApplicationInformationOs =
            ApplicationInformationOsEnum.windowsPhone;
        const mobileWeb: ApplicationInformationOs =
            ApplicationInformationOsEnum.mobileWeb;
        const unityIOS: ApplicationInformationOs =
            ApplicationInformationOsEnum.unityIOS;
        const unityAndroid: ApplicationInformationOs =
            ApplicationInformationOsEnum.unityAndroid;
        const desktop: ApplicationInformationOs =
            ApplicationInformationOsEnum.desktop;
        const TVOS: ApplicationInformationOs =
            ApplicationInformationOsEnum.tvOS;
        const roku: ApplicationInformationOs =
            ApplicationInformationOsEnum.roku;
        const outOfBand: ApplicationInformationOs =
            ApplicationInformationOsEnum.outOfBand;
        const alexa: ApplicationInformationOs =
            ApplicationInformationOsEnum.alexa;
        const smartTV: ApplicationInformationOs =
            ApplicationInformationOsEnum.smartTV;
        const fireTV: ApplicationInformationOs =
            ApplicationInformationOsEnum.fireTV;

        expect(xbox).toBe('Xbox');
        expect(unknown).toBe('Unknown');
        expect(IOS).toBe('IOS');
        expect(android).toBe('Android');
        expect(windowsPhone).toBe('WindowsPhone');
        expect(mobileWeb).toBe('MobileWeb');
        expect(unityIOS).toBe('UnityIOS');
        expect(unityAndroid).toBe('UnityAndroid');
        expect(desktop).toBe('Desktop');
        expect(TVOS).toBe('TVOS');
        expect(roku).toBe('Roku');
        expect(outOfBand).toBe('OutOfBand');
        expect(alexa).toBe('Alexa');
        expect(smartTV).toBe('SmartTV');
        expect(fireTV).toBe('FireTV');

        const appStateTransition: ApplicationStateTransitionEventEventType =
            ApplicationStateTransitionEventEventTypeEnum.applicationStateTransition;
        expect(appStateTransition).toBe('application_state_transition');

        const appStateTransitionEvent: ApplicationStateTransitionEventData = {
            successfully_closed: true,
            is_first_run: false,
            is_upgrade: false,
            push_notification_payload: 'PUSH!',
            launch_referral: 'maybe',
            application_transition_type:
                ApplicationStateTransitionEventDataApplicationTransitionTypeEnum.applicationForeground,
        };
        expect(appStateTransitionEvent).toBeDefined();

        const applicationInitialized: ApplicationStateTransitionEventDataApplicationTransitionType =
            ApplicationStateTransitionEventDataApplicationTransitionTypeEnum.applicationInitialized;
        const applicationExit: ApplicationStateTransitionEventDataApplicationTransitionType =
            ApplicationStateTransitionEventDataApplicationTransitionTypeEnum.applicationExit;
        const applicationBackground: ApplicationStateTransitionEventDataApplicationTransitionType =
            ApplicationStateTransitionEventDataApplicationTransitionTypeEnum.applicationBackground;
        const applicationForeground: ApplicationStateTransitionEventDataApplicationTransitionType =
            ApplicationStateTransitionEventDataApplicationTransitionTypeEnum.applicationForeground;
        expect(applicationInitialized).toBe('application_initialized');
        expect(applicationExit).toBe('application_exit');
        expect(applicationBackground).toBe('application_background');
        expect(applicationForeground).toBe('application_foreground');

        const attribution: AttributionInfo = {
            service_provider: 'service provider',
            publisher: 'publisher',
            campaign: 'take over all the things',
        };
        expect(attribution).toBeDefined();

        const baseEvent: BaseEvent = {
            event_type: EventTypeEnum.optOut,
            data: {
                timestamp_unixtime_ms: 350006400,
                source_message_id: 'the_source',
                session_id: 8675309,
                session_uuid: 'asdopuiopasduoipasdfoipuewrquoipqwer',
                session_start_unixtime_ms: 35000640,
                event_start_unixtime_ms: 35000640,
                custom_attributes: { key: 'value' },
                custom_flags: {
                    isCustom: true,
                    hasCustom: 'yes',
                    hasNumbers: 42,
                    hasArrays: ['yup'],
                    hasObjects: { works: true },
                },
                location: { latitude: 0, longitude: 0, accuracy: 1 },
                device_current_state: { cpu: 'Cylon' },
                is_goal_defined: false,
                lifetime_value_change: true,
                lifetime_value_attribute_name: 'eternity',
                data_connection_type: 'RJ45',
                event_num: 42,
                view_controller: 'viewmaster',
                is_main_thread: false,
                canonical_name: 'some_test_event',
                event_system_notification_info: { type: 'gdpr_change' },
            },
        };

        expect(baseEvent).toBeDefined();

        const batch: Batch = {
            source_request_id: '123412345',
            events: [baseEvent],
            device_info: {
                brand: 'test_device',
            },
            application_info: {
                application_name: 'test',
            },
            modified: true,
            user_attributes: {
                name: 'tester',
            },
            deleted_user_attributes: ['social-security-number'],
            user_identities: {
                alias: 'clark-kent',
            },
            environment: BatchEnvironmentEnum.development,
            api_key: '1324213241234',
            api_keys: ['9080qerqw9er8-q0w9easfd'],
            ip: '127.0.0.1',
            integration_attributes: {
                something: {
                    foo: 'bar',
                },
            },
            partner_identity: 'bizarro',
            source_info: {
                channel: SourceInformationChannelEnum.javascript,
            },
            mp_deviceid: '12309100100011771012309',
            attribution_info: {
                service_provider: 'test',
                publisher: 'test',
                campaign: 'test',
            },
            timestamp_unixtime_ms: 12341669999,
            batch_id: '12324124',
            mpid: '1300010334',
            sdk_version: 'test.1.223.',
            consent_state: {
                gdpr: {
                    'Test Purpose': {
                        document: 'testing_agreement.v3',
                        consented: true,
                        location: 'mparticle.test/gdpr',
                        timestamp_unixtime_ms: 12341324134134,
                        hardware_id: 'macbook-pro',
                    },
                },
                ccpa: {
                    data_sale_opt_out: {
                        consented: true,
                        location: 'mparticle.test/gdpr',
                        timestamp_unixtime_ms: 12341324134134,
                        hardware_id: 'macbook-pro',
                    },
                },
            },
            job_id: 'foo.21324.23',
            context: {
                data_plan: {
                    plan_id: '212342',
                    plan_version: 3,
                },
            },
        };
        expect(batch).toBeDefined();

        const unknownBatchEnvironment: BatchEnvironment = 'unknown';
        const devBatchEnvironment: BatchEnvironment = 'development';
        const prodBatchEnvironment: BatchEnvironment = 'production';

        expect(unknownBatchEnvironment).toBe('unknown');
        expect(devBatchEnvironment).toBe('development');
        expect(prodBatchEnvironment).toBe('production');

        const batchUserIdentities: BatchUserIdentities = {
            other: 'other',
            customer_id: '121342345afasdf3134123',
            facebook: 'facebook.com/example',
            twitter: '@example',
            google: 'example@google.com',
            microsoft: 'thisdude@msn.com',
            yahoo: 'someone@yahoo.com',
            email: 'facebookUser@facebook.com',
            alias: 'aka',
            facebook_custom_audience_id: 'fb_audience_12345',
            other_id_2: 'other_2',
            other_id_3: 'other_3',
            other_id_4: 'other_4',
            other_id_5: 'other_5',
            other_id_6: 'other_6',
            other_id_7: 'other_7',
            other_id_8: 'other_8',
            other_id_9: 'other_9',
            other_id_10: 'other_10',
            mobile_number: 'mobile_number',
            phone_number_2: 'phone_number_2',
            phone_number_3: 'phone_number_3',
        };
        expect(batchUserIdentities).toBeDefined();

        const breadcrumbEvent: BreadcrumbEvent = {
            data: {
                session_number: 12324,
                label: 'rye',
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
            event_type: EventTypeEnum.breadcrumb,
        };
        expect(breadcrumbEvent).toBeDefined();

        const breadcrumbEventType: BreadcrumbEventEventType =
            BreadcrumbEventEventTypeEnum.breadcrumb;
        expect(breadcrumbEventType).toBe('breadcrumb');

        const commerceEventData: CommerceEvent = {
            event_type: EventTypeEnum.commerceEvent,
            data: {
                product_action: {
                    action: ProductActionActionEnum.click,
                },
                promotion_action: {
                    action: PromotionActionActionEnum.view,
                    promotions: [
                        {
                            id: 'q2eqwer',
                            name: 'test-promo',
                            creative: 'awesome promo',
                            position: 'inside array',
                        },
                    ],
                },
                product_impressions: [
                    {
                        product_impression_list: 'foo',
                        products: [
                            {
                                id: '12341234',
                                name:
                                    'moss covered three handled family credenza',
                            },
                        ],
                    },
                ],
                shopping_cart: {
                    products: [
                        {
                            id: '199199232',
                            name: 'lawn darts',
                        },
                    ],
                },
                currency_code: 'USD',
                screen_name: 'test screen',
                is_non_interactive: false,
                event_name: 'Test Event',
                custom_event_type:
                    CommerceEventDataCustomEventTypeEnum.viewDetail,
                custom_flags: {},
            },
        };
        expect(commerceEventData).toBeDefined();

        const commerceEventEventType: CommerceEventEventType =
            CommerceEventEventTypeEnum.commerceEvent;
        expect(commerceEventEventType).toBe('commerce_event');

        const addToCartCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.addToCart;
        const removeFromCartCommerceEnumEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.removeFromCart;
        const checkoutCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.checkout;
        const checkoutOptionCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.checkoutOption;
        const clickCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.click;
        const viewDetailCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.viewDetail;
        const purchaseCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.purchase;
        const refundCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.refund;
        const promotionViewCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.promotionView;
        const promotionClickCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.promotionClick;
        const addToWishlistCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.addToWishlist;
        const removeFromWishlistCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.removeFromWishlist;
        const impressionCommerceEnum: CommerceEventDataCustomEventType =
            CommerceEventDataCustomEventTypeEnum.impression;

        expect(addToCartCommerceEnum).toBe('add_to_cart');
        expect(removeFromCartCommerceEnumEnum).toBe('remove_from_cart');
        expect(checkoutCommerceEnum).toBe('checkout');
        expect(checkoutOptionCommerceEnum).toBe('checkout_option');
        expect(clickCommerceEnum).toBe('click');
        expect(viewDetailCommerceEnum).toBe('view_detail');
        expect(purchaseCommerceEnum).toBe('purchase');
        expect(refundCommerceEnum).toBe('refund');
        expect(promotionViewCommerceEnum).toBe('promotion_view');
        expect(promotionClickCommerceEnum).toBe('promotion_click');
        expect(addToWishlistCommerceEnum).toBe('add_to_wishlist');
        expect(removeFromWishlistCommerceEnum).toBe('remove_from_wishlist');
        expect(impressionCommerceEnum).toBe('impression');

        const consentState: ConsentState = {
            gdpr: {
                some_consent_object: {
                    consented: true,
                    purpose: 'Add U to everything',
                    document: 'standards.v1',
                    timestamp_unixtime_ms: 1460592000,
                    location: 'Great Britain',
                    hardware_id: 'my_macbouk_prou',
                },
            },
            ccpa: {
                data_sale_opt_out: {
                    consented: true,
                    timestamp_unixtime_ms: 1577836800,
                    location: 'California',
                    hardware_id: 'my_computers_mac_address',
                },
            },
        };
        expect(consentState).toBeDefined();

        const crashReportEvent: CrashReportEvent = {
            event_type: EventTypeEnum.crashReport,
            data: {
                breadcrumbs: ['rye', 'whole_wheat'],
                class_name: 'CrashReportClass',
                severity: 'crispy',
                message: 'Does anyone smell burnt toast?',
                stack_trace: '<stack trace>',
                exception_handled: false,
                topmost_context: 'test',
                pl_crash_report_file_base64: 'base63.999',
                ios_image_base_address: 12345,
                ios_image_size: 42,
                session_number: 32,
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(crashReportEvent).toBeDefined();

        const customEvent: CustomEvent = {
            event_type: EventTypeEnum.customEvent,
            data: {
                custom_event_type: CustomEventDataCustomEventTypeEnum.other,
                event_name: 'My custom event',
                custom_flags: {
                    custom: 'flag',
                },
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(customEvent).toBeDefined();

        const portraitDeviceEnum: DeviceCurrentStateDeviceOrientation =
            DeviceCurrentStateDeviceOrientationEnum.portrait;
        const portaitUpsideDownEnum: DeviceCurrentStateDeviceOrientation =
            DeviceCurrentStateDeviceOrientationEnum.portraitUpsideDown;
        const landscapeEnum: DeviceCurrentStateDeviceOrientation =
            DeviceCurrentStateDeviceOrientationEnum.landscape;
        const landscapeLeftEnum: DeviceCurrentStateDeviceOrientation =
            DeviceCurrentStateDeviceOrientationEnum.landscapeLeft;
        const landscapeRightEnum: DeviceCurrentStateDeviceOrientation =
            DeviceCurrentStateDeviceOrientationEnum.landscapeRight;
        const faceUpEnum: DeviceCurrentStateDeviceOrientation =
            DeviceCurrentStateDeviceOrientationEnum.faceUp;
        const faceDownEnum: DeviceCurrentStateDeviceOrientation =
            DeviceCurrentStateDeviceOrientationEnum.faceDown;
        const squareEnum: DeviceCurrentStateDeviceOrientation =
            DeviceCurrentStateDeviceOrientationEnum.square;

        expect(portraitDeviceEnum).toBe('portrait');
        expect(portaitUpsideDownEnum).toBe('portrait_upside_down');
        expect(landscapeEnum).toBe('landscape');
        expect(landscapeLeftEnum).toBe('LandscapeLeft');
        expect(landscapeRightEnum).toBe('LandscapeRight');
        expect(faceUpEnum).toBe('FaceUp');
        expect(faceDownEnum).toBe('FaceDown');
        expect(squareEnum).toBe('Square');

        const portraitStatusBarEnum: DeviceCurrentStateStatusBarOrientation =
            DeviceCurrentStateStatusBarOrientationEnum.portrait;
        const portaitUpsideDownStatusBarEnum: DeviceCurrentStateStatusBarOrientation =
            DeviceCurrentStateStatusBarOrientationEnum.portraitUpsideDown;
        const landscapeStatusBarEnum: DeviceCurrentStateStatusBarOrientation =
            DeviceCurrentStateStatusBarOrientationEnum.landscape;
        const landscapeLeftStatusBarEnum: DeviceCurrentStateStatusBarOrientation =
            DeviceCurrentStateStatusBarOrientationEnum.landscapeLeft;
        const landscapeRightStatusBarEnum: DeviceCurrentStateStatusBarOrientation =
            DeviceCurrentStateStatusBarOrientationEnum.landscapeRight;
        const faceUpStatusBarEnum: DeviceCurrentStateStatusBarOrientation =
            DeviceCurrentStateStatusBarOrientationEnum.faceUp;
        const faceDownStatusBarEnum: DeviceCurrentStateStatusBarOrientation =
            DeviceCurrentStateStatusBarOrientationEnum.faceDown;
        const squareStatusBarEnum: DeviceCurrentStateStatusBarOrientation =
            DeviceCurrentStateStatusBarOrientationEnum.square;

        expect(portraitStatusBarEnum).toBe('portrait');
        expect(portaitUpsideDownStatusBarEnum).toBe('portrait_upside_down');
        expect(landscapeStatusBarEnum).toBe('landscape');
        expect(landscapeLeftStatusBarEnum).toBe('LandscapeLeft');
        expect(landscapeRightStatusBarEnum).toBe('LandscapeRight');
        expect(faceUpStatusBarEnum).toBe('FaceUp');
        expect(faceDownStatusBarEnum).toBe('FaceDown');
        expect(squareStatusBarEnum).toBe('Square');

        const iosDeviceInfo: DeviceInformationPlatform =
            DeviceInformationPlatformEnum.iOS;
        const androidDeviceInfo: DeviceInformationPlatform =
            DeviceInformationPlatformEnum.android;
        const webDeviceInfo: DeviceInformationPlatform =
            DeviceInformationPlatformEnum.web;
        const desktopDeviceInfo: DeviceInformationPlatform =
            DeviceInformationPlatformEnum.desktop;
        const tvOsDeviceInfo: DeviceInformationPlatform =
            DeviceInformationPlatformEnum.tvOS;
        const rokuDeviceInfo: DeviceInformationPlatform =
            DeviceInformationPlatformEnum.roku;
        const outOfBandDeviceInfo: DeviceInformationPlatform =
            DeviceInformationPlatformEnum.outOfBand;
        const smartTVDeviceInfo: DeviceInformationPlatform =
            DeviceInformationPlatformEnum.smartTV;
        const xboxDeviceInfo: DeviceInformationPlatform =
            DeviceInformationPlatformEnum.xbox;

        expect(iosDeviceInfo).toBe('iOS');
        expect(androidDeviceInfo).toBe('Android');
        expect(webDeviceInfo).toBe('web');
        expect(desktopDeviceInfo).toBe('desktop');
        expect(tvOsDeviceInfo).toBe('tvOS');
        expect(rokuDeviceInfo).toBe('roku');
        expect(outOfBandDeviceInfo).toBe('out_of_band');
        expect(smartTVDeviceInfo).toBe('smart_tv');
        expect(xboxDeviceInfo).toBe('xbox');

        const networkEvent: NetworkPerformanceEvent = {
            event_type: EventTypeEnum.networkPerformance,
            data: {
                http_verb: 'POST',
                url: 'mparticle.test',
                time_elapsed: 2321323,
                bytes_in: 3,
                bytes_out: 230982,
                response_code: 418,
                data: 'Brent Spiner',
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(networkEvent).toBeDefined();

        const optOut: OptOutEvent = {
            event_type: EventTypeEnum.optOut,
            data: {
                is_opted_out: false,
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(optOut).toBeDefined();

        const unknownProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.unknown;
        const addToCartProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.addToCart;
        const removeFromCartProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.removeFromCart;
        const checkoutProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.checkout;
        const checkoutOptionProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.checkoutOption;
        const clickProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.click;
        const viewDetailProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.viewDetail;
        const purchaseProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.purchase;
        const refundProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.refund;
        const addToWishlistProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.addToWishlist;
        const removeFromWishlistProductionActionEnum: ProductActionAction =
            ProductActionActionEnum.removeFromWishlist;

        expect(unknownProductionActionEnum).toBe('unknown');
        expect(addToCartProductionActionEnum).toBe('add_to_cart');
        expect(removeFromCartProductionActionEnum).toBe('remove_from_cart');
        expect(checkoutProductionActionEnum).toBe('checkout');
        expect(checkoutOptionProductionActionEnum).toBe('checkout_option');
        expect(clickProductionActionEnum).toBe('click');
        expect(viewDetailProductionActionEnum).toBe('view_detail');
        expect(purchaseProductionActionEnum).toBe('purchase');
        expect(refundProductionActionEnum).toBe('refund');
        expect(addToWishlistProductionActionEnum).toBe('add_to_wishlist');
        expect(removeFromWishlistProductionActionEnum).toBe(
            'remove_from_wish_list'
        );

        const profileEvent: ProfileEvent = {
            event_type: EventTypeEnum.profile,
            data: {
                previous_mpid: 23421234124312,
                current_mpid: -12341889128911,
                profile_event_type: ProfileEventDataProfileEventTypeEnum.signup,
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(profileEvent).toBeDefined();

        const signupProfileEventEnum: ProfileEventDataProfileEventType =
            ProfileEventDataProfileEventTypeEnum.signup;
        const loginProfileEventEnum: ProfileEventDataProfileEventType =
            ProfileEventDataProfileEventTypeEnum.login;
        const logoutProfileEventEnum: ProfileEventDataProfileEventType =
            ProfileEventDataProfileEventTypeEnum.logout;
        const updateProfileEventEnum: ProfileEventDataProfileEventType =
            ProfileEventDataProfileEventTypeEnum.update;
        const deleteProfileEventEnum: ProfileEventDataProfileEventType =
            ProfileEventDataProfileEventTypeEnum.delete;

        expect(signupProfileEventEnum).toBe('signup');
        expect(loginProfileEventEnum).toBe('login');
        expect(logoutProfileEventEnum).toBe('logout');
        expect(updateProfileEventEnum).toBe('update');
        expect(deleteProfileEventEnum).toBe('delete');

        const clickPromotionActionEnum: PromotionActionAction =
            PromotionActionActionEnum.click;
        const viewPromotionActionEnum: PromotionActionAction =
            PromotionActionActionEnum.view;

        expect(clickPromotionActionEnum).toBe('click');
        expect(viewPromotionActionEnum).toBe('view');

        const pushMessageEvent: PushMessageEvent = {
            event_type: EventTypeEnum.pushMessage,
            data: {
                push_message_token: 'some-token-value',
                push_message_type: PushMessageEventDataPushMessageTypeEnum.sent,
                message: 'I sent a token',
                network: 'tcpip',
                push_notification_payload: 'a buck fifty',
                application_state:
                    PushMessageEventDataApplicationStateEnum.foreground,
                action_identifier: 'foo-bar-baz-fizz-buzz',
                push_message_behavior:
                    PushMessageEventDataPushMessageBehaviorEnum.received,
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(pushMessageEvent).toBeDefined();

        const sentPushMessageEnum: PushMessageEventDataPushMessageType =
            PushMessageEventDataPushMessageTypeEnum.sent;
        const receivedPushMessageEnum: PushMessageEventDataPushMessageType =
            PushMessageEventDataPushMessageTypeEnum.received;
        const actionPushMessageEnum: PushMessageEventDataPushMessageType =
            PushMessageEventDataPushMessageTypeEnum.action;

        expect(sentPushMessageEnum).toBe('sent');
        expect(receivedPushMessageEnum).toBe('received');
        expect(actionPushMessageEnum).toBe('action');

        const notRunningPushMessageStateEnum: PushMessageEventDataApplicationState =
            PushMessageEventDataApplicationStateEnum.notRunning;
        const backgroundPushMessageStateEnum: PushMessageEventDataApplicationState =
            PushMessageEventDataApplicationStateEnum.background;
        const foregroundPushMessageStateEnum: PushMessageEventDataApplicationState =
            PushMessageEventDataApplicationStateEnum.foreground;

        expect(notRunningPushMessageStateEnum).toBe('not_running');
        expect(backgroundPushMessageStateEnum).toBe('background');
        expect(foregroundPushMessageStateEnum).toBe('foreground');

        const receivedPushMessageBehaviorEnum: PushMessageEventDataPushMessageBehavior =
            PushMessageEventDataPushMessageBehaviorEnum.received;
        const directOpenPushMessageBehaviorEnum: PushMessageEventDataPushMessageBehavior =
            PushMessageEventDataPushMessageBehaviorEnum.directOpen;
        const readPushMessageBehaviorEnum: PushMessageEventDataPushMessageBehavior =
            PushMessageEventDataPushMessageBehaviorEnum.read;
        const influencedOpenPushMessageBehaviorEnum: PushMessageEventDataPushMessageBehavior =
            PushMessageEventDataPushMessageBehaviorEnum.influencedOpen;
        const displayedPushMessageBehaviorEnum: PushMessageEventDataPushMessageBehavior =
            PushMessageEventDataPushMessageBehaviorEnum.displayed;

        expect(receivedPushMessageBehaviorEnum).toBe('Received');
        expect(directOpenPushMessageBehaviorEnum).toBe('DirectOpen');
        expect(readPushMessageBehaviorEnum).toBe('Read');
        expect(influencedOpenPushMessageBehaviorEnum).toBe('InfluencedOpen');
        expect(displayedPushMessageBehaviorEnum).toBe('Displayed');

        const pushRegistrationEvent: PushRegistrationEvent = {
            event_type: EventTypeEnum.pushRegistration,
            data: {
                register: true,
                registration_token: 'qwerqwerqvqwerqoiytqoiupoqe',
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(pushRegistrationEvent).toBeDefined();

        const screenViewEvent: ScreenViewEvent = {
            event_type: EventTypeEnum.screenView,
            data: {
                screen_name: 'aol',
                activity_type: 'instant message',
                custom_flags: {
                    custom: 'flag',
                },
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(screenViewEvent).toBeDefined();

        const sessionEndEvent: SessionEndEvent = {
            event_type: EventTypeEnum.sessionEnd,
            data: {
                session_duration_ms: 1234132,
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(sessionEndEvent).toBeDefined();

        const sessionStartEvent: SessionStartEvent = {
            event_type: EventTypeEnum.sessionStart,
            data: {
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(sessionStartEvent).toBeDefined();

        const nativeSourceInfoEnum: SourceInformationChannel =
            SourceInformationChannelEnum.native;
        const jsSourceInfoEnum: SourceInformationChannel =
            SourceInformationChannelEnum.javascript;
        const pixelSourceInfoEnum: SourceInformationChannel =
            SourceInformationChannelEnum.pixel;
        const desktopSourceInfoEnum: SourceInformationChannel =
            SourceInformationChannelEnum.desktop;
        const partnerSourceInfoEnum: SourceInformationChannel =
            SourceInformationChannelEnum.partner;
        const s2sSourceInfoEnum: SourceInformationChannel =
            SourceInformationChannelEnum.serverToServer;

        expect(nativeSourceInfoEnum).toBe('native');
        expect(jsSourceInfoEnum).toBe('javascript');
        expect(pixelSourceInfoEnum).toBe('pixel');
        expect(desktopSourceInfoEnum).toBe('desktop');
        expect(partnerSourceInfoEnum).toBe('partner');
        expect(s2sSourceInfoEnum).toBe('server_to_server');

        const userAttributeChangeEvent: UserAttributeChangeEvent = {
            event_type: EventTypeEnum.userAttributeChange,
            data: {
                user_attribute_name: 'shoe size',
                new: '8.5',
                old: '10.125',
                deleted: false,
                is_new_attribute: false,
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(userAttributeChangeEvent).toBeDefined();

        const userIdentityChangeEvent: UserIdentityChangeEvent = {
            event_type: EventTypeEnum.userIdentityChange,
            data: {
                old: {
                    identity_type: IdentityTypeEnum.customerId,
                    identity: 'Steve Rogers',
                    timestamp_unixtime_ms: 1918,
                    created_this_batch: false,
                },
                new: {
                    identity_type: IdentityTypeEnum.alias,
                    identity: 'Captain America',
                    timestamp_unixtime_ms: 1945,
                    created_this_batch: false,
                },
                timestamp_unixtime_ms: 12313412345666,
                event_id: 811987881991001,
                source_message_id: 'the-source',
                session_id: 1234000134,
                session_uuid: 'this-test-uuid',
                session_start_unixtime_ms: 1202382828382,
                event_start_unixtime_ms: 1966929200019,
                custom_attributes: { key: 'locke' },
                location: {
                    latitude: 42,
                    longitude: 42,
                    accuracy: 1,
                },
                device_current_state: {},
                is_goal_defined: true,
                lifetime_value_change: false,
                lifetime_value_attribute_name: 'immortality',
                data_connection_type: 'sockets',
                event_num: 929111,
                view_controller: 'tv remote',
                is_main_thread: false,
                canonical_name: 'skywalker',
                event_system_notification_info: {
                    type: 'gdpr_change',
                },
            },
        };
        expect(userIdentityChangeEvent).toBeDefined();
    });
});
