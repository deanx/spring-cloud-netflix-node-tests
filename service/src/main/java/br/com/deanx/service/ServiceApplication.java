package br.com.deanx.service;

import com.sun.xml.internal.xsom.impl.ContentTypeImpl;
import org.apache.http.entity.ContentType;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@EnableDiscoveryClient
@RestController
public class ServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceApplication.class, args);
	}

	@GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
	public Map<String, String> saySomething() {
		Map<String, String> response = new HashMap<>();
		response.put("name", "John Doe");
		return response;
	}
}
