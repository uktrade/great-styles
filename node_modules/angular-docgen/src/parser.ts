import * as ts from "typescript";
import classDeclarationHandler from "./handlers/classDeclarationHandler";
import propertyDeclarationHandler from "./handlers/propertyDeclarationHandler";

export interface ComponentDoc {
  description?: string;
  name?: string;
  selector?: string;
  styleUrls?: string[];
  styles?: string[];
  templateUrl?: string;
  template?: string;
}

export interface PropertyDoc {
  description?: string | null;
  name?: string;
  options?: (string | number)[] | null;
  type?: string | null;
  value?: string | number | boolean | null;
}

export interface Doc {
  component: ComponentDoc;
  inputs?: PropertyDoc[];
  outputs?: PropertyDoc[];
}

export default function parse(code: string): Doc {
  const doc: Doc = {
    component: {
      description: undefined,
      name: undefined,
      selector: undefined,
      styleUrls: [],
      templateUrl: undefined
    },
    inputs: [],
    outputs: []
  };

  let ast = ts.createSourceFile("doc.ts", code, ts.ScriptTarget.Latest, true);

  const visit = (node: ts.Node) => {
    switch (node.kind) {
      case ts.SyntaxKind.ClassDeclaration:
        doc.component = classDeclarationHandler(<ts.ClassDeclaration>node);
        ts.forEachChild(node, visit);
        break;
      case ts.SyntaxKind.PropertyDeclaration:
        const inputProperty: PropertyDoc | null = propertyDeclarationHandler(
          <ts.PropertyDeclaration>node,
          "Input"
        );
        if (inputProperty) {
          doc.inputs!.push(inputProperty);
        }

        const outputProperty: PropertyDoc | null = propertyDeclarationHandler(
          <ts.PropertyDeclaration>node,
          "Output"
        );
        if (outputProperty) {
          doc.outputs!.push(outputProperty);
        }
        break;
    }
  };

  ts.forEachChild(ast, visit);

  return doc;
}
