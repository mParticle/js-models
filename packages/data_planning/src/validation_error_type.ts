export enum ValidationErrorType {
    Unknown = 'unknown',
    Unplanned = 'unplanned',
    MissingRequired = 'missing_required',
    InvalidValue = 'invalid_value',
}

export enum ErrorType {
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
