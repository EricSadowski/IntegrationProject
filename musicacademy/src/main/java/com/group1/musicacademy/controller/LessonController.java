package com.group1.musicacademy.controller;

import com.group1.musicacademy.model.Lesson;
import com.group1.musicacademy.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lesson")
@CrossOrigin
public class LessonController {
    @Autowired
    private LessonService lessonService;

    @PostMapping("/add")
    public String add(@RequestBody Lesson lesson){
        lessonService.saveLesson(lesson);
        return "New lesson is added";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteLesson(@PathVariable int id) {
        lessonService.deleteById(id);
        return "Lesson with id " + id + " is deleted";
    }

    @GetMapping("/getAll")
    public List<Lesson> getAllLessons(){
        return lessonService.getAllLessons();
    }

}
