import { readdirSync, readFileSync, writeFileSync } from "fs";
import { resolve, basename } from "path";
import { transform } from "@mistlog/typetype";
import { exit } from "process";

const exampleDirs = readdirSync("./examples")
    .map(name => resolve(__dirname, "./examples/", name));

exampleDirs.forEach(dir => {
    const examples = readdirSync(dir)
        .map(name => resolve(dir, name))
        .filter(each => each.endsWith(".type"));

    examples.forEach(example => {
        const source = readFileSync(example, "utf8");

        const name = basename(example).replace(".type", "");
        try {
            const code = transform(source, { debug: true }).code;
            writeFileSync(resolve(dir, `${name}.ts`), code, "utf8");
        } catch (error) {
            console.log(`failed: ${name}.ts`);
            console.log(error.message);
            console.log(error.backtrace);
            exit(-1)
        }
    })
})

console.log(`generate ts type file succeed`);
