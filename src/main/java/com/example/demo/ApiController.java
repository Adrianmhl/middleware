package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name = "Test Shopping List API", description = "Simple API to test the backend")
public class ApiController {

    @Operation(summary = "Test Endpoint 123", description = "Returns a simple message.")
    @GetMapping("/test")
    public String testEndpoint() {
        return "API is working";
    }
    
}