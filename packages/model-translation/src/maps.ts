export const nameMaps: Record<string, string> = {
    type: 'dt',
    event_type: 'et',
    event_name: 'n',
    custom_attributes: 'attrs',
    event_duration: 'el',
    custom_event_type: 'et',
    custom_flags: 'flags',
};

export const expandMap: Record<string, string> = {
    et: 'custom_event_type',
    el: 'event_duration',
    n: 'event_name',
    sn: 'screen_name',
    attrs: 'custom_attributes',
    flags: 'custom_flags',
    cu: 'currency_code',
    ct: 'timestamp_unixtime_ms',

    ua: 'user_attributes',
    ui: 'user_identities',
    sid: 'session_id',
    est: 'event_start_unixtime_ms',
    lc: 'location',
    t: 'application_transition_type',
    ifr: 'is_first_run',
    iu: 'is_upgrade',
    sct: 'session_start_unixtime_ms',
};

export const eventTypeMap: Record<string, string> = {
    ss: 'session_start',
    se: 'session_end',
    e: 'custom_event',
    v: 'screen_view',
    cm: 'commerce_event',
    o: 'opt_out',
    x: 'unknown', // Maybe 'crash_report'
    pr: 'push_registration',
    fr: 'first_run',
    h: 'request_header',
    ast: 'application_state_transition',
    pm: 'push_received',
    npe: 'network_performance',
    bc: 'breadcrumb',
    pro: 'profile',
    uac: 'user_attribute_change',
    uic: 'user_identity_change',
};

export const customEventTypeMap: Record<string, string> = {
    unknown: 'Unknown',
    navigation: 'Navigation',
    location: 'Location',
    search: 'Search',
    transaction: 'Transaction',
    user_content: 'UserContent',
    user_preference: 'UserPreference',
    social: 'Social',
    media: 'Media',
    other: 'Other',
};

export const productActionMap: Record<string, string> = {
    action: 'an',
    checkout_step: 'cs',
    checkout_option: 'co',
    coupon_code: 'tcc',
    product_action_list: 'pal',
    product_list_source: 'pls',
    transaction_id: 'ti',
    affiliation: 'ta',
    shipping_amount: 'ts',
    total_amount: 'tr',
    tax_amount: 'tt',
};

export const promotionActionMap: Record<string, string> = {
    action: 'an',
};

export const productMap: Record<string, string> = {
    attributes: 'attrs',
    brand: 'br',
    category: 'ca',
    coupon_code: 'cc',
    name: 'nm',
    sku: 'id',
    position: 'ps',
    price: 'pr',
    quantity: 'qt',
    time_added: 'act',
    total_amount: 'tpa',
    variant: 'va',
    creative: 'cr',
};
