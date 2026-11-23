import { readFile } from "node:fs/promises";

const text = await readFile("coffee.txt", "utf8");
console.log(text.split("\n").map((v) => v + "~꿀맛!"));
