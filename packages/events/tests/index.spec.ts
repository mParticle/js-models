import {
  BaseEvent,
  ApplicationInformation,
  ApplicationInformationOsEnum,
  ApplicationStateTransitionEventEventTypeEnum,
  ApplicationStateTransitionEventData,
  ApplicationStateTransitionEventDataApplicationTransitionTypeEnum,
  AttributionInfo,
  Batch,
  BatchEnvironmentEnum,
  BatchUserIdentities,
  BreadcrumbEvent,
  BreadcrumbEventEventTypeEnum,
  CommerceEvent,
  ConsentState,
  CrashReportEvent,
  CommerceEventEventTypeEnum,
  CommerceEventDataCustomEventTypeEnum,
  DeviceCurrentStateDeviceOrientationEnum,
  DeviceCurrentStateStatusBarOrientationEnum,
  DeviceInformationPlatformEnum,
  CustomEvent,
  NetworkPerformanceEvent,
  OptOutEvent,
  ProductActionActionEnum,
  ProfileEvent,
  ProfileEventDataProfileEventTypeEnum,
  PromotionActionActionEnum,
  PushMessageEvent,
  PushMessageEventDataPushMessageTypeEnum,
  PushMessageEventDataApplicationStateEnum,
  PushMessageEventDataPushMessageBehaviorEnum,
  PushRegistrationEvent,
  ScreenViewEvent,
  SessionEndEvent,
  SessionStartEvent,
  SourceInformationChannelEnum,
  UserAttributeChangeEvent,
  UserIdentityChangeEvent
} from '../src/index';

describe('Event Server Models', () => {
  it('should declare all interfaces', () => {
    const appInfo: ApplicationInformation = {
      _package: 'test_package',
      application_name: 'test',
      application_version: '1.2.3,',
      application_build_number: '112233',
      install_referrer: 'test_install_referrer',
      os: 'MobileWeb',
      apple_search_ads_attributes: {
        baz: {
          nested: 'true'
        }
      }
    };

    expect(appInfo).toBeDefined();

    const xbox: ApplicationInformationOsEnum = 'Xbox';
    const unknown: ApplicationInformationOsEnum = 'Unknown';
    const IOS: ApplicationInformationOsEnum = 'IOS';
    const android: ApplicationInformationOsEnum = 'Android';
    const windowsPhone: ApplicationInformationOsEnum = 'WindowsPhone';
    const mobileWeb: ApplicationInformationOsEnum = 'MobileWeb';
    const unityIOS: ApplicationInformationOsEnum = 'UnityIOS';
    const unityAndroid: ApplicationInformationOsEnum = 'UnityAndroid';
    const desktop: ApplicationInformationOsEnum = 'Desktop';
    const TVOS: ApplicationInformationOsEnum = 'TVOS';
    const roku: ApplicationInformationOsEnum = 'Roku';
    const outOfBand: ApplicationInformationOsEnum = 'OutOfBand';
    const alexa: ApplicationInformationOsEnum = 'Alexa';
    const smartTV: ApplicationInformationOsEnum = 'SmartTV';
    const fireTV: ApplicationInformationOsEnum = 'FireTV';

    expect(xbox).toBeDefined();
    expect(unknown).toBeDefined();
    expect(IOS).toBeDefined();
    expect(android).toBeDefined();
    expect(windowsPhone).toBeDefined();
    expect(mobileWeb).toBeDefined();
    expect(unityIOS).toBeDefined();
    expect(unityAndroid).toBeDefined();
    expect(desktop).toBeDefined();
    expect(TVOS).toBeDefined();
    expect(roku).toBeDefined();
    expect(outOfBand).toBeDefined();
    expect(alexa).toBeDefined();
    expect(smartTV).toBeDefined();
    expect(fireTV).toBeDefined();

    const appStateTransition: ApplicationStateTransitionEventEventTypeEnum =
      'application_state_transition';
    expect(appStateTransition).toBeDefined();

    const appStateTransitionEvent: ApplicationStateTransitionEventData = {
      successfully_closed: true,
      is_first_run: false,
      is_upgrade: false,
      push_notification_payload: 'PUSH!',
      launch_referral: 'maybe',
      application_transition_type: 'application_exit'
    };
    expect(appStateTransitionEvent).toBeDefined();

    const applicationInitialized: ApplicationStateTransitionEventDataApplicationTransitionTypeEnum =
      'application_initialized';
    const applicationExit: ApplicationStateTransitionEventDataApplicationTransitionTypeEnum =
      'application_exit';
    const applicationBackground: ApplicationStateTransitionEventDataApplicationTransitionTypeEnum =
      'application_background';
    const applicationForeground: ApplicationStateTransitionEventDataApplicationTransitionTypeEnum =
      'application_foreground';
    expect(applicationInitialized).toBeDefined();
    expect(applicationExit).toBeDefined();
    expect(applicationBackground).toBeDefined();
    expect(applicationForeground).toBeDefined();

    const attribution: AttributionInfo = {
      service_provider: 'service provider',
      publisher: 'publisher',
      campaign: 'take over all the things'
    };
    expect(attribution).toBeDefined();

    const baseEvent: BaseEvent = {
      event_type: 'opt_out',
      data: {
        timestamp_unixtime_ms: 350006400,
        source_message_id: 'the_source',
        session_id: 8675309,
        session_uuid: 'asdopuiopasduoipasdfoipuewrquoipqwer',
        session_start_unixtime_ms: 35000640,
        event_start_unixtime_ms: 35000640,
        custom_attributes: { key: 'value' },
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
        event_system_notification_info: { type: 'gdpr_change' }
      }
    };

    expect(baseEvent).toBeDefined();

    const batch: Batch = {
      source_request_id: '123412345',
      events: [baseEvent],
      device_info: {
        brand: 'test_device'
      },
      application_info: {
        application_name: 'test'
      },
      user_attributes: {
        name: 'tester'
      },
      deleted_user_attributes: ['social-security-number'],
      user_identities: {
        alias: 'clark-kent'
      },
      environment: 'development',
      api_key: '1324213241234',
      api_keys: ['9080qerqw9er8-q0w9easfd'],
      ip: '127.0.0.1',
      integration_attributes: {
        something: {
          foo: 'bar'
        }
      },
      partner_identity: 'bizarro',
      source_info: {
        channel: 'javascript'
      },
      mp_deviceid: '12309100100011771012309',
      attribution_info: {
        service_provider: 'test',
        publisher: 'test',
        campaign: 'test'
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
            hardware_id: 'macbook-pro'
          }
        },
        ccpa: {
          'data_sale_opt_out': {
            consented: true,
            location: 'mparticle.test/gdpr',
            timestamp_unixtime_ms: 12341324134134,
            hardware_id: 'macbook-pro'
          }
        }
      },
      job_id: 'foo.21324.23',
      context: {
        data_plan: {
          plan_id: '212342',
          plan_version: 3
        }
      }
    };
    expect(batch).toBeDefined();

    const unknownBatchEnvironment: BatchEnvironmentEnum = 'unknown';
    const devBatchEnvironment: BatchEnvironmentEnum = 'development';
    const prodBatchEnvironment: BatchEnvironmentEnum = 'production';

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
      other_id_4: 'other_4'
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      },
      event_type: 'breadcrumb'
    };
    expect(breadcrumbEvent).toBeDefined();

    const breadcrumbEventType: BreadcrumbEventEventTypeEnum = 'breadcrumb';
    expect(breadcrumbEventType).toBe('breadcrumb');

    const commerceEventData: CommerceEvent = {
      event_type: 'commerce_event',
      data: {
        product_action: {
          action: 'click'
        },
        promotion_action: {
          action: 'view',
          promotions: [
            {
              id: 'q2eqwer',
              name: 'test-promo',
              creative: 'awesome promo',
              position: 'inside array'
            }
          ]
        },
        product_impressions: [
          {
            product_impression_list: 'foo',
            products: [
              {
                id: '12341234',
                name: 'moss covered three handled family credenza'
              }
            ]
          }
        ],
        shopping_cart: {
          products: [
            {
              id: '199199232',
              name: 'lawn darts'
            }
          ]
        },
        currency_code: 'USD',
        screen_name: 'test screen',
        is_non_interactive: false,
        event_name: 'Test Event',
        custom_event_type: 'view_detail',
        custom_flags: {}
      }
    };
    expect(commerceEventData).toBeDefined();

    const commerceEventEventType: CommerceEventEventTypeEnum = 'commerce_event';
    expect(commerceEventEventType).toBe('commerce_event');

    const addToCartCommerceEnum: CommerceEventDataCustomEventTypeEnum =
      'add_to_cart';
    const removeFromCartCommerceEnumEnum: CommerceEventDataCustomEventTypeEnum =
      'remove_from_cart';
    const checkoutCommerceEnum: CommerceEventDataCustomEventTypeEnum =
      'checkout';
    const checkoutOptionCommerceEnum: CommerceEventDataCustomEventTypeEnum =
      'checkout_option';
    const clickCommerceEnum: CommerceEventDataCustomEventTypeEnum = 'click';
    const veiwDetailCommerceEnum: CommerceEventDataCustomEventTypeEnum =
      'view_detail';
    const purchaseCommerceEnum: CommerceEventDataCustomEventTypeEnum =
      'purchase';
    const refundCommerceEnum: CommerceEventDataCustomEventTypeEnum = 'refund';
    const promotionViewCommerceEnum: CommerceEventDataCustomEventTypeEnum =
      'promotion_view';
    const promotionClickCommerceEnum: CommerceEventDataCustomEventTypeEnum =
      'promotion_click';
    const addToWishlistCommerceEnum: CommerceEventDataCustomEventTypeEnum =
      'add_to_wishlist';
    const removeFromWishlistCommerceEnum: CommerceEventDataCustomEventTypeEnum =
      'remove_from_wishlist';
    const impressionCommerceEnum: CommerceEventDataCustomEventTypeEnum =
      'impression';

    expect(addToCartCommerceEnum).toBe('add_to_cart');
    expect(removeFromCartCommerceEnumEnum).toBe('remove_from_cart');
    expect(checkoutCommerceEnum).toBe('checkout');
    expect(checkoutOptionCommerceEnum).toBe('checkout_option');
    expect(clickCommerceEnum).toBe('click');
    expect(veiwDetailCommerceEnum).toBe('view_detail');
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
          hardware_id: 'my_macbouk_prou'
        }
      },
      ccpa: {
        data_sale_opt_out: {
          consented: true,
          timestamp_unixtime_ms: 1577836800,
          location: 'California',
          hardware_id: 'my_computers_mac_address'
        }
      }
    };
    expect(consentState).toBeDefined();

    const crashReportEvent: CrashReportEvent = {
      event_type: 'crash_report',
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(crashReportEvent).toBeDefined();

    const customEvent: CustomEvent = {
      event_type: 'custom_event',
      data: {
        custom_event_type: 'other',
        event_name: 'My custom event',
        custom_flags: {
          custom: 'flag'
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(customEvent).toBeDefined();

    const portraitDeviceEnum: DeviceCurrentStateDeviceOrientationEnum =
      'portrait';
    const portaitUpsideDownEnum: DeviceCurrentStateDeviceOrientationEnum =
      'portrait_upside_down';
    const landscapeEnum: DeviceCurrentStateDeviceOrientationEnum = 'landscape';
    const landscapeLeftEnum: DeviceCurrentStateDeviceOrientationEnum =
      'LandscapeLeft';
    const landscapeRightEnum: DeviceCurrentStateDeviceOrientationEnum =
      'LandscapeRight';
    const faceUpEnum: DeviceCurrentStateDeviceOrientationEnum = 'FaceUp';
    const faceDownEnum: DeviceCurrentStateDeviceOrientationEnum = 'FaceDown';
    const squareEnum: DeviceCurrentStateDeviceOrientationEnum = 'Square';

    expect(portraitDeviceEnum).toBe('portrait');
    expect(portaitUpsideDownEnum).toBe('portrait_upside_down');
    expect(landscapeEnum).toBe('landscape');
    expect(landscapeLeftEnum).toBe('LandscapeLeft');
    expect(landscapeRightEnum).toBe('LandscapeRight');
    expect(faceUpEnum).toBe('FaceUp');
    expect(faceDownEnum).toBe('FaceDown');
    expect(squareEnum).toBe('Square');

    const portraitStatusBarEnum: DeviceCurrentStateStatusBarOrientationEnum =
      'portrait';
    const portaitUpsideDownStatusBarEnum: DeviceCurrentStateStatusBarOrientationEnum =
      'portrait_upside_down';
    const landscapeStatusBarEnum: DeviceCurrentStateStatusBarOrientationEnum =
      'landscape';
    const landscapeLeftStatusBarEnum: DeviceCurrentStateStatusBarOrientationEnum =
      'LandscapeLeft';
    const landscapeRightStatusBarEnum: DeviceCurrentStateStatusBarOrientationEnum =
      'LandscapeRight';
    const faceUpStatusBarEnum: DeviceCurrentStateStatusBarOrientationEnum =
      'FaceUp';
    const faceDownStatusBarEnum: DeviceCurrentStateStatusBarOrientationEnum =
      'FaceDown';
    const squareStatusBarEnum: DeviceCurrentStateStatusBarOrientationEnum =
      'Square';

    expect(portraitStatusBarEnum).toBe('portrait');
    expect(portaitUpsideDownStatusBarEnum).toBe('portrait_upside_down');
    expect(landscapeStatusBarEnum).toBe('landscape');
    expect(landscapeLeftStatusBarEnum).toBe('LandscapeLeft');
    expect(landscapeRightStatusBarEnum).toBe('LandscapeRight');
    expect(faceUpStatusBarEnum).toBe('FaceUp');
    expect(faceDownStatusBarEnum).toBe('FaceDown');
    expect(squareStatusBarEnum).toBe('Square');

    const iosDeviceInfo: DeviceInformationPlatformEnum = 'iOS';
    const androidDeviceInfo: DeviceInformationPlatformEnum = 'Android';
    const webDeviceInfo: DeviceInformationPlatformEnum = 'web';
    const desktopDeviceInfo: DeviceInformationPlatformEnum = 'desktop';
    const tvOsDeviceInfo: DeviceInformationPlatformEnum = 'tvOS';
    const rokuDeviceInfo: DeviceInformationPlatformEnum = 'roku';
    const outOfBandDeviceInfo: DeviceInformationPlatformEnum = 'out_of_band';
    const smartTVDeviceInfo: DeviceInformationPlatformEnum = 'smart_tv';
    const xboxDeviceInfo: DeviceInformationPlatformEnum = 'xbox';

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
      event_type: 'network_performance',
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(networkEvent).toBeDefined();

    const optOut: OptOutEvent = {
      event_type: 'opt_out',
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(optOut).toBeDefined();

    const unknownProductionActionEnum: ProductActionActionEnum = 'unknown';
    const addToCartProductionActionEnum: ProductActionActionEnum =
      'add_to_cart';
    const removeFromCartProductionActionEnum: ProductActionActionEnum =
      'remove_from_cart';
    const checkoutProductionActionEnum: ProductActionActionEnum = 'checkout';
    const checkoutOptionProductionActionEnum: ProductActionActionEnum =
      'checkout_option';
    const clickProductionActionEnum: ProductActionActionEnum = 'click';
    const viewDetailProductionActionEnum: ProductActionActionEnum =
      'view_detail';
    const purchaseProductionActionEnum: ProductActionActionEnum = 'purchase';
    const refundProductionActionEnum: ProductActionActionEnum = 'refund';
    const addToWishlistProductionActionEnum: ProductActionActionEnum =
      'add_to_wishlist';
    const removeFromWishlistProductionActionEnum: ProductActionActionEnum =
      'remove_from_wish_list';

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
      event_type: 'profile',
      data: {
        previous_mpid: 23421234124312,
        current_mpid: -12341889128911,
        profile_event_type: 'signup',
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(profileEvent).toBeDefined();

    const signupProfileEventEnum: ProfileEventDataProfileEventTypeEnum =
      'signup';
    const loginProfileEventEnum: ProfileEventDataProfileEventTypeEnum = 'login';
    const logoutProfileEventEnum: ProfileEventDataProfileEventTypeEnum =
      'logout';
    const updateProfileEventEnum: ProfileEventDataProfileEventTypeEnum =
      'update';
    const deleteProfileEventEnum: ProfileEventDataProfileEventTypeEnum =
      'delete';

    expect(signupProfileEventEnum).toBe('signup');
    expect(loginProfileEventEnum).toBe('login');
    expect(logoutProfileEventEnum).toBe('logout');
    expect(updateProfileEventEnum).toBe('update');
    expect(deleteProfileEventEnum).toBe('delete');

    const clickPromotionActionEnum: PromotionActionActionEnum = 'click';
    const viewPromotionActionEnum: PromotionActionActionEnum = 'view';

    expect(clickPromotionActionEnum).toBe('click');
    expect(viewPromotionActionEnum).toBe('view');

    const pushMessageEvent: PushMessageEvent = {
      event_type: 'push_message',
      data: {
        push_message_token: 'some-token-value',
        push_message_type: 'sent',
        message: 'I sent a token',
        network: 'tcpip',
        push_notification_payload: 'a buck fifty',
        application_state: 'foreground',
        action_identifier: 'foo-bar-baz-fizz-buzz',
        push_message_behavior: 'Received',
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(pushMessageEvent).toBeDefined();

    const sentPushMessageEnum: PushMessageEventDataPushMessageTypeEnum = 'sent';
    const receivedPushMessageEnum: PushMessageEventDataPushMessageTypeEnum =
      'received';
    const actionPushMessageEnum: PushMessageEventDataPushMessageTypeEnum =
      'action';

    expect(sentPushMessageEnum).toBe('sent');
    expect(receivedPushMessageEnum).toBe('received');
    expect(actionPushMessageEnum).toBe('action');

    const notRunningPushMessageStateEnum: PushMessageEventDataApplicationStateEnum =
      'not_running';
    const backgroundPushMessageStateEnum: PushMessageEventDataApplicationStateEnum =
      'background';
    const foregroundPushMessageStateEnum: PushMessageEventDataApplicationStateEnum =
      'foreground';

    expect(notRunningPushMessageStateEnum).toBe('not_running');
    expect(backgroundPushMessageStateEnum).toBe('background');
    expect(foregroundPushMessageStateEnum).toBe('foreground');

    const receivedPushMessageBehaviorEnum: PushMessageEventDataPushMessageBehaviorEnum =
      'Received';
    const directOpenPushMessageBehaviorEnum: PushMessageEventDataPushMessageBehaviorEnum =
      'DirectOpen';
    const readPushMessageBehaviorEnum: PushMessageEventDataPushMessageBehaviorEnum =
      'Read';
    const influencedOpenPushMessageBehaviorEnum: PushMessageEventDataPushMessageBehaviorEnum =
      'InfluencedOpen';
    const displayedPushMessageBehaviorEnum: PushMessageEventDataPushMessageBehaviorEnum =
      'Displayed';

    expect(receivedPushMessageBehaviorEnum).toBe('Received');
    expect(directOpenPushMessageBehaviorEnum).toBe('DirectOpen');
    expect(readPushMessageBehaviorEnum).toBe('Read');
    expect(influencedOpenPushMessageBehaviorEnum).toBe('InfluencedOpen');
    expect(displayedPushMessageBehaviorEnum).toBe('Displayed');

    const pushRegistrationEvent: PushRegistrationEvent = {
      event_type: 'push_registration',
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(pushRegistrationEvent).toBeDefined();

    const screenViewEvent: ScreenViewEvent = {
      event_type: 'screen_view',
      data: {
        screen_name: 'aol',
        activity_type: 'instant message',
        custom_flags: {
          custom: 'flag'
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(screenViewEvent).toBeDefined();

    const sessionEndEvent: SessionEndEvent = {
      event_type: 'session_end',
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(sessionEndEvent).toBeDefined();

    const sessionStartEvent: SessionStartEvent = {
      event_type: 'session_start',
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(sessionStartEvent).toBeDefined();

    const nativeSourceInfoEnum: SourceInformationChannelEnum = 'native';
    const jsSourceInfoEnum: SourceInformationChannelEnum = 'javascript';
    const pixelSourceInfoEnum: SourceInformationChannelEnum = 'pixel';
    const desktopSourceInfoEnum: SourceInformationChannelEnum = 'desktop';
    const partnerSourceInfoEnum: SourceInformationChannelEnum = 'partner';
    const s2sSourceInfoEnum: SourceInformationChannelEnum = 'server_to_server';

    expect(nativeSourceInfoEnum).toBe('native');
    expect(jsSourceInfoEnum).toBe('javascript');
    expect(pixelSourceInfoEnum).toBe('pixel');
    expect(desktopSourceInfoEnum).toBe('desktop');
    expect(partnerSourceInfoEnum).toBe('partner');
    expect(s2sSourceInfoEnum).toBe('server_to_server');

    const userAttributeChangeEvent: UserAttributeChangeEvent = {
      event_type: 'user_attribute_change',
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(userAttributeChangeEvent).toBeDefined();

    const userIdentityChangeEvent: UserIdentityChangeEvent = {
      event_type: 'user_identity_change',
      data: {
        old: {
          identity_type: 'customer_id',
          identity: 'Steve Rogers',
          timestamp_unixtime_ms: 1918,
          created_this_batch: false
        },
        new: {
          identity_type: 'alias',
          identity: 'Captain America',
          timestamp_unixtime_ms: 1945,
          created_this_batch: false
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
          accuracy: 1
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
          type: 'gdpr_change'
        }
      }
    };
    expect(userIdentityChangeEvent).toBeDefined();
  });
});
