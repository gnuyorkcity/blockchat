package org.gnuyorkcity.blockchat.blockchatserver.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @RequestMapping(value = "/")
    public String getRoot() {
        return "root";
    }

    @RequestMapping(value = "/helloWorld")
    public String getHelloWorld() {
        return "Hello World";
    }
}
