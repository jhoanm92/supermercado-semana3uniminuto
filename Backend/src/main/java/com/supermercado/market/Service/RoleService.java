package com.supermercado.market.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.supermercado.market.Domain.Role;
import com.supermercado.market.Repo.RoleRepository;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public List<Role> getAllRoles() {
        return  roleRepository.findAll();
    }

    @Transactional
    public Role addRole(Role role) {
        return roleRepository.save(role);
    }

}