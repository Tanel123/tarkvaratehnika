package ttu.tteh.user;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping(value="/users/add", method=RequestMethod.POST,
			consumes = "application/json")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
}
