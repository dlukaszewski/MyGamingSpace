package pl.MyGamingSpace.MyGamingSpace.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.MyGamingSpace.MyGamingSpace.model.User;
import pl.MyGamingSpace.MyGamingSpace.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public void createNewUser(User user){
        this.repository.save(user);
    }

}
