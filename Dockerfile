FROM maven:3.8.7-eclipse-temurin-19 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/cmpt276assign1-1.0-SNAPSHOT.jar cmpt276assign1.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "cmpt276assign1.jar"]