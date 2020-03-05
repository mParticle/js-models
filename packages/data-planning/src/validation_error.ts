import {
    ValidationErrorType,
    SchemaKeywordErrorType,
} from './validation_error_type';

export interface ValidationError {
    validation_error_type?: ValidationErrorType;
    key?: string;
    error_pointer?: string;
    expected?: string;
    actual?: string | number;
    schema_keyword?: SchemaKeywordErrorType;
    // TODO: Disabled temporarily as this is not supported yet
    // action_expected?: ValidationActionType;
}
