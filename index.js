module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: ['import'],
    settings: {
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


        // require or disallow strict mode directives
        'strict': 'error',


        // disallow unused variables
        'no-unused-vars': [
            'error',
            {
                varsIgnorePattern: '^\\$Conkitty',
                args: 'after-used'
            },
        ],

        // disallow function or var declarations in nested blocks
        'no-inner-declarations': 'error',

        // disallow deleting variables
        'no-delete-var': 'error',

        // disallow the use of undeclared variables unless mentioned in /*global */ comments
        'no-undef': 'error',

        // disallow reassigning const variables
        'no-const-assign': 'error',

        // require let or const instead of var
        'no-var': 'error',

        // require const declarations for variables that are never reassigned after declared
        'prefer-const': 'error',

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
            'error',
            {allowEmptyCatch: true}
        ],

        // disallow unnecessary boolean casts
        'no-extra-boolean-cast': 'error',

        // disallow unnecessary parentheses
        'no-extra-parens': [
            'error',
            'all',
            {returnAssign: false, conditionalAssign: false}
        ],

        // disallow unnecessary semicolons
        'no-extra-semi': 'error',

        // Enforce or Disallow Semicolons (semi)
        'semi': ['error', 'always'],

        // disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 'error',

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

        // disallow control flow statements in finally blocks
        'no-unsafe-finally': 'error',

        // require calls to isNaN() when checking for NaN
        'use-isnan': 'error',

        // enforce valid JSDoc comments
        'valid-jsdoc': 'error',

        // enforce comparing typeof expressions against valid strings
        'valid-typeof': 'error',

        // disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names': 'error',

        // require or disallow trailing commas
        'comma-dangle': ['error', 'always-multiline'],

        // require super() calls in constructors
        'constructor-super': 'error',

        // disallow this/super before calling super() in constructors
        'no-this-before-super': 'error',


        // Require file to end with single newline
        'eol-last': ['warn'],

        // disallow multiple empty lines
        'no-multiple-empty-lines': [
            'warn',
            {max: 2, maxBOF: 0, maxEOF: 0}
        ],

        // enforce consistent indentation
        'indent': ['warn', 4],

        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'warn',

        // enforce a maximum line length
        'max-len': ['warn', 80],


        // Quoting Style for Property Names
        'quote-props': ['error', 'consistent-as-needed'],

        // Require Object Literal Shorthand Syntax
        'object-shorthand': ['error', 'always', { avoidQuotes: true }],

        // Require Brace Style
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],


        //enforce consistent spacing between keys and values in object literal properties
        'key-spacing': 'error',

        // Disallow or enforce spaces inside of single line blocks
        'block-spacing': ['error', 'always'],

        // Enforces spacing around commas
        'comma-spacing': ['error', { before: false, after: true }],

        // require or disallow spacing between function identifiers and their invocations
        'func-call-spacing': ['error', 'never'],

        // enforce consistent spacing before and after keywords
        'keyword-spacing': ['error', { before: true, after: true }],

        // Require space before/after arrow function’s arrow
        'arrow-spacing': ['error', { before: true, after: true }],

        // Require or disallow a space before function parenthesis 
        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],

        // Require Or Disallow Space Before Blocks
        'space-before-blocks': ['error', 'always'],
    }
};
