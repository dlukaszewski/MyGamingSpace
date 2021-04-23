package pl.MyGamingSpace.MyGamingSpace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.MyGamingSpace.MyGamingSpace.service.UserService;

@RestController
@RequestMapping("index")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    UserService userService;
}
