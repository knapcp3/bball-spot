import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3333/graphql",
  documents: ["src/**/*.(ts|tsx)"],
  ignoreNoDocuments: true,
  config: {
    strictScalars: true,
    namingConvention: "change-case#pascalCase",
    useTypeImports: true,
    enumsAsTypes: true,
  },
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
