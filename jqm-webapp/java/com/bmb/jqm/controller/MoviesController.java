package com.bmb.jqm.controller;

import java.util.Arrays;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bmb.jqm.domain.Movie;

@Controller()
public class MoviesController {

    @RequestMapping(method = RequestMethod.GET)
    public String getMovies(ModelMap model) {
    	log.info("Getting movie data.............");
    	model.addAttribute("movies", getMovieData());
        return "movies";
    }
	
    private List<Movie> getMovieData() {
    	Movie[] movies = new Movie[]{
    		createMovie("Kung Fu Panda", "PG", "95", "kungfupanda2.jpg"),
    		createMovie("Pirates of the Caribbean", "PG-13", "137", "pirates.jpg"),
    		createMovie("X-Men", "PG-13", "131", "X-MenFirstClass.jpg"),
    		createMovie("Kung Fu Panda 3D", "PG", "95", "kungfupanda2.jpg"),
    	};
    	return Arrays.asList(movies);
    }
    
    private Movie createMovie(String title, String rating, String runtime, String imagePath) {
    	Movie m = new Movie();
    	m.setTitle(title);
    	m.setRating(rating);
    	m.setRuntime(runtime);
    	m.setImage(imagePath);
    	return m;
    }
    
	private static Log log = LogFactory.getLog(MoviesController.class);
}
