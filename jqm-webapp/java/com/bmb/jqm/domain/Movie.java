package com.bmb.jqm.domain;

import java.io.Serializable;

public class Movie implements Serializable {

	private String title;
	private String rating;
	private String runtime;
	private String image;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getRuntime() {
		return runtime;
	}

	public void setRuntime(String runtime) {
		this.runtime = runtime;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	private static final long serialVersionUID = -7299209103578360191L;
}
