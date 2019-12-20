export interface ValidationError {
    validation_error_type?: string;
    key?: string;
    error_pointer?: string;
    expected?: string;
    actual?: string | number;
    schema_keyword?: string;
    // TODO: Disabled temporarily as this is not supported yet
    // action_expected?: ValidationActionType;
}
