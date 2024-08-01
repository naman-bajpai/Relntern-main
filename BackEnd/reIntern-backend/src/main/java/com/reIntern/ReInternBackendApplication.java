 package com.reIntern;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;


@SpringBootApplication
@EnableJpaRepositories(basePackages="com.reIntern.repository")
@EnableAutoConfiguration
@EnableAsync
@ComponentScan({"com.reIntern.repository","com.reIntern.controller","com.reIntern.service"})
public class ReInternBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReInternBackendApplication.class, args);
		
	}

}

