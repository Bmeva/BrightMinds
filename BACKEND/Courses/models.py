from django.db import models
from Instructor.models import Instructor
from Students.models import Student
from django.utils import timezone

class CourseCategory(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    class Meta:
        verbose_name_plural = 'Course Category' 
    
    def __str__(self):
        return self.title


    
class Course(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE, related_name='courses')
    description = models.TextField()
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, related_name='courses')
    syllabus = models.TextField(blank=True, null=True)  # Detailed syllabus
    price = models.DecimalField(max_digits=10, decimal_places=2)
    language = models.CharField(max_length=50)
    duration = models.DurationField()  # Duration of the course
    level = models.CharField(max_length=50, choices=[('beginner', 'Beginner'), ('intermediate', 'Intermediate'), ('advanced', 'Advanced')])
    prerequisites = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    cover_image = models.ImageField(upload_to='course_images/', null=True, blank=True)
    is_published = models.BooleanField(default=False)
    
    class Meta:
        verbose_name_plural = 'Courses' 
        
    def __str__(self):
        return self.title


class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='enrollments')
    course = models.ForeignKey('Course', on_delete=models.CASCADE, related_name='enrollments')
    enrolled_at = models.DateTimeField(auto_now_add=True)
    progress = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)  # Percentage of course completed
    completed = models.BooleanField(default=False)
    
    class Meta:
        verbose_name_plural = 'Enrollment' 
        
    def __str__(self):
        return self.course


class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=200)
    content = models.TextField()  # Can use RichTextField from Django CKEditor for rich text
    video_url = models.URLField(blank=True, null=True)
    order = models.PositiveIntegerField()  # Order of the lesson within the course
    duration = models.DurationField()  # Duration of the lesson video/content
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Lesson' 
        
    def __str__(self):
        return self.title


class Quiz(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='quizzes')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    number_of_questions = models.IntegerField()
    time_limit = models.DurationField()  # Optional field for timed quizzes
    passing_score = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Quize' 
        
    def __str__(self):
        return self.title


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    text = models.CharField(max_length=500)
    question_type = models.CharField(max_length=50, choices=[('single_choice', 'Single Choice'), ('multiple_choice', 'Multiple Choice')])
    order = models.PositiveIntegerField()
    
    class Meta:
        verbose_name_plural = 'Questions' 
    
        
    def __str__(self):
        return self.quiz

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    text = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)
    
    class Meta:
        verbose_name_plural = 'Answer' 
        
    def __str__(self):
        return self.question



class Review(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='reviews')
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='reviews')
    rating = models.PositiveIntegerField(choices=[(i, i) for i in range(1, 6)])
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Reviews' 
    
        
    def __str__(self):
        return self.course


class Certificate(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='certificates')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='certificates')
    certificate_code = models.CharField(max_length=50, unique=True)
    issued_date = models.DateTimeField(default=timezone.now)
    expiry_date = models.DateTimeField(blank=True, null=True)  # Some certificates might expire
    is_valid = models.BooleanField(default=True)
    pdf = models.FileField(upload_to='certificates/', null=True, blank=True)  # Path to the certificate PDF file

    
    class Meta:
        verbose_name_plural = 'Certificates' 
        
    def __str__(self):
        return f"Certificate {self.certificate_code} for {self.student}"



class Notification(models.Model):
    NOTIFICATION_TYPE_CHOICES = [
        ('course_update', 'Course Update'),
        ('payment', 'Payment'),
        ('reminder', 'Reminder'),
        ('system', 'System'),
    ]
    
    recipient = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='notifications', null=True, blank=True)
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, related_name='notifications', null=True, blank=True)
    notification_type = models.CharField(max_length=50, choices=NOTIFICATION_TYPE_CHOICES)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Notifications' 

    def __str__(self):
        return f"Notification for {self.recipient or self.instructor}"


class Forum(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='forums')
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Forum' 

    def __str__(self):
        return f"Forum for {self.course.title}"


class Thread(models.Model):
    forum = models.ForeignKey(Forum, on_delete=models.CASCADE, related_name='threads')
    title = models.CharField(max_length=200)
    created_by = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='threads')
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    
     
    class Meta:
        verbose_name_plural = 'Threads' 

    def __str__(self):
        return f"Thread {self.title} in {self.forum.course.title}"


class Comment(models.Model):
    thread = models.ForeignKey(Thread, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Comment' 
        
    def __str__(self):
        return f"Comment by {self.author} on {self.thread.title}"
