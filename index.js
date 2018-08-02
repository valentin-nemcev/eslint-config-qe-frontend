module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['import', 'filenames', 'promise', 'sonarjs'],
    parserOptions: {
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            webpack: {
                // using actual webpack config is impossible, we just duplicate relevant aliases
                config: {
                    resolve: {
                        alias: {
                            fc: 'frontend-commons',
                        },
                    },
                },
            },
        },
        'import/ignore': [
            /node_modules/,
            /\.(?!js$)[^.]+$/, // ignore everything but .js files
        ],
    },

    // http://eslint.org/docs/rules/
    rules: {

        // disallow the use of console
        'no-console': ['warn', {allow: ['warn', 'assert']}],

        // disallow constant expressions in conditions
        'no-constant-condition': 'warn',

        // disallow the use of debugger
        'no-debugger': 'warn',

        // disallow unreachable code after return, throw, continue, and break statements
        'no-unreachable': 'warn',


        // disallow control characters in regular expressions
        'no-control-regex': 'error',

        // disallow empty character classes in regular expressions
        'no-empty-character-class': 'error',

        // disallow invalid regular expression strings in RegExp constructors
        'no-invalid-regexp': 'error',

        // disallow multiple spaces in regular expressions
        'no-regex-spaces': 'error',


        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        // Report CommonJS require calls and module.exports or exports.*.
        'import/no-commonjs': 'error',

        // Report AMD require and define calls
        'import/no-amd': 'error',

        // Ensure imports point to a file/module that can be resolved.
        'import/no-unresolved': 'error',

        // Ensure named imports correspond to a named export in the remote file
        'import/named': 'error',

        // Ensure a default export is present, given a default import
        'import/default': 'error',

        // Ensure imported namespaces contain dereferenced properties as they are dereferenced
        'import/namespace': 'error',

        // Restrict which files can be imported in a given folder
        'import/no-restricted-paths': 'error',

        // Report any invalid exports, i.e. re-export of the same name
        'import/export': 'error',

        // Report use of exported name as identifier of default export
        'import/no-named-as-default': 'error',

        // Report use of exported name as property of default export
        'import/no-named-as-default-member': 'error',

        // Report imported names marked with @deprecated documentation tag
        'import/no-deprecated': 'error',

        // Forbid the use of extraneous packages
        'import/no-extraneous-dependencies': 'error',

        // Forbid the use of mutable exports with var or let.
        'import/no-mutable-exports': 'error',

        // no resolvable path back to this module via its dependencies
        'import/no-cycle': 'error',

        // reports any imports that come after non-import statements.
        'import/first': 'error',

        // Enforces having one or more empty lines after the last top-level import statement or require call.
        'import/newline-after-import': 'error',


        // Newline before export
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: 'export'},
            {blankLine: 'never', prev: 'export', next: 'export'},
        ],


        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'index',
                    'sibling',
                ],
                'newlines-between': 'always',
            },
        ],

        // When there is only a single export from a module, prefer using default export over named export.
        'import/prefer-default-export': 'error',

        // Reports if a module's default export is unnamed
        'import/no-anonymous-default-export': [
            'error',
            {allowCallExpression: false},
        ],

        // enforces that all exports are declared at the bottom of the file
        'import/exports-last': 'error',

        // Reports when named exports are not grouped together in a single export
        'import/group-exports': 'error',

        // Match the file name against the default exported value in the module.
        'filenames/match-exported': 'error',


        // require or disallow strict mode directives
        strict: 'error',


        // Disallow Unused Expressions
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],

        // disallow unused variables
        'no-unused-vars': [
            'warn',
            {
                varsIgnorePattern: '(^\\$Conkitty|^_$)',
                argsIgnorePattern: '(^\\$Conkitty|^_$)',
                args: 'after-used',
            },
        ],

        // error when it encounters a reference to an identifier that has not yet been declared
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: false,
            },
        ],
        // disallow function or var declarations in nested blocks
        'no-inner-declarations': 'error',

        // disallow deleting variables
        'no-delete-var': 'error',

        // disallow the use of undeclared variables
        // unless mentioned in /*global */ comments
        'no-undef': 'error',

        // disallow reassigning const variables
        'no-const-assign': 'error',

        // require let or const instead of var
        'no-var': 'error',

        // enforce variables to be declared either together or separately in functions
        'one-var': ['error', 'never'],

        // require const declarations for variables that are never reassigned after declared
        'prefer-const': 'warn',

        // disallow assignment operators in conditional expressions
        'no-cond-assign': 'error',

        // Disallow Assignment in return Statement
        'no-return-assign': 'error',

        // disallow reassigning exceptions in catch clauses
        'no-ex-assign': 'error',

        // disallow reassigning function declarations
        'no-func-assign': 'error',

        // disallow reassigning class declarations
        'no-class-assign': 'error',

        // disallow duplicate arguments in function definitions
        'no-dupe-args': 'error',

        // disallow duplicate keys in object literals
        'no-dupe-keys': 'error',

        // disallow duplicate case labels
        'no-duplicate-case': 'error',

        // disallow empty block statements
        'no-empty': [
            'warn',
            {allowEmptyCatch: true},
        ],

        // disallow unnecessary boolean casts
        'no-extra-boolean-cast': 'error',

        // disallow unnecessary parentheses
        'no-extra-parens': [
            'error',
            'all',
            {returnAssign: false, conditionalAssign: false},
        ],

        // disallow unnecessary semicolons
        'no-extra-semi': 'error',

        // Enforce or Disallow Semicolons (semi)
        semi: ['error', 'always'],

        // require spacing around infix operators
        'space-infix-ops': 'error',

        // disallow negating the left operand in in expressions
        'no-negated-in-lhs': 'error',

        // disallow calling global object properties as functions
        'no-obj-calls': 'error',

        // disallow calling some Object.prototype methods directly on objects
        'no-prototype-builtins': 'error',

        // disallow sparse arrays
        'no-sparse-arrays': 'error',

        // disallow confusing multiline expressions
        'no-unexpected-multiline': 'error',

        // enforces newlines between the operands of a ternary expression if the expression spans multiple lines.
        // 'multiline-ternary': ['error', 'always-multiline'],

        // enforce consistent linebreak style for operators
        'operator-linebreak': ['error', 'before'],

        // require or disallow spaces before/after unary operators
        'space-unary-ops': ['error', {words: true, nonwords: false}],


        // disallow control flow statements in finally blocks
        'no-unsafe-finally': 'error',

        // enforces the use of === and !== except for these cases:
        // Comparing two literal values
        // Evaluating the value of typeof
        // Comparing against null
        eqeqeq: ['error', 'smart'],

        // require calls to isNaN() when checking for NaN
        'use-isnan': 'error',

        // enforce valid JSDoc comments
        'valid-jsdoc': 'error',

        // enforce comparing typeof expressions against valid strings
        'valid-typeof': 'error',

        // disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names': 'error',

        // require or disallow trailing commas
        // requires trailing commas when the last element or property
        // is in a different line than the closing ] or } and disallows
        // trailing commas when the last element or property
        // is on the same line as the closing ] or }
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            // is set to "ignore" by default for consistency with the string option.
            functions: 'always-multiline',
        }],

        // require super() calls in constructors
        'constructor-super': 'error',

        // disallow this/super before calling super() in constructors
        'no-this-before-super': 'error',


        // Require using arrow functions for callbacks
        'prefer-arrow-callback': 'error',

        // enforces no braces where they can be omitted
        'arrow-body-style': ['error', 'as-needed'],

        // allows omitting parens when there is only one argument
        'arrow-parens': ['error', 'as-needed'],

        // Require file to end with single newline
        'eol-last': ['warn'],

        // disallow multiple empty lines
        'no-multiple-empty-lines': [
            'warn',
            {max: 2, maxBOF: 0, maxEOF: 0},
        ],

        // enforce consistent indentation
        indent: ['warn', 4],

        // enforce a maximum line length
        'max-len': ['warn', {code: 80, ignoreComments: true}],


        // enforce the consistent use of either backticks, double, or single quotes
        quotes: ['error', 'single', {avoidEscape: true}],


        // Quoting Style for Property Names
        'quote-props': ['error', 'as-needed'],

        // Require Object Literal Shorthand Syntax
        'object-shorthand': ['error', 'always', {avoidQuotes: true}],

        // Require Brace Style
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],


        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'warn',

        // disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 'error',

        // Disallow multiple spaces
        'no-multi-spaces': 'error',

        // consistent spacing inside array brackets
        'array-bracket-spacing': ['error', 'never'],

        // enforce consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers
        'object-curly-spacing': ['error', 'never'],

        // enforces zero spaces inside of parentheses
        'space-in-parens': ['error', 'never'],

        //enforce consistent spacing between keys and values in object literal properties
        'key-spacing': 'error',

        // Disallow or enforce spaces inside of single line blocks
        'block-spacing': ['error', 'always'],

        // Enforces spacing around commas
        'comma-spacing': ['error', {before: false, after: true}],

        // require or disallow spacing between function identifiers and their invocations
        'func-call-spacing': ['error', 'never'],

        // enforce consistent spacing before and after keywords
        'keyword-spacing': ['error', {before: true, after: true}],

        // Require space before/after arrow function’s arrow
        'arrow-spacing': ['error', {before: true, after: true}],

        // Require or disallow a space before function parenthesis
        'space-before-function-paren': [
            'error',
            {anonymous: 'always', named: 'never'},
        ],

        // Require Or Disallow Space Before Blocks
        'space-before-blocks': ['error', 'always'],


        // enforces a maximum number of lines in a file
        // 'max-lines': ['error', 500],

        // enforces a maximum number of lines in a function
        // 'max-lines-per-function': ['error', 50],


        // https://github.com/SonarSource/eslint-plugin-sonarjs
        // 'sonarjs/cognitive-complexity': ['error', 15],
        'sonarjs/no-all-duplicated-branches': 'error',
        'sonarjs/no-duplicated-branches': 'error',
        'sonarjs/no-element-overwrite': 'error',
        'sonarjs/no-extra-arguments': 'error',
        'sonarjs/no-identical-conditions': 'error',
        'sonarjs/no-identical-functions': 'error',
        'sonarjs/no-identical-expressions': 'error',
        'sonarjs/no-one-iteration-loop': 'error',
        'sonarjs/no-redundant-boolean': 'error',
        'sonarjs/no-small-switch': 'error',
        'sonarjs/no-use-of-empty-return-value': 'error',
        'sonarjs/prefer-immediate-return': 'error',
        'sonarjs/prefer-single-boolean-return': 'error',
        'sonarjs/prefer-while': 'error',


        // Avoid wrapping values in Promise.resolve or Promise.reject when not needed.
        'promise/no-return-wrap': 'error',

        // Enforce consistent param names when creating new promises
        'promise/param-names': 'error',

        // Disallow return statements in finally()
        'promise/no-return-in-finally': 'error',

        // Ensures the proper number of arguments are passed to Promise functions
        'promise/valid-params': 'error',
    },
};
