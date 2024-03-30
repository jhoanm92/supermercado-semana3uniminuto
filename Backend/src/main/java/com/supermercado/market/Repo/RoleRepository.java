package com.supermercado.market.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.supermercado.market.Domain.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
}