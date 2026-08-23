module.exports = {
  apps: [
    {
      name: "ConfigServer",
      script: "java",
      args: "-jar ConfigServer/target/ConfigServer-0.0.1-SNAPSHOT.jar",
      log_file: "./log/config-server.log"
    },
    {
      name: "EurekaServer",
      script: "java",
      args: "-jar EurekaServer/target/EurekaServer-0.0.1-SNAPSHOT.jar",
      log_file: "./log/eureka-server.log"
    },
    {
      name: "Api-Gateway",
      script: "java",
      args: "-jar APIGateway/target/Api-Gateway-1.0.0.jar",
      log_file: "./log/api-gateway.log"
    }
  ]
}
