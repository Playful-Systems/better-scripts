import { scripts, command as c, variants } from "scriptful"

export default scripts({
  "build": c({ run: "tsc" }, "Build the project"),
  "dev": c({ run: "tsc -w" }, "Rebuild the project on file change"),
  "setup": variants({
    "dev": c({ run: "pnpm link ." }, "Make the package available")
  }),
  "test": c({ run: "vitest" }, "Run the tests"),
  "workflow": variants({
    "test": c({ run: "act -j run-tests" }, "Run the github action 'run-tests' using docker https://github.com/nektos/act"),
  }),
  "release": c({ run: "bumpp" }, "Bump the version (and github action will publish it)"),
})