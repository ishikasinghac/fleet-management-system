package com.fleet_managment_service.service.impl;

import com.fleet_managment_service.model.User;
import com.fleet_managment_service.model.UserLoginRequest;
import com.fleet_managment_service.repo.UserRepository;
import com.fleet_managment_service.service.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserManagementServiceImpl implements UserManagementService {

    private final UserRepository userRepository;

    @Autowired
    public UserManagementServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        List<User> userList =  userRepository.findAll();

        return userList;
    }

    @Override
    public Optional<User> loginUser(UserLoginRequest userLoginRequest) {
        Optional<User> user = userRepository.findByEmail(userLoginRequest.getEmail());
        if(user.isPresent()){
            if(user.get().getPassword().equals(userLoginRequest.getPassword())){
                return user;
            }
        }

        return Optional.ofNullable(null);
    }
}
