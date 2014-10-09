package pm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pm.models.User;
import pm.repositories.UserRepository;

import java.util.Date;

@RestController
public class UserController {

    private static final String TEMPLATE = "Hello, %s!";

    @Autowired UserRepository userRepository;

    @RequestMapping("/user/roles")
    HttpEntity<PagedResources> getRoles(Pageable pageable,
                                               PagedResourcesAssembler assembler) {


            SecurityContext context = SecurityContextHolder.getContext();
            if (context == null)
                return null;

            Authentication authentication = context.getAuthentication();
            if (authentication == null)
                return null;

            return new ResponseEntity(authentication.getAuthorities(),HttpStatus.OK);
    }

    @RequestMapping("/user")
    HttpEntity<User> getUser() {


        SecurityContext context = SecurityContextHolder.getContext();
        if (context == null)
            return null;

        Authentication authentication = context.getAuthentication();
        if (authentication == null)
            return null;
        String username = ((org.springframework.security.core.userdetails.User) authentication.getPrincipal()).getUsername();
        User user = userRepository.findByUsername(username);
        user.setLastLogin(new Date());
        userRepository.save(user);
        return new ResponseEntity(authentication.getPrincipal(),HttpStatus.OK);
    }
}