package com.example.demo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/details")
public class UserDetailsController {

    @GetMapping
    public UserDetail getDetails() {
        UserDetail userDetail = new UserDetail();
        userDetail.setName("John Doe");
        userDetail.setAddress("123 Main Street");
        userDetail.setEducation("Bachelor's degree in Computer Science");
        userDetail.setLocation("San Francisco, CA");
        return userDetail;
    }
}