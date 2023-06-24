package com.S1r0p.ProjectForFedya.service;

import com.S1r0p.ProjectForFedya.models.UserDtls;
import com.S1r0p.ProjectForFedya.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public UserDtls createUser(UserDtls user) {
        return userRepo.save(user);
    }

}
