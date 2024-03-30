package com.supermercado.market.Repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.supermercado.market.Domain.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

}