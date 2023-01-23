import fs from "fs"

// TODO gerar arquivos distintos e usar `fileReplacements` no angular.json
fs.writeFileSync("src/environments/environment.ts", `
export const environment = {
  env: "${process.env.NODE_ENV}",
  jwtSecret: "${process.env.NG_APP_JWT_SECRET}",
  apiUrl: "${process.env.NG_APP_API_URL}",
};
`);
