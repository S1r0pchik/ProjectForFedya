package com.S1r0p.ProjectForFedya.controllers;

import com.S1r0p.ProjectForFedya.models.UserDtls;
import com.S1r0p.ProjectForFedya.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    private UserService userService;

    @GetMapping("/")
    public String main(Model model) { return "main"; }

    @GetMapping("/1")
    public String first(Model model) {
        return "1";
    }

    @GetMapping("/2")
    public String second(Model model) {
        return "2";
    }

    @GetMapping("/3")
    public String third(Model model) {
        return "3";
    }

    @GetMapping("/4")
    public String fourth(Model model) {
        return "4";
    }

    @GetMapping("/5")
    public String fifth(Model model) {
        return "5";
    }

    @GetMapping("/6")
    public String sixth(Model model) {
        return "6";
    }

    @GetMapping("/register")
    public String register(Model model) { return "register"; }

    @PostMapping("/createUser")
    public String createUSer(@ModelAttribute UserDtls user) {

        System.out.println(user);

//        userService.createUser(user);

        return "redirect:/";
    }
}
