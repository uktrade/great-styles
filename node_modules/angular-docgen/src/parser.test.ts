import parse from "./parser";
import { readFileSync } from "fs";
import { resolve } from "path";

let component_1: string = readFileSync(
  resolve(__dirname, "./fixtures/component_1.txt"),
  "utf8"
).toString();
let component_2: string = readFileSync(
  resolve(__dirname, "./fixtures/component_2.txt"),
  "utf8"
).toString();

describe("Parser Component 1", () => {
  it("should parse a component decorator", () => {
    expect(parse(component_1).component).toMatchObject({
      name: "SampleComponent",
      description: "Sample Component",
      templateUrl: "template.html",
      selector: "my-button",
      styleUrls: ["styles1.css", "styles2.css"]
    });
  });

  it("should parse a components inputs", () => {
    expect(parse(component_1).inputs).toMatchObject([{
      description: `boolean type
with second line`,
      name: "disabled",
      type: "boolean",
      value: false,
    }, {
      description: "string type",
      name: "name",
      type: "string",
      value: "test"
    }, {
      description: "number type",
      name: "count",
      type: "number",
      value: 1
    }, {
      description: "string literal types",
      name: "type",
      type: "string",
      options: ["primary", "secondary"],
      value: "primary"
    }, {
      description: "numeric literal types",
      name: "type",
      type: "number",
      options: [1, 2, 3],
      value: 1
    }, {
      description: "variant types",
      name: "what",
      type: "any",
      value: "test"
    }, {
      description: "no default",
      name: "empty",
      type: "string",
    }, {
      description: "non primitive",
      name: "hero",
      type: "Hero",
      value: "Superman"
    }]);
  });

  it('should parse a components outputs', () => {
    expect(parse(component_1).outputs).toMatchObject([{
      description: "output property",
      name: "onClick",
      value: "new EventEmitter<boolean>()",
    }]);
  });
});

describe("Parser Component 2", () => {
  it("should parse a component decorator", () => {
    expect(parse(component_2).component).toMatchObject({
      name: "SampleComponent",
      template: "<h1>Test</h1>",
      styles: [
        'h1 { font-weight: normal; }'
      ]
    });
  });

  it("should parse a components inputs", () => {
    expect(parse(component_2).inputs).toMatchObject([
      {
        name: "disabled",
        type: "boolean",
        value: false
      }
    ]);
  });

  it("should parse a components outputs", () => {
    expect(parse(component_2).outputs).toMatchObject([]);
  });
});
