module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: [
        '@typescript-eslint',
        'filename-rules',
        'prettier',
    ],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: './',
    },
    rules: {
        'import/no-unresolved': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        'filename-rules/match': ['error', 'kebab-case'],
        'quotes': ['error', 'single', 'avoid-escape'],
        'prettier/prettier': ['warn'],
    }
};