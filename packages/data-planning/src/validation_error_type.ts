export enum ValidationErrorTypeEnum {
    Unknown = 'unknown',
    Unplanned = 'unplanned',
    MissingRequired = 'missing_required',
    InvalidValue = 'invalid_value',
}

export type ValidationErrorType =
    | ValidationErrorTypeEnum.Unknown
    | ValidationErrorTypeEnum.Unplanned
    | ValidationErrorTypeEnum.MissingRequired
    | ValidationErrorTypeEnum.InvalidValue;

export enum SchemaKeywordErrorTypeEnum {
    AdditionalItems = 'additionalItems',
    AdditionalProperties = 'additionalProperties',
    Const = 'const',
    Dependencies = 'dependencies',
    Enum = 'enum',
    ExclusiveMaximum = 'exclusiveMaximum',
    ExclusiveMinimum = 'exclusiveMinimum',
    Format = 'format',
    Maximum = 'maximum',
    MaxLength = 'maxLength',
    Minimum = 'minimum',
    MinLength = 'minLength',
    MultipleOf = 'multipleOf',
    Pattern = 'pattern',
    PatternProperties = 'patternProperties',
    Required = 'required',
    Type = 'type',
}

export type SchemaKeywordErrorType =
    | SchemaKeywordErrorTypeEnum.AdditionalItems
    | SchemaKeywordErrorTypeEnum.AdditionalProperties
    | SchemaKeywordErrorTypeEnum.Const
    | SchemaKeywordErrorTypeEnum.Dependencies
    | SchemaKeywordErrorTypeEnum.Enum
    | SchemaKeywordErrorTypeEnum.ExclusiveMaximum
    | SchemaKeywordErrorTypeEnum.ExclusiveMinimum
    | SchemaKeywordErrorTypeEnum.Format
    | SchemaKeywordErrorTypeEnum.Maximum
    | SchemaKeywordErrorTypeEnum.MaxLength
    | SchemaKeywordErrorTypeEnum.Minimum
    | SchemaKeywordErrorTypeEnum.MinLength
    | SchemaKeywordErrorTypeEnum.MultipleOf
    | SchemaKeywordErrorTypeEnum.Pattern
    | SchemaKeywordErrorTypeEnum.PatternProperties
    | SchemaKeywordErrorTypeEnum.Required
    | SchemaKeywordErrorTypeEnum.Type;
