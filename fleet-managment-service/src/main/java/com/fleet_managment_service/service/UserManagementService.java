package com.fleet_managment_service.service;

import com.fleet_managment_service.model.User;
import com.fleet_managment_service.model.UserLoginRequest;

import java.util.List;
import java.util.Optional;

public interface UserManagementService {

    User saveUser(User user);

    List<User> getAllUsers();

    Optional<User> loginUser(UserLoginRequest userLoginRequest);
}
