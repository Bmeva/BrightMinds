# Generated by Django 5.1 on 2024-08-26 16:16

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Courses', '0001_initial'),
        ('Students', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('payment_method', models.CharField(choices=[('credit_card', 'Credit Card'), ('paypal', 'PayPal'), ('bank_transfer', 'Bank Transfer'), ('crypto', 'Cryptocurrency')], max_length=20)),
                ('transaction_id', models.CharField(max_length=100, unique=True)),
                ('payment_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('completed', 'Completed'), ('failed', 'Failed')], max_length=20)),
                ('receipt_url', models.URLField(blank=True, null=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='payments', to='Courses.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='payments', to='Students.student')),
            ],
            options={
                'verbose_name_plural': '1: Payment',
            },
        ),
    ]
