package com.bmb.jqm.domain;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Registration implements Serializable {

	private String email;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	private static final long serialVersionUID = -7299209103578360191L;
}
