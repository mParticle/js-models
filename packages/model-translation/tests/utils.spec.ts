import { pascalCaseToUnderscore, underscoreToPascalCase } from '../src/utils';

describe('underscoreToPascal', () => {
    it('converts under_score strings to PascalCase', () => {
        expect(underscoreToPascalCase('under_score_function')).toBe(
            'UnderScoreFunction'
        );
    });
});

describe('pascalCaseToUnderscore', () => {
    it('converts PascalCase to under_score', () => {
        expect(pascalCaseToUnderscore('UnderScoreFunction')).toBe(
            'under_score_function'
        );
    });
});
