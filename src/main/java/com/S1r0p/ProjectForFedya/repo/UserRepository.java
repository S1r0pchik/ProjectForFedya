package com.S1r0p.ProjectForFedya.repo;

import com.S1r0p.ProjectForFedya.models.UserDtls;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserDtls, Long> {

}
