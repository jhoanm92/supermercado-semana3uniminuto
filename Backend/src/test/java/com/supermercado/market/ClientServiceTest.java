package com.supermercado.market;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.supermercado.market.Domain.Client;
import com.supermercado.market.Repo.ClientRepository;
import com.supermercado.market.Service.ClientService;

public class ClientServiceTest {

    @Mock
    private ClientRepository clientRepository;

    @InjectMocks
    private ClientService clientService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllClients() {
        List<Client> clients = new ArrayList<>();
        // Agregar algunos clientes simulados
        clients.add(new Client(1L, "Nombre1", "Rol1"));
        clients.add(new Client(2L, "Nombre2", "Rol2"));

        when(clientRepository.findAll()).thenReturn(clients);

        List<Client> result = clientService.getAllClients();

        assertEquals(2, result.size()); // Verificar que se devuelvan todos los clientes
    }

    @Test
    public void testAddClient() {
        Client clientToAdd = new Client((Long) null, "NuevoNombre", "NuevoRol");
        when(clientRepository.save(clientToAdd)).thenReturn(new Client(1L, "NuevoNombre", "NuevoRol"));

        Client result = clientService.addClient(clientToAdd);

        assertEquals("NuevoNombre", result.getName()); // Verificar que el cliente devuelto tenga el nombre esperado
    }

    @Test
    public void testDeleteClient() {
        Long clientId = 1L;
        
        clientService.deleteClient(clientId);

        verify(clientRepository).deleteById(clientId); // Verificar que se llamó al método deleteById del repositorio con el ID correcto
    }

    @Test
    public void testUpdateClient() {
        Long clientId = 1L;
        Client existingClient = new Client(clientId, "NombreExistente", "RolExistente");
        Client updatedClient = new Client(clientId, "NuevoNombre", "NuevoRol");

        when(clientRepository.findById(clientId)).thenReturn(Optional.of(existingClient));
        when(clientRepository.save(existingClient)).thenReturn(updatedClient);

        Client result = clientService.updateClient(clientId, updatedClient);

        assertEquals("NuevoNombre", result.getName()); // Verificar que el cliente devuelto tenga el nombre actualizado
    }

    @Test
    public void testUpdateClientNotFound() {
        Long clientId = 1L;
        Client updatedClient = new Client(clientId, "NuevoNombre", "NuevoRol");

        when(clientRepository.findById(clientId)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> clientService.updateClient(clientId, updatedClient)); // Verificar que se lance una excepción si el cliente no se encuentra
    }
}
