import * as ts from "typescript";
import { ComponentDoc } from "../parser";

const getConstructorProperty = (
  node: ts.ClassDeclaration,
  propName: string
): null | string | string[] => {
  const decorators: ts.NodeArray<ts.Decorator> = <ts.NodeArray<ts.Decorator>>(
    node.decorators
  );

  if (!decorators) return null;

  const componentNode: ts.Decorator = <ts.Decorator>(
    decorators.find(
      (decorator: ts.Decorator) =>
        (<ts.CallExpression>decorator.expression).expression.getText() ===
        "Component"
    )
  );

  const decoratorArgs: ts.NodeArray<ts.Node> = (<ts.CallExpression>(
    componentNode.expression
  )).arguments;
  const propertyList: ts.ObjectLiteralExpression = <ts.ObjectLiteralExpression>(
    decoratorArgs.find(
      (node: ts.Node) => node.kind === ts.SyntaxKind.ObjectLiteralExpression
    )
  );
  const decoratorProps: ts.NodeArray<ts.ObjectLiteralElementLike> =
    propertyList.properties;
  const propertyNode: ts.PropertyAssignment = <ts.PropertyAssignment>(
    decoratorProps.find(
      (node: ts.ObjectLiteralElementLike) => node.name!.getText() === propName
    )
  );

  if (!propertyNode) return null;

  const initializer: ts.Expression = propertyNode.initializer;

  switch (initializer.kind) {
    case ts.SyntaxKind.ArrayLiteralExpression:
      return (<ts.ArrayLiteralExpression>initializer).elements.map(
        (node: ts.Node) => node.getText().replace(/"|'/g, "")
      );
    default:
      return initializer.getText().replace(/"|'/g, "");
  }
};

export default (node: ts.ClassDeclaration): ComponentDoc => {
  const className: ts.DeclarationName = <ts.DeclarationName>(
    ts.getNameOfDeclaration(node)
  );

  const componentDoc: ComponentDoc = {
    description: (<any>node).jsDoc
      ? (<any>node).jsDoc.map((doc: any) => doc.comment).join("\n")
      : null,
    name: className && className.getText(),
    selector: <string>getConstructorProperty(node, "selector"),
    styles: <string[]>getConstructorProperty(node, "styles"),
    styleUrls: <string[]>getConstructorProperty(node, "styleUrls"),
    templateUrl: <string>getConstructorProperty(node, "templateUrl"),
    template: <string>getConstructorProperty(node, "template")
  };

  return componentDoc;
};
