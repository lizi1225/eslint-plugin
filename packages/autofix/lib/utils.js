/**
 * @fileoverview utils used by the rule fixers.
 * @author 唯然<weiran.zsd@outlook.com>
 */
"use strict";
const eslint = require("eslint");
const linter = new eslint.Linter();

exports.getFixableRule = function(ruleName, recommended = false, fixable = "code") {
    const rule = ruleName ? linter.getRules().get(ruleName) : require('eslint-plugin-deadvars').rules['dead-vars'];

    rule.meta.recommended = recommended;
    rule.meta.fixable = fixable;
    return rule;
};
