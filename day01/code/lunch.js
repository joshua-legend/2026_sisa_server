// import fs from "node:fs";
import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";

readFileSync("lunch.txt", "utf8");
readFile("lunch.txt", "utf8");
