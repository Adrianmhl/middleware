package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api") // Basis-URL für diesen Controller
public class ApiController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }
}
