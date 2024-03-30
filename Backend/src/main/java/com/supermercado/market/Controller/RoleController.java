package com.supermercado.market.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.supermercado.market.Domain.Role;
import com.supermercado.market.Service.RoleService;

@RestController
@RequestMapping("/roles")
@CrossOrigin(origins = "http://localhost:51496")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }

    @PostMapping("/createRole")
    public Role addRole(@RequestBody Role role) {
        return roleService.addRole(role);
    }

  
}