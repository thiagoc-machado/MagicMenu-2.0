# Generated by Django 4.2.7 on 2023-11-30 09:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='trial_period_days',
        ),
    ]
