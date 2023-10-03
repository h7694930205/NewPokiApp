let config = {
    appName: "pokemon App",
    siteUrl: "https://pokeapi.co/api/v2/",
    apiUrl: "https://pokeapi.co/api/v2/",
    environment: "development",
  };
  const isProd = false;
  const deploymentType = isProd ? "production" : "development";
  
  if (deploymentType === "production") {
    config = {
      ...config,
      siteUrl: "https://pokeapi.co/api/v2/",
      apiUrl: "https://pokeapi.co/api/v2/",
      environment: "production",
    };
  } else if (deploymentType === "development") {
    config = {
      ...config,
      environment: "development",
    };
  }
  export default config;