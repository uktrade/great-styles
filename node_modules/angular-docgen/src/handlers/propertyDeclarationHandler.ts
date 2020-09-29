import * as ts from "typescript";
import { PropertyDoc } from "../parser";

const getPropertyName = (node: ts.PropertyDeclaration): string =>
  node.name.getText();

const getPropertyType = (node: ts.PropertyDeclaration): string | null => {
  if (typeof node.type === "undefined") return null;

  switch (node.type.kind) {
    case ts.SyntaxKind.TypeReference:
      return node.type.getText();
    case ts.SyntaxKind.UnionType:
      const unionNode: ts.UnionTypeNode = <ts.UnionTypeNode>node.type;
      const types: ts.NodeArray<ts.TypeNode> = unionNode.types;

      return types.reduce((type, typeNode: ts.TypeNode, count: number) => {

        if(ts.isLiteralTypeNode(typeNode) && ts.isStringLiteral(typeNode.literal)) {
          return (type === 'string' || count === 0) ? 'string' : 'any';
        }

        if(ts.isLiteralTypeNode(typeNode) && ts.SyntaxKind.FirstLiteralToken === typeNode.literal.kind) {
          return (type === 'number' || count === 0) ? 'number' : 'any';
        }

        return (type === typeNode.getText() || count === 0) ? typeNode.getText() : 'any';
      }, 'string');
  }

  return node.type.getText()
};

const getPropertyValue = (
  node: ts.PropertyDeclaration,
  type: string | null
): string | number | boolean | null => {
  if (!node.initializer) return null;

  const value = node.initializer!.getText();

  if (!type) return value.replace(/"|'/g, "");

  switch (type.toLowerCase()) {
    case "number": {
      return parseInt(value, 10);
    }
    case "boolean": {
      return value === "true" ? true : false;
    }
    default: {
      return value.replace(/"|'/g, "");
    }
  }
};

const getPropertyDescription = (
  node: ts.PropertyDeclaration
): string | null => {
  if (!(<any>node).jsDoc) return null;
  return (<any>node).jsDoc.map((doc: any) => doc.comment).join("");
};

const getPropertyOptions = (node: ts.PropertyDeclaration): (string | number)[] | null => {
  if (typeof node.type === 'undefined') return null;

  if (ts.isUnionTypeNode(node.type)) {

    const typesNode: ts.NodeArray<ts.TypeNode> = (<ts.UnionTypeNode>node.type).types;
    if(!typesNode.some(ts.isLiteralTypeNode)) return null;

    return typesNode.map((node: ts.TypeNode) => {

      if(ts.isLiteralTypeNode(node) && ts.isStringLiteral(node.literal)) {
        return node.getText().replace(/"|'/g, '');
      }

      if(ts.isLiteralTypeNode(node) && ts.SyntaxKind.FirstLiteralToken === node.literal.kind) {
        return parseInt(node.getText(), 10);
      }

      return node.getText().replace(/"|'/g, '')
    });
  }

  return null;
}

export default (
  node: ts.PropertyDeclaration,
  decoratorType: string
): PropertyDoc | null => {
  const property: PropertyDoc = {
    description: undefined,
    options: undefined,
    name: undefined,
    type: undefined,
    value: undefined
  };

  if (!node.decorators) return null;

  const decorators: ts.NodeArray<ts.Decorator> = node.decorators;

  const hasDecorator: boolean = decorators.some((decorator: ts.Decorator) => {
    const expression: ts.CallExpression = <ts.CallExpression>(
      decorator.expression
    );
    return expression.expression.getText() === decoratorType;
  });

  if (!hasDecorator) return null;

  const type: string | null = getPropertyType(node);
  property.type = type;
  property.name = getPropertyName(node);
  property.description = getPropertyDescription(node);
  property.options = getPropertyOptions(node);
  property.value = getPropertyValue(node, type);

  return property;
};
