import { readdirSync, readFileSync, writeFileSync } from "fs";
import { resolve, basename } from "path";
import { transform } from "@mistlog/typetype";

const examples = readdirSync("./examples")
    .map(name => resolve(__dirname, "./examples/", name, `${name}.type`));

examples.forEach(example => {
    const source = readFileSync(example, "utf8");
    const name = basename(example).replace(".type", "");
    const code = transform(source).code;
    writeFileSync(resolve(__dirname, "./examples/", name, `${name}.ts`), code, "utf8");
    console.log(`generate type file for example: ${example}`);
})