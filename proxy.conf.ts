const route = '/api/base'

const config={
  target:"http://localhost:8080",
  changeOrigin: true,
  secure: true,
  logLevel: "debug",
};

const PROXY_CONFIG= {
  [route]: config,
}

module.exports= PROXY_CONFIG
