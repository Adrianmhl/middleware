// src/main/java/com/example/demo/services/ShoppingListService.java
package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.models.ShoppingItem;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ShoppingListService {
    private List<ShoppingItem> shoppingList = new ArrayList<>();
    private Long nextId = 1L;

    public List<ShoppingItem> getAllItems() {
        return shoppingList;
    }

    public Optional<ShoppingItem> getItemByName(String name) {
        return shoppingList.stream()
                .filter(item -> item.getName().equalsIgnoreCase(name))
                .findFirst();
    }

    public ShoppingItem addItem(ShoppingItem item) {
        item.setId(nextId++);
        shoppingList.add(item);
        return item;
    }

    public Optional<ShoppingItem> updateItem(Long id, ShoppingItem updatedItem) {
        return shoppingList.stream()
                .filter(item -> item.getId().equals(id))
                .findFirst()
                .map(item -> {
                    item.setName(updatedItem.getName());
                    item.setQuantity(updatedItem.getQuantity());
                    return item;
                });
    }

    public boolean deleteItem(Long id) {
        return shoppingList.removeIf(item -> item.getId().equals(id));
    }
}
