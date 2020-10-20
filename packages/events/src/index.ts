export interface ApplicationInformation {
    application_name?: string;
    application_version?: string;
    application_build_number?: string;
    install_referrer?: string;
    _package?: string;
    os?: ApplicationInformationOsEnum;
    apple_search_ads_attributes?: { [key: string]: { [key: string]: string } };
}

/**
 * Enum for the os property.
 */
export enum ApplicationInformationOsEnum {
    unknown = 'Unknown',
    iOS = 'IOS',
    android = 'Android',
    windowsPhone = 'WindowsPhone',
    mobileWeb = 'MobileWeb',
    unityIOS = 'UnityIOS',
    unityAndroid = 'UnityAndroid',
    desktop = 'Desktop',
    tvOS = 'TVOS',
    roku = 'Roku',
    outOfBand = 'OutOfBand',
    alexa = 'Alexa',
    smartTV = 'SmartTV',
    fireTV = 'FireTV',
    xbox = 'Xbox',
}

export type ApplicationInformationOs =
    | ApplicationInformationOsEnum.unknown
    | ApplicationInformationOsEnum.iOS
    | ApplicationInformationOsEnum.android
    | ApplicationInformationOsEnum.windowsPhone
    | ApplicationInformationOsEnum.mobileWeb
    | ApplicationInformationOsEnum.unityIOS
    | ApplicationInformationOsEnum.unityAndroid
    | ApplicationInformationOsEnum.desktop
    | ApplicationInformationOsEnum.tvOS
    | ApplicationInformationOsEnum.roku
    | ApplicationInformationOsEnum.outOfBand
    | ApplicationInformationOsEnum.alexa
    | ApplicationInformationOsEnum.smartTV
    | ApplicationInformationOsEnum.fireTV
    | ApplicationInformationOsEnum.xbox;

export interface ApplicationStateTransitionEvent {
    data?: ApplicationStateTransitionEventData;
    event_type: EventTypeEnum.applicationStateTransition;
}

/**
 * Enum for the event_type property.
 */
export enum ApplicationStateTransitionEventEventTypeEnum {
    applicationStateTransition = 'application_state_transition',
}

export type ApplicationStateTransitionEventEventType = ApplicationStateTransitionEventEventTypeEnum.applicationStateTransition;

export interface ApplicationStateTransitionEventData extends CommonEventData {
    successfully_closed?: boolean;
    is_first_run: boolean;
    is_upgrade: boolean;
    push_notification_payload?: string;
    launch_referral?: string;
    application_transition_type: ApplicationStateTransitionEventDataApplicationTransitionTypeEnum;
}

/**
 * Enum for the application_transition_type property.
 */
export enum ApplicationStateTransitionEventDataApplicationTransitionTypeEnum {
    applicationInitialized = 'application_initialized',
    applicationExit = 'application_exit',
    applicationBackground = 'application_background',
    applicationForeground = 'application_foreground',
}

export type ApplicationStateTransitionEventDataApplicationTransitionType =
    | ApplicationStateTransitionEventDataApplicationTransitionTypeEnum.applicationInitialized
    | ApplicationStateTransitionEventDataApplicationTransitionTypeEnum.applicationExit
    | ApplicationStateTransitionEventDataApplicationTransitionTypeEnum.applicationBackground
    | ApplicationStateTransitionEventDataApplicationTransitionTypeEnum.applicationForeground;

export interface AttributionInfo {
    service_provider: string;
    publisher: string;
    campaign: string;
}

export interface BaseEvent {
    data?: CommonEventData;
    event_type: EventType;
}

export interface Batch {
    source_request_id?: string;
    /**
     * Provide a list of event objects - such as CustomEvent, ScreenViewEvent, or CommerceEvent
     */
    events?: BaseEvent[];
    device_info?: DeviceInformation;
    application_info?: ApplicationInformation;
    user_attributes?: { [key: string]: string | string[] };
    deleted_user_attributes?: string[];
    user_identities?: BatchUserIdentities;
    environment: BatchEnvironmentEnum;
    api_key?: string;
    api_keys?: string[];
    ip?: string;
    integration_attributes?: { [key: string]: { [key: string]: string } };
    partner_identity?: string;
    source_info?: SourceInformation;
    mp_deviceid?: string;
    attribution_info?: AttributionInfo;
    timestamp_unixtime_ms?: number;
    batch_id?: string | number;
    mpid: string | number;
    sdk_version?: string;
    consent_state?: ConsentState;
    job_id?: string;
    context?: Context;
}

/**
 * Enum for the environment property.
 */
export enum BatchEnvironmentEnum {
    unknown = 'unknown',
    development = 'development',
    production = 'production',
}

export type BatchEnvironment = 'unknown' | 'development' | 'production';

export interface BatchUserIdentities {
    other?: string;
    customer_id?: string;
    facebook?: string;
    twitter?: string;
    google?: string;
    microsoft?: string;
    yahoo?: string;
    email?: string;
    alias?: string;
    facebook_custom_audience_id?: string;
    other_id_2?: string;
    other_id_3?: string;
    other_id_4?: string;
    other_id_5?: string;
    other_id_6?: string;
    other_id_7?: string;
    other_id_8?: string;
    other_id_9?: string;
    other_id_10?: string;
    mobile_number?: string;
    phone_number_2?: string;
    phone_number_3?: string;
}

export interface BreadcrumbEvent {
    data?: BreakcrumbEventData;
    event_type: EventTypeEnum.breadcrumb;
}

/**
 * Enum for the event_type property.
 */
export enum BreadcrumbEventEventTypeEnum {
    breadcrumb = 'breadcrumb',
}
export type BreadcrumbEventEventType = BreadcrumbEventEventTypeEnum.breadcrumb;

export interface BreakcrumbEventData extends CommonEventData {
    session_number?: number;
    label: string;
}

export type CCPAConsentState = Omit<GDPRConsentState, 'purpose'>;

export interface CommerceEvent {
    data?: CommerceEventData;
    event_type: EventTypeEnum.commerceEvent;
}

/**
 * Enum for the event_type property.
 */
export enum CommerceEventEventTypeEnum {
    commerceEvent = 'commerce_event',
}
export type CommerceEventEventType = CommerceEventEventTypeEnum.commerceEvent;

export interface CommerceEventData extends CommonEventData {
    product_action?: ProductAction;
    promotion_action?: PromotionAction;
    product_impressions?: ProductImpression[];
    shopping_cart?: ShoppingCart;
    currency_code?: string;
    screen_name?: string;
    is_non_interactive?: boolean;
    event_name?: string;
    custom_event_type?: CommerceEventDataCustomEventTypeEnum;
    custom_flags?: { [key: string]: string };
}

/**
 * Enum for the custom_event_type property.
 */
export enum CommerceEventDataCustomEventTypeEnum {
    addToCart = 'add_to_cart',
    removeFromCart = 'remove_from_cart',
    checkout = 'checkout',
    checkoutOption = 'checkout_option',
    click = 'click',
    viewDetail = 'view_detail',
    purchase = 'purchase',
    refund = 'refund',
    promotionView = 'promotion_view',
    promotionClick = 'promotion_click',
    addToWishlist = 'add_to_wishlist',
    removeFromWishlist = 'remove_from_wishlist',
    impression = 'impression',
}

export type CommerceEventDataCustomEventType =
    | CommerceEventDataCustomEventTypeEnum.addToCart
    | CommerceEventDataCustomEventTypeEnum.removeFromCart
    | CommerceEventDataCustomEventTypeEnum.checkout
    | CommerceEventDataCustomEventTypeEnum.checkoutOption
    | CommerceEventDataCustomEventTypeEnum.click
    | CommerceEventDataCustomEventTypeEnum.viewDetail
    | CommerceEventDataCustomEventTypeEnum.purchase
    | CommerceEventDataCustomEventTypeEnum.refund
    | CommerceEventDataCustomEventTypeEnum.promotionView
    | CommerceEventDataCustomEventTypeEnum.promotionClick
    | CommerceEventDataCustomEventTypeEnum.addToWishlist
    | CommerceEventDataCustomEventTypeEnum.removeFromWishlist
    | CommerceEventDataCustomEventTypeEnum.impression;

export interface CommonEventData {
    timestamp_unixtime_ms?: number;
    event_id?: number;
    source_message_id?: string;
    session_id?: number;
    session_uuid?: string;
    session_start_unixtime_ms?: number;
    event_start_unixtime_ms?: number;
    custom_attributes?: { [key: string]: string };
    location?: GeoLocation;
    device_current_state?: DeviceCurrentState;
    is_goal_defined?: boolean;
    lifetime_value_change?: boolean;
    lifetime_value_attribute_name?: string;
    data_connection_type?: string;
    event_num?: number;
    view_controller?: string;
    is_main_thread?: boolean;
    canonical_name?: string;
    event_system_notification_info?: EventSystemNotificationInfo;
}

export interface ConsentState {
    gdpr?: { [key: string]: GDPRConsentState };
    ccpa?: { data_sale_opt_out: CCPAConsentState };
}

export interface CrashReportEvent {
    data?: CrashReportEventData;
    event_type: EventTypeEnum.crashReport;
}

/**
 * Enum for the event_type property.
 */
export enum CrashReportEventEventTypeEnum {
    crashReport = 'crash_report',
}

export type CrashReportEventEventType = CrashReportEventEventTypeEnum.crashReport;

export interface CrashReportEventData extends CommonEventData {
    breadcrumbs?: string[];
    class_name?: string;
    severity?: string;
    message?: string;
    stack_trace?: string;
    exception_handled?: boolean;
    topmost_context?: string;
    pl_crash_report_file_base64?: string;
    ios_image_base_address?: number;
    ios_image_size?: number;
    session_number?: number;
}

export interface CustomEvent {
    data?: CustomEventData;
    event_type: EventTypeEnum.customEvent;
}

/**
 * Enum for the event_type property.
 */
export enum CustomEventEventTypeEnum {
    customEvent = 'custom_event',
}
export type CustomEventEventType = CustomEventEventTypeEnum.customEvent;

export interface CustomEventData extends CommonEventData {
    custom_event_type: CustomEventDataCustomEventTypeEnum;
    event_name: string;
    custom_flags?: { [key: string]: string };
}

/**
 * Enum for the custom_event_type property.
 */
export enum CustomEventDataCustomEventTypeEnum {
    navigation = 'navigation',
    location = 'location',
    search = 'search',
    transaction = 'transaction',
    userContent = 'user_content',
    userPreference = 'user_preference',
    social = 'social',
    media = 'media',
    other = 'other',
    unknown = 'unknown',
}
export type CustomEventDataCustomEventType =
    | CustomEventDataCustomEventTypeEnum.navigation
    | CustomEventDataCustomEventTypeEnum.location
    | CustomEventDataCustomEventTypeEnum.search
    | CustomEventDataCustomEventTypeEnum.transaction
    | CustomEventDataCustomEventTypeEnum.userContent
    | CustomEventDataCustomEventTypeEnum.userPreference
    | CustomEventDataCustomEventTypeEnum.social
    | CustomEventDataCustomEventTypeEnum.media
    | CustomEventDataCustomEventTypeEnum.other
    | CustomEventDataCustomEventTypeEnum.unknown;

export interface DeviceCurrentState {
    time_since_start_ms?: number;
    battery_level?: number;
    data_connection_type?: string;
    data_connection_type_detail?: string;
    gps_state?: boolean;
    total_system_memory_usage_bytes?: number;
    disk_space_free_bytes?: number;
    external_disk_space_free_bytes?: number;
    cpu?: string;
    system_memory_available_bytes?: number;
    system_memory_low?: boolean;
    system_memory_threshold_bytes?: number;
    application_memory_available_bytes?: number;
    application_memory_max_bytes?: number;
    application_memory_total_bytes?: number;
    device_orientation?: DeviceCurrentStateDeviceOrientationEnum;
    status_bar_orientation?: DeviceCurrentStateStatusBarOrientationEnum;
}

/**
 * Enum for the device_orientation property.
 */
export enum DeviceCurrentStateDeviceOrientationEnum {
    portrait = 'portrait',
    portraitUpsideDown = 'portrait_upside_down',
    landscape = 'landscape',
    landscapeLeft = 'LandscapeLeft',
    landscapeRight = 'LandscapeRight',
    faceUp = 'FaceUp',
    faceDown = 'FaceDown',
    square = 'Square',
}

export type DeviceCurrentStateDeviceOrientation =
    | DeviceCurrentStateDeviceOrientationEnum.portrait
    | DeviceCurrentStateDeviceOrientationEnum.portraitUpsideDown
    | DeviceCurrentStateDeviceOrientationEnum.landscape
    | DeviceCurrentStateDeviceOrientationEnum.landscapeLeft
    | DeviceCurrentStateDeviceOrientationEnum.landscapeRight
    | DeviceCurrentStateDeviceOrientationEnum.faceUp
    | DeviceCurrentStateDeviceOrientationEnum.faceDown
    | DeviceCurrentStateDeviceOrientationEnum.square;

/**
 * Enum for the status_bar_orientation property.
 */
export enum DeviceCurrentStateStatusBarOrientationEnum {
    portrait = 'portrait',
    portraitUpsideDown = 'portrait_upside_down',
    landscape = 'landscape',
    landscapeLeft = 'LandscapeLeft',
    landscapeRight = 'LandscapeRight',
    faceUp = 'FaceUp',
    faceDown = 'FaceDown',
    square = 'Square',
}

export type DeviceCurrentStateStatusBarOrientation =
    | DeviceCurrentStateStatusBarOrientationEnum.portrait
    | DeviceCurrentStateStatusBarOrientationEnum.portraitUpsideDown
    | DeviceCurrentStateStatusBarOrientationEnum.landscape
    | DeviceCurrentStateStatusBarOrientationEnum.landscapeLeft
    | DeviceCurrentStateStatusBarOrientationEnum.landscapeRight
    | DeviceCurrentStateStatusBarOrientationEnum.faceUp
    | DeviceCurrentStateStatusBarOrientationEnum.faceDown
    | DeviceCurrentStateStatusBarOrientationEnum.square;

export interface Context {
    data_plan: {
        plan_id: string;
        plan_version?: number;
    };
}

export interface DeviceInformation {
    brand?: string;
    product?: string;
    device?: string;
    android_uuid?: string;
    device_manufacturer?: string;
    platform?: DeviceInformationPlatformEnum;
    os_version?: string;
    device_model?: string;
    screen_height?: number;
    screen_width?: number;
    screen_dpi?: number;
    device_country?: string;
    locale_language?: string;
    locale_country?: string;
    network_country?: string;
    network_carrier?: string;
    network_code?: string;
    network_mobile_country_code?: string;
    timezone_offset?: number;
    build_identifier?: string;
    http_header_user_agent?: string;
    ios_advertising_id?: string;
    push_token?: string;
    cpu_architecture?: string;
    is_tablet?: boolean;
    push_notification_sound_enabled?: boolean;
    push_notification_vibrate_enabled?: boolean;
    radio_access_technology?: string;
    supports_telephony?: boolean;
    has_nfc?: boolean;
    bluetooth_enabled?: boolean;
    bluetooth_version?: string;
    ios_idfv?: string;
    android_advertising_id?: string;
    build_version_release?: string;
    limit_ad_tracking?: boolean;
    amp_id?: string;
    is_dst?: boolean;
    roku_advertising_id?: string;
    roku_publisher_id?: string;
    microsoft_advertising_id?: string;
    microsoft_publisher_id?: string;
    fire_advertising_id?: string;
}

/**
 * Enum for the platform property.
 */
export enum DeviceInformationPlatformEnum {
    iOS = 'iOS',
    android = 'Android',
    web = 'web',
    desktop = 'desktop',
    tvOS = 'tvOS',
    roku = 'roku',
    outOfBand = 'out_of_band',
    smartTV = 'smart_tv',
    xbox = 'xbox',
}

export type DeviceInformationPlatform =
    | DeviceInformationPlatformEnum.iOS
    | DeviceInformationPlatformEnum.android
    | DeviceInformationPlatformEnum.web
    | DeviceInformationPlatformEnum.desktop
    | DeviceInformationPlatformEnum.tvOS
    | DeviceInformationPlatformEnum.roku
    | DeviceInformationPlatformEnum.outOfBand
    | DeviceInformationPlatformEnum.smartTV
    | DeviceInformationPlatformEnum.xbox;

export interface EventSystemNotificationInfo {
    type: EventSystemNotificationInfoTypeEnum;
}

/**
 * Enum for the type property.
 */
export type EventSystemNotificationInfoTypeEnum = 'gdpr_change';

export enum EventTypeEnum {
    unknown = 'unknown',
    sessionStart = 'session_start',
    sessionEnd = 'session_end',
    screenView = 'screen_view',
    customEvent = 'custom_event',
    crashReport = 'crash_report',
    optOut = 'opt_out',
    firstRun = 'first_run',
    preAttribution = 'pre_attribution',
    pushRegistration = 'push_registration',
    applicationStateTransition = 'application_state_transition',
    pushMessage = 'push_message',
    networkPerformance = 'network_performance',
    breadcrumb = 'breadcrumb',
    profile = 'profile',
    pushReaction = 'push_reaction',
    commerceEvent = 'commerce_event',
    userAttributeChange = 'user_attribute_change',
    userIdentityChange = 'user_identity_change',
    uninstall = 'uninstall',
    validationResult = 'validation_result',
}

export type EventType =
    | EventTypeEnum.unknown
    | EventTypeEnum.sessionStart
    | EventTypeEnum.sessionEnd
    | EventTypeEnum.screenView
    | EventTypeEnum.customEvent
    | EventTypeEnum.crashReport
    | EventTypeEnum.optOut
    | EventTypeEnum.firstRun
    | EventTypeEnum.preAttribution
    | EventTypeEnum.pushRegistration
    | EventTypeEnum.applicationStateTransition
    | EventTypeEnum.pushMessage
    | EventTypeEnum.networkPerformance
    | EventTypeEnum.breadcrumb
    | EventTypeEnum.profile
    | EventTypeEnum.pushReaction
    | EventTypeEnum.commerceEvent
    | EventTypeEnum.userAttributeChange
    | EventTypeEnum.userIdentityChange
    | EventTypeEnum.uninstall
    | EventTypeEnum.validationResult;

export interface GDPRConsentState {
    purpose?: string;
    document?: string;
    consented: boolean;
    timestamp_unixtime_ms?: number;
    location?: string;
    hardware_id?: string;
}

export interface GeoLocation {
    latitude: number | string;
    longitude: number | string;
    accuracy?: number | string;
}

export enum IdentityTypeEnum {
    other = 'other',
    customerId = 'customer_id',
    facebook = 'facebook',
    twitter = 'twitter',
    google = 'google',
    microsoft = 'microsoft',
    yahoo = 'yahoo',
    email = 'email',
    alias = 'alias',
    facebookCustomAudienceId = 'facebook_custom_audience_id',
    otherId2 = 'other_id_2',
    otherId3 = 'other_id_3',
    otherId4 = 'other_id_4',
    otherId5 = 'other_id_5',
    otherId6 = 'other_id_6',
    otherId7 = 'other_id_7',
    otherId8 = 'other_id_8',
    otherId9 = 'other_id_9',
    otherId10 = 'other_id_10',
    mobileNumber = 'mobile_number',
    phoneNumber2 = 'phone_number_2',
    phoneNumber3 = 'phone_number_3',
}

export type IdentityType =
    | IdentityTypeEnum.other
    | IdentityTypeEnum.customerId
    | IdentityTypeEnum.facebook
    | IdentityTypeEnum.twitter
    | IdentityTypeEnum.google
    | IdentityTypeEnum.microsoft
    | IdentityTypeEnum.yahoo
    | IdentityTypeEnum.email
    | IdentityTypeEnum.alias
    | IdentityTypeEnum.facebookCustomAudienceId
    | IdentityTypeEnum.otherId2
    | IdentityTypeEnum.otherId3
    | IdentityTypeEnum.otherId4
    | IdentityTypeEnum.otherId5
    | IdentityTypeEnum.otherId6
    | IdentityTypeEnum.otherId7
    | IdentityTypeEnum.otherId8
    | IdentityTypeEnum.otherId9
    | IdentityTypeEnum.otherId10
    | IdentityTypeEnum.mobileNumber
    | IdentityTypeEnum.phoneNumber2
    | IdentityTypeEnum.phoneNumber3;

export interface NetworkPerformanceEvent {
    data?: NetworkPerformanceEventData;
    event_type: EventTypeEnum.networkPerformance;
}

/**
 * Enum for the event_type property.
 */
export enum NetworkPerformanceEventEventTypeEnum {
    networkPerformance = 'network_performance',
}

export type NetworkPerformanceEventEventType = NetworkPerformanceEventEventTypeEnum.networkPerformance;

export interface NetworkPerformanceEventData extends CommonEventData {
    http_verb?: string;
    url: string;
    time_elapsed?: number;
    bytes_in?: number;
    bytes_out?: number;
    response_code: number;
    data?: string;
}

export interface OptOutEvent {
    data?: OptOutEventData;
    event_type: EventTypeEnum.optOut;
}

/**
 * Enum for the event_type property.
 */
export enum OptOutEventEnum {
    optOut = 'opt_out',
}
export type OptOutEventEventType = OptOutEventEnum.optOut;

export interface OptOutEventData extends CommonEventData {
    is_opted_out: boolean;
}

export interface Product {
    id?: string;
    name?: string;
    brand?: string;
    category?: string;
    variant?: string;
    position?: number;
    price?: number;
    quantity?: number;
    coupon_code?: string;
    added_to_cart_time_ms?: number;
    total_product_amount?: number;
    custom_attributes?: { [key: string]: string };
}

export interface ProductAction {
    action: ProductActionActionEnum;
    checkout_step?: number;
    checkout_options?: string;
    product_action_list?: string;
    product_list_source?: string;
    transaction_id?: string;
    affiliation?: string;
    total_amount?: number;
    tax_amount?: number;
    shipping_amount?: number;
    coupon_code?: string;
    products?: Product[];
}

/**
 * Enum for the action property.
 */
export enum ProductActionActionEnum {
    unknown = 'unknown',
    addToCart = 'add_to_cart',
    removeFromCart = 'remove_from_cart',
    checkout = 'checkout',
    checkoutOption = 'checkout_option',
    click = 'click',
    viewDetail = 'view_detail',
    purchase = 'purchase',
    refund = 'refund',
    addToWishlist = 'add_to_wishlist',
    removeFromWishlist = 'remove_from_wish_list',
}

export type ProductActionAction =
    | ProductActionActionEnum.unknown
    | ProductActionActionEnum.addToCart
    | ProductActionActionEnum.removeFromCart
    | ProductActionActionEnum.checkout
    | ProductActionActionEnum.checkoutOption
    | ProductActionActionEnum.click
    | ProductActionActionEnum.viewDetail
    | ProductActionActionEnum.purchase
    | ProductActionActionEnum.refund
    | ProductActionActionEnum.addToWishlist
    | ProductActionActionEnum.removeFromWishlist;

export interface ProductImpression {
    product_impression_list?: string;
    products?: Product[];
}

export interface ProfileEvent {
    data?: ProfileEventData;
    event_type: EventTypeEnum.profile;
}

/**
 * Enum for the event_type property.
 */
export enum ProfileEventEventTypeEnum {
    profile = 'profile',
}
export type ProfileEventEventType = ProfileEventEventTypeEnum.profile;

export interface ProfileEventData extends CommonEventData {
    previous_mpid: number;
    current_mpid: number;
    profile_event_type: ProfileEventDataProfileEventTypeEnum;
}

/**
 * Enum for the profile_event_type property.
 */
export enum ProfileEventDataProfileEventTypeEnum {
    signup = 'signup',
    login = 'login',
    logout = 'logout',
    update = 'update',
    delete = 'delete',
}

export type ProfileEventDataProfileEventType =
    | ProfileEventDataProfileEventTypeEnum.signup
    | ProfileEventDataProfileEventTypeEnum.login
    | ProfileEventDataProfileEventTypeEnum.logout
    | ProfileEventDataProfileEventTypeEnum.update
    | ProfileEventDataProfileEventTypeEnum.delete;

export interface Promotion {
    id: string;
    name: string;
    creative: string;
    position: string;
}

export interface PromotionAction {
    action: PromotionActionActionEnum;
    promotions: Promotion[];
}

/**
 * Enum for the action property.
 */
export enum PromotionActionActionEnum {
    view = 'view',
    click = 'click',
}
export type PromotionActionAction =
    | PromotionActionActionEnum.view
    | PromotionActionActionEnum.click;

export interface PushMessageEvent {
    data?: PushMessageEventData;
    event_type: EventTypeEnum.pushMessage;
}

/**
 * Enum for the event_type property.
 */
export enum PushMessageEventEventTypeEnum {
    pushMessage = 'push_message',
}
export type PushMessageEventEventType = PushMessageEventEventTypeEnum.pushMessage;

export interface PushMessageEventData extends CommonEventData {
    push_message_token: string;
    push_message_type: PushMessageEventDataPushMessageTypeEnum;
    message?: string;
    network?: string;
    push_notification_payload: string;
    application_state?: PushMessageEventDataApplicationStateEnum;
    action_identifier?: string;
    push_message_behavior?: PushMessageEventDataPushMessageBehaviorEnum;
}

/**
 * Enum for the push_message_type property.
 */
export enum PushMessageEventDataPushMessageTypeEnum {
    sent = 'sent',
    received = 'received',
    action = 'action',
}

export type PushMessageEventDataPushMessageType =
    | PushMessageEventDataPushMessageTypeEnum.sent
    | PushMessageEventDataPushMessageTypeEnum.received
    | PushMessageEventDataPushMessageTypeEnum.action;

/**
 * Enum for the application_state property.
 */
export enum PushMessageEventDataApplicationStateEnum {
    notRunning = 'not_running',
    background = 'background',
    foreground = 'foreground',
}

export type PushMessageEventDataApplicationState =
    | PushMessageEventDataApplicationStateEnum.notRunning
    | PushMessageEventDataApplicationStateEnum.background
    | PushMessageEventDataApplicationStateEnum.foreground;

/**
 * Enum for the push_message_behavior property.
 */
export enum PushMessageEventDataPushMessageBehaviorEnum {
    received = 'Received',
    directOpen = 'DirectOpen',
    read = 'Read',
    influencedOpen = 'InfluencedOpen',
    displayed = 'Displayed',
}

export type PushMessageEventDataPushMessageBehavior =
    | PushMessageEventDataPushMessageBehaviorEnum.received
    | PushMessageEventDataPushMessageBehaviorEnum.directOpen
    | PushMessageEventDataPushMessageBehaviorEnum.read
    | PushMessageEventDataPushMessageBehaviorEnum.influencedOpen
    | PushMessageEventDataPushMessageBehaviorEnum.displayed;

export interface PushRegistrationEvent {
    data?: PushRegistrationEventData;
    event_type: EventTypeEnum.pushRegistration;
}

/**
 * Enum for the event_type property.
 */
export enum PushRegistrationEventEventTypeEnum {
    pushRegistration = 'push_registration',
}

export type PushRegistrationEventEventType = PushRegistrationEventEventTypeEnum.pushRegistration;

export interface PushRegistrationEventData extends CommonEventData {
    register: boolean;
    registration_token: string;
}

export interface ScreenViewEvent {
    data?: ScreenViewEventData;
    event_type: EventTypeEnum.screenView;
}

/**
 * Enum for the event_type property.
 */

export type ScreenViewEventEventType = EventTypeEnum.screenView;

export interface ScreenViewEventData extends CommonEventData {
    screen_name: string;
    activity_type?: string;
    custom_flags?: { [key: string]: string };
}

export interface SessionEndEvent {
    data?: SessionEndEventData;
    event_type: EventTypeEnum.sessionEnd;
}

/**
 * Enum for the event_type property.
 */
export enum SessionEndEventEventTypeEnum {
    sessionEnd = 'session_end',
}

export type SessionEndEventEventType = SessionEndEventEventTypeEnum.sessionEnd;

export interface SessionEndEventData extends CommonEventData {
    session_duration_ms: number;
}

export interface SessionStartEvent {
    data?: SessionStartEventData;
    event_type: EventTypeEnum.sessionStart;
}

/**
 * Enum for the event_type property.
 */
export enum SessionStartEventEventTypeEnum {
    sessionStart = 'session_start',
}

export type SessionStartEventEventType = SessionStartEventEventTypeEnum.sessionStart;

export interface SessionStartEventData extends CommonEventData {}

export interface ShoppingCart {
    products: Product[];
}

export interface SourceInformation {
    channel?: SourceInformationChannelEnum;
    partner?: string;
    replay_request_id?: string;
    replay_job_id?: string;
    is_historical?: boolean;
}

/**
 * Enum for the channel property.
 */
export enum SourceInformationChannelEnum {
    native = 'native',
    javascript = 'javascript',
    pixel = 'pixel',
    desktop = 'desktop',
    partner = 'partner',
    serverToServer = 'server_to_server',
}

export type SourceInformationChannel =
    | SourceInformationChannelEnum.native
    | SourceInformationChannelEnum.javascript
    | SourceInformationChannelEnum.pixel
    | SourceInformationChannelEnum.desktop
    | SourceInformationChannelEnum.partner
    | SourceInformationChannelEnum.serverToServer;

export interface UserAttributeChangeEvent {
    data?: UserAttributeChangeEventData;
    event_type: EventTypeEnum.userAttributeChange;
}

/**
 * Enum for the event_type property.
 */
export enum UserAttributeChangeEventEventTypeEnum {
    userAttributeChange = 'user_attribute_change',
}

export type UserAttributeChangeEventEventType = UserAttributeChangeEventEventTypeEnum.userAttributeChange;

export interface UserAttributeChangeEventData extends CommonEventData {
    user_attribute_name: string;
    new: string | string[];
    old: string | string[];
    deleted: boolean;
    is_new_attribute: boolean;
}

export interface UserIdentity {
    identity_type: IdentityType;
    identity: string;
    timestamp_unixtime_ms: number;
    created_this_batch: boolean;
}

export interface UserIdentityChangeEvent {
    data?: UserIdentityChangeEventData;
    event_type: EventTypeEnum.userIdentityChange;
}

/**
 * Enum for the event_type property.
 */
export enum UserIdentityChangeEventEventTypeEnum {
    userIdentityChange = 'user_identity_change',
}

export type UserIdentityChangeEventEventType = UserIdentityChangeEventEventTypeEnum.userIdentityChange;

export interface UserIdentityChangeEventData extends CommonEventData {
    new: UserIdentity;
    old: UserIdentity;
}
