package com.bmb.jqm.resource;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.bmb.jqm.domain.Registration;
import com.sun.jersey.api.json.JSONWithPadding;


/* TestURL: http://localhost:8080/jqm-webapp/rest/register?email=joe@company.com */
@Path("/register")
public class RegisterResource {


	 @GET
	 @Produces("application/x-javascript")
	 public Response register(@QueryParam("jsoncallback") @DefaultValue("jsoncallback") String callback,
			 @QueryParam("email")  String email) {
		 log.info("Registering " + email); 
		 Registration registration = new Registration(); 
		 registration.setEmail(email); 
	 
		 return Response.status(Response.Status.OK).entity(new JSONWithPadding(registration, callback)).build();
	 }

	private static Log log = LogFactory.getLog(RegisterResource.class);
}
