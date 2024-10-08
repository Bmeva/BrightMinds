# Generated by Django 5.1 on 2024-08-27 10:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Courses', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='answer',
            options={'verbose_name_plural': 'Answer'},
        ),
        migrations.AlterModelOptions(
            name='certificate',
            options={'verbose_name_plural': 'Certificates'},
        ),
        migrations.AlterModelOptions(
            name='comment',
            options={'verbose_name_plural': 'Comment'},
        ),
        migrations.AlterModelOptions(
            name='course',
            options={'verbose_name_plural': 'Courses'},
        ),
        migrations.AlterModelOptions(
            name='coursecategory',
            options={'verbose_name_plural': 'Course Category'},
        ),
        migrations.AlterModelOptions(
            name='enrollment',
            options={'verbose_name_plural': 'Enrollment'},
        ),
        migrations.AlterModelOptions(
            name='forum',
            options={'verbose_name_plural': 'Forum'},
        ),
        migrations.AlterModelOptions(
            name='lesson',
            options={'verbose_name_plural': 'Lesson'},
        ),
        migrations.AlterModelOptions(
            name='notification',
            options={'verbose_name_plural': 'Notifications'},
        ),
        migrations.AlterModelOptions(
            name='question',
            options={'verbose_name_plural': 'Questions'},
        ),
        migrations.AlterModelOptions(
            name='quiz',
            options={'verbose_name_plural': 'Quize'},
        ),
        migrations.AlterModelOptions(
            name='review',
            options={'verbose_name_plural': 'Reviews'},
        ),
        migrations.AlterModelOptions(
            name='thread',
            options={'verbose_name_plural': 'Threads'},
        ),
    ]
