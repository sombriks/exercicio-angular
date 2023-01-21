import fs from "fs"

fs.writeFileSync("src/environments/environment.ts", `
export const environment = {
  env: "${process.env.NODE_ENV || "development"}",
  jwtSecret: "${process.env.NG_APP_JWT_SECRET}",
  apiUrl: "${process.env.NG_APP_API_URL}",
};
`);