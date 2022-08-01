import * as AST from "./ast";
import type ESlint from "eslint";
import type EStree from "estree";
export type { AST };
interface VisitorOptions<T> {
    name?: string;
    parent?: AST.Node;
    array: boolean;
    parentResult?: T;
    thisResult?: T;
}
declare type VisitorFunction<T, U extends AST.Node> = (node: U, opts: VisitorOptions<T>) => T | undefined;
interface VisitorFunctionMap<T> {
    grammar?: VisitorFunction<T, AST.Grammar>;
    top_level_initializer?: VisitorFunction<T, AST.TopLevelInitializer>;
    initializer?: VisitorFunction<T, AST.Initializer>;
    rule?: VisitorFunction<T, AST.Rule>;
    named?: VisitorFunction<T, AST.NamedExpression>;
    choice?: VisitorFunction<T, AST.ChoiceExpression>;
    action?: VisitorFunction<T, AST.ActionExpression>;
    sequence?: VisitorFunction<T, AST.SequenceExpression>;
    labeled?: VisitorFunction<T, AST.LabeledExpression>;
    text?: VisitorFunction<T, AST.TextExpression>;
    simple_and?: VisitorFunction<T, AST.SimpleAndExpression>;
    simple_not?: VisitorFunction<T, AST.SimpleNotExpression>;
    optional?: VisitorFunction<T, AST.OptionalExpression>;
    zero_or_more?: VisitorFunction<T, AST.ZeroOrMoreExpression>;
    one_or_more?: VisitorFunction<T, AST.OneOrMoreExpression>;
    group?: VisitorFunction<T, AST.GroupExpression>;
    semantic_and?: VisitorFunction<T, AST.SemanticAndExpression>;
    semantic_not?: VisitorFunction<T, AST.SemanticNotExpression>;
    rule_ref?: VisitorFunction<T, AST.RuleReferenceExpression>;
    literal?: VisitorFunction<T, AST.LiteralExpression>;
    class?: VisitorFunction<T, AST.ClassExpression>;
    any?: VisitorFunction<T, AST.AnyExpression>;
    name?: VisitorFunction<T, AST.NamedExpression>;
    code?: VisitorFunction<T, AST.Code>;
    equals?: VisitorFunction<T, AST.Equals>;
    Block?: VisitorFunction<T, EStree.Comment>;
    Line?: VisitorFunction<T, EStree.Comment>;
    "Program:exit"?: VisitorFunction<T, AST.Program>;
    "grammar:exit"?: VisitorFunction<T, AST.Grammar>;
    "top_level_initializer:exit"?: VisitorFunction<T, AST.TopLevelInitializer>;
    "initializer:exit"?: VisitorFunction<T, AST.Initializer>;
    "rule:exit"?: VisitorFunction<T, AST.Rule>;
    "named:exit"?: VisitorFunction<T, AST.NamedExpression>;
    "choice:exit"?: VisitorFunction<T, AST.ChoiceExpression>;
    "action:exit"?: VisitorFunction<T, AST.ActionExpression>;
    "sequence:exit"?: VisitorFunction<T, AST.SequenceExpression>;
    "labeled:exit"?: VisitorFunction<T, AST.LabeledExpression>;
    "text:exit"?: VisitorFunction<T, AST.TextExpression>;
    "simple_and:exit"?: VisitorFunction<T, AST.SimpleAndExpression>;
    "simple_not:exit"?: VisitorFunction<T, AST.SimpleNotExpression>;
    "optional:exit"?: VisitorFunction<T, AST.OptionalExpression>;
    "zero_or_more:exit"?: VisitorFunction<T, AST.ZeroOrMoreExpression>;
    "one_or_more:exit"?: VisitorFunction<T, AST.OneOrMoreExpression>;
    "group:exit"?: VisitorFunction<T, AST.GroupExpression>;
    "semantic_and:exit"?: VisitorFunction<T, AST.SemanticAndExpression>;
    "semantic_not:exit"?: VisitorFunction<T, AST.SemanticNotExpression>;
    "rule_ref:exit"?: VisitorFunction<T, AST.RuleReferenceExpression>;
    "literal:exit"?: VisitorFunction<T, AST.LiteralExpression>;
    "class:exit"?: VisitorFunction<T, AST.ClassExpression>;
    "any:exit"?: VisitorFunction<T, AST.AnyExpression>;
    "name:exit"?: VisitorFunction<T, AST.NamedExpression>;
    "code:exit"?: VisitorFunction<T, AST.Code>;
    "equals:exit"?: VisitorFunction<T, AST.Equals>;
    "Block:exit"?: VisitorFunction<T, EStree.Comment>;
    "Line:exit"?: VisitorFunction<T, EStree.Comment>;
    "*:exit"?: VisitorFunction<T, AST.Node>;
    Program?(node: AST.Program): T | undefined;
    "*"?(node: AST.Node, opts?: VisitorOptions<T>): T | undefined;
}
/**
 * Visit some or all of the nodes in an AST.
 */
export declare class Visitor<T> {
    static visitorKeys: ESlint.SourceCode.VisitorKeys;
    private functions;
    private star?;
    private starExit?;
    /**
     * Create an instance.
     */
    constructor(functions: VisitorFunctionMap<T>);
    /**
     * Visit each node, applying any visitor functions found in our function map.
     */
    visit(node: AST.Node, opts?: VisitorOptions<T>): void;
}