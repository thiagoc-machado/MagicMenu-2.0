# Generated by Django 4.2.7 on 2023-11-30 09:53

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import django_tenants.postgresql_backend.base


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0003_client_trial_period_days'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='schema_name',
            field=models.CharField(db_index=True, default=django.utils.timezone.now, max_length=63, unique=True, validators=[django_tenants.postgresql_backend.base._check_schema_name]),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='domain',
            name='domain',
            field=models.CharField(db_index=True, default=django.utils.timezone.now, max_length=253, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='domain',
            name='is_primary',
            field=models.BooleanField(db_index=True, default=True),
        ),
        migrations.AddField(
            model_name='domain',
            name='tenant',
            field=models.ForeignKey(default=django.utils.timezone.now, on_delete=django.db.models.deletion.CASCADE, related_name='domains', to='companies.client'),
            preserve_default=False,
        ),
    ]
