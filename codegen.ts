import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://localhost:3001/graphql",
    documents: ["**/*.graphql", "**/*gql"],
    generates: {
        "src/generated/graphql.ts": {
            plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
        },
    },
};

export default config;
