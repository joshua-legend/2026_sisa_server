import { readFile } from "node:fs/promises";

const text = await readFile("students.txt", "utf8");
console.log(text);
