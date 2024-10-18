package com.fleet_managment_service.controller;

import com.fleet_managment_service.model.User;
import com.fleet_managment_service.model.UserLoginRequest;
import com.fleet_managment_service.service.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth/")
public class UserManagementController {

  @Autowired
  private UserManagementService userManagementService;

  @PostMapping("/register")
  public ResponseEntity<User> registerUser(@RequestBody User user) {
    User save = userManagementService.saveUser(user);
    return ResponseEntity.ok(save);
  }

  @GetMapping("/users")
  public ResponseEntity<List<User>> getAllUser() {
    List<User> userList = userManagementService.getAllUsers();
    return ResponseEntity.ok(userList);
  }

  @PostMapping("/login")
  public ResponseEntity<User> loginUser(@RequestBody UserLoginRequest userLoginRequest) {
    Optional<User> user = userManagementService.loginUser(userLoginRequest);

    return user.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
  }
}
