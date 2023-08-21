import greet from "./modules/greet";
import path from "path";
import fs from "fs";
export default function main(): void {
  const hello = greet();
  console.log(hello);
  console.log(
    "PACKAGE.JSON IN ROOT? ",
    fs.existsSync(path.resolve(process.cwd(), "package.json"))
  );
}
