package com.S1r0p.ProjectForFedya.controllers;

import com.S1r0p.ProjectForFedya.models.Result;
import com.S1r0p.ProjectForFedya.repo.ResultRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;

import java.lang.reflect.Array;
import java.util.*;

import static java.lang.Math.max;

@Controller
public class MainController {

    @Autowired
    private ResultRepository resultRepository;

    @GetMapping("/")
    public String main(Model model) {  return "main"; }

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

    @GetMapping("/tests")
    public String tests(Model model) {
        return "tests";
    }

    @GetMapping("/test")
    public String test(Model model) {
        return "test";
    }

    @GetMapping("/test/{id}")
    public String test(@PathVariable(value = "id") long id, Model model) {
        model.addAttribute("id", id);
        return "test";
    }

    @GetMapping("/results")
    public String results(Model model) {
        return "results";
    }

    @PostMapping("/newResult")
    public String newResut(@RequestParam String result, @RequestParam String test, @RequestParam String name, @RequestParam String surname) {
        Iterable<Result> results = resultRepository.findAll();
        for (Result el : results)  {
            if (el.getName().equals(name) && el.getSurname().equals(surname) && el.getTest().equals(Integer.parseInt(test))) {
                Result res = resultRepository.findById(el.getId()).orElseThrow();
                res.setResult(max(Integer.parseInt(result), res.getResult()));
                resultRepository.save(res);
                return "redirect:/result/" + test;
            }
        }
        Result res = new Result(name, surname, Integer.parseInt(test), Integer.parseInt(result));
        resultRepository.save(res);
        return "redirect:/result/" + test;
    }

    @GetMapping("/result/{test}")
    public String result(@PathVariable(value = "test") Integer test, Model model) {
        Iterable<Result> data = resultRepository.findAll();
        ArrayList<Result> res = new ArrayList<>();
        for (Result el : data) {
            if (el.getTest() == test) {
                res.add(el);
            }
        }
        res.sort((Result a, Result b) -> b.getResult().compareTo(a.getResult()));
        String mes = "";
        List<String> names = new ArrayList();
        names.add("ПРАВО ДРЕВНЕЙ РУСИ");
        names.add("ПРАВО ВО ВРЕМЕНА ТАТАРО-МОНГОЛЬСКОГО ИГА");
        names.add("ПРАВО В РУССКОМ ЦАРСТВЕ");
        names.add("ПРАВО РОССИЙСКОЙ ИМПЕРИИ И ВРЕМЕННОГО ПРАВИТЕЛЬСТВА");
        names.add("ПРАВО СССР");
        names.add("ПРАВО РОССИЙСКОЙ ФЕДЕРАЦИИ");
        model.addAttribute("mes", names.get(test - 1));
        model.addAttribute("res", res);
        return "result";
    }

    @GetMapping("/about")
    public String about(Model model) {
        return "about";
    }
}
