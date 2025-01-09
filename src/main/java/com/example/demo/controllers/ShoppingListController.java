package com.example.demo.controllers;

import com.example.demo.models.ShoppingItem;
import com.example.demo.services.ShoppingListService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;


import java.util.List;

@RestController
@RequestMapping("/api/shopping-list")
public class ShoppingListController {
    private final ShoppingListService shoppingListService;

    public ShoppingListController(ShoppingListService shoppingListService) {
        this.shoppingListService = shoppingListService;
    }

    @GetMapping("/items")
    @Operation(summary =  "Get all shopping list items", description = "Returns a simple message.")
    public List<ShoppingItem> getAllItems() {
        return shoppingListService.getAllItems();
    }

    @GetMapping("/items/{name}")
    public ResponseEntity<ShoppingItem> getItemByName(@PathVariable String name) {
        return shoppingListService.getItemByName(name)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/items")
    public ShoppingItem addItem(@RequestBody ShoppingItem item) {
        System.out.println("POST /api/shopping-list/items called with: " + item);
        return shoppingListService.addItem(item);
    }

    @PutMapping("/items/{id}")
    public ResponseEntity<ShoppingItem> updateItem(@PathVariable Long id, @RequestBody ShoppingItem updatedItem) {
        return shoppingListService.updateItem(id, updatedItem)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/items/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        return shoppingListService.deleteItem(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }
}
