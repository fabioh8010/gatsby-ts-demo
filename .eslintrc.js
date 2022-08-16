module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      processor: '@graphql-eslint/graphql',
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
      env: {
        es6: true,
      },
      rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'prettier/prettier': 'error',
        'react/jsx-curly-brace-presence': [
          'error',
          {
            props: 'always',
            children: 'ignore',
          },
        ],
        'import/no-unresolved': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {},
        },
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/naming-convention': [
          'error',
          {
            OperationDefinition: {
              style: 'PascalCase',
              forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
              forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
            },
          },
        ],
      },
    },
  ],
}
