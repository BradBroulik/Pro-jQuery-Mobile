package com.bmb.jqm.controller;

import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller()
public class RegisterController {

    
    @RequestMapping(method = RequestMethod.POST)
	public String enroll(@RequestParam("email") String email, HttpSession session) {
		log.info("Registered: " + email);
		
		// Save registration...
		
		session.setAttribute("email", email);
		return "redirect:/mvc/register/thanks";
	}
	
    @RequestMapping(method = RequestMethod.GET)
    public String thanks() {
        return "register-thanks";
    }
    
    private static Log log = LogFactory.getLog(RegisterController.class);
}
