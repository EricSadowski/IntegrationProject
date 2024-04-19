package com.group1.musicacademy.service;

import com.group1.musicacademy.authentication.AuthenticationRequest;
import com.group1.musicacademy.authentication.AuthenticationResponse;
import com.group1.musicacademy.authentication.RegisterRequest;
import com.group1.musicacademy.model.MyUser;
import com.group1.musicacademy.model.Role;
import com.group1.musicacademy.repository.MyUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final MyUserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = MyUser.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        if (user.getRoles() == null) {
            user.setRoles(new ArrayList<>());
        }
        user.addRole(new Role("USER"));
        // or we can use a pre-existing role object like from a service or repository and then add it to the user's role list
        // Role userRole = ***
        // user.addRole(userRole);
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = repository.findByUsername(request.getUsername())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
