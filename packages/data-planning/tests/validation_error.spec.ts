import {
    ValidationError,
    ValidationErrorTypeEnum,
    SchemaKeywordErrorTypeEnum,
    ValidationResultEventEventTypeEnum,
    ValidationResultEvent,
    DataPlanMatchType,
} from '../src';
import { EventTypeEnum } from '../../events/src';

describe('Validation Error', () => {
    it('should declare all interfaces', () => {
        expect(ValidationErrorTypeEnum.Unknown).toBe('unknown');
        expect(ValidationErrorTypeEnum.Unplanned).toBe('unplanned');
        expect(ValidationErrorTypeEnum.MissingRequired).toBe(
            'missing_required'
        );
        expect(ValidationErrorTypeEnum.InvalidValue).toBe('invalid_value');

        const validationError: ValidationError = {
            validation_error_type: ValidationErrorTypeEnum.MissingRequired,
            key: 'data',
            expected: 'custom_flags',
            error_pointer: '#/data',
        };

        expect(validationError).toBeDefined();

        expect(SchemaKeywordErrorTypeEnum.AdditionalItems).toBe(
            'additionalItems'
        );
        expect(SchemaKeywordErrorTypeEnum.AdditionalProperties).toBe(
            'additionalProperties'
        );
        expect(SchemaKeywordErrorTypeEnum.Const).toBe('const');
        expect(SchemaKeywordErrorTypeEnum.Dependencies).toBe('dependencies');
        expect(SchemaKeywordErrorTypeEnum.Enum).toBe('enum');
        expect(SchemaKeywordErrorTypeEnum.ExclusiveMaximum).toBe(
            'exclusiveMaximum'
        );
        expect(SchemaKeywordErrorTypeEnum.ExclusiveMinimum).toBe(
            'exclusiveMinimum'
        );
        expect(SchemaKeywordErrorTypeEnum.Format).toBe('format');
        expect(SchemaKeywordErrorTypeEnum.Maximum).toBe('maximum');
        expect(SchemaKeywordErrorTypeEnum.MaxLength).toBe('maxLength');
        expect(SchemaKeywordErrorTypeEnum.Minimum).toBe('minimum');
        expect(SchemaKeywordErrorTypeEnum.MinLength).toBe('minLength');
        expect(SchemaKeywordErrorTypeEnum.MultipleOf).toBe('multipleOf');
        expect(SchemaKeywordErrorTypeEnum.Pattern).toBe('pattern');
        expect(SchemaKeywordErrorTypeEnum.PatternProperties).toBe(
            'patternProperties'
        );
        expect(SchemaKeywordErrorTypeEnum.Required).toBe('required');
        expect(SchemaKeywordErrorTypeEnum.Type).toBe('type');

        const validationResultEvent: ValidationResultEvent = {
            event_type: EventTypeEnum.validationResult,
            data: {
                match: {
                    type: DataPlanMatchType.ScreenView,
                    criteria: {
                        screen_name: 'Test Screen View',
                    },
                },
                validation_errors: [
                    {
                        error_pointer: '#/data',
                        key: 'data',
                        expected: 'custom_flags',
                        schema_keyword: SchemaKeywordErrorTypeEnum.Required,
                        validation_error_type:
                            ValidationErrorTypeEnum.MissingRequired,
                    },
                ],
            },
        };

        expect(validationResultEvent).toBeDefined();
    });
});
