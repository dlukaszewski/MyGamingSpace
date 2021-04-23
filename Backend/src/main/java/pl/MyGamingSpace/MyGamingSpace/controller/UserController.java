package pl.MyGamingSpace.MyGamingSpace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.MyGamingSpace.MyGamingSpace.model.User;
import pl.MyGamingSpace.MyGamingSpace.service.UserService;

@RestController
@RequestMapping("/")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/login")
    public void createNewUser(@RequestBody User user){
        userService.createNewUser(user);
    }

}
